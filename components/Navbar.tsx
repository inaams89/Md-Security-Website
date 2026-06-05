
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full z-50">
      {/* Top Bar Layer */}
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
              <a href="#contact" className="bg-white/10 text-[10px] px-3 py-1 rounded font-bold hover:bg-white/20 transition uppercase tracking-tighter">
                We are Hiring!
              </a>
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

      {/* Main Navbar Row */}
      <div className="bg-white shadow-sm py-3">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img
                src="/assets/md_logo.png"
                alt="MD Security Services"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-gray-500 uppercase tracking-widest text-[12px]">
            <a href="#about" className="hover:text-md-red transition">About</a>
            <a href="#services" className="hover:text-md-red transition">Services</a>
            <a href="#why-us" className="hover:text-md-red transition">Why Us</a>
            <a href="#team" className="hover:text-md-red transition">Team</a>
            <a href="#contact" className="hover:text-md-red transition">Contact</a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-600 text-xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
