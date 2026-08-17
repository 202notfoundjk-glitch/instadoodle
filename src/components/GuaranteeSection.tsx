import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { HOPLINK } from '../constants';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1A1A1A] text-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#FFD43B] flex flex-col md:flex-row items-center gap-8">
          
          {/* Big Guarantee Seal */}
          <div className="shrink-0 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#FFD43B] p-1 shadow-md flex items-center justify-center border-2 border-[#1A1A1A]">
              <div className="w-full h-full rounded-full bg-[#1A1A1A] flex flex-col items-center justify-center p-2 text-center border-2 border-[#FFD43B]">
                <ShieldCheck className="w-7 h-7 text-[#FFD43B]" />
                <span className="text-[10px] font-black uppercase text-[#FFD43B] tracking-tighter leading-tight mt-0.5">
                  60 DAYS
                </span>
                <span className="text-[8px] font-black text-white uppercase">100% REFUND</span>
              </div>
            </div>
            <span className="text-[11px] font-black text-[#FFD43B] mt-2 flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#FFD43B]" /> ClickBank Verified
            </span>
          </div>

          {/* Guarantee Copy */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Our 60-Day "Try It, Make Real Videos" Ironclad Guarantee
            </h3>
            <p className="text-sm sm:text-base text-[#D4D4D4] font-medium leading-relaxed">
              Buy InstaDoodle today, log into the cloud dashboard, test the DoodleAI prompt generator, and export real 1080p videos for your business or YouTube channel.
            </p>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              If for any reason you aren't completely thrilled with the speed, visual quality, or retention results, simply request a refund directly through ClickBank within 60 days to receive 100% of your money back. <b className="text-white font-black">No questions asked.</b>
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span className="text-xs font-black text-[#FFD43B] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#FFD43B]" /> 100% Risk-Free Evaluation
              </span>
              <a
                href={HOPLINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-[#FFD43B] underline decoration-[#FFD43B] decoration-2 hover:text-white inline-flex items-center gap-1"
              >
                Claim Safe $37 License <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
