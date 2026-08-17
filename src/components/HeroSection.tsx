import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Play, Pause, RotateCcw, Volume2, VolumeX, Download, Layers, Wand2 } from 'lucide-react';
import { DEMO_PROMPTS, HOPLINK } from '../constants';
import { DemoPrompt } from '../types';

export const HeroSection: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<DemoPrompt>(DEMO_PROMPTS[0]);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [drawProgress, setDrawProgress] = useState(0);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isRenderingCustom, setIsRenderingCustom] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play subtle marker drawing sound when enabled
  const playMarkerScratch = () => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const bufferSize = ctx.sampleRate * 0.05;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.08;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      filter.Q.value = 3.0;
      whiteNoise.connect(filter);
      filter.connect(ctx.destination);
      whiteNoise.start();
    } catch {
      // Audio fallback
    }
  };

  // Animation cycle for drawing progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setDrawProgress((prev) => {
          if (prev >= 100) {
            // Next scene
            setActiveSceneIndex((s) => (s + 1) % selectedPrompt.scenes.length);
            return 0;
          }
          if (prev % 15 === 0) {
            playMarkerScratch();
          }
          return prev + 2;
        });
      }, 60);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedPrompt, soundEnabled]);

  const handleCustomPromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;
    setIsRenderingCustom(true);
    setTimeout(() => {
      setSelectedPrompt({
        id: 'custom-' + Date.now(),
        category: 'Custom Prompt',
        title: customPrompt.slice(0, 30) + '...',
        prompt: customPrompt,
        duration: '45 sec',
        doodleType: 'growth',
        scenes: [
          { text: customPrompt.slice(0, 45) + '...', action: 'AI generating custom sketch outlines', strokeCount: 20 },
          { text: 'InstaDoodle rendering hand-drawn vectors in 1080p...', action: 'Adding hand motion & realistic pencil shading', strokeCount: 28 },
          { text: 'Ready to export to MP4 in 1-click!', action: 'Complete scene ready for YouTube/TikTok', strokeCount: 16 }
        ]
      });
      setActiveSceneIndex(0);
      setDrawProgress(0);
      setIsRenderingCustom(false);
      setCustomPrompt('');
    }, 600);
  };

  const currentScene = selectedPrompt.scenes[activeSceneIndex] || selectedPrompt.scenes[0];

  return (
    <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FFD43B]/20 border-2 border-[#FFD43B] text-[#1A1A1A] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
            <span>Updated August 2026 · Official ClickBank Special Deal</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tight leading-[1.12]">
            Make Videos That Look Like You{' '}
            <span className="bg-[#FFD43B] text-[#1A1A1A] px-3 py-1 rounded-xl border-2 border-[#1A1A1A] shadow-[3px_3px_0px_#1A1A1A] inline-block -rotate-1">
              Hired a $2,000 Animator
            </span>{' '}
            In About 5 Minutes.
          </h1>
          
          <p className="mt-5 text-lg sm:text-xl text-[#525252] max-w-3xl mx-auto leading-relaxed font-medium">
            InstaDoodle turns <b className="text-[#1A1A1A] font-black">plain text into hand-drawn whiteboard videos</b> that halt the scroll and skyrocket watch time. No design skills. No monthly subscription. 
            Just a <span className="text-[#FF4D4D] font-black underline decoration-[#FF4D4D]/40 underline-offset-4">one-time $37</span> investment.
          </p>

          {/* Primary CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="hero-primary-cta"
              href={HOPLINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#333333] text-white text-base sm:text-lg font-black px-8 py-4 rounded-2xl shadow-[5px_5px_0px_#FFD43B] hover:shadow-[7px_7px_0px_#FFD43B] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group active:translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-[#FFD43B] group-hover:rotate-12 transition-transform" />
              <span>Claim InstaDoodle + 4 Bonuses ($37)</span>
              <ArrowRight className="w-5 h-5 text-[#FFD43B] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto bg-white hover:bg-[#FDFCF8] text-[#1A1A1A] border-2 border-[#1A1A1A] text-sm sm:text-base font-black px-6 py-4 rounded-2xl shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all flex items-center justify-center gap-2"
            >
              <span>See Interactive Live Demo</span>
              <span className="text-xs bg-[#FFD43B] text-[#1A1A1A] font-black px-2 py-0.5 rounded-md border border-[#1A1A1A]">LIVE</span>
            </a>
          </div>

          {/* Trust Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#1A1A1A]">
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> One-Time $37 (No Recurring Fees)
            </span>
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16a34a]" /> 60-Day ClickBank Money-Back Guarantee
            </span>
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> 150 AI Starter Credits Included
            </span>
            <span className="bg-white border border-[#E6E1D3] px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> 100% Cloud-Based (Mac/PC/iPad)
            </span>
          </div>
        </div>

        {/* Interactive Whiteboard Canvas Demo / Showcase */}
        <div id="demo" className="mt-10 max-w-5xl mx-auto scroll-mt-24">
          <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl shadow-[10px_10px_0px_#1A1A1A] overflow-hidden">
            
            {/* Whiteboard Header Toolbar */}
            <div className="bg-[#1A1A1A] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between flex-wrap gap-3 border-b-3 border-[#1A1A1A]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF4D4D] border border-black"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFD43B] border border-black"></span>
                <span className="w-3 h-3 rounded-full bg-[#40C057] border border-black"></span>
                <span className="text-xs sm:text-sm font-black text-white ml-2 flex items-center gap-1.5">
                  <Wand2 className="w-4 h-4 text-[#FFD43B]" /> InstaDoodle AI Engine — Interactive Whiteboard Simulator
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 font-black transition-all ${
                    soundEnabled
                      ? 'bg-[#FFD43B] border-[#1A1A1A] text-[#1A1A1A] shadow-xs'
                      : 'bg-[#2E2E2E] border-[#404040] text-[#D4D4D4] hover:text-white'
                  }`}
                  title="Toggle Whiteboard Marker Audio Effect"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span>{soundEnabled ? 'Marker Audio ON' : 'Audio Muted'}</span>
                </button>

                <div className="hidden sm:flex items-center gap-1.5 bg-[#2E2E2E] text-[#FFD43B] font-bold px-3 py-1.5 rounded-xl border border-[#404040]">
                  <span className="w-2 h-2 rounded-full bg-[#40C057] animate-pulse"></span>
                  <span>1080p HD Ready</span>
                </div>
              </div>
            </div>

            {/* Prompt Selector Pills */}
            <div className="bg-[#FAF9F5] border-b border-[#E6E1D3] p-3 sm:p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black text-[#525252] uppercase tracking-wider flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#1A1A1A]" /> Choose a Niche Example or Test Your Own Text:
                </span>
                <span className="text-xs font-black text-[#1A1A1A] bg-[#FFD43B] px-2.5 py-0.5 rounded-md border border-[#1A1A1A]">
                  Scene {activeSceneIndex + 1} of {selectedPrompt.scenes.length}
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {DEMO_PROMPTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPrompt(p);
                      setActiveSceneIndex(0);
                      setDrawProgress(0);
                      setIsPlaying(true);
                    }}
                    className={`text-xs font-black px-3.5 py-2 rounded-xl whitespace-nowrap border-2 transition-all ${
                      selectedPrompt.id === p.id
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_#FFD43B]'
                        : 'bg-white text-[#525252] border-[#E6E1D3] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {p.category}: <span className="font-medium opacity-90">{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Interactive Whiteboard Stage */}
            <div className="relative bg-[#ffffff] min-h-[340px] sm:min-h-[420px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden select-none">
              
              {/* Subtle Grid / Texture of Whiteboard */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Dynamic Animated Drawing Canvas */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center my-auto">
                
                {/* Left: Dynamic Sketch SVG Illustration */}
                <div className="md:col-span-6 flex flex-col items-center justify-center p-4 bg-[#FAF9F5] border-2 border-dashed border-[#D4CEBF] rounded-2xl relative min-h-[220px]">
                  
                  {/* Drawing Hand Simulator Cursor */}
                  <div
                    className="absolute z-20 pointer-events-none transition-all duration-75 flex items-center gap-1"
                    style={{
                      left: `${Math.min(85, Math.max(15, 20 + Math.sin(drawProgress / 10) * 35 + (drawProgress * 0.4)))}%`,
                      top: `${Math.min(80, Math.max(20, 30 + Math.cos(drawProgress / 8) * 25 + (activeSceneIndex * 15)))}%`,
                      transform: 'translate(-10px, -40px)'
                    }}
                  >
                    {/* Hand Holding Black Marker Icon */}
                    <div className="relative animate-bounce">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        <path d="m15 5 4 4"/>
                      </svg>
                      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#FF4D4D] rounded-full animate-ping opacity-75"></span>
                    </div>
                  </div>

                  {/* Scene Animated SVG Vectors */}
                  <svg viewBox="0 0 320 220" className="w-full max-w-[280px] sm:max-w-[320px] h-auto" fill="none" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Scene Specific Vectors with Dashoffset Drawing Effect */}
                    {activeSceneIndex === 0 && (
                      <g className="transition-opacity duration-300">
                        {/* Stressed person & question mark */}
                        <circle cx="100" cy="90" r="32" strokeDasharray="300" strokeDashoffset={Math.max(0, 300 - drawProgress * 3)} />
                        {/* Eyes */}
                        <path d="M90 85 L96 85" strokeDasharray="50" strokeDashoffset={Math.max(0, 50 - drawProgress * 2)} />
                        <path d="M106 85 L112 85" strokeDasharray="50" strokeDashoffset={Math.max(0, 50 - drawProgress * 2)} />
                        {/* Wavy mouth */}
                        <path d="M88 105 Q100 95 114 105" strokeDasharray="60" strokeDashoffset={Math.max(0, 60 - drawProgress * 2)} />
                        {/* Huge Red/Black Question Mark */}
                        <path d="M190 60 C190 40 220 40 220 65 C220 85 198 92 198 110" stroke="#FF4D4D" strokeWidth="4.5" strokeDasharray="200" strokeDashoffset={Math.max(0, 200 - drawProgress * 3)} />
                        <circle cx="198" cy="126" r="4.5" fill="#FF4D4D" stroke="none" />
                        {/* Desk & Laptop */}
                        <path d="M40 160 L280 160" strokeDasharray="300" strokeDashoffset={Math.max(0, 300 - drawProgress * 3)} />
                        <rect x="70" y="130" width="60" height="30" rx="4" strokeDasharray="200" strokeDashoffset={Math.max(0, 200 - drawProgress * 2)} />
                      </g>
                    )}

                    {activeSceneIndex === 1 && (
                      <g className="transition-opacity duration-300">
                        {/* Rising Graph & Growth Rocket */}
                        <path d="M40 170 L280 170" strokeDasharray="300" strokeDashoffset={Math.max(0, 300 - drawProgress * 3)} />
                        <path d="M40 170 L40 40" strokeDasharray="300" strokeDashoffset={Math.max(0, 300 - drawProgress * 3)} />
                        {/* Dynamic Upward Curve */}
                        <path d="M50 150 Q120 140 170 90 T260 45" stroke="#16a34a" strokeWidth="4.5" strokeDasharray="350" strokeDashoffset={Math.max(0, 350 - drawProgress * 4)} />
                        <path d="M245 45 L260 45 L260 60" stroke="#16a34a" strokeWidth="4.5" strokeDasharray="100" strokeDashoffset={Math.max(0, 100 - drawProgress * 2)} />
                        {/* Retention Stars */}
                        <circle cx="170" cy="90" r="6" fill="#FFD43B" stroke="#1A1A1A" strokeWidth="2" />
                        <circle cx="215" cy="65" r="6" fill="#FFD43B" stroke="#1A1A1A" strokeWidth="2" />
                        <circle cx="260" cy="45" r="8" fill="#FFD43B" stroke="#1A1A1A" strokeWidth="2" />
                        {/* Eye icon for retention */}
                        <path d="M80 80 Q105 60 130 80 Q105 100 80 80 Z" strokeDasharray="150" strokeDashoffset={Math.max(0, 150 - drawProgress * 2)} />
                        <circle cx="105" cy="80" r="4" fill="#1A1A1A" />
                      </g>
                    )}

                    {activeSceneIndex === 2 && (
                      <g className="transition-opacity duration-300">
                        {/* Unlocked Treasure / Result Trophy */}
                        <path d="M120 70 L200 70 L190 130 Q160 160 130 130 Z" stroke="#1A1A1A" strokeWidth="3.5" strokeDasharray="300" strokeDashoffset={Math.max(0, 300 - drawProgress * 3)} />
                        <path d="M120 85 Q90 95 125 115" strokeDasharray="100" strokeDashoffset={Math.max(0, 100 - drawProgress * 2)} />
                        <path d="M200 85 Q230 95 195 115" strokeDasharray="100" strokeDashoffset={Math.max(0, 100 - drawProgress * 2)} />
                        <path d="M160 150 L160 180 M130 180 L190 180" strokeWidth="4" strokeDasharray="200" strokeDashoffset={Math.max(0, 200 - drawProgress * 3)} />
                        {/* Giant Verified Checkmark */}
                        <circle cx="230" cy="60" r="24" fill="#DCFCE7" stroke="#16a34a" strokeWidth="3" />
                        <path d="M220 60 L227 67 L242 52" stroke="#16a34a" strokeWidth="4" strokeDasharray="60" strokeDashoffset={Math.max(0, 60 - drawProgress * 2)} />
                        {/* Dollar/Export Badge */}
                        <text x="160" y="105" textAnchor="middle" fontSize="22" fontWeight="900" fill="#1A1A1A" fontFamily="sans-serif">$37</text>
                      </g>
                    )}
                  </svg>

                  <span className="text-[11px] font-bold text-[#737373] mt-2 font-mono">
                    Action: {currentScene.action}
                  </span>
                </div>

                {/* Right: Scene Script & AI Prompt Live Breakdown */}
                <div className="md:col-span-6 space-y-4">
                  <div className="bg-[#FAF9F5] border-2 border-[#E6E1D3] p-4 rounded-2xl">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#FF4D4D] flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3" /> AI Prompt Input:
                    </span>
                    <p className="text-sm font-bold text-[#1A1A1A] italic">
                      "{selectedPrompt.prompt}"
                    </p>
                  </div>

                  <div className="bg-[#1A1A1A] text-white p-4 sm:p-5 rounded-2xl shadow-md border-2 border-[#2E2E2E]">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#FFD43B] flex items-center gap-1.5 mb-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-[#FFD43B]" /> Voiceover Script Synchronizer:
                    </span>
                    <p className="text-base sm:text-lg font-black text-white leading-snug">
                      "{currentScene.text}"
                    </p>

                    {/* Simulated Voice Waveform */}
                    <div className="mt-3 flex items-center gap-1 h-5">
                      {[40, 75, 100, 60, 30, 90, 85, 45, 95, 70, 35, 80, 60, 95, 50, 75, 30, 85].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full transition-all duration-150 ${
                            isPlaying ? 'bg-[#FFD43B]' : 'bg-[#525252]'
                          }`}
                          style={{
                            height: isPlaying ? `${Math.max(4, (h * ((drawProgress % 40) + 10)) / 50)}px` : '4px'
                          }}
                        />
                      ))}
                      <span className="text-[10px] text-[#A3A3A3] font-mono ml-auto">1080p HD</span>
                    </div>
                  </div>

                  {/* Scene Navigation & Playback Controls */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-[#1A1A1A] hover:bg-[#333333] text-white p-2.5 rounded-xl transition-colors flex items-center gap-1 text-xs font-black shadow-xs"
                        title={isPlaying ? 'Pause Simulator' : 'Play Simulator'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#FFD43B]" />}
                        <span>{isPlaying ? 'Pause' : 'Play'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setDrawProgress(0);
                          setIsPlaying(true);
                        }}
                        className="bg-white hover:bg-[#FAF9F5] text-[#1A1A1A] border-2 border-[#1A1A1A] p-2 rounded-xl transition-colors text-xs font-black flex items-center gap-1 shadow-xs"
                        title="Replay Scene"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Replay</span>
                      </button>
                    </div>

                    <div className="flex gap-1.5">
                      {selectedPrompt.scenes.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveSceneIndex(idx);
                            setDrawProgress(0);
                            setIsPlaying(true);
                          }}
                          className={`w-7 h-7 rounded-lg text-xs font-black border-2 transition-all ${
                            activeSceneIndex === idx
                              ? 'bg-[#FFD43B] text-[#1A1A1A] border-[#1A1A1A] shadow-xs'
                              : 'bg-white text-[#737373] border-[#E6E1D3] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Whiteboard Bottom Progress Bar */}
              <div className="relative z-10 mt-6 pt-4 border-t border-[#E6E1D3] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="w-full sm:w-1/2">
                  <div className="flex justify-between text-[11px] font-black text-[#525252] mb-1">
                    <span>Rendering Vector Strokes</span>
                    <span>{drawProgress}% Complete</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#FAF9F5] border border-[#D4CEBF] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFD43B] transition-all duration-75"
                      style={{ width: `${drawProgress}%` }}
                    />
                  </div>
                </div>

                <a
                  href={HOPLINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs sm:text-sm font-black px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-[2px_2px_0px_#FFD43B] transition-all"
                >
                  <Download className="w-4 h-4 text-[#FFD43B]" />
                  <span>Unlock Real App & Export Unlimited 1080p ($37)</span>
                </a>
              </div>
            </div>

            {/* Custom Interactive Prompt Input Box */}
            <div className="bg-[#FAF9F5] border-t-3 border-[#1A1A1A] p-4 sm:p-5">
              <form onSubmit={handleCustomPromptSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Type any video idea (e.g. How to get your first 1,000 email subscribers with doodles)..."
                  className="flex-1 bg-white border-2 border-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FFD43B] px-4 py-2.5 rounded-xl text-sm font-bold text-[#1A1A1A]"
                />
                <button
                  type="submit"
                  disabled={isRenderingCustom || !customPrompt.trim()}
                  className="bg-[#1A1A1A] hover:bg-[#333333] disabled:opacity-50 text-white font-black text-xs sm:text-sm px-6 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[2px_2px_0px_#FFD43B]"
                >
                  <Wand2 className="w-4 h-4 text-[#FFD43B]" />
                  <span>{isRenderingCustom ? 'Generating...' : 'Simulate Custom Text'}</span>
                </button>
              </form>
              <p className="text-[11px] text-[#737373] mt-2 text-center sm:text-left font-medium">
                💡 <b>Try it:</b> See how InstaDoodle converts any text description into a captivating hand-drawn explainer video scene.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
