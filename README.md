# PickleIQ - Pickleball Skill Assessment Platform

**PickleIQ** is a comprehensive Angular application designed for pickleball players, coaches, and evaluators to assess and improve their skills across official rating levels (2.0 to 5.0).

## 🏓 Application Overview

### Purpose

- **Skill Assessment**: Comprehensive evaluation system for pickleball players across different skill levels
- **Training Resources**: Curated training videos and educational content via YouTube integration
- **Equipment Recommendations**: Essential pickleball equipment catalog with Amazon integration
- **Progress Tracking**: Detailed report cards showing strengths and areas for improvement

### Target Users

- Pickleball players seeking skill assessment
- Coaches evaluating student progress
- Tournament organizers determining player ratings
- Anyone looking to improve their pickleball game

## 🏗️ Technical Architecture

### Technology Stack

- **Framework**: Angular 19.2.10 (recently upgraded)
- **UI Library**: Bootstrap 5.2.3 + ng-bootstrap
- **Authentication**: OAuth2/OIDC support
- **Forms**: Reactive Forms + NGX Formly for dynamic forms
- **Data Sources**: Google Sheets API, YouTube API
- **Analytics**: Google Analytics integration
- **PWA**: Service Worker support for offline functionality

### Key Dependencies

```json
{
  "@angular/core": "^19.2.10",
  "@ng-bootstrap/ng-bootstrap": "^17.0.1",
  "@ngx-formly/core": "^6.3.7",
  "angular-oauth2-oidc": "^17.0.2",
  "ng-google-sheets-db": "^2.0.0",
  "bootstrap": "^5.2.3",
  "ngx-google-analytics": "^14.0.1"
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                    # Core module (guards, interceptors, services)
│   ├── shared/                  # Shared components, models, utilities
│   ├── features/               # Feature modules
│   │   ├── rating/            # Main skill assessment feature
│   │   │   ├── dashboard/     # Skill level selection
│   │   │   ├── evaluation/    # Assessment forms
│   │   │   ├── form/          # Dynamic form components
│   │   │   └── reportcard/    # Results and reporting
│   │   ├── training/          # Training videos and resources
│   │   ├── shop/             # Equipment recommendations
│   │   └── employee/         # Legacy module (consider removal)
│   ├── home/                  # Landing page
│   └── shell/                 # Application shell
```

## 🎯 Core Features

### 1. Skill Assessment System

- **Multi-level Evaluation**: Assessment forms for skill levels 2.0-5.0
- **Dynamic Forms**: NGX Formly-powered forms with A/B/C/D grading
- **Comprehensive Reporting**: Detailed report cards with printable output
- **Data Integration**: Google Sheets backend for skill definitions

**Routes:**

- `/rating` - Assessment dashboard
- `/rating/level{XX}` - Level-specific evaluations (20, 25, 30, 35, 40, 45, 50)
- `/rating/reportcard` - Results viewing

### 2. Training Module

- **Video Search**: YouTube API integration for training content
- **Skill-specific Resources**: Curated educational materials
- **Search Functionality**: Advanced video discovery system

### 3. Equipment Shop

- **Product Catalog**: Essential pickleball equipment
- **Amazon Integration**: Affiliate product recommendations
- **Categories**: Paddles, balls, nets, accessories

## 🚀 Development Setup

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 19+
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd pickleiq

# Install dependencies
npm install

# Set up environment variables (see Environment Configuration)
# Start development server
npm start
```

### Available Scripts

```bash
npm start          # Development server with proxy config
npm run build      # Production build
npm test           # Unit tests with Karma/Jasmine
npm run test:ci    # CI test runner with lint
npm run e2e        # End-to-end tests
npm run lint       # Code quality checks
npm run prettier   # Code formatting
```

## ⚙️ Environment Configuration

### Required Environment Variables

Create environment files in `src/environments/`:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'your-api-url',
  googleSheetsApiKey: 'your-google-sheets-api-key',
  youtubeApiKey: 'your-youtube-api-key',
  googleAnalyticsId: 'your-ga-id',
  // OAuth configuration (optional)
  oidc: {
    clientId: 'your-client-id',
    authority: 'your-auth-server',
  },
};
```

### API Integrations

- **Google Sheets**: Skill data and grading criteria storage
- **YouTube**: Training video content
- **Google Analytics**: User behavior tracking
- **OAuth2/OIDC**: Optional authentication system

## 🧪 Testing Strategy

### Unit Testing

- **Framework**: Jasmine + Karma
- **Coverage**: Comprehensive component and service tests
- **Command**: `npm test`

### E2E Testing

- **Framework**: Protractor (consider upgrading to Cypress)
- **Command**: `npm run e2e`

### Code Quality

- **Linting**: ESLint for TypeScript, StyleLint for SCSS
- **Formatting**: Prettier with pre-commit hooks
- **Git Hooks**: Husky + pretty-quick for automated formatting

## 📦 Build & Deployment

### Development Build

```bash
npm start  # Serves on https://localhost:4200 with SSL
```

### Production Build

```bash
npm run build  # Outputs to dist/ directory
```

### Deployment Options

#### GitHub Pages

```bash
ng deploy --dir=dist/browser --base-href="/pickleiq/"
```

- **Live URL**: https://workcontrolgit.github.io/pickleiq/

#### Azure (Configured)

- CI/CD pipeline configured for Azure deployment
- Environment-specific builds supported

### PWA Support

- Service Worker enabled for offline functionality
- Manifest file configured for app installation
- Optimized caching strategies

## 🔧 Development Guidelines

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier configuration with pre-commit hooks
- **Architecture**: Feature modules with lazy loading
- **State Management**: Services with observables (no NgRx currently)

### Best Practices

- Standalone components where applicable
- Reactive forms for all user input
- Comprehensive error handling
- Accessibility considerations
- Mobile-responsive design

## 🐛 Troubleshooting

### Common Issues

1. **API Keys**: Ensure all environment variables are configured
2. **SSL Certificates**: Development server uses HTTPS - accept browser warnings
3. **CORS**: Proxy configuration handles API calls in development
4. **Dependencies**: Run `npm install` after pulling updates

### Development Server

- **URL**: https://localhost:4200
- **Proxy**: Configured for API calls
- **Hot Reload**: Enabled for development

## 📊 Performance Considerations

- **Lazy Loading**: Feature modules loaded on demand
- **Tree Shaking**: Unused code elimination in production builds
- **Bundle Analysis**: Use `npm run analyze` for bundle inspection
- **Service Worker**: Caching strategies for improved performance

## 🤝 Contributing

1. Follow existing code style and architecture patterns
2. Ensure all tests pass before submitting PRs
3. Update documentation for new features
4. Use semantic commit messages

## 📄 License

MIT

---

**Note**: This application focuses specifically on pickleball skill assessment and training.
