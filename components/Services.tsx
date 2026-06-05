import React from 'react';

const services = [
  {
    title: 'Door Supervision',
    desc: 'Our highly trained and professional door supervisors are skilled at monitoring entrances and exits, managing crowds, and diffusing potential conflicts. With MD Security Services, you can trust that your establishment is in safe hands, allowing you to focus on running your business smoothly.',
    image: '/assets/req-doorsuper.png',
    icon: 'fa-door-open'
  },
  {
    title: 'Static Manned Guarding',
    desc: 'Our static manned guarding solutions provide a dependable layer of protection for your premises. Our highly trained security guards are equipped to handle any security challenges, ensuring the safety and security of your property and assets.',
    image: '/assets/static.png',
    icon: 'fa-user-shield'
  },
  {
    title: 'Access Control',
    desc: 'Manage entry points efficiently with our access control systems, limiting unauthorized access and enhancing overall security.',
    image: '/assets/access-controlgatekeeping-amp-admin-1593759845-0.jpg',
    icon: 'fa-key'
  },
  {
    title: 'Event Security',
    desc: 'Ensure the safety of your event with our professional event security team, trained to handle crowds and maintain a secure environment.',
    image: '/assets/event-security.jpeg',
    icon: 'fa-calendar-check'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-md-red/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-md-red"></span>
            <span className="text-md-red uppercase text-[10px] font-black tracking-[0.4em]">Our Expertise</span>
            <span className="w-8 h-[1px] bg-md-red"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">
            Professional <span className="text-md-red">Security Solutions</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-32">
          {services.map((s, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 relative">
                {/* Number Watermark */}
                <span className="absolute -top-12 left-0 text-[100px] font-black text-gray-100 -z-10 leading-none select-none">
                  0{idx + 1}
                </span>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-md-red/10 flex items-center justify-center text-md-red text-lg">
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <h3 className="text-[15px] font-black text-gray-800 uppercase tracking-widest">{s.title}</h3>
                </div>

                <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-md-red/20 transition-all duration-300">
                  <p className="text-gray-600 text-[12px] leading-relaxed font-medium">
                    {s.desc}
                  </p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-md-red text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all">
                    Enquire Now <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative group w-full">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-gray-100 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                <div className={`absolute -bottom-4 ${idx % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 bg-md-red/5 rounded-full -z-20`}></div>

                <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width="600"
                    height="320"
                    className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-700 hover:rotate-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
