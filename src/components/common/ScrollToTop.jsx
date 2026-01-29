import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Find the TrustedBy section by ID
            const trustedSection = document.getElementById('trusted-section');
            
            if (trustedSection) {
                // Check if we have scrolled past the top of the TrustedBy section
                if (window.scrollY >= trustedSection.offsetTop - 100) { // -100 for a bit of buffer
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                // Fallback: Show after 500px if section not found
                if (window.scrollY > 500) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 z-[100]
                w-12 h-12 rounded-xl
                bg-gradient-to-r from-blue-500 to-cyan-500
                text-white shadow-lg shadow-blue-500/30
                flex items-center justify-center
                transition-all duration-500 transform
                hover:scale-110 hover:shadow-blue-500/50
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
            `}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} strokeWidth={3} />
        </button>
    );
};

export default ScrollToTop;