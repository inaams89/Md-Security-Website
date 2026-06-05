import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="reveal-item order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-md-red"></span>
              <span className="uppercase text-[10px] font-black text-md-red tracking-[0.3em]">Corporate Profile</span>
            </div>

            <h2 className="text-[15px] font-black mb-8 uppercase tracking-widest text-gray-900 leading-tight">
              Your Trusted & Professional <br /> <span className="text-md-red italic">Security Partner</span>
            </h2>

            <div className="space-y-6 text-[12px] leading-relaxed text-gray-600 font-medium">
              <p className="border-l-4 border-md-red/20 pl-6 py-1">
                Incorporated on 30 May 2022, MD Security Services has rapidly emerged as a premier provider of professional guarding solutions in the United Kingdom. Based in Oldham, Manchester, we bring a deep understanding of the North West security landscape and the communities we serve.
              </p>
              <p>
                We specialize in bespoke security strategies, meticulously designed to protect high-value assets and ensure the safety of both commercial and residential environments. Our commitment to excellence isn't just a promise; it's the foundation of everything we do.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:border-md-red/30 transition-colors">
                <i className="fa-solid fa-certificate text-md-red mt-1"></i>
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-gray-800 mb-1">Elite Quality</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Exceeding industry standards in every deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:border-md-red/30 transition-colors">
                <i className="fa-solid fa-bolt-lightning text-md-red mt-1"></i>
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-gray-800 mb-1">Rapid Response</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">Agile teams ready for any security contingency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content with Depth Effect */}
          <div className="reveal-item order-1 lg:order-2 relative">
            {/* Background Decorative Shape */}
            <div className="absolute -inset-4 bg-md-red/5 rounded-2xl rotate-3 -z-10"></div>
            <div className="absolute -inset-4 bg-gray-200/50 rounded-2xl -rotate-2 -z-20"></div>

            <div className="relative group">
              <img
                src="/assets/About-Manned-Guarding-Services-London.jpg"
                alt="Security Specialist"
                className="rounded-2xl shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 w-full object-cover h-[450px]"
              />
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-md-red text-white p-6 rounded-2xl shadow-xl animate-float hidden md:block">
                <div className="text-2xl font-black leading-none mb-1">03+</div>
                <div className="text-[8px] uppercase font-bold tracking-widest opacity-80">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
