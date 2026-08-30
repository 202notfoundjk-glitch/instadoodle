import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { HOPLINK } from '../constants';

export const BridgePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] flex flex-col justify-between font-sans selection:bg-[#0026E6] selection:text-white">
      
      {/* Main Bridge Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 flex flex-col justify-center">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#111827] tracking-tight leading-[1.15]">
            Turn Any Idea Into a Studio Grade Doodle Video in{' '}
            <span className="text-[#0026E6]">
              Just 3 Clicks
            </span>
          </h1>

          {/* Subheadline with conversion rate and social platforms */}
          <p className="text-base sm:text-lg md:text-xl text-[#1F2937] font-bold mt-4 leading-snug">
            Create AI Explainer Videos to Increase Conversion Rates by Up to{' '}
            <span className="text-[#16A34A] font-black text-xl sm:text-2xl">80%</span> for{' '}
            <a
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0026E6] underline hover:text-[#001EB3] decoration-2 transition-colors"
            >
              YouTube, Instagram, Facebook &amp; TikTok.
            </a>
          </p>

          {/* Hook Callout Statement */}
          <p className="text-sm sm:text-base md:text-lg text-[#374151] font-semibold mt-4">
            If Your Video <span className="italic font-bold text-[#111827]">Presentations</span> Are Being Ignored, It's Not Your Idea — <span className="italic font-bold text-[#111827]">It's Your .</span>
          </p>
        </div>

        {/* Video & Bullet Points Side-by-Side Card */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Embedded Vimeo Video Player */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-sm">
                <iframe
                  loading="lazy"
                  src="https://player.vimeo.com/video/949816024?autoplay=0&muted=0"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="InstaDoodle Video Demo"
                ></iframe>
              </div>
            </div>

            {/* Right: Pain Points & Realities with Green Checkmarks */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#0026E6]">Explainer videos cost $1,189+</span>{' '}
                  <span className="text-[#374151] font-medium">when outsourced.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#0026E6]">Pro editing software is complex</span>{' '}
                  <span className="text-[#374151] font-medium">and expensive.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#0026E6]">Talking-head videos get skipped—</span>{' '}
                  <span className="text-[#374151] font-medium">camera shyness is real.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#0026E6]">Confused viewers don't buy—</span>{' '}
                  <span className="text-[#374151] font-medium">if they don't “get it” fast, they leave.</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Primary Call-to-Action Button */}
        <div className="mt-8 sm:mt-10 text-center max-w-2xl mx-auto w-full">
          <a
            id="bridge-primary-cta"
            href={HOPLINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full px-8 sm:px-12 py-4 sm:py-5 bg-[#0026E6] hover:bg-[#001EC2] text-white font-black text-lg sm:text-xl md:text-2xl rounded-full shadow-[0_8px_25px_rgba(0,38,230,0.35)] hover:shadow-[0_12px_32px_rgba(0,38,230,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
          >
            <span className="text-center">
              Watch How InstaDoodle Turns Ideas Into Videos
            </span>
          </a>
        </div>

      </main>

      {/* Faint, Unobtrusive Footer */}
      <footer className="w-full border-t border-[#E5E7EB]/60 py-6 text-[10px] sm:text-[11px] text-[#9CA3AF]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="leading-relaxed opacity-70">
            ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
          </p>
          <div className="flex items-center justify-center gap-3 opacity-60">
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            <span>•</span>
            <a href={HOPLINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Official Page
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
