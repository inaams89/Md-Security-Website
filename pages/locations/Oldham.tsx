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
  'Oldham Town Centre', 'Chadderton', 'Royton', 'Shaw', 'Lees',
  'Failsworth', 'Saddleworth', 'Crompton', 'Springhead', 'Hollinwood',
  'Oldham Retail Park', 'Gallery Oldham area', 'Oldham Business Park'
];

const Oldham: React.FC = () => (
  <LocationPageTemplate
    city="Oldham"
    county="Greater Manchester"
    seoTitle="Security Services Oldham | 24/7 SIA-Licensed Guards"
    seoDescription="Oldham-based SIA-licensed security guards, manned guarding & access control. Fast response, fully insured, available 24/7. Call 07585690268 for a free quote."
    seoCanonical="https://www.md-securityservices.co.uk/areas/oldham"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services is headquartered in Oldham, making us the local choice for professional security across the borough — from Chadderton and Royton to Failsworth and Saddleworth."
    body="As a company based in Oldham at 1-5 Victoria Street, Chadderton, we have a deep connection to the local community and a thorough understanding of security needs across the borough. Oldham's diverse economy — with its mix of retail, industrial and residential areas — demands a versatile and experienced security provider. Our team operates across Oldham's town centre, surrounding townships, business parks and industrial estates. We are proud to support local businesses and organisations with professional, reliable security services delivered by officers who know and understand the local area. Being local means faster response times, better local knowledge and a genuine commitment to the communities we protect. Whether you need static guards for a local construction site, access control for your warehouse or retail security for your shop, MD Security Services is your local partner."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Oldham;
