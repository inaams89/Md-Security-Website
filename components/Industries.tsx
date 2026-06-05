import React from 'react';

const industries = [
  { name: 'Hospitality & Nightlife', icon: 'fa-martini-glass', desc: 'Pubs, bars, clubs and restaurants across Manchester and Oldham.' },
  { name: 'Retail & Shopping', icon: 'fa-store', desc: 'High street shops, supermarkets, shopping centres and retail parks.' },
  { name: 'Construction & Development', icon: 'fa-helmet-safety', desc: 'Site security, access control and plant protection for construction projects.' },
  { name: 'Corporate & Office', icon: 'fa-building-columns', desc: 'Reception security, access management and out-of-hours cover for offices.' },
  { name: 'Events & Festivals', icon: 'fa-calendar-star', desc: 'Concerts, sporting events, private functions and public festivals.' },
  { name: 'Healthcare & Education', icon: 'fa-hospital', desc: 'Sensitive environments requiring a calm, professional security presence.' },
];

const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-md-red/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-md-red/30"></span>
            <span className="text-md-red uppercase text-[10px] font-black tracking-[0.4em]">Industries We Serve</span>
            <span className="w-8 h-[1px] bg-md-red/30"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Security Across Every <span className="text-md-red">Industry</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            We work with businesses of all types across the North West. Whatever your sector, we understand your environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-slate-50 hover:bg-white hover:border-md-red/20 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-md-red text-xl shadow-sm border border-gray-100 flex-shrink-0 group-hover:bg-md-red group-hover:text-white transition-all">
                <i className={`fa-solid ${ind.icon}`}></i>
              </div>
              <div>
                <h3 className="text-[12px] font-black uppercase tracking-wider text-gray-800 mb-1.5">{ind.name}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
