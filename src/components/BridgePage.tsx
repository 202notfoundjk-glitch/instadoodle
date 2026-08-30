import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { HOPLINK } from '../constants';

export const BridgePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col justify-between font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* Main Bridge Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-14 sm:pb-16 flex flex-col justify-center">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#2563EB] tracking-tight leading-[1.18]">
            Turn Your Words Into a Hand-Drawn Video
          </h1>

          {/* Subheadline from uploaded HTML */}
          <p className="text-base sm:text-lg md:text-xl text-[#1A1A1A] font-bold mt-3 leading-snug">
            Type the idea DoodleAI draws the scenes, No camera, No editing timeline
          </p>
        </div>

        {/* Video & Highlight Points Side-by-Side Card */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Embedded Vimeo Video Player */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-[#111111] shadow-sm">
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

            {/* Right: Feature Highlights & Benefits */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#2563EB]">Type a sentence or prompt—</span>{' '}
                  <span className="text-[#374151] font-medium">DoodleAI draws every scene automatically.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#2563EB]">No camera or filming—</span>{' '}
                  <span className="text-[#374151] font-medium">eliminate camera shyness completely.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#2563EB]">No editing timeline—</span>{' '}
                  <span className="text-[#374151] font-medium">skip complex, expensive pro software.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A] fill-[#DCFCE7]" />
                </div>
                <div className="text-sm sm:text-base leading-snug">
                  <span className="font-extrabold text-[#2563EB]">Multi-platform ready—</span>{' '}
                  <span className="text-[#374151] font-medium">high-converting videos for YouTube, Instagram, Facebook &amp; TikTok.</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Primary Call-to-Action Button */}
        <div className="mt-8 sm:mt-10 text-center max-w-xl mx-auto w-full">
          <a
            id="offer-link-cta"
            href={HOPLINK}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full px-8 py-4 sm:py-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-lg sm:text-xl rounded-full shadow-[0_6px_0_#1E3A8A] hover:shadow-[0_8px_0_#1E3A8A] active:translate-y-1 active:shadow-[0_2px_0_#1E3A8A] transition-all duration-150"
          >
            <span className="flex items-center gap-2">
              <span>See How InstaDoodle Works</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

      </main>

      {/* Faint, Unobtrusive Legal / Compliance Footer */}
      <footer className="w-full border-t border-[#F3F4F6] py-6 text-[10px] sm:text-[11px] text-[#9CA3AF] mt-6">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-2">
          <p className="leading-relaxed opacity-60">
            This page contains affiliate links. I may earn a commission if you buy through them, at no extra cost to you. ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank’s role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
          </p>
          <div className="flex items-center justify-center gap-3 opacity-50 text-[10px]">
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
            <span>•</span>
            <a href={HOPLINK} target="_blank" rel="sponsored nofollow noopener noreferrer" className="hover:underline">
              Official Offer
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
