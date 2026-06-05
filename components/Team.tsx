import React from 'react';

const stats = [
  {
    title: '24/7 Available',
    desc: 'Our team is available round the clock — days, nights, weekends and bank holidays. Security threats don\'t follow a 9-to-5 schedule, and neither do we.',
    icon: 'fa-clock'
  },
  {
    title: 'Experienced Officers',
    desc: 'Our officers bring real-world experience from venues, construction sites, retail environments and corporate settings across Greater Manchester.',
    icon: 'fa-user-tie'
  },
  {
    title: 'Uniformed & Professional',
    desc: 'Every officer arrives in full uniform, with ID clearly displayed. Presentation matters — our staff reflect well on your business at all times.',
    icon: 'fa-shirt'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-md-red py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:30px_30px] [background-position:0_0,15px_15px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="uppercase text-[10px] font-black tracking-[0.4em] opacity-80 mb-3 block">Professional Standards</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Our Security Professionals</h2>
          <div className="w-12 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-sm font-medium max-w-2xl mx-auto opacity-80 leading-relaxed">
            Every member of the MD Security team is SIA licensed, DBS checked and trained to represent your business with professionalism and authority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="text-lg font-black mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed font-light opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
