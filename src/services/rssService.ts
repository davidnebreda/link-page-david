import type { BlogPost } from '../types';
import { FALLBACK_BLOG_POSTS, PERSONAL_INFO } from '../data/linksData';

/**
 * Parses RSS XML string into an array of BlogPosts.
 */
function parseRSSXml(xmlText: string): BlogPost[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

  // Check for parser errors
  const parseError = xmlDoc.querySelector('parsererror');
  if (parseError) {
    throw new Error('Error al parsear el documento XML del RSS');
  }

  const items = xmlDoc.querySelectorAll('item');
  const posts: BlogPost[] = [];

  items.forEach((item, index) => {
    if (index >= 6) return; // Only top 6

    const titleEl = item.querySelector('title');
    const linkEl = item.querySelector('link');
    const pubDateEl = item.querySelector('pubDate');
    const categoryEl = item.querySelector('category');

    let title = titleEl?.textContent?.trim() || '';
    // Clean up any double quotes or encoding oddities
    title = title.replace(/\uFFFD/g, '–');

    let link = linkEl?.textContent?.trim() || '';
    // In case link is inside guid or text
    if (!link) {
      const guidEl = item.querySelector('guid');
      link = guidEl?.textContent?.trim() || '';
    }

    let pubDate = pubDateEl?.textContent?.trim() || '';
    if (pubDate) {
      try {
        const dateObj = new Date(pubDate);
        if (!isNaN(dateObj.getTime())) {
          pubDate = new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }).format(dateObj);
        }
      } catch {
        // keep raw pubDate
      }
    }

    const category = categoryEl?.textContent?.trim() || 'Blog';

    if (title && link) {
      posts.push({
        title,
        link,
        pubDate,
        category,
      });
    }
  });

  return posts;
}

/**
 * Fetches the 6 latest blog entries using resilient fallback strategies:
 * 1. Direct fetch from blogdedavid.com
 * 2. Vite proxy /api/rss (in development)
 * 3. Public CORS proxy (allorigins)
 * 4. Seeded fallback data (guaranteed instant display)
 */
export async function fetchLatestBlogPosts(): Promise<{
  posts: BlogPost[];
  isLive: boolean;
  error?: string;
}> {
  const targetUrl = PERSONAL_INFO.rssFeedUrl;

  // Try direct fetch first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.9, */*; q=0.8',
      },
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const text = await response.text();
      const posts = parseRSSXml(text);
      if (posts.length > 0) {
        return { posts: posts.slice(0, 6), isLive: true };
      }
    }
  } catch {
    // Direct fetch failed (likely CORS or offline) - proceed to proxies
  }

  // Try Vite proxy if in dev environment
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const response = await fetch('/api/rss', { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.ok) {
      const text = await response.text();
      const posts = parseRSSXml(text);
      if (posts.length > 0) {
        return { posts: posts.slice(0, 6), isLive: true };
      }
    }
  } catch {
    // dev proxy not available or failed
  }

  // Try public CORS proxy
  try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(proxyUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.ok) {
      const text = await response.text();
      const posts = parseRSSXml(text);
      if (posts.length > 0) {
        return { posts: posts.slice(0, 6), isLive: true };
      }
    }
  } catch {
    // CORS proxy failed
  }

  // Fallback to verified seeded blog posts
  return {
    posts: FALLBACK_BLOG_POSTS,
    isLive: false,
    error: 'Visualizando últimas entradas en caché.',
  };
}

