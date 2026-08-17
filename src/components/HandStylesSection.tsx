import React, { useState } from 'react';
import { PenTool, Check, Sparkles, ArrowRight, MousePointerClick, ShieldCheck } from 'lucide-react';
import { HAND_STYLES, HOPLINK } from '../constants';
import { HandStyle } from '../types';

export const HandStylesSection: React.FC = () => {
  const [selectedHand, setSelectedHand] = useState<HandStyle>(HAND_STYLES[0]);
  const [activeSpeed, setActiveSpeed] = useState<'1x' | '2x' | '5x'>('2x');

  return (
    <section id="hands" className="py-16 lg:py-24 bg-[#FAF9F5] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#1A1A1A]">
            <PenTool className="w-3.5 h-3.5" /> 1,000+ Human Hand &amp; Pen Combinations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Realistic Motion That Matches Your <span className="underline decoration-[#FFD43B] decoration-4">Brand Identity</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            Other tools only have 1 or 2 generic cartoon hands. InstaDoodle includes hundreds of ethnically diverse male and female hands, left and right-handed options, and specialized pens.
          </p>
        </div>

        {/* Hand Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {HAND_STYLES.map((hand) => {
            const isSelected = selectedHand.id === hand.id;
            return (
              <div
                key={hand.id}
                onClick={() => setSelectedHand(hand)}
                className={`cursor-pointer bg-white border-3 rounded-3xl p-6 transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#1A1A1A] shadow-[6px_6px_0px_#FFD43B] -translate-y-1'
                    : 'border-[#E6E1D3] hover:border-[#1A1A1A] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-black uppercase text-[#1A1A1A] bg-[#FAF9F5] px-3 py-1 rounded-full border border-[#1A1A1A]">
                      {hand.penType}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-black text-[#16a34a] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#16a34a] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Selected
                      </span>
                    )}
                  </div>

                  {/* Animated Hand Canvas Illustration Box */}
                  <div className="aspect-[16/9] bg-[#FAF9F5] rounded-2xl border-2 border-[#1A1A1A] flex items-center justify-center relative overflow-hidden mb-4 p-4">
                    <svg className="w-32 h-20" viewBox="0 0 100 60" fill="none">
                      <path
                        d="M 10 50 Q 50 10 90 40"
                        stroke="#1A1A1A"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="120"
                        className="animate-pulse"
                      />
                    </svg>

                    <div className="absolute bottom-2 right-4 bg-[#1A1A1A] text-white px-2.5 py-1 rounded-lg text-[10px] font-black border border-white shadow-md -rotate-12">
                      ✍️ {hand.name.split(' ')[0]}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#1A1A1A] mb-2">
                    {hand.name}
                  </h3>
                  <p className="text-xs text-[#525252] leading-relaxed font-medium">
                    {hand.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E6E1D3] flex items-center justify-between text-xs font-bold">
                  <span className="text-[#737373]">Full Speed Control</span>
                  <span className="text-[#1A1A1A] underline decoration-[#FFD43B] decoration-2">Test Motion &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Callout Box */}
        <div className="bg-[#1A1A1A] text-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#FFD43B] flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase text-[#FFD43B] tracking-wider block">
              100% Commercial Rights Included
            </span>
            <h3 className="text-2xl font-black text-white">
              Create Unlimited Whiteboard Videos for Clients
            </h3>
            <p className="text-xs sm:text-sm text-[#D4D4D4] font-medium max-w-xl">
              Charge local business owners and YouTube creators $200–$500 per video. You keep 100% of the freelance earnings with zero royalties owed.
            </p>
          </div>

          <a
            id="hands-section-cta"
            href={HOPLINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#FFD43B] hover:bg-[#F3C72A] text-[#1A1A1A] font-black text-sm px-8 py-4 rounded-2xl border-3 border-[#1A1A1A] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[6px_6px_0px_#FFFFFF] transition-all active:translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
            <span>Unlock All 1,000+ Hands ($37)</span>
            <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
