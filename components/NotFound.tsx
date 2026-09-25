import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import SEOHead from './SEOHead';

const NotFound: React.FC = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Page Not Found | MD Security Services"
        description="The page you're looking for doesn't exist. Visit our homepage or get in touch with MD Security Services."
        noindex
      />
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-md-red font-black text-sm uppercase tracking-[0.3em] mb-4">404</p>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            Sorry, we couldn't find the page you were looking for. It may have been moved or no longer exists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-4 rounded-md font-bold text-[13px] hover:bg-red-700 transition"
            >
              Back To Homepage
            </Link>
            <a
              href="tel:07585690268"
              className="inline-flex items-center gap-3 border border-gray-200 text-gray-700 px-10 py-4 rounded-md font-bold text-[13px] hover:border-md-red hover:text-md-red transition"
            >
              Call 07585690268
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
