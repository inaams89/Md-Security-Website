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
  'Rochdale Town Centre', 'Heywood', 'Middleton', 'Milnrow', 'Littleborough',
  'Castleton', 'Norden', 'Spotland', 'Sudden', 'Rochdale Retail Park',
  'Kingsway Business Park', 'Rochdale Industrial Zone'
];

const Rochdale: React.FC = () => (
  <LocationPageTemplate
    city="Rochdale"
    county="Greater Manchester"
    seoTitle="Security Guards Rochdale | MD Security Services"
    seoDescription="Professional SIA-licensed security guards, door supervisors and manned guarding in Rochdale. Covering Rochdale town centre, Heywood, Middleton and surrounding areas. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/areas/rochdale"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services provides professional SIA-licensed security guards and door supervisors across Rochdale, Heywood, Middleton and the wider Rochdale borough."
    body="Rochdale's growing town centre, thriving hospitality venues, retail parks and industrial estates all require reliable, professional security. MD Security Services covers the full Rochdale borough, from the town centre's bars and restaurants to Kingsway Business Park and surrounding industrial areas. Our close proximity to Rochdale from our Oldham base means we can respond quickly and cost-effectively, providing a local service with the resources and professionalism of a larger operation. We work with Rochdale venue owners, construction companies, retailers and event organisers to deliver tailored security solutions that genuinely protect their people, property and business interests."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Rochdale;
