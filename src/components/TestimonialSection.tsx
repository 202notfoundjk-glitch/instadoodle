import React from 'react';
import { Star, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B]/20 text-[#1A1A1A] border-2 border-[#FFD43B] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#1A1A1A]" /> Verified Creator Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Real Creators, Real Channels, Real Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            See how YouTubers, course instructors, and affiliate marketers are using InstaDoodle to hold audience attention and boost conversions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_#1A1A1A] flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#FFD43B] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD43B] stroke-[#1A1A1A]" />
                  ))}
                  <span className="text-xs font-black text-[#1A1A1A] ml-2">5.0 Verified</span>
                </div>

                {/* Highlight Quote Pill */}
                <div className="mb-4 inline-flex items-center gap-1.5 bg-[#FFD43B]/30 border-2 border-[#1A1A1A] text-[#1A1A1A] px-3 py-1 rounded-xl text-xs font-black">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t.highlight}</span>
                </div>

                {/* Main Quote */}
                <p className="text-sm text-[#525252] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Creator Bio Profile */}
              <div className="pt-4 border-t-2 border-[#E6E1D3] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#1A1A1A] shadow-[1px_1px_0px_#1A1A1A]"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-black text-sm text-[#1A1A1A] flex items-center gap-1">
                    {t.name} <CheckCircle className="w-3.5 h-3.5 text-[#16a34a]" />
                  </h4>
                  <p className="text-xs text-[#737373] font-medium">{t.role}</p>
                  <span className="text-[11px] font-black text-[#1A1A1A] bg-[#FFD43B]/40 px-1.5 py-0.5 rounded border border-[#FFD43B]">{t.channelOrBiz}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Stats Banner */}
        <div className="mt-12 bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center shadow-[6px_6px_0px_#1A1A1A]">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#1A1A1A] block">4.9 / 5.0</span>
            <span className="text-xs text-[#737373] font-black uppercase tracking-wider">Average Customer Rating</span>
          </div>
          <div className="hidden sm:block w-0.5 h-10 bg-[#E6E1D3]" />
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#1A1A1A] block">10,000+</span>
            <span className="text-xs text-[#737373] font-black uppercase tracking-wider">Videos Exported This Year</span>
          </div>
          <div className="hidden sm:block w-0.5 h-10 bg-[#E6E1D3]" />
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#16a34a] block">60 Days</span>
            <span className="text-xs text-[#737373] font-black uppercase tracking-wider">100% Risk-Free Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
