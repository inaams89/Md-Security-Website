import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import faqs from '../../data/construction-faqs.json';

const AREAS = [
  'Oldham', 'Chadderton', 'Royton', 'Shaw', 'Failsworth', 'Manchester',
  'Salford', 'Rochdale', 'Bury', 'Middleton', 'Tameside', 'Saddleworth'
];

const FEATURES = [
  { icon: 'fa-road-barrier', title: 'Gatehouse & Access Control', desc: 'A named officer logs every contractor, visitor and delivery, checks site inductions and keeps unauthorised people out.' },
  { icon: 'fa-moon', title: 'Out-of-Hours Guarding', desc: 'An officer on site overnight and at weekends, when most construction thefts happen.' },
  { icon: 'fa-person-walking', title: 'Mobile & Lock-Up Patrols', desc: 'Scheduled checks of perimeter, fencing, plant and compounds, with a report after each visit.' },
  { icon: 'fa-truck', title: 'Vehicle & Plant Control', desc: 'Managing site entrances, deliveries and the movement of vehicles and plant on and off site.' },
  { icon: 'fa-triangle-exclamation', title: 'Hazard Reporting', desc: 'Officers report open gates, damaged hoarding and other hazards before they become incidents.' },
  { icon: 'fa-id-badge', title: 'Licensed & Insured', desc: 'Every officer holds the SIA licence for their role, and we carry public liability insurance.' },
];

const SECTIONS = [
  {
    heading: 'What construction site security includes',
    bullets: [
      { title: 'Gatehouse and access control.', text: 'A named officer logs every contractor, visitor and delivery, checks site inductions and keeps unauthorised people out.' },
      { title: 'Out-of-hours static guarding.', text: 'An officer on site overnight and at weekends, when most thefts happen.' },
      { title: 'Mobile and lock-up patrols.', text: 'Scheduled checks of perimeter, fencing, plant and compounds, with a report after each visit.' },
      { title: 'Vehicle and plant control.', text: 'Managing site entrances, deliveries and the movement of vehicles and plant.' },
      { title: 'Hazard awareness.', text: 'Officers report open gates, damaged hoarding and other hazards.' },
    ],
  },
  {
    heading: 'Why site managers choose MD Security',
    paragraphs: [
      'We are based in Chadderton, so we can reach sites in Oldham and the surrounding towns quickly and cover short-notice gaps. We can usually have an officer on site within one to two hours of your call, subject to availability.',
      'Every officer is SIA licensed and fully insured, and you receive written shift reports that you can pass to your insurer or client.',
    ],
  },
  {
    heading: 'How it works',
    bullets: [
      { title: '1. A short call.', text: 'We agree what the site needs and when, with a site visit if required.' },
      { title: '2. A written quote.', text: 'Clear and with no obligation.' },
      { title: '3. Briefing and start.', text: 'Officers are briefed on your site rules and start on the agreed date.' },
      { title: '4. Ongoing reporting.', text: 'You get shift reports and one named contact for any changes.' },
    ],
  },
];

const ConstructionSecurity: React.FC = () => (
  <ServicePageTemplate
    title="Construction Site Security"
    heroSuffix="In Oldham & Greater Manchester"
    subtitle="SIA-licensed officers for construction sites across Oldham, Manchester and the North West, from a single gate officer to 24/7 cover."
    heroImage="/assets/access-controlgatekeeping-amp-admin-1593759845-0.jpg"
    seoTitle="Construction Site Security Oldham & Manchester | MD Security"
    seoDescription="SIA-licensed construction site security guards for sites across Oldham, Manchester and Greater Manchester. Gatehouse, patrols and 24/7 cover. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/construction-site-security"
    intro="Building sites are a favourite target for thieves. Copper, plant, tools and materials disappear overnight, and an unmanned site is also a safety and insurance risk. MD Security Services provides SIA-licensed officers for construction sites across Oldham, Manchester and the wider North West, from a single gate officer to full 24/7 cover."
    body="Whether you are a main contractor, a developer or a small building firm, we tailor the cover to the stage of your project and the value of what is on site. Many clients start with out-of-hours cover and add gatehouse control as the site gets busier."
    sections={SECTIONS}
    features={FEATURES}
    faqs={faqs}
    areas={AREAS}
  />
);

export default ConstructionSecurity;
