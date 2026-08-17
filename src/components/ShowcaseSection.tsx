import React from 'react';
import { Wand2, Sliders, Download, Layers, Cloud, Music, Mic, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';
import { HOPLINK } from '../constants';

export const ShowcaseSection: React.FC = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B]/20 text-[#1A1A1A] border-2 border-[#FFD43B] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Wand2 className="w-3.5 h-3.5 text-[#1A1A1A]" /> Zero Animation Learning Curve
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            How InstaDoodle Turns Ideas Into Finished Videos in 3 Minutes Flat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            No timeline headaches, no keyframes, and no browsing through 10,000 outdated cartoon clipart images.
          </p>
        </div>

        {/* 3 Steps Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_#1A1A1A] relative flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFD43B] text-[#1A1A1A] font-black text-xl flex items-center justify-center mb-6 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]">
                1
              </div>
              <h3 className="text-xl font-black text-[#1A1A1A] mb-3">
                Type What You Want In Plain English
              </h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                Enter your script, bullet points, or video concept. The built-in <b className="text-[#1A1A1A]">DoodleAI engine</b> analyzes your sentences and automatically generates matching hand-drawn sketch assets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E1D3] flex items-center gap-2 text-xs font-black text-[#1A1A1A]">
              <Sparkles className="w-4 h-4 text-[#FFD43B]" /> Zero drawing skills needed
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_#1A1A1A] relative flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] text-white font-black text-xl flex items-center justify-center mb-6 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#FFD43B]">
                2
              </div>
              <h3 className="text-xl font-black text-[#1A1A1A] mb-3">
                Customize, Pick Pen Hand & Add Voice
              </h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                Drag and drop elements across the smooth cloud timeline. Choose male or female drawing hands, marker or chalk styles, and add human-sounding text-to-speech or your own voiceover.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E1D3] flex items-center gap-2 text-xs font-black text-[#1A1A1A]">
              <Sliders className="w-4 h-4 text-[#FFD43B]" /> 100% Drag-and-drop intuitive
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_#1A1A1A] relative flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF4D4D] text-white font-black text-xl flex items-center justify-center mb-6 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]">
                3
              </div>
              <h3 className="text-xl font-black text-[#1A1A1A] mb-3">
                Export in 1080p HD & Publish
              </h3>
              <p className="text-sm text-[#525252] leading-relaxed">
                Click Render to download crisp MP4 files in full HD. Ready to publish on YouTube, TikTok, Facebook Ads, sales pages, client deliverables, or membership sites.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E1D3] flex items-center gap-2 text-xs font-black text-[#1A1A1A]">
              <Download className="w-4 h-4 text-[#16a34a]" /> No watermarks on your videos
            </div>
          </div>

        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#1A1A1A]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-[#1A1A1A]">
              Everything Included in the Special $37 License
            </h3>
            <p className="text-sm text-[#737373] mt-1 font-semibold">
              Packed with powerful creation tools without recurring monthly subscription fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-5 shadow-[3px_3px_0px_#1A1A1A]">
              <div className="w-10 h-10 rounded-xl bg-[#FFD43B]/30 text-[#1A1A1A] border border-[#FFD43B] flex items-center justify-center mb-3 font-bold">
                <Wand2 className="w-5 h-5 text-[#1A1A1A]" />
              </div>
              <h4 className="font-black text-base text-[#1A1A1A] mb-1">DoodleAI Prompt Engine</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Generates unique hand-drawn style characters, props, and concept sketches on command from any keyword or topic.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-5 shadow-[3px_3px_0px_#1A1A1A]">
              <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16a34a] border border-[#16a34a] flex items-center justify-center mb-3 font-bold">
                <Cloud className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-[#1A1A1A] mb-1">100% Cloud-Based Access</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Runs completely in your web browser. No huge 15GB software downloads and zero system lag on Mac, Windows, or Chromebook.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-5 shadow-[3px_3px_0px_#1A1A1A]">
              <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] text-[#4338CA] border border-[#4338CA] flex items-center justify-center mb-3 font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-[#1A1A1A] mb-1">16:9 & 9:16 Vertical Video</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Create standard widescreen videos for YouTube or vertical doodle reels that stop the scroll on TikTok, Instagram, and Shorts.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-5 shadow-[3px_3px_0px_#1A1A1A]">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] border border-[#B45309] flex items-center justify-center mb-3 font-bold">
                <Mic className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-[#1A1A1A] mb-1">Text-to-Speech & Sync</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Natural-sounding voiceover engine with multiple accents, or record and upload your own voice audio with automatic timing sync.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-5 shadow-[3px_3px_0px_#1A1A1A]">
              <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] text-[#BE185D] border border-[#BE185D] flex items-center justify-center mb-3 font-bold">
                <Music className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-[#1A1A1A] mb-1">Royalty-Free Audio Library</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Includes background music tracks, sound effects, and whiteboard pen soundscapes to keep your audience engaged.
              </p>
            </div>

            <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-5 shadow-[3px_3px_0px_#1A1A1A]">
              <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#7E22CE] border border-[#7E22CE] flex items-center justify-center mb-3 font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-black text-base text-[#1A1A1A] mb-1">150 AI Starter Credits</h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Credits never expire. Plentiful for creating dozens of explainer scenes. (Additional optional bundles available if needed).
              </p>
            </div>

          </div>

          {/* Vendor Credibility Callout */}
          <div className="mt-8 pt-6 border-t-2 border-[#E6E1D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525252] font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
              <span>Created by <b>Blaster Suite</b> — ClickBank Diamond Vendor ($5M+ platform transactions).</span>
            </div>
            <a
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] font-black underline decoration-[#FFD43B] decoration-2 hover:text-[#FF4D4D]"
            >
              Check Current One-Time Price ($37) &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
