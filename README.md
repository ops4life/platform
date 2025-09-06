# Ops4Life Platform

A modern operations platform built with Next.js for monitoring services, managing incidents, and accessing runbooks.

## Features

- **Dashboard**: Real-time service status monitoring
- **Incidents**: Incident management and tracking
- **Runbooks**: Documentation and troubleshooting guides

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

## Mock Data

The application currently uses mock data for demonstration purposes. In a production environment, you would replace the entity classes with actual API calls to your backend services.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
