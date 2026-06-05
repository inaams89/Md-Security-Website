import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AREAS = [
  'Manchester', 'Oldham', 'Salford', 'Rochdale', 'Bury', 'Bolton',
  'Wigan', 'Stockport', 'Trafford', 'Tameside', 'Chadderton', 'Middleton'
];

const FEATURES = [
  { icon: 'fa-user-shield', title: 'Visible Deterrent', desc: 'A uniformed security officer on site significantly reduces the risk of theft, vandalism and unauthorised access.' },
  { icon: 'fa-clipboard-check', title: 'Regular Patrols', desc: 'Our guards carry out scheduled and random patrols, maintaining a vigilant presence throughout your premises.' },
  { icon: 'fa-id-badge', title: 'SIA Licensed', desc: 'All security officers are SIA licensed, vetted and background checked before deployment.' },
  { icon: 'fa-phone-volume', title: 'Incident Reporting', desc: 'Detailed written reports provided after every shift, keeping you fully informed of all site activity.' },
  { icon: 'fa-building-lock', title: 'Access Control', desc: 'Our guards manage entry points, verify credentials and prevent unauthorised personnel from accessing your site.' },
  { icon: 'fa-clock', title: 'Flexible Contracts', desc: 'Short-term, long-term, 24/7 or part-time cover — we build a schedule around your specific requirements.' },
];

const MannedGuarding: React.FC = () => (
  <ServicePageTemplate
    title="Manned Guarding"
    subtitle="Reliable, professional static security guards protecting your commercial premises, construction sites and industrial facilities across Manchester and the North West."
    heroImage="/assets/static.png"
    seoTitle="Manned Guarding Manchester & Oldham | MD Security Services"
    seoDescription="Professional manned guarding services for commercial premises, construction sites and industrial facilities across Manchester and Oldham. SIA licensed. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/manned-guarding"
    intro="MD Security Services provides professional static manned guarding for businesses, construction sites, retail premises and industrial facilities across Manchester, Oldham and the North West."
    body="Our manned guarding service places trained, uniformed SIA-licensed security officers at your premises to deter criminal activity, manage access control and respond to incidents. We understand that every site is different — a busy retail unit has different security needs to a construction site or a corporate office. That's why we assess every site individually and provide tailored security solutions. Our guards are trained not just in physical security, but in customer service, so they represent your business professionally at all times. From single-guard deployments to full security teams, MD Security Services delivers dependable, round-the-clock protection for your assets and people."
    features={FEATURES}
    areas={AREAS}
  />
);

export default MannedGuarding;
