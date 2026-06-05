import React from 'react';

const stats = [
  { number: '500+', label: 'Shifts Completed', icon: 'fa-calendar-check' },
  { number: '100%', label: 'Licensed Officers', icon: 'fa-id-badge' },
  { number: '24/7', label: 'Availability', icon: 'fa-clock' },
  { number: '5+', label: 'Areas Covered', icon: 'fa-location-dot' },
];

const StatsBar: React.FC = () => {
  return (
    <section className="bg-slate-900 py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <i className={`fa-solid ${s.icon} text-md-red text-xl`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-md-red transition-colors">
                {s.number}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
