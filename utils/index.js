// Utility functions for the application

export function createPageUrl(pageName) {
  const routes = {
    'Dashboard': '/',
    'Incidents': '/incidents',
    'Runbooks': '/runbooks'
  };

  return routes[pageName] || '/';
}
