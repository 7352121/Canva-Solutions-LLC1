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

// ✅ Custom Upwork Icon (From Sidebar)
const UpworkIcon = ({ size, className }) => (
  <img 
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/upwork.svg" 
    alt="Upwork"
    width={size} 
    height={size}
    className={className}
    style={{ 
      // Forces the icon to be white to match the theme
      filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" 
    }}
  />
);

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-white py-16 lg:py-20 overflow-hidden font-['Manrope'] border-t border-white/5">
            
            {/* Background Gradient */}
            <div className="absolute bottom-0 right-0 w-[80%] lg:w-[40%] h-[150%] bg-gradient-to-l from-blue-900/30 via-cyan-900/20 to-transparent blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">
                
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8 text-center lg:text-left">
                    
                    {/* 1. LOGO SECTION */}
                    <div className="lg:w-1/5 flex flex-col items-center lg:items-start">
                        <img src={logo} alt="Canva Solutions" className="h-10 lg:h-12 w-auto object-contain mb-6 lg:mb-0" />
                    </div>

                    {/* 2. NAVIGATION LINKS */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 lg:w-2/5 justify-center lg:justify-start w-full">
                        
                        {/* Group 1 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/" className="text-lg font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-center lg:justify-start gap-2">
                                Home 
                            </Link>
                            <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Services</Link>
                            <Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Portfolio</Link>
                        </div>

                        {/* Group 2 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">About Us</Link>
                            <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Blog</Link>
                            <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Contacts</Link>
                        </div>
                    </div>

                    {/* 3. CONTACT & SOCIALS */}
                    <div className="flex flex-col gap-6 lg:gap-4 lg:w-1/4 items-center lg:items-start w-full">
                        
                        {/* Contact Details with Icons */}
                        <div className="flex flex-col gap-3 items-center lg:items-start text-sm">
                            
                            {/* Phone Numbers */}
                            <div className="flex flex-col items-center lg:items-start gap-1">
                                <a href="tel:+17374436352" className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                                    <Phone size={16} className="text-blue-400" /> +1 737 443 6352
                                </a>
                                <a href="tel:+923130901786" className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                                    <Phone size={16} className="text-blue-400" /> +92 313 090 1786
                                </a>
                            </div>

                            {/* Email */}
                            <a href="mailto:info@canvasolutions.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail size={16} className="text-blue-400" /> info@canvasolutions.co.uk
                            </a>

                            {/* Address */}
                            <div className="flex items-start gap-2 text-gray-400 text-center lg:text-left mt-1">
                                <MapPin size={16} className="text-blue-400 mt-1 shrink-0" />
                                <span>
                                    920 South West Pkwy E College <br /> Station TX 77840 USA
                                </span>
                            </div>

                        </div>
                        
                        {/* Social Icons */}
                        <div className="flex items-center gap-6 mt-4">
                            <a href="https://www.facebook.com/canvasolutionsofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/canva_solutions_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            {/* ✅ Replaced Twitter with Upwork */}
                            <a href="https://upwork.com/freelancers/canvasolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                <UpworkIcon size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/canva-solutions/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 4. COPYRIGHT */}
                    <div className="lg:w-1/6 text-sm text-gray-500 leading-relaxed flex flex-col items-center lg:items-end mt-4 lg:mt-0">
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