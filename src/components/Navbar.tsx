import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { HOPLINK } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Special Offer Announcement Bar */}
      <div id="top-announcement" className="bg-[#1A1A1A] text-[#FDFCF8] py-2.5 px-4 text-xs sm:text-sm font-medium border-b border-[#2E2E2E]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FFD43B] text-[#1A1A1A] px-3 py-0.5 rounded-full font-black text-[11px] sm:text-xs tracking-wider uppercase shadow-xs">
            <Clock className="w-3 h-3" /> Special $37 Deal Active
          </span>
          <span className="text-[#E0DDD5]">
            One-time lifetime access with <b>150 AI Starter Credits</b> & <b>4 Free Bonuses Included</b>
          </span>
          <a
            href={HOPLINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD43B] hover:text-[#FFE37A] underline decoration-[#FFD43B]/60 font-black inline-flex items-center gap-1 ml-1"
          >
            Claim $37 Access <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-md border-b-2 border-[#E6E1D3] py-3'
            : 'bg-[#FDFCF8] border-b-2 border-[#EDE8DB] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-lg rotate-12 flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_#1A1A1A] group-hover:rotate-0 transition-transform">
              i
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter text-[#1A1A1A] flex items-center gap-1.5 leading-none">
                InstaDoodle <span className="text-[10px] bg-[#1A1A1A] text-[#FFD43B] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Lifetime Deal</span>
              </span>
              <span className="text-[10px] text-[#737373] font-bold tracking-wide uppercase mt-0.5">AI Whiteboard Video Creator</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-wider text-[#525252]">
            <a href="#demo" className="hover:text-[#1A1A1A] transition-colors">AI Demo</a>
            <a href="#features" className="hover:text-[#1A1A1A] transition-colors">Features</a>
            <a href="#templates" className="hover:text-[#1A1A1A] transition-colors">Templates</a>
            <a href="#hands" className="hover:text-[#1A1A1A] transition-colors">Hand Styles</a>
            <a href="#comparison" className="hover:text-[#1A1A1A] transition-colors">ROI Math</a>
            <a href="#bonuses" className="hover:text-[#1A1A1A] transition-colors">4 Bonuses ($180)</a>
            <a href="#faq" className="hover:text-[#1A1A1A] transition-colors">FAQ</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#1A1A1A] font-black bg-[#FFD43B]/30 border-2 border-[#FFD43B] px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1A1A1A]" /> 60-Day Guarantee
            </div>
            <a
              id="navbar-cta-btn"
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-2xl border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#FFD43B] hover:shadow-[4px_4px_0px_#FFD43B] hover:scale-[1.02] transition-all flex items-center gap-1.5 active:translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFD43B]" />
              <span>Get Access $37</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFD43B]" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
