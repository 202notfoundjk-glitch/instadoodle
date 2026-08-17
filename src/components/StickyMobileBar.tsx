import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { HOPLINK } from '../constants';

export const StickyMobileBar: React.FC = () => {
  return (
    <div
      id="mobile-sticky-bottom-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t-2 border-[#333333] p-3 shadow-2xl safe-area-bottom"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-black text-sm tracking-tight">InstaDoodle</span>
            <span className="bg-[#FFD43B] text-[#1A1A1A] text-[10px] font-black px-1.5 py-0.2 rounded border border-[#1A1A1A]">
              $37
            </span>
          </div>
          <span className="text-[10px] text-[#A3A3A3] flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3 h-3 text-[#FFD43B]" /> 60-Day Guarantee
          </span>
        </div>

        <a
          id="mobile-sticky-cta-btn"
          href={HOPLINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFD43B] hover:bg-[#F3C72A] active:scale-95 text-[#1A1A1A] font-black text-xs px-4 py-2.5 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#FFFFFF] flex items-center gap-1.5 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
          <span>Claim $37 Deal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
