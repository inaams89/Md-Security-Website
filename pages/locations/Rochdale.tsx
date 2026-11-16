import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

const SERVICES = [
  { name: 'Manned Guarding', icon: 'fa-user-shield', path: '/services/manned-guarding' },
  { name: 'Retail Security', icon: 'fa-store', path: '/services/retail-security' },
  { name: 'Access Control', icon: 'fa-key', path: '/services/access-control' },
  { name: 'Corporate Security', icon: 'fa-building-columns', path: '/services/corporate-security' },
  { name: 'Construction Security', icon: 'fa-helmet-safety', path: '/services/construction-site-security' },
];

const LANDMARKS = [
  'Rochdale Town Centre', 'Heywood', 'Middleton', 'Milnrow', 'Littleborough',
  'Castleton', 'Norden', 'Spotland', 'Sudden', 'Rochdale Retail Park',
  'Kingsway Business Park', 'Rochdale Industrial Zone'
];

const Rochdale: React.FC = () => (
  <LocationPageTemplate
    city="Rochdale"
    county="Greater Manchester"
    seoTitle="Security Guards Rochdale | MD Security Services"
    seoDescription="Professional security guards, manned guarding and access control in Rochdale. Covering Rochdale town centre, Heywood, Middleton and surrounding areas. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/areas/rochdale"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services provides professional security guards and manned guarding across Rochdale, Heywood, Middleton and the wider Rochdale borough."
    body="Rochdale's growing town centre, retail parks and industrial estates all require reliable, professional security. MD Security Services covers the full Rochdale borough, from the town centre to Kingsway Business Park and surrounding industrial areas. Our close proximity to Rochdale from our Oldham base means we can respond quickly and cost-effectively, providing a local service with the resources and professionalism of a larger operation. We work with Rochdale retailers, construction companies, warehouses and businesses to deliver tailored security solutions that genuinely protect their people, property and business interests."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Rochdale;
