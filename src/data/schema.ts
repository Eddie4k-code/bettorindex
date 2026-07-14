import { allFaqItems } from './faq';
import {
  absoluteUrl,
  assetUrl,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  GITHUB_URL,
  SITE_NAME,
} from './seo';

export function buildHomepageSchema(site: string | URL = import.meta.env.SITE, base = import.meta.env.BASE_URL) {
  const siteUrl = absoluteUrl('/', site, base);
  const logoUrl = absoluteUrl(assetUrl('images/icon.png', base), site, base);
  const ogImageUrl = absoluteUrl(assetUrl('og-image.jpg', base), site, base);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        publisher: { '@id': `${siteUrl}#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}#organization`,
        name: SITE_NAME,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl,
        },
        sameAs: [GITHUB_URL],
        contactPoint: {
          '@type': 'ContactPoint',
          email: CONTACT_EMAIL,
          contactType: 'customer support',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}#app`,
        name: SITE_NAME,
        applicationCategory: 'SportsApplication',
        operatingSystem: 'iOS',
        description: DEFAULT_DESCRIPTION,
        url: siteUrl,
        image: ogImageUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}#faq`,
        mainEntity: allFaqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildArticleSchema(options: {
  title: string;
  description: string;
  path: string;
  publishDate: Date;
  updatedDate?: Date;
  site?: string | URL;
  base?: string;
}) {
  const { title, description, path, publishDate, updatedDate, site, base } = options;
  const siteUrl = absoluteUrl('/', site, base);
  const pageUrl = absoluteUrl(path, site, base);
  const logoUrl = absoluteUrl(assetUrl('images/icon.png', base), site, base);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description,
        url: pageUrl,
        datePublished: publishDate.toISOString(),
        dateModified: (updatedDate ?? publishDate).toISOString(),
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: logoUrl,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: absoluteUrl('/guides/', site, base),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function buildGuidesHubSchema(
  guides: Array<{ title: string; path: string; description: string }>,
  site: string | URL = import.meta.env.SITE,
  base = import.meta.env.BASE_URL,
) {
  const hubUrl = absoluteUrl('/guides/', site, base);

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sports Betting Research Guides',
    url: hubUrl,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: absoluteUrl(guide.path, site, base),
      description: guide.description,
    })),
  };
}
