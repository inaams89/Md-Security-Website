import React from 'react';
import PageLayout from '../components/PageLayout';
import SEOHead from '../components/SEOHead';

const section = (title: string, content: React.ReactNode) => (
  <div className="mb-10">
    <h2 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-4 pb-3 border-b border-gray-100">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3">{content}</div>
  </div>
);

const Privacy: React.FC = () => (
  <PageLayout>
    <SEOHead
      title="Privacy Policy | MD Security Services"
      description="Privacy Policy for MD Security Services. How we collect, use and protect your personal data."
      canonical="https://www.md-securityservices.co.uk/privacy"
    />

    {/* Header */}
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-4 text-[11px] text-gray-400 uppercase tracking-widest font-bold">
          <a href="/" className="hover:text-md-red transition">Home</a>
          <span>/</span>
          <span className="text-white">Privacy Policy</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: June 2026</p>
      </div>
    </section>

    {/* Content */}
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">

        {section('1. Who We Are', <>
          <p>MD Security Services ("we", "us", "our") is a security services company registered in England and Wales, with our principal place of business at 1-5 Victoria Street, Chadderton, Oldham, OL9 0HH.</p>
          <p>We are the data controller for personal data collected through this website and our services.</p>
          <p>Contact us about data protection: <a href="mailto:info@md-securityservices.co.uk" className="text-md-red font-semibold hover:underline">info@md-securityservices.co.uk</a> | <a href="tel:07585690268" className="text-md-red font-semibold hover:underline">07585690268</a></p>
        </>)}

        {section('2. What Data We Collect', <>
          <p>We collect the following categories of personal data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contact and enquiry data:</strong> name, email address, phone number, company name, and the content of your message when you submit an enquiry form.</li>
            <li><strong>Job application data:</strong> name, email address, phone number, CV/resume, SIA licence number, and any other information you include in your application.</li>
            <li><strong>Technical data:</strong> IP address, browser type, pages visited and time spent on the site, collected via standard web server logs.</li>
          </ul>
          <p>We do not collect sensitive personal data (such as racial or ethnic origin, health data, or criminal convictions) unless you voluntarily include it in your CV or application.</p>
        </>)}

        {section('3. How We Use Your Data', <>
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your service enquiry and provide you with a quote — <em>legal basis: legitimate interests / pre-contractual steps</em></li>
            <li>To process and consider your job application — <em>legal basis: legitimate interests / pre-contractual steps</em></li>
            <li>To communicate with you about our services — <em>legal basis: legitimate interests</em></li>
            <li>To comply with our legal and regulatory obligations — <em>legal basis: legal obligation</em></li>
            <li>To improve our website and services — <em>legal basis: legitimate interests</em></li>
          </ul>
        </>)}

        {section('4. How Long We Keep Your Data', <>
          <p>We retain personal data for only as long as necessary for the purpose it was collected:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Enquiry data:</strong> up to 12 months after your last contact with us, unless we enter into a contract with you.</li>
            <li><strong>Contract data:</strong> 6 years from the end of the contract, in line with legal limitation periods.</li>
            <li><strong>Job application data:</strong> up to 6 months if your application is unsuccessful. If you are employed, we retain employment records in line with employment law requirements.</li>
          </ul>
        </>)}

        {section('5. Who We Share Your Data With', <>
          <p>We do not sell, rent or trade your personal data. We may share it with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Formspree Inc.</strong> — our form submission processor (USA; transfers protected by Standard Contractual Clauses).</li>
            <li><strong>Vercel Inc.</strong> — our website hosting provider.</li>
            <li>Our legal, financial or professional advisers where necessary.</li>
            <li>Law enforcement or regulatory bodies where required by law.</li>
          </ul>
        </>)}

        {section('6. Your Rights', <>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Rectify</strong> inaccurate data</li>
            <li><strong>Erase</strong> your data in certain circumstances</li>
            <li><strong>Restrict</strong> processing of your data</li>
            <li><strong>Object</strong> to processing based on legitimate interests</li>
            <li><strong>Data portability</strong> where processing is automated and based on consent or contract</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:info@md-securityservices.co.uk" className="text-md-red font-semibold hover:underline">info@md-securityservices.co.uk</a>. We will respond within one month.</p>
          <p>You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-md-red font-semibold hover:underline">ico.org.uk</a> or by calling 0303 123 1113.</p>
        </>)}

        {section('7. Cookies', <>
          <p>Our website uses only essential technical cookies necessary for the site to function. We do not use advertising, analytics or tracking cookies. No cookie consent banner is required.</p>
        </>)}

        {section('8. Security', <>
          <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or destruction. Our website is served over HTTPS and form submissions are encrypted in transit.</p>
        </>)}

        {section('9. Changes to This Policy', <>
          <p>We may update this Privacy Policy from time to time. The latest version will always be available on this page. We encourage you to review it periodically.</p>
        </>)}

        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-gray-100">
          <p className="text-[12px] text-gray-500 font-medium">
            <strong className="text-gray-700">Questions?</strong> Contact our data protection contact at{' '}
            <a href="mailto:info@md-securityservices.co.uk" className="text-md-red font-semibold hover:underline">info@md-securityservices.co.uk</a>
            {' '}or write to us at MD Security Services, 1-5 Victoria Street, Chadderton, Oldham, OL9 0HH.
          </p>
        </div>

      </div>
    </section>
  </PageLayout>
);

export default Privacy;
