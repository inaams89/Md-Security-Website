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
  'Oldham Town Centre', 'Chadderton', 'Royton', 'Shaw', 'Lees',
  'Failsworth', 'Saddleworth', 'Crompton', 'Springhead', 'Hollinwood',
  'Oldham Retail Park', 'Gallery Oldham area', 'Oldham Business Park'
];

const Oldham: React.FC = () => (
  <LocationPageTemplate
    city="Oldham"
    county="Greater Manchester"
    seoTitle="Security Guards Oldham | MD Security Services"
    seoDescription="Professional security guards, door supervisors and manned guarding in Oldham. MD Security Services is based in Oldham — local, reliable and available 24/7. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/areas/oldham"
    heroImage="/assets/hero-bg.jpg"
    intro="MD Security Services is headquartered in Oldham, making us the local choice for professional security across the borough — from Chadderton and Royton to Failsworth and Saddleworth."
    body="As a company based in Oldham at 1-5 Victoria Street, Chadderton, we have a deep connection to the local community and a thorough understanding of security needs across the borough. Oldham's diverse economy — with its mix of retail, hospitality, industrial and residential areas — demands a versatile and experienced security provider. Our team operates across Oldham's town centre, surrounding townships, business parks and industrial estates. We are proud to support local businesses, venues and event organisers with professional, reliable security services delivered by officers who know and understand the local area. Being local means faster response times, better local knowledge and a genuine commitment to the communities we protect. Whether you need a door supervisor for your Oldham town centre bar, static guards for a local construction site or retail security for your shop, MD Security Services is your local partner."
    services={SERVICES}
    landmarks={LANDMARKS}
  />
);

export default Oldham;
