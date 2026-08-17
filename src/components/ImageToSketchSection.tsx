import React, { useState } from 'react';
import { Image as ImageIcon, Wand2, Sparkles, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';
import { HOPLINK } from '../constants';

export const ImageToSketchSection: React.FC = () => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [showSketch, setShowSketch] = useState(true);
  const [strokeWeight, setStrokeWeight] = useState(3);

  const sampleImages = [
    {
      title: 'Founder / Speaker Portrait',
      category: 'Personal Brand',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      description: 'Turn your real headshot into a charismatic doodle avatar for intro and outro scenes.'
    },
    {
      title: 'Smart Tech Gadget',
      category: 'E-Commerce / Hardware',
      photoUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80',
      description: 'Convert physical product photos into clean line art that highlights product features.'
    },
    {
      title: 'Luxury Property & Villa',
      category: 'Real Estate / Architecture',
      photoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80',
      description: 'Explain floorplans, renovations, or neighborhood amenities with architectural line drawing.'
    },
    {
      title: 'Analytics & Revenue Dashboard',
      category: 'SaaS / Finance',
      photoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80',
      description: 'Transform cluttered software screenshots into clean vector sketches that focus user attention.'
    }
  ];

  const currentImg = sampleImages[selectedImageIdx];

  return (
    <section className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#1A1A1A]">
            <Wand2 className="w-3.5 h-3.5" /> 1-Click Vectorizer Technology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Turn Any Photo Into A <span className="text-[#1A1A1A] bg-[#FFD43B] px-2 py-0.5 rounded border-2 border-[#1A1A1A]">Hand-Drawn Sketch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            Have a custom logo, product photo, or portrait? InstaDoodle’s built-in edge-detection engine extracts vector linework in seconds so the hand can draw it naturally on screen.
          </p>
        </div>

        {/* Interactive Comparison Studio Card */}
        <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_#1A1A1A] max-w-5xl mx-auto">
          
          {/* Sample Selectors */}
          <div className="flex items-center justify-between gap-3 flex-wrap pb-6 mb-6 border-b-2 border-[#E6E1D3]">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <span className="text-xs font-black uppercase text-[#737373] shrink-0">Sample Photos:</span>
              {sampleImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all shrink-0 ${
                    selectedImageIdx === idx
                      ? 'bg-[#FFD43B] text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]'
                      : 'bg-[#FAF9F5] text-[#525252] border-[#E6E1D3] hover:border-[#1A1A1A]'
                  }`}
                >
                  {img.category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-[#FAF9F5] p-1.5 rounded-2xl border-2 border-[#1A1A1A]">
              <button
                onClick={() => setShowSketch(false)}
                className={`px-3 py-1 rounded-xl text-xs font-black transition-all ${
                  !showSketch ? 'bg-[#1A1A1A] text-white shadow-xs' : 'text-[#737373]'
                }`}
              >
                Original Photo
              </button>
              <button
                onClick={() => setShowSketch(true)}
                className={`px-3 py-1 rounded-xl text-xs font-black transition-all ${
                  showSketch ? 'bg-[#FFD43B] text-[#1A1A1A] shadow-xs' : 'text-[#737373]'
                }`}
              >
                ✍️ Doodle Sketch Mode
              </button>
            </div>
          </div>

          {/* Visual Showcase Stage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Preview Screen */}
            <div className="md:col-span-7 bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-2xl p-4 sm:p-6 shadow-[5px_5px_0px_#1A1A1A] relative overflow-hidden">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#1A1A1A] relative bg-white flex items-center justify-center">
                
                {showSketch ? (
                  /* Sketch Representation */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-white">
                    <img
                      src={currentImg.photoUrl}
                      alt={currentImg.title}
                      className="w-full h-full object-cover filter grayscale contrast-200 invert-[0.05] opacity-80"
                      style={{
                        filter: `grayscale(100%) contrast(300%) brightness(110%) drop-shadow(0px 0px 2px #000000)`
                      }}
                    />
                    
                    {/* Hand Drawing Marker Simulation */}
                    <div className="absolute bottom-6 right-6 bg-[#1A1A1A] text-[#FFD43B] px-3 py-1 rounded-xl border-2 border-white shadow-lg text-xs font-black flex items-center gap-1.5 -rotate-6">
                      ✍️ <span>Vector Draw Active (Stroke: {strokeWeight}px)</span>
                    </div>
                  </div>
                ) : (
                  /* Original Photo */
                  <img
                    src={currentImg.photoUrl}
                    alt={currentImg.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#1A1A1A]/85 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border border-white/20">
                  {showSketch ? 'Vector Outline Extracted' : 'Original Raw Photo'}
                </div>

              </div>

              {/* Stroke Slider */}
              {showSketch && (
                <div className="mt-4 flex items-center justify-between gap-4 text-xs font-black text-[#1A1A1A] bg-white p-3 rounded-xl border-2 border-[#E6E1D3]">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#FFD43B]" />
                    <span>Linework Density:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => setStrokeWeight(val)}
                        className={`w-7 h-7 rounded-lg border-2 font-black flex items-center justify-center ${
                          strokeWeight === val ? 'bg-[#FFD43B] border-[#1A1A1A]' : 'bg-[#FAF9F5] border-[#D4D4D4]'
                        }`}
                      >
                        {val}x
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Features & Copy on the Right */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-black uppercase text-[#FF4D4D] tracking-wider block">
                {currentImg.category} Case Study:
              </span>
              <h3 className="text-2xl font-black text-[#1A1A1A]">
                {currentImg.title}
              </h3>
              <p className="text-sm text-[#525252] leading-relaxed font-medium">
                {currentImg.description}
              </p>

              <div className="space-y-2.5 pt-2 border-t-2 border-[#E6E1D3]">
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold">
                  <Check className="w-4 h-4 text-[#16a34a] stroke-[3]" />
                  <span>Accepts PNG, JPG, WebP, and SVG formats</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold">
                  <Check className="w-4 h-4 text-[#16a34a] stroke-[3]" />
                  <span>Automatic transparent background isolation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-bold">
                  <Check className="w-4 h-4 text-[#16a34a] stroke-[3]" />
                  <span>Draws outline first, then fills colors smoothly</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  id="image-to-sketch-cta"
                  href={HOPLINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-black text-sm px-6 py-4 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_#FFD43B] hover:shadow-[5px_5px_0px_#FFD43B] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD43B]" />
                  <span>Get InstaDoodle Vectorizer ($37)</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD43B]" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
