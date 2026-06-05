import React from 'react';

const features = [
  {
    title: 'Licensed & Insured',
    desc: 'MD Security Services is fully insured and compliant. Every officer we deploy holds the correct licences and certifications required for their role.',
    icon: 'fa-id-badge',
    stat: '✓'
  },
  {
    title: 'Deployed Within 48 Hours',
    desc: 'Need security fast? We can typically have a vetted, uniformed officer on your site within 48 hours of your enquiry — often sooner for urgent requirements.',
    icon: 'fa-bolt-lightning',
    stat: '48hrs'
  },
  {
    title: 'Locally Based in Oldham',
    desc: 'We\'re not a national agency dispatching strangers. Our team is based in Chadderton, Oldham — we know the area, the venues and the local requirements.',
    icon: 'fa-location-dot',
    stat: 'Local'
  },
  {
    title: 'Full DBS & Vetting',
    desc: 'All staff undergo a full Disclosure and Barring Service check and employment history verification before being placed with any client.',
    icon: 'fa-user-shield',
    stat: 'DBS+'
  },
  {
    title: 'Detailed Incident Reports',
    desc: 'After every shift you receive a written incident and activity report, so you always know exactly what happened on your site.',
    icon: 'fa-clipboard-list',
    stat: '24/7'
  },
  {
    title: 'Dedicated Account Manager',
    desc: 'You\'ll always have a named contact at MD Security — a real person who knows your account. No call centres, no automated systems.',
    icon: 'fa-handshake',
    stat: '1-to-1'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-md-red/30"></span>
            <span className="text-md-red uppercase text-[10px] font-black tracking-[0.4em]">Why MD Security</span>
            <span className="w-8 h-[1px] bg-md-red/30"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Why Businesses Choose <span className="text-md-red">MD Security</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
            Not promises — specifics. Here's what actually sets us apart from other security companies in the North West.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-md-red/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-md-red group-hover:h-full transition-all duration-500"></div>
              <div className="absolute top-4 right-5 text-4xl font-black text-gray-100 group-hover:text-md-red/10 transition-colors select-none leading-none">
                {f.stat}
              </div>
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-md-red text-xl mb-5 group-hover:bg-md-red group-hover:text-white transition-colors duration-500">
                <i className={`fa-solid ${f.icon}`}></i>
              </div>
              <h3 className="text-base font-black mb-3 uppercase tracking-tight text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-[12px] leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
