import { Router } from 'primora-js';
import { routes } from './routes';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();

  // Load the application-specific routes
  for (const path in routes) {
    router.addRoute(path, routes[path]);
  }

  router.loadRoute(location.pathname);

  // Handle clicks on links with the data-navigate attribute
  document.body.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.hasAttribute('data-navigate')) {
      event.preventDefault();
      const href = target.getAttribute('href');
      if (href) {
        router.navigate(href);
      }
    }
  });
});