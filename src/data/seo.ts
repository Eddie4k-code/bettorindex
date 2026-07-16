export const SITE_NAME = 'BettorIndex';

export const DEFAULT_DESCRIPTION =
  'Research NBA, MLB, and NFL player props and game lines with trends, leans, and best odds. Free iOS app — decision aid, not a sportsbook.';

export const DEFAULT_OG_IMAGE = 'og-image.jpg';

export const LOGO_IMAGE = 'images/logo.png';
export const ICON_IMAGE = 'images/icon.png';
export const FAVICON_IMAGE = 'favicon.png';

export const THEME_COLOR = '#06080d';

export const GITHUB_URL = 'https://github.com/Eddie4k-code/bettorindex';

export const CONTACT_EMAIL = 'eddie4k1080@gmail.com';

function toSiteString(site: string | URL): string {
  return typeof site === 'string' ? site : site.href;
}

export function getSiteRoot(site: string | URL = import.meta.env.SITE, base = import.meta.env.BASE_URL): string {
  const siteUrl = toSiteString(site).replace(/\/$/, '');
  const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${siteUrl}${basePath}`;
}

export function absoluteUrl(
  path = '',
  site: string | URL = import.meta.env.SITE,
  base = import.meta.env.BASE_URL,
): string {
  const root = getSiteRoot(site, base);
  if (!path || path === '/') {
    return `${root}/`;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${root}${normalized}`;
}

export function assetUrl(
  assetPath: string,
  base = import.meta.env.BASE_URL,
): string {
  const normalized = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${base}${normalized}`;
}
