import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical, noindex }) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);

    if (canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) canonicalTag.setAttribute('href', canonical);
    }

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) robotsTag.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    return () => {
      document.title = 'MD Security Services | Professional Security Guards Oldham & Manchester';
      if (robotsTag) robotsTag.setAttribute('content', 'index, follow');
    };
  }, [title, description, canonical, noindex]);

  return null;
};

export default SEOHead;
