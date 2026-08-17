import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../constants';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B]/20 text-[#1A1A1A] border-2 border-[#FFD43B] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-[#1A1A1A]" /> Buyer Clarifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#525252] font-medium">
            Everything you need to know before claiming your $37 one-time lifetime license.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border-3 border-[#1A1A1A] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#1A1A1A] transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-[#1A1A1A] hover:bg-[#FAF9F5] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] text-xs flex items-center justify-center font-black shrink-0 shadow-[1px_1px_0px_#1A1A1A]">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#1A1A1A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#737373] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#525252] leading-relaxed border-t-2 border-[#E6E1D3] bg-[#FAF9F5]">
                    <p className="font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
