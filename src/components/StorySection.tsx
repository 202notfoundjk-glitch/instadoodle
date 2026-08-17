import React from 'react';
import { Eye, Sparkles, Brain, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOPLINK } from '../constants';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 bg-[#1A1A1A] text-[#FDFCF8] relative overflow-hidden">
      {/* Background Subtle Ink Drops / Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD43B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4D4D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#2E2E2E] text-[#FFD43B] border border-[#404040] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-[#FFD43B]" /> The 23:47 Reality Check
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Your Content Isn't Bad. <br />
            <span className="text-[#FFD43B]">People Are Just Not Wired To Watch Bulleted Slides.</span>
          </h2>
        </div>

        {/* The Narrative Box */}
        <div className="bg-[#242424] border-3 border-[#383838] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#FFD43B] relative">
          
          <div className="space-y-5 text-base sm:text-lg text-[#E0DDD5] leading-relaxed">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm bg-[#1A1A1A] text-[#FFD43B] px-3 py-1 rounded-lg border border-[#383838] font-black">
                23:47 PM
              </span>
              <span className="text-sm text-[#A3A3A3] font-medium">Analytics Dashboard Refresh</span>
            </div>

            <p>
              You're staring at your video statistics. <b className="text-white font-black">Again.</b>
            </p>
            <p>
              The video you spent six long hours scripting, recording audio for, and endlessly editing in Premiere or CapCut just crossed <span className="text-[#FF4D4D] font-black bg-[#381E1E] px-2 py-0.5 rounded border border-[#592630]">43 views</span>. Average percentage viewed: <span className="text-[#FF4D4D] font-black">14 seconds</span>.
            </p>
            <p>
              Meanwhile, a competitor with a simple hand-drawn whiteboard video explaining the exact same concept is sitting comfortably at <span className="text-[#40C057] font-black bg-[#1E3322] px-2 py-0.5 rounded border border-[#2B5433]">28,400 views</span> and racking up hundreds of sales and comments.
            </p>

            <div className="my-6 p-5 bg-[#1A1A1A] border-l-4 border-[#FFD43B] rounded-r-2xl">
              <p className="text-lg sm:text-xl font-black text-white leading-snug">
                "People don't scroll past your video because your advice is wrong. <br className="hidden sm:inline" />
                They scroll past because <mark className="bg-[#FFD43B] text-[#1A1A1A] px-2 py-0.5 rounded font-black">nothing in the first 3 seconds triggers the completion reflex</mark> in their brain."
              </p>
            </div>

            <p>
              When a viewer sees talking-head footage or a flat PowerPoint bullet slide, their brain subconsciously categorizes it as <i>"lecture material"</i> and instinctively swipes to the next video.
            </p>
          </div>

          {/* The Psychological Mechanism Grid */}
          <div className="mt-10 pt-8 border-t border-[#383838] grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#1A1A1A] p-5 rounded-2xl border-2 border-[#333333] hover:border-[#FFD43B] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#FFD43B] text-[#1A1A1A] flex items-center justify-center font-black text-base mb-3 shadow-xs">
                1
              </div>
              <h3 className="font-black text-white text-base mb-2 flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-[#FFD43B]" /> The Classroom Reflex
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-normal">
                Since age six, when a teacher lifted chalk to a blackboard, human brains were trained to pause and anticipate the next stroke. Sequential reveal creates an irresistible curiosity loop.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-5 rounded-2xl border-2 border-[#333333] hover:border-[#FFD43B] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#FFD43B] text-[#1A1A1A] flex items-center justify-center font-black text-base mb-3 shadow-xs">
                2
              </div>
              <h3 className="font-black text-white text-base mb-2 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#FFD43B]" /> 3.8x Longer Watch Time
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-normal">
                Viewers physically cannot look away because they want to see how the drawing finishes. This signals algorithms (YouTube, TikTok, Meta) to push the video to more feeds.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-5 rounded-2xl border-2 border-[#333333] hover:border-[#FFD43B] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#FFD43B] text-[#1A1A1A] flex items-center justify-center font-black text-base mb-3 shadow-xs">
                3
              </div>
              <h3 className="font-black text-white text-base mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FFD43B]" /> High Perceived Value
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-normal">
                Whiteboard animations make your channel or business look like a multi-million dollar brand that hired a custom animation agency, instantly building authority and trust.
              </p>
            </div>

          </div>

          {/* Bottom Callout */}
          <div className="mt-8 bg-[#1A1A1A] p-5 rounded-2xl border-2 border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#FFD43B] shrink-0" />
              <p className="text-sm text-[#E0DDD5]">
                <b className="text-white font-black">InstaDoodle automates this entire format:</b> Type your message &rarr; AI draws it &rarr; Export in 1080p.
              </p>
            </div>
            <a
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD43B] hover:bg-[#FFE37A] text-[#1A1A1A] font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Get Started for $37</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
