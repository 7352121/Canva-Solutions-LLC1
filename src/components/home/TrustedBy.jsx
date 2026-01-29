import React from 'react';
import { Hexagon, Triangle, Circle, Box, Layers, Droplet, Activity, Command } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollRotate from '../common/ScrollRotate';
import PrimaryButton from '../common/PrimaryButton';

import loopBackground from '../../assets/images/loop-background.png';
import loopImage from '../../assets/images/loop.png';

const TrustedBy = () => {

    const companies = [
        { name: "Aura", icon: <Circle size={32} strokeWidth={2.5} /> },
        { name: "Pera", icon: <Triangle size={32} strokeWidth={2.5} className="rotate-180" /> },
        { name: "Unicoin", icon: <Hexagon size={32} strokeWidth={2.5} /> },
        { name: "Heline", icon: <Activity size={32} strokeWidth={2.5} /> },
        { name: "Tandem", icon: <Layers size={32} strokeWidth={2.5} /> },
        { name: "Mercury", icon: <Droplet size={32} strokeWidth={2.5} /> },
        { name: "Logic", icon: <Box size={32} strokeWidth={2.5} /> },
        { name: "Flikbox", icon: <Command size={32} strokeWidth={2.5} /> },
    ];

    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={loopBackground}
                    alt="Background texture"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1200px]">

                {/* Company Logos */}
                <div className="text-center mb-16 lg:mb-24">
                    <p className="text-gray-400 text-sm sm:text-base font-medium mb-8 lg:mb-12 tracking-wide uppercase">
                        More than 100+ companies trust us worldwide
                    </p>

                    {/* ✅ Responsive Grid: 2 cols on mobile, 4 on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 lg:gap-x-16 justify-items-center items-center">
                        {companies.map((company, index) => (
                            <div key={index} className="flex items-center gap-3 lg:gap-4 text-gray-400 font-bold text-xl lg:text-2xl opacity-80 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default group">
                                <span className="group-hover:text-blue-400 transition-colors scale-90 lg:scale-100">{company.icon}</span>
                                <span>{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: 3D Image (Order 2 on mobile, 1 on desktop) */}
                    <div className="relative flex justify-center lg:justify-start group order-2 lg:order-1">
                        <div className="relative z-10 w-3/4 sm:w-full max-w-[350px] lg:max-w-[450px]">
                            <ScrollRotate rotationSpeed={0.08} scaleSpeed={0.0002}>
                                <img
                                    src={loopImage}
                                    alt="Abstract 3D Loop"
                                    className="w-full h-auto object-contain drop-shadow-2xl opacity-90 brightness-110 contrast-125"
                                />
                            </ScrollRotate>
                        </div>
                    </div>

                    {/* Right Column: Content (Order 1 on mobile, 2 on desktop) */}
                    <div className="text-center lg:text-left pl-0 lg:pl-10 order-1 lg:order-2">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs font-medium text-gray-300 mb-6 lg:mb-8">
                            More About Our Company
                        </div>

                        {/* ✅ Responsive Text Sizes */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 font-['Manrope'] leading-[1.2] lg:leading-[1.15] tracking-tight">
                            All-in-One Service Provider <br className="hidden sm:block" />
                            Think It. Design It. Achieve It. <br className="hidden sm:block" />
                            From ideas to execution
                        </h2>

                        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
                            <Link to="/services">
                                <PrimaryButton className="w-full sm:w-auto justify-center px-8 py-3 text-lg">
                                    Find Out More
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedBy;