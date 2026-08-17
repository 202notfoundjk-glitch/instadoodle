import React from 'react';
import { Gift, Sparkles, Check, ArrowRight, Mail } from 'lucide-react';
import { BONUSES, HOPLINK } from '../constants';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonuses" className="py-16 lg:py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#FFFFFF]">
            <Gift className="w-3.5 h-3.5" /> Exclusive Partner Bonus Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Order InstaDoodle Today &amp; Get These 4 High-Value Bonuses <span className="text-[#FFD43B] bg-[#1A1A1A] px-2 py-0.5 rounded border-2 border-[#FFD43B]">100% Free ($180 Value)</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D4D4D4] font-medium">
            These bonuses were created specifically to help you start exporting profitable, high-retention whiteboard videos on Day 1.
          </p>
        </div>

        {/* Bonus Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-5xl mx-auto">
          {BONUSES.map((bonus) => {
            return (
              <div
                key={bonus.id}
                className="bg-[#242424] border-3 border-[#3A3A3A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FFD43B] transition-all shadow-[6px_6px_0px_#0A0A0A]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-black uppercase text-[#1A1A1A] bg-[#FFD43B] px-3 py-1 rounded-full border border-[#1A1A1A]">
                      Bonus #{bonus.id} · {bonus.badge}
                    </span>
                    <span className="text-xs font-black text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#166534]">
                      {bonus.value} (FREE)
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-3">
                    {bonus.title}
                  </h3>

                  <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    {bonus.description}
                  </p>

                  <div className="space-y-2.5 border-t-2 border-[#333333] pt-4 mb-6">
                    {bonus.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#E5E5E5] font-medium">
                        <Check className="w-4 h-4 text-[#FFD43B] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-black text-[#FFD43B] flex items-center gap-1.5 pt-3 border-t-2 border-[#333333]">
                  <Sparkles className="w-3.5 h-3.5" /> Automatically unlocked when you order via this page
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Value Box & Claim Instructions */}
        <div className="bg-[#242424] border-3 border-[#FFD43B] rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-[10px_10px_0px_#0A0A0A]">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-[#333333]">
            <div>
              <span className="text-xs font-black text-[#FFD43B] uppercase tracking-wider block mb-1">
                Complete Bundle Summary:
              </span>
              <h3 className="text-2xl font-black text-white">
                InstaDoodle Lifetime License + All 4 Bonuses
              </h3>
              <p className="text-sm text-[#A3A3A3] mt-1">
                Total Combined Value: <span className="line-through text-[#737373] font-bold">$217</span> &rarr; <span className="text-[#FFD43B] font-black text-base">Only $37 Today</span>
              </p>
            </div>

            <div className="text-center md:text-right shrink-0">
              <span className="text-xs text-[#A3A3A3] font-bold block">One-Time Total</span>
              <span className="text-4xl font-black text-[#FFD43B]">$37</span>
              <span className="text-xs text-[#A3A3A3] block">No monthly fees</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <div className="mt-8 text-center">
            <a
              id="bonus-stack-cta"
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#FFD43B] hover:bg-[#F3C72A] text-[#1A1A1A] text-base sm:text-xl font-black px-10 py-5 rounded-2xl border-3 border-[#1A1A1A] shadow-[5px_5px_0px_#FFFFFF] hover:shadow-[7px_7px_0px_#FFFFFF] transition-all group active:translate-y-0.5"
            >
              <Sparkles className="w-6 h-6 text-[#1A1A1A] group-hover:rotate-12 transition-transform" />
              <span>Claim InstaDoodle + All 4 Free Bonuses ($37)</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Simple 2-Step Bonus Claim Instructions */}
          <div className="mt-8 bg-[#1A1A1A] p-5 rounded-2xl border-2 border-[#3A3A3A] flex items-start gap-4 shadow-sm">
            <Mail className="w-5 h-5 text-[#FFD43B] shrink-0 mt-1" />
            <div className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
              <b className="text-white">How to claim your bonuses:</b> Complete your purchase through any button on this page. Afterward, simply email your ClickBank digital receipt to <span className="text-[#FFD43B] font-mono font-bold bg-[#2A2A2A] px-1.5 py-0.5 rounded border border-[#FFD43B]">bonuses@instadoodlereview.com</span> (or reply directly to your order email), and our system will send instant download access within 24 hours.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
