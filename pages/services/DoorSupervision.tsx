import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AREAS = [
  'Manchester', 'Oldham', 'Salford', 'Rochdale', 'Bury', 'Bolton',
  'Wigan', 'Stockport', 'Trafford', 'Tameside', 'Chadderton', 'Middleton'
];

const FEATURES = [
  { icon: 'fa-id-badge', title: 'Licensed & Insured', desc: 'Every door supervisor holds a current licence as required by law.' },
  { icon: 'fa-shield-halved', title: 'Conflict Management', desc: 'Expert trained in de-escalation techniques to handle difficult situations calmly and professionally.' },
  { icon: 'fa-eye', title: 'Crowd Control', desc: 'Skilled in managing large volumes of people safely, keeping both staff and guests protected.' },
  { icon: 'fa-radio', title: 'First Aid Trained', desc: 'All our door supervisors hold a valid first aid certificate and are prepared for medical emergencies.' },
  { icon: 'fa-clock', title: '24/7 Availability', desc: 'We cover days, nights, weekends and bank holidays to suit your venue or event schedule.' },
  { icon: 'fa-user-tie', title: 'Smart Presentation', desc: 'Our team arrives in full uniform, presenting a professional image that reflects well on your venue.' },
];

const DoorSupervision: React.FC = () => (
  <ServicePageTemplate
    title="Door Supervision"
    subtitle="Professional licensed door supervisors protecting your venue, event or premises across Manchester and the North West."
    heroImage="/assets/req-doorsuper.png"
    seoTitle="Door Supervisors Manchester & Oldham | MD Security Services"
    seoDescription="licensed door supervisors for pubs, clubs, events and venues across Manchester, Oldham and the North West. Available 24/7. Call MD Security Services on 07585690268."
    seoCanonical="https://www.md-securityservices.co.uk/services/door-supervision"
    intro="MD Security Services provides highly trained, licensed door supervisors for venues, hospitality businesses and events across Manchester, Oldham and the wider North West."
    body="Whether you run a busy nightclub in Manchester city centre, a bar in Oldham, or need security for a private event, our door supervisors are experienced in managing access control, crowd safety and conflict resolution. All of our door supervisors are licensed, first aid trained, and immaculately presented. We understand that your door staff are often the first impression guests have of your establishment — ours project professionalism, authority and approachability in equal measure. We work with clients on flexible contracts, whether you need door supervisors for one night or ongoing weekly cover."
    features={FEATURES}
    areas={AREAS}
  />
);

export default DoorSupervision;
