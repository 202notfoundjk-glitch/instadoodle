import React from 'react';
import { CheckCircle2, XCircle, Info, BatteryCharging, Clock, ShoppingCart, Globe2 } from 'lucide-react';

export const FinePrintSection: React.FC = () => {
  return (
    <section id="fineprint" className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B]/20 text-[#1A1A1A] border-2 border-[#FFD43B] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Info className="w-3.5 h-3.5 text-[#1A1A1A]" /> 100% Radical Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            The Fine Print Most Affiliates Hide From You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            We would rather lose a quick commission than have you feel misled. Here is the complete honest truth about InstaDoodle before you buy.
          </p>
        </div>

        {/* 4 Fine Print Fact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Fact 1: AI Credits */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-7 shadow-[5px_5px_0px_#1A1A1A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] flex items-center justify-center font-black shadow-[1px_1px_0px_#1A1A1A]">
                <BatteryCharging className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-[#1A1A1A] bg-[#FFD43B]/30 px-2 py-0.5 rounded border border-[#FFD43B] tracking-wider inline-block">Credit Transparency</span>
                <h3 className="text-lg font-black text-[#1A1A1A] mt-0.5">150 AI Credits Included (Never Expire)</h3>
              </div>
            </div>
            <p className="text-sm text-[#525252] leading-relaxed">
              The core software and timeline video editor are <b className="text-[#1A1A1A]">100% lifetime</b>. Your $37 purchase comes loaded with 150 AI creation credits. For most standard creators making 2 to 6 videos a month, this is plenty. Heavy power-users creating 50+ videos weekly can optionally buy credit recharge packs, but casual users will never need to spend another dollar.
            </p>
          </div>

          {/* Fact 2: Segment Length */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-7 shadow-[5px_5px_0px_#1A1A1A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] text-[#4338CA] border-2 border-[#1A1A1A] flex items-center justify-center font-black shadow-[1px_1px_0px_#1A1A1A]">
                <Clock className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-[#4338CA] bg-[#E0E7FF] px-2 py-0.5 rounded border border-[#4338CA] tracking-wider inline-block">Optimal Video Length</span>
                <h3 className="text-lg font-black text-[#1A1A1A] mt-0.5">~3-Minute Sweet Spot Per Scene Segment</h3>
              </div>
            </div>
            <p className="text-sm text-[#525252] leading-relaxed">
              Whiteboard videos perform best between 60 seconds and 3 minutes (the ideal length for YouTube Shorts, Reels, TikTok, and sales hooks). While you can easily stitch multiple exported clips together for 20-minute masterclasses, the in-browser timeline is optimized for fast, snappy explainer segments.
            </p>
          </div>

          {/* Fact 3: Checkout Upsells */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-7 shadow-[5px_5px_0px_#1A1A1A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] border-2 border-[#1A1A1A] flex items-center justify-center font-black shadow-[1px_1px_0px_#1A1A1A]">
                <ShoppingCart className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded border border-[#B45309] tracking-wider inline-block">Checkout Process</span>
                <h3 className="text-lg font-black text-[#1A1A1A] mt-0.5">Optional Upsells Exist (All 100% Skippable)</h3>
              </div>
            </div>
            <p className="text-sm text-[#525252] leading-relaxed">
              During checkout, you will see optional order bumps (such as Color Doodles expansion and AI Voice packs) and post-purchase Pro upgrades. <b className="text-[#1A1A1A]">You do NOT need them</b> to use InstaDoodle. You can comfortably decline every single upsell and still receive the full $37 core software and all 4 bonuses.
            </p>
          </div>

          {/* Fact 4: Purchasing Parity & Guarantee */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-7 shadow-[5px_5px_0px_#1A1A1A]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16a34a] border-2 border-[#1A1A1A] flex items-center justify-center font-black shadow-[1px_1px_0px_#1A1A1A]">
                <Globe2 className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded border border-[#16a34a] tracking-wider inline-block">Risk Protection</span>
                <h3 className="text-lg font-black text-[#1A1A1A] mt-0.5">No Free Trial, But Full 60-Day Guarantee</h3>
              </div>
            </div>
            <p className="text-sm text-[#525252] leading-relaxed">
              Because cloud GPU processing costs real money, there is no free trial. However, your purchase is backed by an official ClickBank 60-day money-back guarantee. If InstaDoodle doesn't create videos you love, you get a 100% refund.
            </p>
          </div>

        </div>

        {/* Who This Is For vs Who Should Skip It */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Who It's For */}
          <div className="bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#1A1A1A]">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#16a34a]" />
              <h3 className="text-xl font-black text-[#1A1A1A]">InstaDoodle is a Perfect Fit If You Are:</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#525252]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#FFD43B] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✓</span>
                <span><b className="text-[#1A1A1A]">Course Creators &amp; Teachers</b> who want students to actually retain lessons instead of fast-forwarding bullet points.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#FFD43B] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✓</span>
                <span><b className="text-[#1A1A1A]">Affiliate Marketers &amp; Reviewers</b> wanting high-converting review videos with 0 on-camera presence.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#FFD43B] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✓</span>
                <span><b className="text-[#1A1A1A]">YouTubers &amp; TikTokers</b> looking to build profitable faceless channels with high average watch duration.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#FFD43B] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✓</span>
                <span><b className="text-[#1A1A1A]">Freelancers &amp; Local Marketers</b> looking to charge local businesses $250+ per video.</span>
              </li>
            </ul>
          </div>

          {/* Who Should Skip It */}
          <div className="bg-[#FFF5F5] border-3 border-[#FF4D4D] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#FF4D4D]">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-[#FF4D4D]" />
              <h3 className="text-xl font-black text-[#1A1A1A]">You Should Skip InstaDoodle If You:</h3>
            </div>
            <ul className="space-y-3 text-sm text-[#525252]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✕</span>
                <span>Need complex 3D character rigging and keyframe physics (use Cinema 4D or Maya instead).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✕</span>
                <span>Produce mass automated bot spam (100+ videos every single hour).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">✕</span>
                <span>Expect infinite AI generation forever on 1,000 servers without credit awareness.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
