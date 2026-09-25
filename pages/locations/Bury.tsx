import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const SERVICES = [
  { name: 'Door Supervision', icon: 'fa-door-open', path: '/services/door-supervision' },
  { name: 'Manned Guarding', icon: 'fa-user-shield', path: '/services/manned-guarding' },
  { name: 'Event Security', icon: 'fa-calendar-check', path: '/services/event-security' },
  { name: 'Retail Security', icon: 'fa-store', path: '/services/retail-security' },
  { name: 'Access Control', icon: 'fa-key', path: '/services/access-control' },
  { name: 'Corporate Security', icon: 'fa-building-columns', path: '/services/corporate-security' },
];

const LANDMARKS = [
  'Bury Town Centre', 'Ramsbottom', 'Radcliffe', 'Prestwich', 'Tottington',
  'Whitefield', 'Unsworth', 'Bury Market area', 'Bury Business Park',
  'Peel Way Retail Park', 'Bury New Road corridor'
];

const Bury: React.FC = () => (
  <LocationPageTemplate
    city="Bury"
    county="Greater Manchester"
    seoTitle="Security Guards Bury | MD Security Services"
    seoDescription="Professional security guards, door supervisors and manned guarding in Bury. Covering Bury town centre, Radcliffe, Prestwich, Whitefield and surrounding areas. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/areas/bury"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services provides reliable licensed security officers, door supervisors and event security across Bury, Radcliffe, Prestwich, Whitefield and the wider Bury borough."
    body="Bury is a vibrant borough with a busy town centre, popular market, growing hospitality sector and a range of industrial and commercial areas all requiring professional security. Our team covers the full extent of the Bury borough, providing door supervisors for pubs and venues, manned guarding for businesses and construction sites, retail security for shops and retail parks, and event security for the growing number of events and festivals held across the area. Our experienced, locally deployed officers ensure a fast, reliable service wherever you are in Bury. We pride ourselves on building long-term relationships with our clients — understanding their specific site and security requirements and delivering consistent, dependable protection."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Bury;
