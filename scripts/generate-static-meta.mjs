// Post-build step: writes a copy of dist/index.html for every route with the
// correct <title>, meta description, canonical link, OG/Twitter tags, and a
// page-specific JSON-LD schema block baked into the raw HTML. This fixes the
// "every page shows the homepage's canonical/title" problem for crawlers that
// don't execute JavaScript, and stops Google from treating every page as a
// duplicate of the homepage. It also regenerates sitemap.xml with a real
// build-time lastmod date. The React app still boots normally from the same
// bundle once loaded in a browser.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');
const SITE = 'https://www.md-securityservices.co.uk';
const PHONE = '+447585690268';
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1-5 Victoria Street, Chadderton',
  addressLocality: 'Oldham',
  postalCode: 'OL9 0HH',
  addressCountry: 'GB',
};
const SERVICE_AREAS = [
  'Manchester', 'Oldham', 'Salford', 'Rochdale', 'Bury', 'Bolton',
  'Wigan', 'Stockport', 'Trafford', 'Tameside', 'Chadderton', 'Middleton',
];

const provider = {
  '@type': 'LocalBusiness',
  name: 'MD Security Services',
  telephone: PHONE,
  address: ADDRESS,
  url: SITE,
};

function serviceSchema({ url, serviceType, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name: `${serviceType} | MD Security Services`,
    description,
    provider,
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
    url,
  };
}

function areaSchema({ url, city, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `MD Security Services - ${city}`,
    description,
    telephone: PHONE,
    address: ADDRESS,
    areaServed: { '@type': 'City', name: city },
    url,
  };
}

const routes = [
  {
    route: '/services/door-supervision',
    title: 'Door Supervisors Manchester & Oldham | MD Security Services',
    description: 'licensed door supervisors for pubs, clubs, events and venues across Manchester, Oldham and the North West. Available 24/7. Call MD Security Services on 07585690268.',
    schema: (url, description) => serviceSchema({ url, serviceType: 'Door Supervision', description }),
  },
  {
    route: '/services/manned-guarding',
    title: 'Manned Guarding Manchester & Oldham | MD Security Services',
    description: 'Professional manned guarding services for commercial premises, construction sites and industrial facilities across Manchester and Oldham. Licensed & insured. Call 07585690268.',
    schema: (url, description) => serviceSchema({ url, serviceType: 'Manned Guarding', description }),
  },
  {
    route: '/services/event-security',
    title: 'Event Security Manchester & Oldham | MD Security Services',
    description: 'Professional event security for concerts, festivals, corporate events and private functions across Manchester, Oldham and the North West. Licensed & insured. Call 07585690268.',
    schema: (url, description) => serviceSchema({ url, serviceType: 'Event Security', description }),
  },
  {
    route: '/services/retail-security',
    title: 'Retail Security Guards Manchester & Oldham | MD Security Services',
    description: 'Specialist retail security officers for shops, supermarkets and shopping centres across Manchester and Oldham. Reduce shrinkage and protect your business. Call 07585690268.',
    schema: (url, description) => serviceSchema({ url, serviceType: 'Retail Security', description }),
  },
  {
    route: '/services/access-control',
    title: 'Access Control Security Manchester & Oldham | MD Security Services',
    description: 'Professional access control officers for offices, construction sites and industrial premises across Manchester and Oldham. Licensed & insured. Call MD Security on 07585690268.',
    schema: (url, description) => serviceSchema({ url, serviceType: 'Access Control', description }),
  },
  {
    route: '/services/corporate-security',
    title: 'Corporate Security Manchester & Salford | MD Security Services',
    description: 'Professional corporate security for offices, business parks and commercial premises across Manchester, Salford Quays and the North West. Licensed & insured. Call 07585690268.',
    schema: (url, description) => serviceSchema({ url, serviceType: 'Corporate Security', description }),
  },
  {
    route: '/areas/manchester',
    title: 'Security Guards Manchester | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Manchester. Covering the city centre, Spinningfields, Salford Quays and all surrounding areas. Call 07585690268.',
    schema: (url, description) => areaSchema({ url, city: 'Manchester', description }),
  },
  {
    route: '/areas/oldham',
    title: 'Security Guards Oldham | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Oldham. MD Security Services is based in Oldham — local, reliable and available 24/7. Call 07585690268.',
    schema: (url, description) => areaSchema({ url, city: 'Oldham', description }),
  },
  {
    route: '/areas/rochdale',
    title: 'Security Guards Rochdale | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Rochdale. Covering Rochdale town centre, Heywood, Middleton and surrounding areas. Call 07585690268.',
    schema: (url, description) => areaSchema({ url, city: 'Rochdale', description }),
  },
  {
    route: '/areas/bury',
    title: 'Security Guards Bury | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Bury. Covering Bury town centre, Radcliffe, Prestwich, Whitefield and surrounding areas. Call 07585690268.',
    schema: (url, description) => areaSchema({ url, city: 'Bury', description }),
  },
  {
    route: '/areas/salford',
    title: 'Security Guards Salford | MD Security Services',
    description: 'Professional security guards, door supervisors and corporate security in Salford. Covering Salford Quays, MediaCityUK, Eccles and the wider city. Call 07585690268.',
    schema: (url, description) => areaSchema({ url, city: 'Salford', description }),
  },
  {
    route: '/privacy',
    title: 'Privacy Policy | MD Security Services',
    description: 'Privacy Policy for MD Security Services. How we collect, use and protect your personal data.',
    schema: null,
  },
];

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

if (!fs.existsSync(templatePath)) {
  console.error('generate-static-meta: dist/index.html not found — run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');
let written = 0;

for (const { route, title, description, schema } of routes) {
  const url = `${SITE}${route}`;
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);

  let html = template;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${safeDesc}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${safeTitle}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${safeDesc}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${safeTitle}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${safeDesc}$2`);

  if (schema) {
    const jsonLd = JSON.stringify(schema(url, description), null, 2);
    const block = `<script type="application/ld+json">\n${jsonLd}\n</script>\n</head>`;
    html = html.replace('</head>', block);
  }

  const outDir = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  written += 1;
}

console.log(`generate-static-meta: wrote ${written} static route pages with unique meta + schema.`);

// --- Regenerate sitemap.xml with a real build-time lastmod date ---
const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = [
  { loc: `${SITE}/`, changefreq: 'monthly', priority: '1.0' },
  ...routes
    .filter((r) => r.route !== '/privacy')
    .map((r) => ({ loc: `${SITE}${r.route}`, changefreq: 'monthly', priority: r.route.startsWith('/services') ? '0.9' : '0.9' })),
  { loc: `${SITE}/privacy`, changefreq: 'yearly', priority: '0.3' },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries
  .map(
    (e) => `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  )
  .join('\n')}\n</urlset>\n`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
console.log(`generate-static-meta: regenerated sitemap.xml with lastmod ${today}.`);
