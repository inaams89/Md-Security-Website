import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="reveal-item order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-md-red"></span>
              <span className="uppercase text-[10px] font-black text-md-red tracking-[0.3em]">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight text-gray-900 leading-tight">
              Your Local, Trusted <br /> <span className="text-md-red italic">Security Partner</span>
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-gray-600 font-medium">
              <p className="border-l-4 border-md-red/30 pl-6 py-1">
                Founded in 2022, MD Security Services is a Oldham-based security company providing professional, SIA-licensed guards across Manchester and the wider North West. We're local — headquartered in Chadderton — which means faster response times and genuine knowledge of the areas we protect.
              </p>
              <p>
                We work with venue owners, retailers, construction companies, event organisers and corporate businesses to deliver tailored security solutions. Every deployment is staffed by vetted, uniformed officers who take pride in their professionalism and represent your business well.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-md-red/30 transition-colors group">
                <i className="fa-solid fa-id-badge text-md-red mt-1 text-lg"></i>
                <div>
                  <h4 className="text-[11px] font-black uppercase text-gray-800 mb-1">Licensed & Insured</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Fully licensed officers and comprehensive public liability insurance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-md-red/30 transition-colors group">
                <i className="fa-solid fa-location-dot text-md-red mt-1 text-lg"></i>
                <div>
                  <h4 className="text-[11px] font-black uppercase text-gray-800 mb-1">Based in Oldham</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Local team, local knowledge, rapid deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-md-red/30 transition-colors group">
                <i className="fa-solid fa-clock text-md-red mt-1 text-lg"></i>
                <div>
                  <h4 className="text-[11px] font-black uppercase text-gray-800 mb-1">24/7 Availability</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Days, nights, weekends — we're always available.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-md-red/30 transition-colors group">
                <i className="fa-solid fa-user-check text-md-red mt-1 text-lg"></i>
                <div>
                  <h4 className="text-[11px] font-black uppercase text-gray-800 mb-1">DBS Checked</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">All staff are fully vetted and background checked.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="reveal-item order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-md-red/5 rounded-2xl rotate-3 -z-10"></div>
            <div className="absolute -inset-4 bg-gray-200/50 rounded-2xl -rotate-2 -z-20"></div>

            <div className="relative group">
              <img
                src="/assets/About-Manned-Guarding-Services-London.jpg"
                alt="MD Security Services professional guard on duty"
                loading="lazy"
                width="600"
                height="450"
                className="rounded-2xl shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 w-full object-cover h-[450px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-md-red text-white p-6 rounded-2xl shadow-xl animate-float hidden md:block">
                <div className="text-2xl font-black leading-none mb-1">500+</div>
                <div className="text-[8px] uppercase font-bold tracking-widest opacity-80">Shifts Completed</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
