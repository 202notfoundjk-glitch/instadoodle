import React, { useState } from 'react';
import { DollarSign, Check, X, ArrowRight, Calculator, Sparkles, TrendingUp } from 'lucide-react';
import { COMPARISONS, HOPLINK } from '../constants';

export const RoiSection: React.FC = () => {
  const [monthlyVideos, setMonthlyVideos] = useState(4);
  const [freelancerCostPerVideo, setFreelancerCostPerVideo] = useState(250);
  const [clientChargePerVideo, setClientChargePerVideo] = useState(350);

  // Computed ROI values
  const traditionalMonthlyCost = monthlyVideos * freelancerCostPerVideo;
  const traditionalAnnualCost = traditionalMonthlyCost * 12;
  const instadoodleCost = 37;
  const annualSavings = traditionalAnnualCost - instadoodleCost;
  const clientRevenueMonthly = monthlyVideos * clientChargePerVideo;
  const clientRevenueAnnual = clientRevenueMonthly * 12;

  return (
    <section id="comparison" className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B]/30 text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#1A1A1A]">
            <DollarSign className="w-3.5 h-3.5 text-[#1A1A1A]" /> The Real ROI Math &amp; Profit Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Create One Video &amp; InstaDoodle Has Already <span className="underline decoration-[#FFD43B] decoration-4">Paid For Itself 10x Over</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            Compare the honest cost of hiring a freelance animator vs recurring subscriptions vs InstaDoodle's one-time deal.
          </p>
        </div>

        {/* Interactive Dynamic ROI Calculator */}
        <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_#1A1A1A] max-w-5xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#FFD43B] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[1px_1px_0px_#1A1A1A]">
              <Calculator className="w-4 h-4 text-[#1A1A1A]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1A1A1A]">Interactive Video Savings &amp; Profit Calculator</h3>
              <p className="text-xs text-[#737373] font-bold">Adjust the sliders to calculate your exact monthly and annual savings</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders on Left */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Monthly Videos */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#1A1A1A]">
                  <span>Videos Created Per Month:</span>
                  <span className="bg-[#FFD43B] px-3 py-1 rounded-lg border-2 border-[#1A1A1A] text-sm font-black">
                    {monthlyVideos} {monthlyVideos === 1 ? 'video' : 'videos'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={monthlyVideos}
                  onChange={(e) => setMonthlyVideos(Number(e.target.value))}
                  className="w-full accent-[#1A1A1A] h-2 bg-[#FAF9F5] rounded-lg border border-[#1A1A1A] cursor-pointer"
                />
              </div>

              {/* Slider 2: Freelancer Fee */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#1A1A1A]">
                  <span>Avg. Freelancer Fee Per Video:</span>
                  <span className="bg-[#FAF9F5] px-3 py-1 rounded-lg border-2 border-[#1A1A1A] text-sm font-black">
                    ${freelancerCostPerVideo}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={freelancerCostPerVideo}
                  onChange={(e) => setFreelancerCostPerVideo(Number(e.target.value))}
                  className="w-full accent-[#1A1A1A] h-2 bg-[#FAF9F5] rounded-lg border border-[#1A1A1A] cursor-pointer"
                />
              </div>

              {/* Slider 3: Client Selling Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-[#1A1A1A]">
                  <span>Client Package Price (If selling):</span>
                  <span className="bg-[#FAF9F5] px-3 py-1 rounded-lg border-2 border-[#1A1A1A] text-sm font-black">
                    ${clientChargePerVideo}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={clientChargePerVideo}
                  onChange={(e) => setClientChargePerVideo(Number(e.target.value))}
                  className="w-full accent-[#1A1A1A] h-2 bg-[#FAF9F5] rounded-lg border border-[#1A1A1A] cursor-pointer"
                />
              </div>

            </div>

            {/* Computed Calculation Display on Right */}
            <div className="lg:col-span-6 bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-2xl p-6 shadow-[5px_5px_0px_#1A1A1A] space-y-4">
              
              <div className="flex justify-between items-center pb-3 border-b-2 border-[#E6E1D3]">
                <div>
                  <span className="text-[11px] font-black uppercase text-[#737373] block">Freelancer Monthly Cost</span>
                  <span className="text-xl font-black text-[#FF4D4D]">${traditionalMonthlyCost.toLocaleString()} / mo</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-black uppercase text-[#737373] block">InstaDoodle Lifetime Cost</span>
                  <span className="text-xl font-black text-[#16a34a]">$37 One-Time</span>
                </div>
              </div>

              <div className="bg-[#1A1A1A] text-white p-4 rounded-xl border-2 border-[#1A1A1A] space-y-1 text-center">
                <span className="text-xs font-black uppercase text-[#FFD43B]">Estimated 1-Year Net Savings</span>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  +${annualSavings.toLocaleString()}
                </div>
                <span className="text-[11px] text-[#D4D4D4] font-medium block">
                  Replaces {monthlyVideos * 12} freelance orders with 10-minute AI workflows
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-[#1A1A1A] pt-1">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#16a34a]" /> Agency Client Potential:
                </span>
                <span className="font-black text-[#16a34a] text-sm">
                  +${clientRevenueAnnual.toLocaleString()} / yr
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Cost Anchor Grid (The Old Agency Way vs InstaDoodle) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Bad: The Freelancer / Agency Route */}
          <div className="bg-[#FFF5F5] border-3 border-[#FF4D4D] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#FF4D4D] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF4D4D] bg-[#FFEBEB] px-3 py-1 rounded-full border border-[#FF4D4D]">
                  ❌ The "Hire Out" Freelance Agency Way
                </span>
                <span className="text-xs text-[#FF4D4D] font-bold">Per Single 60s Video</span>
              </div>

              <h3 className="text-xl font-black text-[#1A1A1A] mb-4">
                Cost per 60-second explainer:
              </h3>

              <div className="space-y-3 text-sm text-[#525252]">
                <div className="flex justify-between py-2 border-b border-[#FED7D7]">
                  <span className="font-semibold">Scriptwriter (Fiverr / Upwork)</span>
                  <span className="font-mono font-black text-[#FF4D4D]">$75 – $200</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#FED7D7]">
                  <span className="font-semibold">Voiceover artist (Commercial rights)</span>
                  <span className="font-mono font-black text-[#FF4D4D]">$50 – $250</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#FED7D7]">
                  <span className="font-semibold">Custom vector illustrator</span>
                  <span className="font-mono font-black text-[#FF4D4D]">$100 – $400</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#FED7D7]">
                  <span className="font-semibold">Animator (After Effects / 2-week turnaround)</span>
                  <span className="font-mono font-black text-[#FF4D4D]">$200 – $1,000+</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#FF4D4D] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7F1D1D] font-black uppercase tracking-wider block">Total Spent Per Video:</span>
                <span className="text-2xl sm:text-3xl font-black text-[#FF4D4D]">$425 – $1,850+</span>
              </div>
              <span className="text-xs font-bold text-[#FF4D4D] max-w-[140px] text-right">
                Plus 2 to 3 weeks waiting for revisions
              </span>
            </div>
          </div>

          {/* Good: The InstaDoodle Way */}
          <div className="bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#FFD43B] flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#1A1A1A] bg-[#FFD43B] px-3 py-1 rounded-full border border-[#1A1A1A]">
                  ✅ The InstaDoodle Way
                </span>
                <span className="text-xs text-[#166534] font-black">Lifetime Unlimited Usage</span>
              </div>

              <h3 className="text-xl font-black text-[#1A1A1A] mb-4">
                Unlimited explainers you control:
              </h3>

              <div className="space-y-3 text-sm text-[#1A1A1A]">
                <div className="flex justify-between py-2 border-b border-[#E6E1D3]">
                  <span className="font-bold">AI writes &amp; formats script structure</span>
                  <span className="font-mono font-black text-[#16a34a]">$0 (Included)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E6E1D3]">
                  <span className="font-bold">DoodleAI draws custom hand-drawn scenes</span>
                  <span className="font-mono font-black text-[#16a34a]">$0 (Included)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E6E1D3]">
                  <span className="font-bold">Built-in voiceover + royalty-free music</span>
                  <span className="font-mono font-black text-[#16a34a]">$0 (Included)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E6E1D3]">
                  <span className="font-bold">Production time</span>
                  <span className="font-mono font-black text-[#16a34a]">5 – 15 Minutes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#1A1A1A] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#737373] font-black uppercase tracking-wider block">Special Deal Price:</span>
                <span className="text-3xl sm:text-4xl font-black text-[#1A1A1A]">$37 <small className="text-xs text-[#525252] font-black">one-time</small></span>
              </div>
              <a
                href={HOPLINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs sm:text-sm font-black px-4 py-2.5 rounded-xl border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#FFD43B] transition-all flex items-center gap-1"
              >
                <span>Claim $37 Deal</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD43B]" />
              </a>
            </div>
          </div>

        </div>

        {/* Feature Comparison Matrix Against Competitors */}
        <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#1A1A1A] overflow-x-auto">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A]">
              InstaDoodle vs. Traditional Video Tools
            </h3>
            <p className="text-xs sm:text-sm text-[#737373] mt-1 font-semibold">
              See why thousands of creators are ditching $39/month recurring subscriptions.
            </p>
          </div>

          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b-3 border-[#1A1A1A]">
                <th className="py-3 px-4 text-xs font-black uppercase text-[#525252] tracking-wider">Features</th>
                <th className="py-3 px-4 text-xs font-black uppercase text-[#1A1A1A] bg-[#FFD43B] rounded-t-xl tracking-wider text-center border-t-2 border-x-2 border-[#1A1A1A]">
                  InstaDoodle ($37)
                </th>
                <th className="py-3 px-4 text-xs font-bold uppercase text-[#737373] tracking-wider text-center">Doodly</th>
                <th className="py-3 px-4 text-xs font-bold uppercase text-[#737373] tracking-wider text-center">VideoScribe</th>
                <th className="py-3 px-4 text-xs font-bold uppercase text-[#737373] tracking-wider text-center">Vyond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E1D3] text-sm">
              {COMPARISONS.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF9F5] transition-colors">
                  <td className="py-3.5 px-4 font-black text-[#1A1A1A]">{row.feature}</td>
                  
                  {/* InstaDoodle Column */}
                  <td className="py-3.5 px-4 font-black text-center bg-[#FFD43B]/20 text-[#1A1A1A] border-x-2 border-[#1A1A1A]">
                    {typeof row.instadoodle === 'boolean' ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1A1A1A] text-[#FFD43B]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span>{row.instadoodle}</span>
                    )}
                  </td>

                  {/* Doodly Column */}
                  <td className="py-3.5 px-4 text-center text-[#525252] font-semibold">
                    {typeof row.doodly === 'boolean' ? (
                      row.doodly ? (
                        <Check className="w-5 h-5 text-[#16a34a] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[#FF4D4D] mx-auto" />
                      )
                    ) : (
                      <span>{row.doodly}</span>
                    )}
                  </td>

                  {/* VideoScribe Column */}
                  <td className="py-3.5 px-4 text-center text-[#525252] font-semibold">
                    {typeof row.videoscribe === 'boolean' ? (
                      row.videoscribe ? (
                        <Check className="w-5 h-5 text-[#16a34a] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[#FF4D4D] mx-auto" />
                      )
                    ) : (
                      <span>{row.videoscribe}</span>
                    )}
                  </td>

                  {/* Vyond Column */}
                  <td className="py-3.5 px-4 text-center text-[#525252] font-semibold">
                    {typeof row.vyond === 'boolean' ? (
                      row.vyond ? (
                        <Check className="w-5 h-5 text-[#16a34a] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[#FF4D4D] mx-auto" />
                      )
                    ) : (
                      <span>{row.vyond}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 pt-4 border-t-2 border-[#E6E1D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373] font-semibold">
            <span>* Competitor prices verified as of mid-2026 based on public pricing pages.</span>
            <a
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-black px-5 py-2.5 rounded-xl border-2 border-[#1A1A1A] flex items-center gap-1.5 shadow-[3px_3px_0px_#FFD43B] transition-all"
            >
              <span>Lock In Your $37 One-Time Lifetime License</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFD43B]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

