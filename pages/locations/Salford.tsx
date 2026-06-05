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
  'Salford Quays', 'MediaCityUK', 'Salford City Centre', 'Eccles',
  'Worsley', 'Swinton', 'Pendleton', 'Ordsall', 'Langworthy',
  'Salford Royal Hospital area', 'Trafford Road corridor', 'Dock 10 area'
];

const Salford: React.FC = () => (
  <LocationPageTemplate
    city="Salford"
    county="Greater Manchester"
    seoTitle="Security Guards Salford | MD Security Services"
    seoDescription="Professional security guards, door supervisors and corporate security in Salford. Covering Salford Quays, MediaCityUK, Eccles and the wider city. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/areas/salford"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services provides professional security across Salford — from corporate security at MediaCityUK and Salford Quays to door supervision and manned guarding across the wider city."
    body="Salford is one of the most rapidly developing cities in the North West, driven by the huge investment at Salford Quays and MediaCityUK, as well as ongoing residential and commercial development across the city. This growth brings with it an increasing demand for professional, reliable security services. Our corporate security teams are experienced in the high-profile, media and technology environments found at MediaCityUK and Salford Quays. We also provide door supervision for Salford's growing hospitality sector, manned guarding for construction and development sites, and retail security across the city's shopping areas. From a single licensed officer to a full security team, MD Security Services delivers professional security solutions tailored to Salford's unique and diverse security requirements."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Salford;
