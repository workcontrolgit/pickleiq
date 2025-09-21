// Azure Bicep template for PickleIQ secure infrastructure
@description('Environment name (dev, staging, prod)')
param environment string = 'dev'

@description('Application name')
param appName string = 'pickleiq'

@description('Azure region for resources')
param location string = resourceGroup().location

@description('SQL administrator login')
param sqlAdminLogin string = 'sqladmin'

@description('SQL administrator password')
@secure()
param sqlAdminPassword string

@description('Azure AD B2C tenant ID')
param azureAdB2CTenantId string

// Variables
var resourcePrefix = '${appName}-${environment}'
var keyVaultName = '${resourcePrefix}-kv-${uniqueString(resourceGroup().id)}'
var appServicePlanName = '${resourcePrefix}-asp'
var appServiceName = '${resourcePrefix}-app'
var sqlServerName = '${resourcePrefix}-sql-${uniqueString(resourceGroup().id)}'
var sqlDatabaseName = '${appName}-db'
var redisCacheName = '${resourcePrefix}-redis'
var storageAccountName = '${appName}${environment}${uniqueString(resourceGroup().id)}'
var appInsightsName = '${resourcePrefix}-insights'

// Tags for all resources
var tags = {
  Environment: environment
  Application: appName
  ManagedBy: 'Azure Bicep'
  CostCenter: 'PickleIQ'
}

// App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: appServicePlanName
  location: location
  tags: tags
  sku: {
    name: environment == 'prod' ? 'P1v3' : 'S1'
    tier: environment == 'prod' ? 'PremiumV3' : 'Standard'
  }
  properties: {
    reserved: false
  }
}

// Key Vault (create first to establish access policies)
resource keyVault 'Microsoft.KeyVault/vaults@2022-07-01' = {
  name: keyVaultName
  location: location
  tags: tags
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: subscription().tenantId
    enableRbacAuthorization: false
    accessPolicies: []
    networkAcls: {
      defaultAction: 'Allow'
      bypass: 'AzureServices'
    }
    enableSoftDelete: true
    softDeleteRetentionInDays: 90
  }
}

// App Service with Managed Identity
resource appService 'Microsoft.Web/sites@2022-03-01' = {
  name: appServiceName
  location: location
  tags: tags
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      netFrameworkVersion: 'v6.0'
      alwaysOn: environment == 'prod'
      ftpsState: 'Disabled'
      minTlsVersion: '1.2'
      http20Enabled: true
      appSettings: [
        {
          name: 'ASPNETCORE_ENVIRONMENT'
          value: environment == 'prod' ? 'Production' : 'Development'
        }
        {
          name: 'KeyVaultName'
          value: keyVault.name
        }
        {
          name: 'ApplicationInsights__ConnectionString'
          value: appInsights.properties.ConnectionString
        }
        {
          name: 'AzureAdB2C__TenantId'
          value: azureAdB2CTenantId
        }
        {
          name: 'ConnectionStrings__DefaultConnection'
          value: 'Server=${sqlServer.properties.fullyQualifiedDomainName};Database=${sqlDatabaseName};Authentication=Active Directory Managed Identity;'
        }
        {
          name: 'Redis__ConnectionString'
          value: '@Microsoft.KeyVault(VaultName=${keyVault.name};SecretName=redis-connection-string)'
        }
      ]
    }
  }
}

// Grant App Service access to Key Vault
resource keyVaultAccessPolicy 'Microsoft.KeyVault/vaults/accessPolicies@2022-07-01' = {
  name: 'add'
  parent: keyVault
  properties: {
    accessPolicies: [
      {
        objectId: appService.identity.principalId
        tenantId: subscription().tenantId
        permissions: {
          secrets: ['get', 'list']
        }
      }
    ]
  }
}

// SQL Server
resource sqlServer 'Microsoft.Sql/servers@2022-05-01-preview' = {
  name: sqlServerName
  location: location
  tags: tags
  properties: {
    administratorLogin: sqlAdminLogin
    administratorLoginPassword: sqlAdminPassword
    version: '12.0'
    publicNetworkAccess: 'Enabled'
  }

  // SQL Database
  resource sqlDatabase 'databases@2022-05-01-preview' = {
    name: sqlDatabaseName
    location: location
    tags: tags
    sku: {
      name: environment == 'prod' ? 'S2' : 'S1'
      tier: 'Standard'
    }
    properties: {
      collation: 'SQL_Latin1_General_CP1_CI_AS'
      maxSizeBytes: environment == 'prod' ? 268435456000 : 32212254720 // 250GB prod, 30GB dev
    }
  }

  // Firewall rule for Azure services
  resource sqlFirewallRule 'firewallRules@2022-05-01-preview' = {
    name: 'AllowAzureServices'
    properties: {
      startIpAddress: '0.0.0.0'
      endIpAddress: '0.0.0.0'
    }
  }
}

// Azure SQL AD Admin (App Service Managed Identity)
resource sqlADAdmin 'Microsoft.Sql/servers/administrators@2022-05-01-preview' = {
  name: 'ActiveDirectory'
  parent: sqlServer
  properties: {
    administratorType: 'ActiveDirectory'
    login: appServiceName
    sid: appService.identity.principalId
    tenantId: subscription().tenantId
  }
}

// Redis Cache
resource redisCache 'Microsoft.Cache/redis@2022-06-01' = {
  name: redisCacheName
  location: location
  tags: tags
  properties: {
    sku: {
      name: environment == 'prod' ? 'Standard' : 'Basic'
      family: environment == 'prod' ? 'C' : 'C'
      capacity: environment == 'prod' ? 1 : 0
    }
    enableNonSslPort: false
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
  }
}

// Storage Account for static files and backups
resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: location
  tags: tags
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
    supportsHttpsTrafficOnly: true
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
  }

  // Blob service
  resource blobService 'blobServices@2022-09-01' = {
    name: 'default'

    // Container for evaluation data backups
    resource backupContainer 'containers@2022-09-01' = {
      name: 'evaluations-backup'
      properties: {
        publicAccess: 'None'
      }
    }

    // Container for user uploads
    resource uploadsContainer 'containers@2022-09-01' = {
      name: 'user-uploads'
      properties: {
        publicAccess: 'None'
      }
    }
  }
}

// Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
  }
}

// Log Analytics Workspace
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: '${resourcePrefix}-logs'
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: environment == 'prod' ? 90 : 30
  }
}

// Store secrets in Key Vault
resource redisConnectionStringSecret 'Microsoft.KeyVault/vaults/secrets@2022-07-01' = {
  name: 'redis-connection-string'
  parent: keyVault
  properties: {
    value: '${redisCache.properties.hostName}:6380,password=${redisCache.listKeys().primaryKey},ssl=True,abortConnect=False'
  }
}

resource storageConnectionStringSecret 'Microsoft.KeyVault/vaults/secrets@2022-07-01' = {
  name: 'storage-connection-string'
  parent: keyVault
  properties: {
    value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};AccountKey=${storageAccount.listKeys().keys[0].value};EndpointSuffix=${environment().suffixes.storage}'
  }
}

// Placeholder secrets for external API keys (to be updated manually)
resource googleSheetsApiKeySecret 'Microsoft.KeyVault/vaults/secrets@2022-07-01' = {
  name: 'google-sheets-api-key'
  parent: keyVault
  properties: {
    value: 'replace-with-actual-google-sheets-api-key'
  }
}

resource youtubeApiKeySecret 'Microsoft.KeyVault/vaults/secrets@2022-07-01' = {
  name: 'youtube-api-key'
  parent: keyVault
  properties: {
    value: 'replace-with-actual-youtube-api-key'
  }
}

resource googleSheetsSpreadsheetIdSecret 'Microsoft.KeyVault/vaults/secrets@2022-07-01' = {
  name: 'google-sheets-spreadsheet-id'
  parent: keyVault
  properties: {
    value: 'replace-with-actual-spreadsheet-id'
  }
}

// Outputs
output appServiceName string = appService.name
output appServiceUrl string = 'https://${appService.properties.defaultHostName}'
output keyVaultName string = keyVault.name
output sqlServerName string = sqlServer.name
output sqlDatabaseName string = sqlDatabaseName
output redisName string = redisCache.name
output storageAccountName string = storageAccount.name
output appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey
output appInsightsConnectionString string = appInsights.properties.ConnectionString