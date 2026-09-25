import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AREAS = [
  'Manchester City Centre', 'Salford Quays', 'MediaCityUK', 'Spinningfields',
  'Oldham', 'Stockport', 'Trafford Park', 'Bury', 'Rochdale', 'Tameside'
];

const FEATURES = [
  { icon: 'fa-building-columns', title: 'Corporate Environments', desc: 'Discreet, professional officers who understand the culture and demands of corporate workplaces.' },
  { icon: 'fa-user-secret', title: 'Executive Protection', desc: 'Close protection and personal security for senior executives, VIPs and high-profile individuals.' },
  { icon: 'fa-network-wired', title: 'Multi-Floor Cover', desc: 'Comprehensive security across large office buildings, business parks and multi-tenant sites.' },
  { icon: 'fa-camera', title: 'CCTV Integration', desc: 'Working alongside your existing CCTV infrastructure to monitor and respond to incidents proactively.' },
  { icon: 'fa-moon', title: 'Out-of-Hours Security', desc: 'Protecting your premises and assets outside of business hours when they are most vulnerable.' },
  { icon: 'fa-handshake', title: 'Tailored Solutions', desc: 'We develop bespoke security strategies built around your business\'s specific risks and requirements.' },
];

const CorporateSecurity: React.FC = () => (
  <ServicePageTemplate
    title="Corporate Security"
    subtitle="Discreet, professional corporate security solutions for offices, business parks and commercial premises across Manchester city centre, Salford and the North West."
    heroImage="/assets/hero-bg.jpg"
    seoTitle="Corporate Security Manchester & Salford | MD Security Services"
    seoDescription="Professional corporate security for offices, business parks and commercial premises across Manchester, Salford Quays and the North West. Licensed & insured. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/corporate-security"
    intro="MD Security Services provides bespoke corporate security solutions for offices, business parks, commercial developments and high-profile organisations across Manchester, Salford and the North West."
    body="Corporate security requires a different approach to other environments. Our officers must be professional, presentable and discreet — providing a reassuring presence without creating an atmosphere of intimidation. They must understand the sensitivities of a business environment, from managing reception security to handling difficult visitors and protecting confidential areas. Our corporate security service includes reception security, manned guarding, out-of-hours cover, access control, CCTV monitoring and executive protection. We work with your HR, facilities and operations teams to develop a security strategy that genuinely works for your organisation — not a one-size-fits-all approach. All deployments are covered by dedicated account management so you always have a direct point of contact."
    features={FEATURES}
    areas={AREAS}
  />
);

export default CorporateSecurity;
