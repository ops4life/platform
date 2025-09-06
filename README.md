# Ops4Life Platform

A comprehensive operations platform designed specifically for **DevOps Engineers**, **Site Reliability Engineers (SRE)**, and **Platform Engineers**. Built with Next.js, this platform provides essential tools for monitoring services, managing incidents, and accessing runbooks to streamline operational workflows and improve system reliability.

## Features

- **Dashboard**: Real-time service status monitoring and health metrics for infrastructure oversight
- **Incidents**: Comprehensive incident management and tracking with SRE best practices
- **Runbooks**: Centralized documentation and troubleshooting guides for operational procedures

## Target Audience

This platform is specifically designed for:

- **DevOps Engineers**: Streamline deployment pipelines and infrastructure management
- **Site Reliability Engineers (SRE)**: Monitor system health, manage incidents, and maintain service reliability
- **Platform Engineers**: Build and maintain internal platforms and developer tools
- **Operations Teams**: Centralize monitoring, incident response, and operational knowledge

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React (icons)
- React Markdown

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project to Vercel.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify.

### Deploy to Other Platforms

The application is a standard Next.js app and can be deployed to any platform that supports Node.js applications.

## Project Structure

```
platform/
├── components/          # React components
│   ├── dashboard/       # Dashboard-specific components
│   ├── incidents/       # Incident-related components
│   └── ui/             # Reusable UI components
├── entities/           # Data models and API logic
├── pages/              # Next.js pages
├── styles/             # Global styles
└── utils/              # Utility functions
```

## Integration & Production Setup

The application currently uses mock data for demonstration purposes. In a production environment, you would integrate with:

- **Monitoring Systems**: Prometheus, Grafana, DataDog, New Relic
- **Incident Management**: PagerDuty, Opsgenie, Jira Service Management
- **Documentation**: Confluence, Notion, GitBook
- **CI/CD Platforms**: GitHub Actions, GitLab CI, Jenkins
- **Infrastructure**: Kubernetes, Docker, Terraform, CloudFormation

Replace the entity classes with actual API calls to your backend services and monitoring tools.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
