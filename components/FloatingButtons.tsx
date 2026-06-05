import React, { useState, useEffect } from 'react';

const FloatingButtons: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button — desktop right side */}
      <a
        href="https://wa.me/447585690268?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20security%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
      >
        <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
      </a>

      {/* Sticky mobile call bar — appears after scrolling down */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-white/10 transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="grid grid-cols-2">
          <a
            href="tel:07585690268"
            className="flex items-center justify-center gap-2 py-4 text-white font-black text-[12px] uppercase tracking-wider bg-md-red hover:bg-red-700 transition-colors"
          >
            <i className="fa-solid fa-phone"></i> Call Now
          </a>
          <a
            href="https://wa.me/447585690268?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20security%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 text-white font-black text-[12px] uppercase tracking-wider bg-[#25D366] hover:bg-green-600 transition-colors"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
