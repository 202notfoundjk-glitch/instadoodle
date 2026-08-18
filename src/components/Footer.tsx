import React from 'react';
import { Info } from 'lucide-react';
import { HOPLINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-[#A3A3A3] py-12 pb-24 md:pb-12 text-xs border-t-2 border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Compliance & Consumer Transparency Notice */}
        <div className="bg-[#242424] border-2 border-[#3A3A3A] rounded-2xl p-5 sm:p-6 space-y-3 shadow-[4px_4px_0px_#0A0A0A]">
          <div className="flex items-center gap-2 text-white font-black text-sm">
            <Info className="w-4 h-4 text-[#FFD43B]" />
            <span>ClickBank Consumer Transparency Notice</span>
          </div>
          <p className="leading-relaxed text-[#D4D4D4]">
            <b className="text-white">Offer Notice:</b> Purchasing through the links on this page activates the special $37 one-time lifetime license, including 150 AI Starter Credits, full commercial license, 1080p rendering, and all 4 exclusive bonus guides at no additional cost.
          </p>
          <p className="leading-relaxed text-[#8E8E8E]">
            <b className="text-[#D4D4D4]">ClickBank Disclaimer:</b> ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
          </p>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-[#333333] text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] flex items-center justify-center font-black text-xs -rotate-3 shadow-[1px_1px_0px_#FFFFFF]">
              i
            </div>
            <span className="font-black text-white">InstaDoodle Special Edition</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#D4D4D4]">
            <a href="#top" className="hover:text-[#FFD43B] transition-colors">Back to Top</a>
            <span>•</span>
            <a href="#demo" className="hover:text-[#FFD43B] transition-colors">Video Demo</a>
            <span>•</span>
            <a href="#features" className="hover:text-[#FFD43B] transition-colors">Features</a>
            <span>•</span>
            <a href="#templates" className="hover:text-[#FFD43B] transition-colors">Templates</a>
            <span>•</span>
            <a href="#comparison" className="hover:text-[#FFD43B] transition-colors">ROI Calculator</a>
            <span>•</span>
            <a href="#bonuses" className="hover:text-[#FFD43B] transition-colors">Bonuses</a>
            <span>•</span>
            <a href={HOPLINK} target="_blank" rel="noopener noreferrer" className="text-[#FFD43B] hover:underline font-black">
              Get InstaDoodle ($37) &rarr;
            </a>
          </div>
        </div>

        <div className="text-center text-[11px] text-[#737373] font-medium">
          © {new Date().getFullYear()} InstaDoodle. All rights reserved. 60-Day Money-Back Guarantee included on all orders.
        </div>

      </div>
    </footer>
  );
};

