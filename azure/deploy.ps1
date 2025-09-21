# Azure Infrastructure Deployment Script for PickleIQ
# This script deploys the secure, low-risk Azure infrastructure

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('dev', 'staging', 'prod')]
    [string]$Environment,

    [Parameter(Mandatory=$true)]
    [string]$ResourceGroupName,

    [Parameter(Mandatory=$true)]
    [string]$SubscriptionId,

    [Parameter(Mandatory=$false)]
    [string]$Location = "East US",

    [Parameter(Mandatory=$false)]
    [string]$AzureAdB2CTenantId = "",

    [Parameter(Mandatory=$false)]
    [switch]$WhatIf
)

# Set error action preference
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting PickleIQ Azure Infrastructure Deployment" -ForegroundColor Green
Write-Host "Environment: $Environment" -ForegroundColor Yellow
Write-Host "Resource Group: $ResourceGroupName" -ForegroundColor Yellow
Write-Host "Location: $Location" -ForegroundColor Yellow

# Check if Azure CLI is installed
try {
    $azVersion = az version --output tsv --query '"azure-cli"'
    Write-Host "✅ Azure CLI version: $azVersion" -ForegroundColor Green
} catch {
    Write-Error "❌ Azure CLI is not installed. Please install it from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
}

# Login to Azure (if not already logged in)
Write-Host "🔐 Checking Azure login status..."
$loginStatus = az account show --output json 2>$null
if (!$loginStatus) {
    Write-Host "🔐 Logging in to Azure..."
    az login
}

# Set subscription
Write-Host "📋 Setting subscription to $SubscriptionId..."
az account set --subscription $SubscriptionId

# Verify subscription
$currentSub = az account show --query "id" --output tsv
if ($currentSub -ne $SubscriptionId) {
    Write-Error "❌ Failed to set subscription to $SubscriptionId"
    exit 1
}

Write-Host "✅ Using subscription: $currentSub" -ForegroundColor Green

# Create resource group if it doesn't exist
Write-Host "📁 Creating resource group $ResourceGroupName..."
az group create --name $ResourceGroupName --location $Location --output none

# Generate secure password for SQL Server
Write-Host "🔒 Generating secure SQL administrator password..."
$sqlPassword = -join ((33..126) | Get-Random -Count 16 | ForEach-Object {[char]$_})

# Prepare deployment parameters
$deploymentParams = @{
    environment = $Environment
    location = $Location
    sqlAdminPassword = $sqlPassword
}

# Add Azure AD B2C tenant ID if provided
if ($AzureAdB2CTenantId) {
    $deploymentParams.azureAdB2CTenantId = $AzureAdB2CTenantId
} else {
    # Use current tenant ID as default
    $currentTenantId = az account show --query "tenantId" --output tsv
    $deploymentParams.azureAdB2CTenantId = $currentTenantId
    Write-Host "⚠️  Using current tenant ID for Azure AD B2C: $currentTenantId" -ForegroundColor Yellow
}

# Convert parameters to JSON for Azure CLI
$paramsJson = $deploymentParams | ConvertTo-Json -Compress

# Get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$bicepFile = Join-Path $scriptDir "main.bicep"

if (!(Test-Path $bicepFile)) {
    Write-Error "❌ Bicep template not found at $bicepFile"
    exit 1
}

# Generate deployment name
$deploymentName = "pickleiq-$Environment-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

Write-Host "📋 Deployment Details:" -ForegroundColor Cyan
Write-Host "  Name: $deploymentName"
Write-Host "  Template: $bicepFile"
Write-Host "  Parameters: $paramsJson"

if ($WhatIf) {
    Write-Host "🔍 Running deployment validation (What-If)..." -ForegroundColor Yellow

    az deployment group what-if `
        --resource-group $ResourceGroupName `
        --template-file $bicepFile `
        --parameters $paramsJson `
        --name $deploymentName

    Write-Host "✅ What-If analysis completed. No actual deployment was performed." -ForegroundColor Green
    exit 0
}

# Deploy infrastructure
Write-Host "🚀 Deploying Azure infrastructure..." -ForegroundColor Green

$deployment = az deployment group create `
    --resource-group $ResourceGroupName `
    --template-file $bicepFile `
    --parameters $paramsJson `
    --name $deploymentName `
    --output json

if ($LASTEXITCODE -ne 0) {
    Write-Error "❌ Infrastructure deployment failed"
    exit 1
}

$deploymentOutput = $deployment | ConvertFrom-Json

Write-Host "✅ Infrastructure deployment completed successfully!" -ForegroundColor Green

# Extract outputs
$outputs = $deploymentOutput.properties.outputs

Write-Host "`n📋 Deployment Outputs:" -ForegroundColor Cyan
Write-Host "  App Service: $($outputs.appServiceName.value)" -ForegroundColor White
Write-Host "  App URL: $($outputs.appServiceUrl.value)" -ForegroundColor White
Write-Host "  Key Vault: $($outputs.keyVaultName.value)" -ForegroundColor White
Write-Host "  SQL Server: $($outputs.sqlServerName.value)" -ForegroundColor White
Write-Host "  Redis Cache: $($outputs.redisName.value)" -ForegroundColor White
Write-Host "  Storage Account: $($outputs.storageAccountName.value)" -ForegroundColor White

# Store SQL password in Key Vault
Write-Host "`n🔒 Storing SQL administrator password in Key Vault..."
az keyvault secret set `
    --vault-name $outputs.keyVaultName.value `
    --name "sql-admin-password" `
    --value $sqlPassword `
    --output none

# Post-deployment instructions
Write-Host "`n🎯 Post-Deployment Steps:" -ForegroundColor Yellow
Write-Host "1. Update the following secrets in Key Vault '$($outputs.keyVaultName.value)':" -ForegroundColor White
Write-Host "   - google-sheets-api-key" -ForegroundColor Gray
Write-Host "   - youtube-api-key" -ForegroundColor Gray
Write-Host "   - google-sheets-spreadsheet-id" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Configure Azure AD B2C application registration:" -ForegroundColor White
Write-Host "   - Client ID should match the one in your environment configuration" -ForegroundColor Gray
Write-Host "   - Add redirect URI: $($outputs.appServiceUrl.value)/auth-callback" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Deploy your application code to App Service:" -ForegroundColor White
Write-Host "   - Use Azure DevOps, GitHub Actions, or direct deployment" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Configure custom domain and SSL certificate (for production)" -ForegroundColor White

# Security recommendations
Write-Host "`n🔐 Security Recommendations:" -ForegroundColor Red
Write-Host "1. Enable App Service authentication" -ForegroundColor White
Write-Host "2. Configure IP restrictions for sensitive resources" -ForegroundColor White
Write-Host "3. Enable Azure Defender for all services" -ForegroundColor White
Write-Host "4. Set up monitoring and alerting" -ForegroundColor White
Write-Host "5. Regularly rotate secrets and passwords" -ForegroundColor White

Write-Host "`n✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Application URL: $($outputs.appServiceUrl.value)" -ForegroundColor Cyan

# Save deployment summary to file
$summary = @{
    Environment = $Environment
    ResourceGroup = $ResourceGroupName
    DeploymentName = $deploymentName
    Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Outputs = $outputs
} | ConvertTo-Json -Depth 3

$summaryFile = "deployment-summary-$Environment-$(Get-Date -Format 'yyyyMMdd-HHmmss').json"
$summary | Out-File -FilePath $summaryFile -Encoding UTF8

Write-Host "📄 Deployment summary saved to: $summaryFile" -ForegroundColor Green