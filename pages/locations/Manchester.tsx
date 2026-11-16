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
  'Manchester City Centre', 'Spinningfields', 'Northern Quarter', 'Ancoats',
  'Deansgate', 'Piccadilly', 'Oxford Road', 'Salford Quays', 'MediaCityUK',
  'Trafford Park', 'Wythenshawe', 'Didsbury', 'Chorlton', 'Levenshulme'
];

const Manchester: React.FC = () => (
  <LocationPageTemplate
    city="Manchester"
    county="Greater Manchester"
    seoTitle="Security Guards Manchester | MD Security Services"
    seoDescription="Professional security guards, manned guarding and access control in Manchester. Covering the city centre, Spinningfields, Salford Quays and all surrounding areas. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/areas/manchester"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services provides professional security personnel across Manchester city centre and Greater Manchester — from corporate security in Spinningfields to manned guarding at Trafford Park industrial sites."
    body="Manchester is one of the UK's most dynamic cities, home to major corporate developments, a thriving retail sector and constant construction activity. All of these environments require professional security. MD Security Services has a strong operational presence across Manchester, providing everything from static guards protecting construction sites in Ancoats and corporate offices in Spinningfields, to retail security and access control for warehouses and industrial units. We understand Manchester's unique security landscape — the pace, the scale and the diversity of requirements. Our officers are experienced in working across Manchester's varied environments and understand local site protocols. Whether you're a facilities manager, retailer, warehouse operator or construction company, we have the experienced personnel to meet your security needs in Manchester."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Manchester;
