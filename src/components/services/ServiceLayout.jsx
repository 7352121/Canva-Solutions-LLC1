import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import FinalCTA from '../home/FinalCTA'; 
import WhatsAppButton from '../common/WhatsAppButton';
import ScrollToTop from '../common/ScrollToTop';

const ServiceLayout = ({ children, title, subtitle }) => {
    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30">
            
            {/* 1. Navbar */}
            <div className="pt-6 px-6 lg:px-16 max-w-[1600px] mx-auto relative z-50">
                <Navbar />
            </div>

            {/* 2. Reusable Service Hero (CONDITIONAL) */}
            {/* Only render this section if a 'title' is provided. 
                This allows pages like 'Services.jsx' to build their own custom Hero 
                without having two Hero sections stacked.
            */}
            {title && (
                <section className="relative pt-20 pb-32 px-6 lg:px-16 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
                    
                    <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-8 leading-tight">
                            {title}
                        </h1>
                        
                        {subtitle && (
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {/* 3. The Page Specific Content */}
            <main className="relative z-10">
                {children}
            </main>

            {/* 4. Common Bottom Sections */}
            <FinalCTA />
            <Footer />

            {/* 5. Floating Buttons */}
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default ServiceLayout;