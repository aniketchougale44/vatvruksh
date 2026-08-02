import { useEffect } from 'react';

const SITE_URL = 'https://vatvrukshcarrental.com';

export function useCanonical(path: string) {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}${path}`;
  }, [path]);
}
