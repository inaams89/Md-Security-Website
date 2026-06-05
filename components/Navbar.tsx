import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SERVICES = [
  { label: 'Door Supervision', path: '/services/door-supervision' },
  { label: 'Manned Guarding', path: '/services/manned-guarding' },
  { label: 'Event Security', path: '/services/event-security' },
  { label: 'Retail Security', path: '/services/retail-security' },
  { label: 'Access Control', path: '/services/access-control' },
  { label: 'Corporate Security', path: '/services/corporate-security' },
];

const AREAS = [
  { label: 'Manchester', path: '/areas/manchester' },
  { label: 'Oldham', path: '/areas/oldham' },
  { label: 'Rochdale', path: '/areas/rochdale' },
  { label: 'Bury', path: '/areas/bury' },
  { label: 'Salford', path: '/areas/salford' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2.5 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-md-red text-[10px] px-3 py-1 rounded font-bold hover:bg-red-700 transition uppercase tracking-tighter"
              >
                UK Threat Level-MI5
              </a>
              <Link to="/#contact" className="bg-white/10 text-[10px] px-3 py-1 rounded font-bold hover:bg-white/20 transition uppercase tracking-tighter">
                We are Hiring!
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-[11px] font-medium tracking-wide">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-md-red"></i>
                <a href="tel:07585690268" className="hover:text-md-red transition">07585690268</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-md-red"></i>
                <a href="mailto:info@md-securityservices.co.uk" className="hover:text-md-red transition">info@md-securityservices.co.uk</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-md-red"></i>
                <span>Oldham, Manchester</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/assets/md_logo.png" alt="MD Security Services" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-gray-500 uppercase tracking-widest text-[12px]">
            <Link to="/" className="hover:text-md-red transition">Home</Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 hover:text-md-red transition py-2">
                Services <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${servicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-2xl border-t-2 border-md-red rounded-b-xl min-w-[220px] py-2 z-50">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-5 py-3 text-[11px] text-gray-600 hover:bg-slate-50 hover:text-md-red transition-colors font-bold uppercase tracking-wider"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="flex items-center gap-1 hover:text-md-red transition py-2">
                Areas <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${areasOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 bg-white shadow-2xl border-t-2 border-md-red rounded-b-xl min-w-[180px] py-2 z-50">
                  {AREAS.map((a) => (
                    <Link
                      key={a.path}
                      to={a.path}
                      className="block px-5 py-3 text-[11px] text-gray-600 hover:bg-slate-50 hover:text-md-red transition-colors font-bold uppercase tracking-wider"
                      onClick={() => setAreasOpen(false)}
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isHome ? (
              <>
                <a href="#about" className="hover:text-md-red transition">About</a>
                <a href="#team" className="hover:text-md-red transition">Team</a>
                <a href="#contact" className="hover:text-md-red transition">Contact</a>
              </>
            ) : (
              <>
                <Link to="/#about" className="hover:text-md-red transition">About</Link>
                <Link to="/#contact" className="hover:text-md-red transition">Contact</Link>
              </>
            )}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-600 text-xl" onClick={() => setMobileOpen(!mobileOpen)}>
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            <Link to="/" className="block py-2.5 text-[12px] font-bold uppercase tracking-widest text-gray-600 hover:text-md-red" onClick={() => setMobileOpen(false)}>Home</Link>

            <div>
              <button className="w-full text-left py-2.5 text-[12px] font-bold uppercase tracking-widest text-gray-600 hover:text-md-red flex justify-between items-center" onClick={() => setServicesOpen(!servicesOpen)}>
                Services <i className={`fa-solid fa-chevron-down text-[9px] transition-transform ${servicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  {SERVICES.map((s) => (
                    <Link key={s.path} to={s.path} className="block py-2 text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-md-red" onClick={() => setMobileOpen(false)}>{s.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="w-full text-left py-2.5 text-[12px] font-bold uppercase tracking-widest text-gray-600 hover:text-md-red flex justify-between items-center" onClick={() => setAreasOpen(!areasOpen)}>
                Areas <i className={`fa-solid fa-chevron-down text-[9px] transition-transform ${areasOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {areasOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  {AREAS.map((a) => (
                    <Link key={a.path} to={a.path} className="block py-2 text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-md-red" onClick={() => setMobileOpen(false)}>{a.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/#contact" className="block py-2.5 text-[12px] font-bold uppercase tracking-widest text-gray-600 hover:text-md-red" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a href="tel:07585690268" className="flex items-center gap-2 text-[11px] font-bold text-gray-600">
                <i className="fa-solid fa-phone text-md-red"></i> 07585690268
              </a>
              <a href="mailto:info@md-securityservices.co.uk" className="flex items-center gap-2 text-[11px] font-bold text-gray-600">
                <i className="fa-solid fa-envelope text-md-red"></i> info@md-securityservices.co.uk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
