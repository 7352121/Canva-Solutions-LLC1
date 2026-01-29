import React from 'react';
import { 
    Users, 
    Award, 
    Zap, 
    Heart, 
    CheckCircle2, 
    Linkedin,
    Twitter,
    Calendar,
    Search
} from 'lucide-react';

// Import Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FinalCTA from '../components/home/FinalCTA';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/common/ScrollToTop';
import MetaData from '../components/common/MetaData';
// ✅ IMPORT TEAM DATA & IMAGES
import { teamMembers } from '../data/teamData';
import hamzaImage from '../assets/images/Hamza.jpg'; 
import aboutHero from '../assets/images/about.jpg'; // ✅ Added About Hero Image

const About = () => {
    
    // Duplicate list for infinite loop effect
    const sliderTeam = [...teamMembers, ...teamMembers];

    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30">
            
            {/* ✅ OPTIMIZED SEO METADATA */}
            <MetaData 
                title="About Us | Canva Solutions " 
                description="Meet the expert team behind Canva Solutions. We are a premier web & app development agency dedicated to transforming businesses with innovative digital strategies and custom software."
                keywords="about canva solutions, web development team, software agency mission, meet the team, digital agency Pakistan USA, custom software developers, tech innovators"
            />

            {/* 1. NAVBAR */}
            <div className="pt-6 px-4 lg:px-16 max-w-[1600px] mx-auto relative z-50">
                <Navbar />
            </div>

            {/* 2. HERO SECTION */}
            <section className="relative pt-20 pb-32 px-6 lg:px-16 overflow-hidden text-center">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1000px] relative z-10">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-blue-400 mb-8 bg-white/5 backdrop-blur-sm">
                        About Canva Solutions
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-8 leading-[1.1] text-white">
                        Innovating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Digital Future.</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        We are a collective of dreamers, builders, and strategists. We don't just build software; we build the engines that power the next generation of businesses.
                    </p>
                </div>
            </section>

            {/* 3. IMAGE & STATS GRID */}
            <section className="px-6 lg:px-16 pb-24 pt-6 lg:pt-10">
                <div className="container mx-auto max-w-[1400px]">
                    
                    {/* ✅ UPDATED HERO IMAGE */}
                    <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-[21/9] mb-16 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img 
                            src={aboutHero} 
                            alt="Canva Solutions Team Collaboration" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { num: "5+", label: "Years Experience", icon: <Calendar size={24} /> },
                            { num: "150+", label: "Projects Shipped", icon: <CheckCircle2 size={24} /> },
                            { num: "40+", label: "Team Members", icon: <Users size={24} /> },
                            { num: "12", label: "Global Awards", icon: <Award size={24} /> },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.num}</div>
                                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OUR STORY & CO-FOUNDER */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Co-Founder</h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Meet the minds behind Canva Solutions — where creativity meets dedication. 💪
                                </p>
                                <p>
                                    From web development and SEO to Shopify and eCommerce growth, our team turns ideas into impact. We don’t just build projects — we build success stories together.
                                </p>
                            </div>
                            <div className="mt-8">
                                <p className="text-white font-bold text-xl mt-2 border-l-4 border-blue-500 pl-4">Hamza Hussain</p>
                            </div>
                        </div>
                        
                        {/* Co-Founder Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-[2rem] blur-2xl -z-10"></div>
                            <img 
                                src={hamzaImage} 
                                className="rounded-[2rem] w-full h-[500px] object-cover border border-white/10 shadow-2xl" 
                                alt="Hamza Hussain - Co-Founder" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CORE VALUES */}
            <section className="py-24 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                        <p className="text-gray-400">The principles that guide every line of code we write.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation First", desc: "We don't follow trends; we set them. We are constantly exploring new stacks and technologies.", icon: <Zap size={32} /> },
                            { title: "Radical Transparency", desc: "No hidden fees, no confusing jargon. We keep you in the loop at every stage of the project.", icon: <Search size={32} /> },
                            { title: "User Obsession", desc: "We build for the end-user. If it's not intuitive and enjoyable, it's not finished.", icon: <Heart size={32} /> }
                        ].map((val, idx) => (
                            <div key={idx} className="p-10 rounded-[2rem] bg-[#0f172a] border border-white/10 hover:border-blue-500/30 transition-all">
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. TEAM SLIDER (Right to Left) */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 mb-16 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Meet The Minds</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The talented developers, designers, and strategists behind your success.
                    </p>
                </div>

                {/* SLIDER CONTAINER */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>

                    {/* ANIMATED TRACK */}
                    <div className="flex animate-loop-scroll">
                        {sliderTeam.map((member, index) => (
                            <div key={index} className="w-[300px] shrink-0 mx-4 relative group">
                                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] border border-white/10 bg-white/5">
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 z-10"></div>
                                    
                                    {/* ✅ FIX: Removed 'grayscale' and 'group-hover:grayscale-0' */}
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
                                    />
                                    
                                    {/* Social Overlay */}
                                    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                                            <Twitter size={18} />
                                        </button>
                                    </div>

                                    {/* Name Card */}
                                    <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                        <p className="text-blue-400 text-xs font-bold uppercase tracking-wide">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <FinalCTA />

            {/* 8. FOOTER */}
            <Footer />

            {/* 9. FLOATING BUTTONS */}
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default About;