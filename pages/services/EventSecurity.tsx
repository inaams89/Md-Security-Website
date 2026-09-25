import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AREAS = [
  'Manchester', 'Oldham', 'Salford', 'Rochdale', 'Bolton', 'Bury',
  'Wigan', 'Stockport', 'Trafford', 'Tameside', 'Chadderton', 'Manchester Arena area'
];

const FEATURES = [
  { icon: 'fa-calendar-check', title: 'All Event Types', desc: 'From corporate dinners to music festivals, sporting events to private parties — we cover them all.' },
  { icon: 'fa-people-group', title: 'Crowd Management', desc: 'Expert crowd flow management keeping your guests safe and your event running smoothly.' },
  { icon: 'fa-triangle-exclamation', title: 'Risk Assessment', desc: 'We conduct a full pre-event security risk assessment to identify and mitigate threats before they arise.' },
  { icon: 'fa-id-badge', title: 'Licensed & Insured', desc: 'All event security personnel hold required licences for their role.' },
  { icon: 'fa-radio', title: 'Radio Communication', desc: 'Our teams operate on coordinated radio networks, ensuring rapid communication across your event site.' },
  { icon: 'fa-car', title: 'Vehicle & Perimeter', desc: 'We manage vehicle entry points, perimeter security and backstage/VIP access for larger events.' },
];

const EventSecurity: React.FC = () => (
  <ServicePageTemplate
    title="Event Security"
    subtitle="Professional event security teams for concerts, festivals, corporate events, sporting events and private functions across Manchester and the North West."
    heroImage="/assets/event-security.jpeg"
    seoTitle="Event Security Manchester & Oldham | MD Security Services"
    seoDescription="Professional event security for concerts, festivals, corporate events and private functions across Manchester, Oldham and the North West. Licensed & insured. Call 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/event-security"
    intro="MD Security Services provides comprehensive event security for organisers across Manchester, Oldham and the wider North West — from intimate private gatherings to large-scale public events."
    body="Keeping your event safe requires more than just bodies on the door. It requires planning, coordination, local knowledge and the right training. Our event security teams are experienced in pre-event risk assessment, crowd management, access control, search procedures and emergency response. We work closely with event organisers, venue managers and local authorities to ensure your event complies with all relevant regulations and safety standards. Whether you need two door supervisors for a private party or a full security team for a festival, MD Security Services delivers experienced, professional cover from start to finish."
    features={FEATURES}
    areas={AREAS}
  />
);

export default EventSecurity;
