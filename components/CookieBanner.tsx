import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'md_cookie_accepted';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if user hasn't already acknowledged
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-slate-900 border-t border-white/10 shadow-2xl"
      style={{ marginBottom: window.innerWidth < 768 ? '56px' : '0' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

          {/* Icon + Text */}
          <div className="flex items-start gap-3 flex-1">
            <i className="fa-solid fa-cookie-bite text-md-red text-xl mt-0.5 flex-shrink-0"></i>
            <p className="text-gray-300 text-[12px] leading-relaxed">
              <span className="font-black text-white uppercase tracking-wide text-[10px] block mb-1">Cookie Notice</span>
              This site uses only <strong className="text-white">essential cookies</strong> required for it to function — no tracking, advertising or analytics cookies are used.
              By continuing to browse you acknowledge this.{' '}
              <Link to="/privacy" className="text-md-red hover:underline font-bold" onClick={accept}>
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={accept}
              className="flex-1 sm:flex-none bg-md-red text-white text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-lg hover:bg-red-700 transition-all active:scale-95"
            >
              Got It
            </button>
            <button
              onClick={accept}
              aria-label="Close cookie notice"
              className="text-gray-500 hover:text-white transition-colors p-1"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
