import React, { useState } from 'react';

const faqs = [
  {
    q: 'Are your security guards SIA licensed?',
    a: 'Yes — every single officer deployed by MD Security Services holds a current SIA (Security Industry Authority) licence. This is a legal requirement in the UK and we verify all licences before deployment. You can check any SIA licence at the official SIA register.'
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover Oldham, Manchester, Salford, Rochdale, Bury, Bolton, Wigan, Stockport, Trafford and the wider North West of England. If you\'re unsure whether we cover your location, call us on 07585690268 and we\'ll confirm.'
  },
  {
    q: 'How quickly can you provide security staff?',
    a: 'For standard deployments we can typically have vetted, uniformed officers on site within 48 hours. For urgent or emergency requirements, contact us directly on 07585690268 and we\'ll do everything we can to assist as quickly as possible.'
  },
  {
    q: 'Do you provide security for one-off events?',
    a: 'Absolutely. We cover everything from one-night events and private parties to multi-day festivals and sporting events. There\'s no minimum contract period for event security — just tell us your date, location and requirements.'
  },
  {
    q: 'How do your guards differ from generic agency staff?',
    a: 'All our officers are employed directly by MD Security, not sourced through sub-agencies. They receive consistent briefings, wear our uniform and are familiar with the professional standards we demand. You won\'t get a different, unfamiliar face every week.'
  },
  {
    q: 'What\'s included in your manned guarding service?',
    a: 'Our standard manned guarding service includes a uniformed SIA-licensed officer, regular patrols, access control, visitor logging, incident management and a written end-of-shift report. We can tailor the scope to your exact requirements.'
  },
  {
    q: 'Do you have public liability insurance?',
    a: 'Yes. MD Security Services holds full public liability insurance. Details are available on request when contracting our services.'
  },
  {
    q: 'How do I get a quote?',
    a: 'Simply call us on 07585690268, email info@md-securityservices.co.uk or fill in the enquiry form on this page. We\'ll come back to you promptly with a clear, no-obligation quote tailored to your requirements.'
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-md-red/30"></span>
            <span className="text-md-red uppercase text-[10px] font-black tracking-[0.4em]">FAQs</span>
            <span className="w-8 h-[1px] bg-md-red/30"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Frequently Asked <span className="text-md-red">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-md-red/30 shadow-sm' : 'border-gray-100'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[13px] font-black uppercase tracking-wide text-gray-800 group-hover:text-md-red transition-colors">
                  {faq.q}
                </span>
                <i className={`fa-solid fa-chevron-down text-md-red text-[10px] transition-transform flex-shrink-0 ${open === i ? 'rotate-180' : ''}`}></i>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-[13px] leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />
    </section>
  );
};

export default FAQ;
