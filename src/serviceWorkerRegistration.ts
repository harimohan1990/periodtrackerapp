interface ImportMetaEnv {
  readonly MODE: string;
  readonly VITE_PUBLIC_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname === '127.0.0.1'
  );
  
  export function register() {
    console.log("Registering Service Worker");
  
    if (import.meta.env.MODE === 'production' && 'serviceWorker' in navigator) {
      console.log("In production, registering service worker");
  
      const swUrl = new URL('service-worker.js', import.meta.env.VITE_PUBLIC_URL).toString();
      const publicUrl = new URL(import.meta.env.VITE_PUBLIC_URL, window.location.href);
  
      console.log('Public URL:', publicUrl.href);
      console.log('Service worker URL:', swUrl);
  
      if (publicUrl.origin !== window.location.origin) {
        console.log('Service worker not registered due to different origin');
        return;
      }
  
      window.addEventListener('load', () => {
        if (isLocalhost) {
          checkValidServiceWorker(swUrl);
        } else {
          registerValidSW(swUrl);
        }
      });
    } else {
      console.log('Not in production or service worker not supported');
    }
  }
  
  function registerValidSW(swUrl: string) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl: string) {
    fetch(swUrl)
      .then((response) => {
        if (response.status === 404 || response.type === 'error') {
          console.log('No service worker found at:', swUrl);
        } else {
          registerValidSW(swUrl);
        }
      })
      .catch(() => {
        console.log('Service worker fetch failed.');
      });
  }
  