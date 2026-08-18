import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HOPLINK } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-md border-b-2 border-[#1A1A1A] py-2.5 sm:py-3'
          : 'bg-[#FDFCF8] border-b-2 border-[#1A1A1A] py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Clean Logo */}
        <a href="#top" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-xl flex items-center justify-center font-black text-lg sm:text-xl shadow-[2px_2px_0px_#1A1A1A] group-hover:rotate-6 transition-transform">
            i
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-[#1A1A1A]">
              InstaDoodle
            </span>
            <span className="hidden sm:inline-block text-[10px] bg-[#FFD43B] text-[#1A1A1A] font-black px-2 py-0.5 rounded-md border border-[#1A1A1A] uppercase tracking-wider">
              $37 Special
            </span>
          </div>
        </a>

        {/* Clean Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-black uppercase tracking-wider text-[#525252]">
          <a href="#demo" className="hover:text-[#1A1A1A] transition-colors">Video Demo</a>
          <a href="#features" className="hover:text-[#1A1A1A] transition-colors">Features</a>
          <a href="#templates" className="hover:text-[#1A1A1A] transition-colors">Templates</a>
          <a href="#comparison" className="hover:text-[#1A1A1A] transition-colors">ROI Calculator</a>
          <a href="#bonuses" className="hover:text-[#1A1A1A] transition-colors">Bonuses</a>
        </nav>

        {/* Primary CTA Button */}
        <div className="flex items-center">
          <a
            id="navbar-cta-btn"
            href={HOPLINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#FFD43B] hover:shadow-[4px_4px_0px_#FFD43B] hover:scale-[1.02] transition-all flex items-center gap-1.5 active:translate-y-0.5 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD43B]" />
            <span>Get Access $37</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFD43B] hidden xs:inline" />
          </a>
        </div>

      </div>
    </header>
  );
};

