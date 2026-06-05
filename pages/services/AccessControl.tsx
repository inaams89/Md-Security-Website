import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AREAS = [
  'Manchester', 'Oldham', 'Salford', 'Rochdale', 'Bury', 'Bolton',
  'Stockport', 'Trafford', 'Tameside', 'Chadderton', 'Middleton', 'Failsworth'
];

const FEATURES = [
  { icon: 'fa-key', title: 'Entry Management', desc: 'Control who enters and exits your premises with trained officers managing all access points.' },
  { icon: 'fa-id-card', title: 'ID & Credential Checks', desc: 'Verification of staff ID, visitor passes and authorisation levels to prevent unauthorised access.' },
  { icon: 'fa-clipboard-list', title: 'Visitor Logging', desc: 'Complete records of all visitors, contractors and deliveries entering your site at all times.' },
  { icon: 'fa-building-lock', title: 'Multi-Site Cover', desc: 'We can manage access control across multiple entry points or multiple locations simultaneously.' },
  { icon: 'fa-person-walking-dashes', title: 'Pedestrian & Vehicle', desc: 'Control both pedestrian and vehicle access, including barrier management and car park security.' },
  { icon: 'fa-id-badge', title: 'SIA Licensed', desc: 'All access control officers are SIA licensed, vetted and trained in conflict management.' },
];

const AccessControl: React.FC = () => (
  <ServicePageTemplate
    title="Access Control"
    subtitle="Professional access control security officers managing entry points, verifying credentials and protecting your premises across Manchester and the North West."
    heroImage="/assets/access-controlgatekeeping-amp-admin-1593759845-0.jpg"
    seoTitle="Access Control Security Manchester & Oldham | MD Security Services"
    seoDescription="Professional access control officers for offices, construction sites and industrial premises across Manchester and Oldham. SIA licensed. Call MD Security on 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/access-control"
    intro="MD Security Services provides professional manned access control for offices, industrial sites, construction sites and any premises requiring controlled entry across Manchester, Oldham and the North West."
    body="Unauthorised access to your premises is one of the most significant security risks any business faces. Whether it's protecting sensitive data, valuable stock, construction materials or simply ensuring only authorised personnel are on site, effective access control is essential. Our access control officers are trained to manage entry and exit points professionally — verifying IDs, logging visitors, managing vehicle access and communicating efficiently with your internal teams. We work with your existing systems and protocols or can help you establish new procedures. Our approach is thorough but never obstructive — keeping your site secure without disrupting the flow of legitimate business."
    features={FEATURES}
    areas={AREAS}
  />
);

export default AccessControl;
