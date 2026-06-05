import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-28 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Company */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/assets/md_logo.png" alt="MD Security Services" loading="lazy" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional security guards, door supervisors and event security across Oldham, Manchester and the North West.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              <i className="fa-solid fa-shield-halved text-md-red"></i> Licensed · DBS Checked · Insured
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61565068962423"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MD Security Services on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-md-red transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://share.google/9ePd4TClon85U6fwM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MD Security Services on Google"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-md-red transition-all duration-300"
              >
                <i className="fa-brands fa-google text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 relative inline-block uppercase tracking-wider">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-md-red"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Our Services', href: '/#services' },
                { label: 'Why Choose Us', href: '/#why-us' },
                { label: 'Contact Us', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-black mb-8 relative inline-block uppercase tracking-wider">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-md-red"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Door Supervision', path: '/services/door-supervision' },
                { label: 'Manned Guarding', path: '/services/manned-guarding' },
                { label: 'Event Security', path: '/services/event-security' },
                { label: 'Retail Security', path: '/services/retail-security' },
                { label: 'Access Control', path: '/services/access-control' },
              ].map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-black mb-8 relative inline-block uppercase tracking-wider">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-md-red"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-md-red/10 p-2 rounded-lg flex-shrink-0">
                  <i className="fa-solid fa-phone text-md-red text-sm"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Phone</p>
                  <a href="tel:07585690268" className="text-sm font-semibold hover:text-md-red transition-colors">07585690268</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-md-red/10 p-2 rounded-lg flex-shrink-0">
                  <i className="fa-solid fa-envelope text-md-red text-sm"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                  <a href="mailto:info@md-securityservices.co.uk" className="text-sm font-semibold hover:text-md-red transition-colors block">info@md-securityservices.co.uk</a>
                  <a href="mailto:hr@md-securityservices.co.uk" className="text-sm font-semibold hover:text-md-red transition-colors block">hr@md-securityservices.co.uk</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-md-red/10 p-2 rounded-lg flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-md-red text-sm"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Address</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=MD+Security+Service,+1-5+Victoria+Street,+Chadderton,+Oldham,+OL9+0HH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:text-md-red transition-colors leading-snug"
                  >
                    1-5 Victoria Street, Chadderton,<br />Oldham, OL9 0HH
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
            &copy; {currentYear} MD Security Services Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <a href="mailto:info@md-securityservices.co.uk" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
