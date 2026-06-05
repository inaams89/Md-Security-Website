import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AREAS = [
  'Manchester City Centre', 'Oldham Town Centre', 'Salford', 'Rochdale',
  'Bury', 'Bolton', 'Stockport', 'Trafford Centre area', 'Tameside', 'Chadderton'
];

const FEATURES = [
  { icon: 'fa-store', title: 'Retail Experience', desc: 'Our officers understand retail environments and balance strong security with a positive customer experience.' },
  { icon: 'fa-person-walking-arrow-right', title: 'Theft Deterrence', desc: 'A visible, trained security presence dramatically reduces shoplifting, fraud and retail crime.' },
  { icon: 'fa-eye', title: 'CCTV Monitoring', desc: 'We work alongside your in-store camera systems to identify and act on suspicious behaviour quickly.' },
  { icon: 'fa-handcuffs', title: 'Detentions & Arrests', desc: 'Licensed to detain shoplifters under the citizen\'s arrest provisions until police arrive.' },
  { icon: 'fa-chart-bar', title: 'Loss Prevention Reports', desc: 'Detailed incident logging and reporting to help you identify patterns and reduce shrinkage.' },
  { icon: 'fa-id-badge', title: 'SIA Licensed', desc: 'All retail security officers hold a current SIA Security Guard licence and are fully vetted.' },
];

const RetailSecurity: React.FC = () => (
  <ServicePageTemplate
    title="Retail Security"
    subtitle="Specialist retail security officers protecting your store, reducing shrinkage and providing a safe shopping environment across Manchester and the North West."
    heroImage="/assets/hero-bg.jpg"
    seoTitle="Retail Security Guards Manchester & Oldham | MD Security Services"
    seoDescription="Specialist retail security officers for shops, supermarkets and shopping centres across Manchester and Oldham. Reduce shrinkage and protect your business. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/retail-security"
    intro="MD Security Services provides specialist retail security officers for shops, supermarkets, shopping centres and retail parks across Manchester, Oldham and the North West."
    body="Retail crime costs UK businesses billions every year. A professional, visible security presence is one of the most effective deterrents available. Our retail security officers are experienced in loss prevention, customer interaction and the legal requirements around detentions. Unlike generic security staff, our retail officers understand the specific pressures of the retail environment — they're trained to be approachable and helpful to genuine customers while remaining alert to potential threats. We provide uniformed officers, plain-clothes loss prevention officers, or a combination of both, tailored to your store's specific needs and risk profile."
    features={FEATURES}
    areas={AREAS}
  />
);

export default RetailSecurity;
