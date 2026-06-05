import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.pageYOffset;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                setProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }

            if (currentScroll > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // SVG Circle properties
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                }`}
        >
            <button
                onClick={scrollToTop}
                className="relative flex items-center justify-center p-2 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                aria-label="Scroll to top"
            >
                {/* SVG Progress Circle */}
                <svg className="w-14 h-14 transform -rotate-90">
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        fill="transparent"
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="4"
                    />
                    <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        fill="transparent"
                        stroke="var(--md-red, #d12300)"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-200 ease-out"
                    />
                </svg>

                {/* Arrow Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-arrow-up text-md-red group-hover:-translate-y-1 transition-transform duration-300"></i>
                </div>

                {/* Progress Text (Optional, hidden by default, can be shown on hover) */}
                <div className="absolute -top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {Math.round(progress)}%
                </div>
            </button>
        </div>
    );
};

export default ScrollProgress;
