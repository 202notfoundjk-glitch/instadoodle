import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Lock, Clock } from 'lucide-react';
import { HOPLINK } from '../constants';

export const FinalCtaSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-[#FDFCF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-12 shadow-[8px_8px_0px_#1A1A1A] text-center relative overflow-hidden">
          
          {/* Top Urgency Header */}
          <div className="inline-flex items-center gap-2 bg-[#FFD43B] border-2 border-[#1A1A1A] text-[#1A1A1A] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-[2px_2px_0px_#1A1A1A]">
            <Clock className="w-4 h-4 text-[#1A1A1A]" />
            <span>Special Deal Active · Price Reserved For: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight">
            Stop Fighting For Attention With Outdated Slide Decks.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#525252] max-w-2xl mx-auto leading-relaxed font-medium">
            Get InstaDoodle today for a <b className="text-[#1A1A1A]">single one-time payment of $37</b>, unlock 150 AI credits that never expire, and get all 4 exclusive creator bonuses sent to your inbox.
          </p>

          {/* Pricing Stack Summary Box */}
          <div className="my-8 max-w-lg mx-auto bg-[#FAF9F5] border-2 border-[#1A1A1A] rounded-2xl p-5 text-left text-sm space-y-2 shadow-[3px_3px_0px_#1A1A1A]">
            <div className="flex justify-between font-black text-[#1A1A1A]">
              <span>InstaDoodle Lifetime Cloud App</span>
              <span className="text-[#16a34a] font-mono">$37.00</span>
            </div>
            <div className="flex justify-between text-xs text-[#737373] font-semibold">
              <span>Bonus #1: 20 DoodleAI Prompt Vault</span>
              <span className="font-black text-[#16a34a]">FREE ($47 Val)</span>
            </div>
            <div className="flex justify-between text-xs text-[#737373] font-semibold">
              <span>Bonus #2: 10-Minute Video Quickstart</span>
              <span className="font-black text-[#16a34a]">FREE ($37 Val)</span>
            </div>
            <div className="flex justify-between text-xs text-[#737373] font-semibold">
              <span>Bonus #3: 3-Second Scroll-Stopper Hooks</span>
              <span className="font-black text-[#16a34a]">FREE ($29 Val)</span>
            </div>
            <div className="flex justify-between text-xs text-[#737373] font-semibold">
              <span>Bonus #4: Faceless Monetization Masterclass</span>
              <span className="font-black text-[#16a34a]">FREE ($67 Val)</span>
            </div>
            <div className="border-t-2 border-[#1A1A1A] pt-2 flex justify-between font-black text-base text-[#1A1A1A]">
              <span>Total Price Today:</span>
              <span className="text-xl text-[#1A1A1A] bg-[#FFD43B] px-2 py-0.5 rounded border border-[#1A1A1A]">$37 (One-Time)</span>
            </div>
          </div>

          {/* Mega CTA Button */}
          <div className="space-y-4">
            <a
              id="final-mega-cta"
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#FFD43B] hover:bg-[#F3C72A] text-[#1A1A1A] text-lg sm:text-xl font-black px-10 py-5 rounded-2xl border-3 border-[#1A1A1A] shadow-[5px_5px_0px_#1A1A1A] hover:shadow-[7px_7px_0px_#1A1A1A] transition-all group active:translate-y-0.5"
            >
              <Sparkles className="w-6 h-6 text-[#1A1A1A] group-hover:rotate-12 transition-transform" />
              <span>Get Instant Access to InstaDoodle ($37)</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-black text-[#525252]">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#16a34a]" /> 256-Bit SSL Secure Checkout
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" /> 60-Day ClickBank Guarantee
              </span>
              <span>•</span>
              <span>Instant Digital Delivery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
