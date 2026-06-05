import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 animate-zoom"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.45)), url("/assets/hero-bg.webp")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1a1a1a',
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="reveal-item">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <i className="fa-solid fa-shield-halved text-md-red text-sm"></i>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90">SIA Licensed · 24/7 · North West</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black max-w-5xl mx-auto leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
            Manchester's Trusted <br className="hidden md:block" />
            <span className="text-md-red hero-glow">Security Partner</span>
          </h1>
          <p className="text-sm md:text-lg font-medium mb-4 opacity-80 max-w-2xl mx-auto leading-relaxed text-gray-200">
            Professional door supervisors, manned guarding and event security across Oldham, Manchester and the North West.
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">
            Door Supervision · Manned Guarding · Event Security · Retail Security
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-5 rounded-md font-bold text-[14px] hover:bg-red-700 transition transform hover:scale-105 active:scale-95 shadow-2xl shadow-red-900/40 group"
            >
              Get a Free Quote
              <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1"></i>
            </a>
            <a
              href="tel:07585690268"
              className="inline-flex items-center gap-3 glass-card text-white px-10 py-5 rounded-md font-bold text-[14px] hover:bg-white/10 transition transform hover:scale-105 active:scale-95 group"
            >
              <i className="fa-solid fa-phone text-md-red"></i>
              07585690268
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-3 text-white/40 hover:text-white transition-all group">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] opacity-60">Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5 group-hover:border-white/40 transition-colors">
            <div className="w-1 h-2 bg-md-red rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
