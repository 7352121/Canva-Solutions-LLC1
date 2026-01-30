import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton'; 
import heroVideo from '../../assets/video/Hero.mp4'; 

const Hero = () => {
    const clientImages = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100", 
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100", 
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"  
    ];

    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    return (
        <div className="relative min-h-screen w-full bg-[#020617] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
            
            {/* Background Gradient Layer for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-[#172554] z-0"></div>

            {/* MAIN CONTAINER: Uses min-h instead of fixed h to prevent content overflow */}
            <div className="relative z-10 w-full lg:w-[98%] min-h-[90vh] lg:min-h-[95vh] h-auto bg-black/20 rounded-[20px] sm:rounded-[30px] border border-white/10 shadow-2xl flex flex-col overflow-hidden">

                {/* Background Video: Forced absolute and top-0 to stay pinned */}
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    {/* Darker overlay for better text readability on live sites */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/60 to-transparent"></div>
                </div>

                {/* CONTENT WRAPPER */}
                <div className="relative z-10 w-full flex-grow flex flex-col px-4 sm:px-10 lg:px-16 py-6 lg:pt-4">

                    <Navbar />

                    <div className="flex-grow flex flex-col justify-center py-10 lg:py-0 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                            {/* Left Side (Text) */}
                            <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                                
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                                    <Sparkles size={14} className="text-blue-400 fill-blue-400" />
                                    <span className="text-[10px] sm:text-xs font-bold tracking-wide text-white uppercase bg-blue-600/30 px-1.5 py-0.5 rounded">NEXT-GEN</span>
                                    <span className="text-xs sm:text-sm text-gray-200 font-medium">IT SOLUTION COMPANY 2025</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-white drop-shadow-xl font-['Manrope']">
                                    Transforming Ideas <br className="hidden sm:block" /> into Online Success
                                </h1>

                                <p className="text-sm sm:text-lg text-gray-300 max-w-lg leading-relaxed px-2 sm:px-0">
                                    At Canva Solutions, our expert digital services are powered by cutting-edge tools and industry-leading resources—designed to drive strategic innovation.
                                </p>

                                {/* Responsive Button Container */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                                    <a 
                                        href={calendlyLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-full sm:w-auto"
                                    >
                                        <PrimaryButton className="w-full justify-center py-3 sm:py-4 px-8 text-lg">
                                            Get Started
                                        </PrimaryButton>
                                    </a>
                                    
                                    <Link to="/services" className="w-full sm:w-auto">
                                        <SecondaryButton className="justify-center w-full py-3 sm:py-4 px-8 text-lg">
                                            See Process
                                        </SecondaryButton>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side (Stats Card) */}
                            <div className="flex h-full items-center justify-center lg:items-end lg:justify-end lg:pb-12 mt-6 lg:mt-0">
                                <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 max-w-[340px] shadow-2xl backdrop-blur-xl transform hover:-translate-y-2 transition-transform duration-500">
                                    <p className="text-gray-200 text-xs sm:text-sm mb-6 leading-relaxed text-center lg:text-left">
                                        We’re Canva Solutions — the AI-fueled digital agency that blends creativity, code, and strategy to make brands impossible to ignore.
                                    </p>
                                    
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <div className="flex -space-x-3">
                                            {clientImages.map((imgSrc, index) => (
                                                <img key={index} src={imgSrc} alt="Client" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#020617] object-cover" />
                                            ))}
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300 font-medium">2000+ Happy Clients</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;