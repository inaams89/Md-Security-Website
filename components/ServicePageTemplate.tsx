import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import SEOHead from './SEOHead';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  seoCanonical: string;
  intro: string;
  body: string;
  features: Feature[];
  areas: string[];
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  heroImage,
  seoTitle,
  seoDescription,
  seoCanonical,
  intro,
  body,
  features,
  areas,
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
            <Link to="/#services" className="hover:text-md-red transition">Services</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight max-w-3xl leading-tight mb-6">
            {title} <br /><span className="text-md-red">In Manchester & The North West</span>
          </h1>
          <p className="text-gray-300 text-base max-w-xl leading-relaxed mb-10">{subtitle}</p>
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
            <span className="uppercase text-[10px] font-black text-md-red tracking-[0.3em]">Our Service</span>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed font-medium border-l-4 border-md-red/20 pl-6 mb-8">{intro}</p>
          <p className="text-gray-600 text-[13px] leading-relaxed">{body}</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-[15px] font-black text-gray-900 uppercase tracking-widest text-center mb-16">
            Why Choose MD Security For <span className="text-md-red">{title}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-md-red/30 transition-all group">
                <div className="w-12 h-12 bg-md-red/10 rounded-xl flex items-center justify-center text-md-red text-xl mb-5 group-hover:bg-md-red group-hover:text-white transition-all">
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-widest text-gray-800 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[15px] font-black uppercase tracking-widest mb-4">Areas We Cover</h2>
          <p className="text-gray-400 text-[12px] mb-12 max-w-lg mx-auto">
            We provide {title.toLowerCase()} services across the North West of England, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-14">
            {areas.map((area, i) => (
              <span key={i} className="px-5 py-2.5 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-wider hover:border-md-red hover:text-md-red transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-4 rounded-md font-bold text-[13px] hover:bg-red-700 transition shadow-2xl"
          >
            Contact Us Today <i className="fa-solid fa-phone"></i>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicePageTemplate;
