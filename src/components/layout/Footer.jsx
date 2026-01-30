import React from 'react';
import { 
    Facebook, 
    Instagram, 
    Linkedin, 
    Phone, 
    Mail, 
    MapPin 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

const UpworkIcon = ({ size, className }) => (
  <img 
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/upwork.svg" 
    alt="Upwork"
    width={size} 
    height={size}
    className={className}
    style={{ 
      filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" 
    }}
  />
);

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-white py-16 lg:py-20 overflow-hidden font-['Manrope'] border-t border-white/5">
            
            <div className="absolute bottom-0 right-0 w-[80%] lg:w-[40%] h-[150%] bg-gradient-to-l from-blue-900/30 via-cyan-900/20 to-transparent blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">
                
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8 text-center lg:text-left">
                    
                    {/* 1. LOGO SECTION */}
                    <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                        <img src={logo} alt="Canva Solutions" className="h-14 lg:h-16 w-auto object-contain mb-4" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                            Canva Solutions stand as your Primer partner offering IT & Network, Accounting & Digital services
                        </p>
                    </div>

                    {/* 2. NAVIGATION LINKS - 2 cols on mobile, flex on laptop */}
                    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-20 lg:w-2/5 w-full">
                        <div className="flex flex-col gap-4 text-left">
                            <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Home</Link>
                            <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Services</Link>
                            <Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Portfolio</Link>
                        </div>

                        <div className="flex flex-col gap-4 text-left">
                            <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">About Us</Link>
                            <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Blog</Link>
                            <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Contacts</Link>
                        </div>
                    </div>

                    {/* 3. CONTACT & SOCIALS */}
                    <div className="flex flex-col gap-6 lg:gap-6 lg:w-1/4 items-center lg:items-start w-full">
                        
                        {/* Mobile: 2 cols | Laptop: block/flex-column */}
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full text-left">
                            
                            {/* Left Column (Mobile) / Top (Laptop) */}
                            <div className="flex flex-col gap-3">
                                <a href="tel:+17374436352" className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors text-[11px] sm:text-sm">
                                    <Phone size={14} className="text-blue-400 shrink-0" /> +1 737 443 6352
                                </a>
                                <a href="tel:+923130901786" className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors text-[11px] sm:text-sm">
                                    <Phone size={14} className="text-blue-400 shrink-0" /> +92 313 0901786
                                </a>
                                <a href="mailto:info@canvasolutions.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] sm:text-[13px] break-all">
                                    <Mail size={14} className="text-blue-400 shrink-0" /> info@canvasolutions.co.uk
                                </a>
                            </div>

                            {/* Right Column (Mobile) / Bottom (Laptop) */}
                            <div className="flex items-start gap-2 text-gray-400 text-[11px] sm:text-sm lg:border-none border-l border-white/10 pl-2 lg:pl-0">
                                <MapPin size={14} className="text-blue-400 mt-1 shrink-0" />
                                <span className="leading-relaxed">
                                    920 South West Pkwy E College <br /> Station TX 77840 USA
                                </span>
                            </div>

                        </div>
                        
                        {/* Social Icons */}
                        <div className="flex items-center justify-start gap-6 mt-2 w-full">
                            <a href="https://www.facebook.com/canvasolutionsofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/canva_solutions_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://upwork.com/freelancers/canvasolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                <UpworkIcon size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/canva-solutions/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 4. COPYRIGHT */}
                    <div className="lg:w-1/6 text-sm text-gray-500 leading-relaxed flex flex-col items-center lg:items-end mt-4 lg:mt-0 w-full lg:text-right">
                        <p>Canva Solutions © 2025.</p>
                        <p>All Rights Reserved.</p>
                        <p className="opacity-50 mt-1 text-xs">Designed by Canva Solutions.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;