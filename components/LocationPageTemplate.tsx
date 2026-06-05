import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import SEOHead from './SEOHead';

interface ServiceLink {
  name: string;
  icon: string;
  path: string;
}

interface LocationPageProps {
  city: string;
  county: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  heroImage: string;
  intro: string;
  body: string;
  services: ServiceLink[];
  landmarks: string[];
}

const LocationPageTemplate: React.FC<LocationPageProps> = ({
  city,
  county,
  seoTitle,
  seoDescription,
  seoCanonical,
  heroImage,
  intro,
  body,
  services,
  landmarks,
}) => {
  return (
    <PageLayout>
      <SEOHead title={seoTitle} description={seoDescription} canonical={seoCanonical} />

      {/* Hero */}
      <section
        className="relative py-32 flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)), url("${heroImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="flex items-center gap-2 mb-4 text-[11px] text-gray-400 uppercase tracking-widest font-bold">
            <Link to="/" className="hover:text-md-red transition">Home</Link>
            <span>/</span>
            <span className="text-white">Security Services in {city}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight max-w-3xl leading-tight mb-6">
            Security Services <br /><span className="text-md-red">In {city}</span>
          </h1>
          <p className="text-gray-300 text-base max-w-xl leading-relaxed mb-10">
            Professional SIA-licensed security guards, door supervisors and manned guarding solutions across {city}, {county}.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-4 rounded-md font-bold text-[13px] hover:bg-red-700 transition shadow-2xl"
          >
            Get A Free Quote <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-md-red"></span>
            <span className="uppercase text-[10px] font-black text-md-red tracking-[0.3em]">Serving {city}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">
            MD Security Services In <span className="text-md-red">{city}</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium border-l-4 border-md-red/20 pl-6 mb-8">{intro}</p>
          <p className="text-gray-600 text-[13px] leading-relaxed">{body}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight text-center mb-4">
            Our Services In <span className="text-md-red">{city}</span>
          </h2>
          <p className="text-center text-gray-500 text-[12px] mb-14 max-w-lg mx-auto">
            We offer the full range of professional security services to businesses and venues across {city} and {county}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.path}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-md-red/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-md-red/10 rounded-xl flex items-center justify-center text-md-red text-xl mb-5 group-hover:bg-md-red group-hover:text-white transition-all">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-widest text-gray-800 mb-2 group-hover:text-md-red transition-colors">{s.name}</h3>
                <span className="text-[10px] text-md-red font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <i className="fa-solid fa-arrow-right text-[8px]"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks / Local Knowledge */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Local Knowledge Of <span className="text-md-red">{city}</span>
          </h2>
          <p className="text-gray-600 text-[13px] leading-relaxed mb-10">
            Our team has extensive knowledge of {city} and {county}, operating across key locations including:
          </p>
          <div className="flex flex-wrap gap-3">
            {landmarks.map((l, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 border border-gray-200 rounded-full text-[11px] font-semibold text-gray-700">
                <i className="fa-solid fa-location-dot text-md-red mr-2"></i>{l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
            Need Security In {city}?
          </h2>
          <p className="text-gray-400 text-[12px] mb-10 max-w-lg mx-auto">
            Contact MD Security Services today for a free, no-obligation quote. Our team is ready to protect your people, property and assets in {city}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07585690268"
              className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-4 rounded-md font-bold text-[13px] hover:bg-red-700 transition shadow-2xl"
            >
              <i className="fa-solid fa-phone"></i> 07585690268
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-4 rounded-md font-bold text-[13px] hover:bg-white/10 transition"
            >
              Send An Enquiry <i className="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LocationPageTemplate;
