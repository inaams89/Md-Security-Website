import React from 'react';

const challenges = [
  {
    title: 'Retail Crime Rising',
    desc: 'Retail crime cost UK businesses over £1.8 billion in a single year — with incidents rising year on year across the North West.',
    stat: '£1.8B+'
  },
  {
    title: 'Reduced Police Presence',
    desc: 'Fewer frontline officers means longer response times. Businesses cannot rely solely on the police — on-site security is now essential.',
    stat: '-20%'
  },
  {
    title: 'Anti-Social Behaviour',
    desc: 'Anti-social behaviour incidents have surged across Greater Manchester, with pubs, venues and retail parks among the worst affected.',
    stat: '↑ 35%'
  }
];

const Challenges: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-gray-500 uppercase text-[10px] font-black tracking-[0.4em] block mb-3">The Security Landscape</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-gray-900">
            Why Security Matters <span className="text-md-red">More Than Ever</span>
          </h2>
          <div className="w-12 h-1 bg-md-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm font-medium max-w-2xl mx-auto leading-relaxed">
            Crime and anti-social behaviour continue to rise across the North West. MD Security Services helps businesses take control of their environment — before incidents happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {challenges.map((c, i) => (
            <div key={i} className="flex flex-col items-center p-10 bg-slate-50 rounded-2xl border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-500">
              <span className="absolute top-4 right-6 text-2xl font-black text-md-red opacity-20 group-hover:opacity-100 transition-opacity">
                {c.stat}
              </span>
              <div className="w-14 h-14 rounded-xl bg-md-red text-white flex items-center justify-center text-xl mb-6 shadow-lg shadow-red-900/20">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-base font-black mb-4 uppercase tracking-tight text-gray-800">{c.title}</h3>
              <p className="text-gray-500 text-[12px] font-medium leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-red-700 transition shadow-xl shadow-red-900/20"
        >
          Protect Your Business Today <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </section>
  );
};

export default Challenges;
