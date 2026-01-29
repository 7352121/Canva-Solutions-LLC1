import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

// Import Components
import PrimaryButton from '../common/PrimaryButton';
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    return (
        <nav className="relative z-50 mb-8 lg:mb-16 w-full">
            
            <div className="flex items-center justify-between w-auto -mx-4 lg:-mx-10 px-8 lg:px-3 py-4 border border-white/10 rounded-2xl bg-black/20 backdrop-blur-md shadow-lg">

                {/* Logo Image */}
                <Link to="/" className="cursor-pointer">
                    <img
                        src={logo}
                        alt="Canva Solutions"
                        className="h-8 lg:h-18 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-12 text-[16px] font-medium text-gray-200">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    
                    {/* --- SERVICES DROPDOWN GROUP --- */}
                    <div className="relative group">
                        <Link 
                            to="/Services" 
                            className="flex items-center gap-1 hover:text-white transition-colors py-4"
                        >
                            Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                        </Link>
                        
                        <ServicesDropdown />
                    </div>
                    {/* ------------------------------- */}

                    <Link to="/Portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link to="/Blog" className="flex items-center gap-1 hover:text-white transition-colors">BLogs</Link>
                    <Link to="/About" className="hover:text-white transition-colors">About</Link>
                    <Link to="/Contact" className="hover:text-white transition-colors">Contacts</Link>
                </div>

                {/* Desktop Button (Updated with Link) */}
                <div className="hidden lg:block">
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                        <PrimaryButton className="!px-8 !py-3">
                            Get Started
                        </PrimaryButton>
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 mx-0 p-6 border border-white/10 rounded-2xl bg-[#0f172a]/95 backdrop-blur-xl lg:hidden flex flex-col gap-6 animate-fadeIn z-50 shadow-2xl">
                    <Link to="/" className="text-gray-200 hover:text-white text-lg font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
                    
                    <Link to="/Services" className="text-gray-200 hover:text-white text-lg font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
                    
                    <Link to="/Portfolio" className="text-gray-200 hover:text-white text-lg font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link to="/Blog" className="text-gray-200 hover:text-white text-lg font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Blogs</Link>
                    <Link to="/About" className="text-gray-200 hover:text-white text-lg font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
                    
                    <Link to="/Contact" className="text-gray-200 hover:text-white text-lg font-medium py-2 mb-2" onClick={() => setIsOpen(false)}>Contacts</Link>
                    
                    {/* Mobile Button (Updated with Link) */}
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => setIsOpen(false)}>
                        <PrimaryButton className="w-full justify-center py-4 text-lg">
                            Get Started
                        </PrimaryButton>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;