import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-md-red/5 skew-x-12 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info Side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-md-red"></span>
              <span className="uppercase text-[10px] font-black text-md-red tracking-[0.4em]">Get In Touch</span>
            </div>
            <h2 className="text-[15px] font-black mb-10 uppercase tracking-widest leading-tight">Ready To Assist You <br /> <span className="text-md-red">Call Us Today</span></h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-md-red text-xl border border-white/10 group hover:bg-md-red hover:text-white transition-colors">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Emergency Support</p>
                  <a href="tel:07585690268" className="text-[15px] font-black tracking-tight hover:text-md-red transition-colors">07585690268</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-md-red text-xl border border-white/10 group hover:bg-md-red hover:text-white transition-colors">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Official Inquiry</p>
                  <a href="mailto:hr@md-securityservices.co.uk" className="text-[13px] font-black tracking-tight hover:text-md-red transition-colors block">hr@md-securityservices.co.uk</a>
                  <a href="mailto:info@md-securityservices.co.uk" className="text-[13px] font-black tracking-tight hover:text-md-red transition-colors block">info@md-securityservices.co.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-md-red text-xl border border-white/10 group hover:bg-md-red hover:text-white transition-colors">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Head Office</p>
                  <p className="text-[12px] font-medium opacity-80 max-w-xs leading-relaxed">MD Security Service, 1-5 Victoria Street, Chadderton, Oldham, OL9 0HH</p>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-6 opacity-60">Office Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest opacity-90">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-md-red rounded-full"></span> Mon-Fri: 09:00 - 17:00
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-md-red rounded-full"></span> Sat: 09:00 - 13:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-md-red text-white text-[8px] font-black uppercase px-3 py-1.5 rounded-full animate-pulse-soft">Hiring Now</span>
            </div>
            <h3 className="text-[15px] font-black text-slate-900 mb-2 uppercase tracking-tight">Job Application</h3>
            <p className="text-gray-500 text-[11px] font-medium mb-8">Join the elite force at MD Security Services.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-900 text-[10px] font-black uppercase mb-1.5 tracking-widest">Name</label>
                  <input type="text" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-100 focus:border-md-red outline-none transition-colors text-[12px]" placeholder="Full Name" required />
                </div>
                <div>
                  <label className="block text-slate-900 text-[10px] font-black uppercase mb-1.5 tracking-widest">Email</label>
                  <input type="email" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-100 focus:border-md-red outline-none transition-colors text-[12px]" placeholder="Email Address" required />
                </div>
              </div>
              <div>
                <label className="block text-slate-900 text-[10px] font-black uppercase mb-1.5 tracking-widest">Phone</label>
                <input type="tel" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-100 focus:border-md-red outline-none transition-colors text-[12px]" placeholder="Phone Number" required />
              </div>
              <div>
                <label className="block text-slate-900 text-[10px] font-black uppercase mb-1.5 tracking-widest">Position</label>
                <select className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-100 focus:border-md-red outline-none transition-colors text-[12px] cursor-pointer appearance-none">
                  <option>Select Position</option>
                  <option>Security Officer</option>
                  <option>Door Supervisor</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-900 text-[10px] font-black uppercase mb-1.5 tracking-widest">Upload CV</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center text-[11px] font-semibold text-gray-400 cursor-pointer hover:border-md-red/40 hover:bg-slate-50 transition-all">
                  Drag & drop or <span className="text-md-red">Browse File</span>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-md-red text-white font-black py-4 rounded-lg uppercase text-[12px] tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 active:scale-95">
                  Send Application
                </button>
              </div>
              <div className="text-[9px] text-center text-gray-400 font-bold tracking-widest pt-4 uppercase flex items-center justify-center gap-2">
                <i className="fa-solid fa-lock text-md-red"></i> Secure Encrypted Application
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
