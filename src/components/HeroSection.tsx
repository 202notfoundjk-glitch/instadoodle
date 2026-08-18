import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Download, Wand2 } from 'lucide-react';
import { HOPLINK } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FFD43B]/20 border-2 border-[#FFD43B] text-[#1A1A1A] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
            <span>Updated August 2026 · Official ClickBank Special Deal</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tight leading-[1.12]">
            Make Videos That Look Like You{' '}
            <span className="bg-[#FFD43B] text-[#1A1A1A] px-3 py-1 rounded-xl border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#1A1A1A] inline-block -rotate-1">
              Hired a $2,000 Animator
            </span>{' '}
            In About 5 Minutes.
          </h1>
          
          <p className="mt-5 text-lg sm:text-xl text-[#525252] max-w-3xl mx-auto leading-relaxed font-medium">
            InstaDoodle turns <b className="text-[#1A1A1A] font-black">plain text into hand-drawn whiteboard videos</b> that halt the scroll and skyrocket watch time. No design skills. No monthly subscription. 
            Just a <span className="text-[#FF4D4D] font-black underline decoration-[#FF4D4D]/40 underline-offset-4">one-time $37</span> investment.
          </p>

          {/* Primary CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="hero-primary-cta"
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#333333] text-white text-base sm:text-lg font-black px-8 py-4 rounded-2xl shadow-[5px_5px_0px_#FFD43B] hover:shadow-[7px_7px_0px_#FFD43B] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group active:translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-[#FFD43B] group-hover:rotate-12 transition-transform" />
              <span>Claim InstaDoodle + 4 Bonuses ($37)</span>
              <ArrowRight className="w-5 h-5 text-[#FFD43B] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto bg-white hover:bg-[#FDFCF8] text-[#1A1A1A] border-2 border-[#1A1A1A] text-sm sm:text-base font-black px-6 py-4 rounded-2xl shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all flex items-center justify-center gap-2"
            >
              <span>Watch Video Demo</span>
              <span className="text-xs bg-[#FFD43B] text-[#1A1A1A] font-black px-2 py-0.5 rounded-md border border-[#1A1A1A]">PLAY</span>
            </a>
          </div>

          {/* Trust Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#1A1A1A]">
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> One-Time $37 (No Recurring Fees)
            </span>
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> 150 AI Starter Credits Included
            </span>
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> Commercial Agency License
            </span>
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> 100% Cloud-Based (Mac/PC/iPad)
            </span>
          </div>
        </div>

        {/* Interactive Whiteboard Canvas Demo / Showcase with Embedded Video */}
        <div id="demo" className="mt-10 max-w-5xl mx-auto scroll-mt-24">
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl shadow-[10px_10px_0px_#1A1A1A] overflow-hidden">
            
            {/* Whiteboard Header Toolbar */}
            <div className="bg-[#1A1A1A] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between flex-wrap gap-3 border-b-3 border-[#1A1A1A]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF4D4D] border border-black"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFD43B] border border-black"></span>
                <span className="w-3 h-3 rounded-full bg-[#40C057] border border-black"></span>
                <span className="text-xs sm:text-sm font-black text-white ml-2 flex items-center gap-1.5">
                  <Wand2 className="w-4 h-4 text-[#FFD43B]" /> InstaDoodle AI Engine — Interactive Whiteboard Simulator
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
                <div className="flex items-center gap-1.5 bg-[#2E2E2E] text-[#FFD43B] font-bold px-3 py-1.5 rounded-xl border border-[#404040]">
                  <span className="w-2 h-2 rounded-full bg-[#40C057] animate-pulse"></span>
                  <span>1080p HD Video</span>
                </div>
              </div>
            </div>

            {/* Embedded Vimeo Video Player Container */}
            <div className="bg-[#141414] p-3 sm:p-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-[900px] aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#2E2E2E] shadow-[5px_5px_0px_#0A0A0A] bg-black">
                <iframe
                  loading="lazy"
                  src="https://player.vimeo.com/video/949816024?autoplay=0&muted=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="InstaDoodle AI Engine Demo Video"
                ></iframe>
              </div>
            </div>

            {/* Bottom Callout & Direct Access */}
            <div className="bg-[#FAF9F5] border-t-3 border-[#1A1A1A] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] flex items-center justify-center font-black shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-[#1A1A1A]">
                    Watch how quickly you can turn plain scripts into 1080p whiteboard videos
                  </h4>
                  <p className="text-xs text-[#525252] font-semibold mt-0.5">
                    Includes 150 Starter AI Credits, Commercial License, &amp; 4 Free Creator Bonuses ($180 Value).
                  </p>
                </div>
              </div>

              <a
                href={HOPLINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs sm:text-sm font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[3px_3px_0px_#FFD43B] hover:shadow-[4px_4px_0px_#FFD43B] transition-all whitespace-nowrap active:translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#FFD43B]" />
                <span>Get InstaDoodle ($37)</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
