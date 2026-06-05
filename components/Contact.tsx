import React, { useState, useRef } from 'react';

// ─── IMPORTANT ────────────────────────────────────────────────────────────────
// Replace the two FORMSPREE IDs below with your actual Formspree form IDs.
// Sign up free at https://formspree.io, create two forms, and paste the IDs here.
const ENQUIRY_FORM_ID  = 'YOUR_ENQUIRY_FORM_ID';   // for customer enquiries
const JOBS_FORM_ID     = 'YOUR_JOBS_FORM_ID';       // for job applications
// ─────────────────────────────────────────────────────────────────────────────

type Tab = 'enquiry' | 'jobs';
type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [tab, setTab]         = useState<Tab>('enquiry');
  const [status, setStatus]   = useState<Status>('idle');
  const enquiryRef            = useRef<HTMLFormElement>(null);
  const jobsRef               = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formId: string) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const resetStatus = () => setStatus('idle');

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-md-red/5 skew-x-12 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-md-red"></span>
              <span className="uppercase text-[10px] font-black text-md-red tracking-[0.4em]">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-10 uppercase tracking-tight leading-tight">
              Ready To Assist You <br /> <span className="text-md-red">Call Us Today</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-md-red text-xl border border-white/10">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">24/7 Support Line</p>
                  <a href="tel:07585690268" className="text-xl font-black tracking-tight hover:text-md-red transition-colors">07585690268</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-md-red text-xl border border-white/10">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@md-securityservices.co.uk" className="text-sm font-black tracking-tight hover:text-md-red transition-colors block">info@md-securityservices.co.uk</a>
                  <a href="mailto:hr@md-securityservices.co.uk" className="text-sm font-black tracking-tight hover:text-md-red transition-colors block">hr@md-securityservices.co.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-md-red text-xl border border-white/10">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Head Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=MD+Security+Service,+1-5+Victoria+Street,+Chadderton,+Oldham,+OL9+0HH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium opacity-80 max-w-xs leading-relaxed hover:text-md-red transition-colors"
                  >
                    1-5 Victoria Street, Chadderton, Oldham, OL9 0HH
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-5 opacity-60">Office Hours</h4>
                <div className="grid grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-widest opacity-90">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-md-red rounded-full"></span> Mon–Fri: 09:00–17:00</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-md-red rounded-full"></span> Sat: 09:00–13:00</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Sun: Closed</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-md-red rounded-full"></span> 24/7 Emergency Line</div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-white/10 mt-2">
                <iframe
                  title="MD Security Services office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.5!2d-2.138!3d53.537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c9e5c1e4e7%3A0x0!2s1-5+Victoria+Street%2C+Chadderton%2C+Oldham+OL9+0HH!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="bg-white text-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl">

            {/* Tabs */}
            <div className="flex rounded-xl bg-slate-100 p-1 mb-8 gap-1">
              <button
                onClick={() => { setTab('enquiry'); resetStatus(); }}
                className={`flex-1 py-3 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all ${tab === 'enquiry' ? 'bg-md-red text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fa-solid fa-briefcase mr-2"></i>Get a Quote
              </button>
              <button
                onClick={() => { setTab('jobs'); resetStatus(); }}
                className={`flex-1 py-3 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all ${tab === 'jobs' ? 'bg-slate-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fa-solid fa-user-plus mr-2"></i>Join Our Team
              </button>
            </div>

            {/* Success / Error States */}
            {status === 'success' && (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-black uppercase mb-2 text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">We'll be in touch shortly.</p>
                <button onClick={resetStatus} className="text-[11px] font-black uppercase tracking-widest text-md-red hover:underline">Send Another</button>
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-700 font-medium">
                Something went wrong. Please email us directly at <a href="mailto:info@md-securityservices.co.uk" className="font-black underline">info@md-securityservices.co.uk</a>
              </div>
            )}

            {/* Enquiry Form */}
            {status !== 'success' && tab === 'enquiry' && (
              <form ref={enquiryRef} onSubmit={(e) => handleSubmit(e, ENQUIRY_FORM_ID)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Your Name *</label>
                    <input name="name" type="text" required placeholder="Full Name" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Company</label>
                    <input name="company" type="text" placeholder="Company Name" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Phone *</label>
                    <input name="phone" type="tel" required placeholder="Phone Number" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Email *</label>
                    <input name="email" type="email" required placeholder="Email Address" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Service Required</label>
                  <select name="service" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm cursor-pointer">
                    <option value="">Select a Service</option>
                    <option>Door Supervision</option>
                    <option>Manned Guarding</option>
                    <option>Event Security</option>
                    <option>Retail Security</option>
                    <option>Access Control</option>
                    <option>Corporate Security</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Your Requirements</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your security requirements — location, dates, number of staff needed..." className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm resize-none"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-md-red text-white font-black py-4 rounded-lg uppercase text-[12px] tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? <><i className="fa-solid fa-spinner fa-spin mr-2"></i>Sending...</> : <><i className="fa-solid fa-paper-plane mr-2"></i>Request a Free Quote</>}
                </button>
                <p className="text-[9px] text-center text-gray-400 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                  <i className="fa-solid fa-lock text-md-red"></i> We never share your details with third parties
                </p>
              </form>
            )}

            {/* Jobs Form */}
            {status !== 'success' && tab === 'jobs' && (
              <form ref={jobsRef} onSubmit={(e) => handleSubmit(e, JOBS_FORM_ID)} className="space-y-4">
                <p className="text-gray-500 text-[11px] font-medium mb-2">Join the MD Security team. All applicants must hold or be working towards a current SIA licence.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Full Name *</label>
                    <input name="name" type="text" required placeholder="Full Name" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Email *</label>
                    <input name="email" type="email" required placeholder="Email Address" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Phone *</label>
                  <input name="phone" type="tel" required placeholder="Phone Number" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Position Applied For</label>
                  <select name="position" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm cursor-pointer">
                    <option value="">Select Position</option>
                    <option>Security Officer</option>
                    <option>Door Supervisor</option>
                    <option>Retail Security Officer</option>
                    <option>Event Security Officer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">Upload CV *</label>
                  <input
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full bg-slate-50 text-slate-700 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-md-red file:text-white hover:file:bg-red-700 cursor-pointer"
                  />
                  <p className="text-[9px] text-gray-400 mt-1">PDF, DOC or DOCX — max 5MB</p>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1.5 tracking-widest text-slate-700">SIA Licence Number (if held)</label>
                  <input name="sia_licence" type="text" placeholder="e.g. 1234-5678-9012-3456" className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-lg border border-gray-200 focus:border-md-red outline-none transition-colors text-sm" />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 text-white font-black py-4 rounded-lg uppercase text-[12px] tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? <><i className="fa-solid fa-spinner fa-spin mr-2"></i>Sending...</> : <><i className="fa-solid fa-paper-plane mr-2"></i>Submit Application</>}
                </button>
                <p className="text-[9px] text-center text-gray-400 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                  <i className="fa-solid fa-lock text-md-red"></i> Secure Encrypted Submission
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
