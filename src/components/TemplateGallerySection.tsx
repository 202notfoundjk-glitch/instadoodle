import React, { useState } from 'react';
import { BookOpen, TrendingUp, Wrench, Zap, ShoppingBag, Briefcase, Play, Check, ArrowRight, LayoutTemplate } from 'lucide-react';
import { TEMPLATES, HOPLINK } from '../constants';
import { TemplateItem } from '../types';

export const TemplateGallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'affiliate' | 'courses' | 'local' | 'social' | 'ecommerce'>('all');
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem>(TEMPLATES[0]);

  const filteredTemplates = activeTab === 'all'
    ? TEMPLATES
    : TEMPLATES.filter((t) => t.category === activeTab);

  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1A1A1A]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#1A1A1A]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#1A1A1A]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#1A1A1A]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#1A1A1A]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#1A1A1A]" />;
      default: return <LayoutTemplate className="w-5 h-5 text-[#1A1A1A]" />;
    }
  };

  return (
    <section id="templates" className="py-16 lg:py-24 bg-[#FAF9F5] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B]/30 text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#1A1A1A]">
            <LayoutTemplate className="w-3.5 h-3.5" /> 350+ Ready-To-Use Niche Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Never Start From A Blank Page
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            Choose from hundreds of pre-written, timed, and illustrated whiteboard video templates across top-paying industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {[
            { id: 'all', label: 'All Niches' },
            { id: 'affiliate', label: 'Affiliate & Reviews' },
            { id: 'courses', label: 'Course Lessons' },
            { id: 'local', label: 'Local Business & Agency' },
            { id: 'social', label: 'TikTok & Shorts Ads' },
            { id: 'ecommerce', label: 'E-Commerce / Gadgets' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black border-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1A1A1A] text-[#FFD43B] border-[#1A1A1A] shadow-[3px_3px_0px_#FFD43B]'
                  : 'bg-white text-[#525252] border-[#E6E1D3] hover:border-[#1A1A1A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Templates Grid & Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Template Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTemplates.map((tpl) => {
              const isSelected = previewTemplate.id === tpl.id;
              return (
                <div
                  key={tpl.id}
                  onClick={() => setPreviewTemplate(tpl)}
                  className={`cursor-pointer bg-white border-3 rounded-2xl p-5 transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#1A1A1A] shadow-[5px_5px_0px_#FFD43B] -translate-y-1'
                      : 'border-[#E6E1D3] hover:border-[#1A1A1A] shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFD43B] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[1px_1px_0px_#1A1A1A]">
                        {getIcon(tpl.iconName)}
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#1A1A1A] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#1A1A1A]">
                        {tpl.duration} · {tpl.scenesCount} Scenes
                      </span>
                    </div>

                    <span className="text-[11px] font-black uppercase text-[#FF4D4D] tracking-wider block mb-1">
                      {tpl.niche}
                    </span>
                    <h3 className="font-black text-sm sm:text-base text-[#1A1A1A] mb-2 leading-snug">
                      {tpl.title}
                    </h3>
                    <p className="text-xs text-[#525252] leading-relaxed line-clamp-2">
                      {tpl.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E6E1D3] flex items-center justify-between text-xs font-bold text-[#1A1A1A]">
                    <span className="text-[11px] text-[#737373]">1-Click Load</span>
                    <span className="text-xs font-black text-[#1A1A1A] underline decoration-[#FFD43B] decoration-2">Inspect Script &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Template Inspector Box */}
          <div className="lg:col-span-5 bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#1A1A1A]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black uppercase text-[#1A1A1A] bg-[#FFD43B] px-3 py-0.5 rounded-full border border-[#1A1A1A]">
                Template Inspector
              </span>
              <span className="text-xs text-[#737373] font-bold">Category: {previewTemplate.niche}</span>
            </div>

            <h3 className="text-xl font-black text-[#1A1A1A] mb-2">
              {previewTemplate.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-6 font-medium">
              {previewTemplate.description}
            </p>

            {/* Script Box */}
            <div className="bg-[#FAF9F5] border-2 border-[#1A1A1A] rounded-2xl p-4 mb-6 space-y-2">
              <span className="text-[10px] font-black uppercase text-[#737373] block">Sample Voiceover &amp; Illustration Script:</span>
              <p className="text-xs text-[#1A1A1A] font-mono italic leading-relaxed bg-white p-3 rounded-xl border border-[#D4D4D4]">
                "{previewTemplate.scriptSnippet}"
              </p>
            </div>

            {/* Template Features checklist */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold">
                <Check className="w-4 h-4 text-[#16a34a] stroke-[3]" />
                <span>Includes {previewTemplate.scenesCount} fully-timed sketch storyboard scenes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold">
                <Check className="w-4 h-4 text-[#16a34a] stroke-[3]" />
                <span>Pre-matched with realistic human hand draw paths</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold">
                <Check className="w-4 h-4 text-[#16a34a] stroke-[3]" />
                <span>Commercial license included: resell video to clients</span>
              </div>
            </div>

            {/* CTA */}
            <a
              id="template-inspect-cta"
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#FFD43B] hover:bg-[#F3C72A] text-[#1A1A1A] font-black text-sm rounded-2xl border-3 border-[#1A1A1A] shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[6px_6px_0px_#1A1A1A] flex items-center justify-center gap-2 transition-all active:translate-y-0.5"
            >
              <span>Unlock 350+ Templates for $37</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
