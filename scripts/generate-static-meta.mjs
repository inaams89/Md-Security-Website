// Post-build step: writes a copy of dist/index.html for every route with the
// correct <title>, meta description, canonical link, and OG/Twitter tags
// baked into the raw HTML. This fixes the "every page shows the homepage's
// canonical/title" problem for crawlers that don't execute JavaScript, and
// stops Google from treating every page as a duplicate of the homepage.
// The React app still boots normally from the same bundle once loaded.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');
const SITE = 'https://md-securityservices.co.uk';

const routes = [
  {
    route: '/services/door-supervision',
    title: 'Door Supervisors Manchester & Oldham | MD Security Services',
    description: 'licensed door supervisors for pubs, clubs, events and venues across Manchester, Oldham and the North West. Available 24/7. Call MD Security Services on 07585690268.',
  },
  {
    route: '/services/manned-guarding',
    title: 'Manned Guarding Manchester & Oldham | MD Security Services',
    description: 'Professional manned guarding services for commercial premises, construction sites and industrial facilities across Manchester and Oldham. Licensed & insured. Call 07585690268.',
  },
  {
    route: '/services/event-security',
    title: 'Event Security Manchester & Oldham | MD Security Services',
    description: 'Professional event security for concerts, festivals, corporate events and private functions across Manchester, Oldham and the North West. Licensed & insured. Call 07585690268.',
  },
  {
    route: '/services/retail-security',
    title: 'Retail Security Guards Manchester & Oldham | MD Security Services',
    description: 'Specialist retail security officers for shops, supermarkets and shopping centres across Manchester and Oldham. Reduce shrinkage and protect your business. Call 07585690268.',
  },
  {
    route: '/services/access-control',
    title: 'Access Control Security Manchester & Oldham | MD Security Services',
    description: 'Professional access control officers for offices, construction sites and industrial premises across Manchester and Oldham. Licensed & insured. Call MD Security on 07585690268.',
  },
  {
    route: '/services/corporate-security',
    title: 'Corporate Security Manchester & Salford | MD Security Services',
    description: 'Professional corporate security for offices, business parks and commercial premises across Manchester, Salford Quays and the North West. Licensed & insured. Call 07585690268.',
  },
  {
    route: '/areas/manchester',
    title: 'Security Guards Manchester | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Manchester. Covering the city centre, Spinningfields, Salford Quays and all surrounding areas. Call 07585690268.',
  },
  {
    route: '/areas/oldham',
    title: 'Security Guards Oldham | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Oldham. MD Security Services is based in Oldham — local, reliable and available 24/7. Call 07585690268.',
  },
  {
    route: '/areas/rochdale',
    title: 'Security Guards Rochdale | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Rochdale. Covering Rochdale town centre, Heywood, Middleton and surrounding areas. Call 07585690268.',
  },
  {
    route: '/areas/bury',
    title: 'Security Guards Bury | MD Security Services',
    description: 'Professional security guards, door supervisors and manned guarding in Bury. Covering Bury town centre, Radcliffe, Prestwich, Whitefield and surrounding areas. Call 07585690268.',
  },
  {
    route: '/areas/salford',
    title: 'Security Guards Salford | MD Security Services',
    description: 'Professional security guards, door supervisors and corporate security in Salford. Covering Salford Quays, MediaCityUK, Eccles and the wider city. Call 07585690268.',
  },
  {
    route: '/privacy',
    title: 'Privacy Policy | MD Security Services',
    description: 'Privacy Policy for MD Security Services. How we collect, use and protect your personal data.',
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

for (const { route, title, description } of routes) {
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

  const outDir = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  written += 1;
}

console.log(`generate-static-meta: wrote ${written} static route pages with unique meta tags.`);
