import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Play, Pause, RotateCcw, Volume2, VolumeX, ArrowRight, Wand2, Layers, CheckCircle2, Sliders, Palette, Zap } from 'lucide-react';
import { DEMO_PROMPTS, HAND_STYLES, HOPLINK } from '../constants';
import { DemoPrompt, HandStyle } from '../types';

export const InteractiveStudio: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<DemoPrompt>(DEMO_PROMPTS[0]);
  const [customPromptText, setCustomPromptText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [drawingProgress, setDrawingProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [boardStyle, setBoardStyle] = useState<'whiteboard' | 'chalkboard' | 'glassboard' | 'color'>('whiteboard');
  const [selectedHand, setSelectedHand] = useState<HandStyle>(HAND_STYLES[0]);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Web Audio Synth for marker sketching sound
  const playSketchSound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140 + Math.random() * 120, ctx.currentTime);
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.Q.setValueAtTime(3, ctx.currentTime);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // Audio fallback
    }
  };

  // Scene animation timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isGenerating) {
      interval = setInterval(() => {
        setDrawingProgress((prev) => {
          if (prev >= 100) {
            setActiveSceneIdx((s) => (s + 1) % selectedPrompt.scenes.length);
            return 0;
          }
          if (prev % 15 === 0) {
            playSketchSound();
          }
          return prev + 3;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isGenerating, selectedPrompt, soundEnabled]);

  const handleSelectPreset = (prompt: DemoPrompt) => {
    setSelectedPrompt(prompt);
    setActiveSceneIdx(0);
    setDrawingProgress(0);
    setIsPlaying(true);
  };

  const handleGenerateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPromptText.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      const newPrompt: DemoPrompt = {
        id: 'custom-' + Date.now(),
        category: 'Custom Prompt',
        title: customPromptText.slice(0, 30) + '...',
        prompt: customPromptText,
        duration: '45 sec',
        doodleType: 'custom',
        scenes: [
          { text: `Scene 1: Introducing problem from "${customPromptText.slice(0, 24)}..."`, action: 'Sketching central dilemma outline', strokeCount: 16 },
          { text: 'Scene 2: DoodleAI automatically generates visual metaphor', action: 'Drawing precision solution vectors & gear icons', strokeCount: 24 },
          { text: 'Scene 3: Clear call-to-action with animated checkmark', action: 'Drawing conversion arrow & verified badge', strokeCount: 18 }
        ]
      };
      setSelectedPrompt(newPrompt);
      setActiveSceneIdx(0);
      setDrawingProgress(0);
      setIsGenerating(false);
      setIsPlaying(true);
    }, 1200);
  };

  const currentScene = selectedPrompt.scenes[activeSceneIdx] || selectedPrompt.scenes[0];

  // Board theme styles
  const boardBgClass = {
    whiteboard: 'bg-[#FFFFFF] text-[#1A1A1A]',
    chalkboard: 'bg-[#1E2D24] text-[#E0E7E1]',
    glassboard: 'bg-[#0F172A] text-[#38BDF8]',
    color: 'bg-[#FFFBEB] text-[#78350F]'
  }[boardStyle];

  const strokeColor = {
    whiteboard: '#1A1A1A',
    chalkboard: '#E0E7E1',
    glassboard: '#38BDF8',
    color: '#D97706'
  }[boardStyle];

  return (
    <section id="demo" className="py-16 lg:py-24 bg-[#FDFCF8] border-b-2 border-[#E6E1D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD43B] text-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#1A1A1A]">
            <Wand2 className="w-3.5 h-3.5" /> Interactive DoodleAI™ Studio Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Type Any Topic &amp; Watch InstaDoodle <span className="underline decoration-[#FFD43B] decoration-4">Draw It In Real-Time</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525252] font-medium">
            Test the prompt-to-video workflow right here. Switch art styles, test left/right hands, and see how easy it is to create high-retention whiteboard scenes.
          </p>
        </div>

        {/* Studio Shell Card */}
        <div className="bg-white border-3 border-[#1A1A1A] rounded-3xl p-4 sm:p-8 shadow-[10px_10px_0px_#1A1A1A] mb-10">
          
          {/* Top Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-[#E6E1D3]">
            
            {/* Presets Picker */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              <span className="text-xs font-black uppercase text-[#737373] shrink-0">Presets:</span>
              {DEMO_PROMPTS.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPreset(p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 border-2 ${
                    selectedPrompt.id === p.id
                      ? 'bg-[#FFD43B] text-[#1A1A1A] border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]'
                      : 'bg-[#FAF9F5] text-[#525252] border-[#D4D4D4] hover:border-[#1A1A1A]'
                  }`}
                >
                  {p.category}
                </button>
              ))}
            </div>

            {/* Canvas Customizers */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Board Style Switcher */}
              <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border-2 border-[#1A1A1A]">
                <button
                  onClick={() => setBoardStyle('whiteboard')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                    boardStyle === 'whiteboard' ? 'bg-[#FFFFFF] text-[#1A1A1A] shadow-xs' : 'text-[#737373]'
                  }`}
                  title="Whiteboard"
                >
                  White
                </button>
                <button
                  onClick={() => setBoardStyle('chalkboard')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                    boardStyle === 'chalkboard' ? 'bg-[#1E2D24] text-white shadow-xs' : 'text-[#737373]'
                  }`}
                  title="Chalkboard"
                >
                  Chalk
                </button>
                <button
                  onClick={() => setBoardStyle('glassboard')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                    boardStyle === 'glassboard' ? 'bg-[#0F172A] text-[#38BDF8] shadow-xs' : 'text-[#737373]'
                  }`}
                  title="Glassboard Glow"
                >
                  Glass
                </button>
              </div>

              {/* Aspect Ratio */}
              <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border-2 border-[#1A1A1A]">
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={`px-2 py-1 rounded-lg text-xs font-black ${
                    aspectRatio === '16:9' ? 'bg-[#FFD43B] text-[#1A1A1A]' : 'text-[#737373]'
                  }`}
                >
                  16:9 YouTube
                </button>
                <button
                  onClick={() => setAspectRatio('9:16')}
                  className={`px-2 py-1 rounded-lg text-xs font-black ${
                    aspectRatio === '9:16' ? 'bg-[#FFD43B] text-[#1A1A1A]' : 'text-[#737373]'
                  }`}
                >
                  9:16 Shorts
                </button>
              </div>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl border-2 border-[#1A1A1A] font-black text-xs flex items-center gap-1.5 transition-all ${
                  soundEnabled ? 'bg-[#FFD43B] text-[#1A1A1A]' : 'bg-[#FAF9F5] text-[#737373]'
                }`}
                title="Toggle Sketch ASMR Sound"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden sm:inline">{soundEnabled ? 'Sound ON' : 'Sound OFF'}</span>
              </button>
            </div>

          </div>

          {/* Main Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Canvas Stage */}
            <div className="lg:col-span-8 flex flex-col items-center">
              
              {/* The Drawing Canvas Box */}
              <div
                className={`w-full border-3 border-[#1A1A1A] rounded-2xl p-6 sm:p-10 transition-colors relative overflow-hidden shadow-[6px_6px_0px_#1A1A1A] ${boardBgClass} ${
                  aspectRatio === '9:16' ? 'max-w-md mx-auto aspect-[9/14]' : 'aspect-[16/10]'
                } flex flex-col justify-between`}
              >
                {/* Board Watermark / Brand stamp */}
                <div className="flex items-center justify-between text-xs opacity-60 font-black tracking-widest uppercase">
                  <span>Scene {activeSceneIdx + 1} of {selectedPrompt.scenes.length}</span>
                  <span>1080p HD Studio</span>
                </div>

                {/* Simulated Animated Hand & Drawing Visual */}
                <div className="flex-1 flex flex-col items-center justify-center my-4 relative">
                  
                  {isGenerating ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 border-4 border-[#FFD43B] border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm font-black tracking-wide uppercase">DoodleAI Generating Storyboard...</span>
                    </div>
                  ) : (
                    <div className="w-full max-w-lg text-center space-y-4 relative">
                      
                      {/* Interactive Drawn SVG Path Representation */}
                      <svg className="w-48 h-32 mx-auto drop-shadow-md" viewBox="0 0 200 120" fill="none">
                        {/* Dynamic stroke drawing based on progress */}
                        <path
                          d="M 20 100 Q 60 20 100 60 T 180 30"
                          stroke={strokeColor}
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray="260"
                          strokeDashoffset={260 - (drawingProgress / 100) * 260}
                          className="transition-all duration-75"
                        />
                        <circle
                          cx="60"
                          cy="40"
                          r="18"
                          stroke={strokeColor}
                          strokeWidth="4"
                          strokeDasharray="120"
                          strokeDashoffset={120 - (drawingProgress / 100) * 120}
                        />
                        <rect
                          x="120"
                          y="50"
                          width="50"
                          height="40"
                          rx="8"
                          stroke={strokeColor}
                          strokeWidth="4"
                          strokeDasharray="180"
                          strokeDashoffset={180 - (drawingProgress / 100) * 180}
                        />
                      </svg>

                      {/* Moving Hand Overlay */}
                      {selectedHand.handType !== 'none' && (
                        <div
                          className="absolute pointer-events-none transition-all duration-75"
                          style={{
                            left: `${Math.min(90, Math.max(10, drawingProgress))}%`,
                            top: `${30 + Math.sin(drawingProgress / 10) * 15}%`,
                            transform: 'translate(-20%, -30%)'
                          }}
                        >
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-[#FFD43B]/20 animate-ping absolute -top-2 -left-2" />
                            {/* Stylized Hand & Pen Marker */}
                            <div className="bg-[#1A1A1A] text-white p-2 rounded-xl border-2 border-white shadow-md text-[10px] font-black flex items-center gap-1.5 -rotate-12">
                              ✍️ <span>{selectedHand.name.split(' ')[0]} Hand</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Script Caption Bar */}
                      <div className="bg-[#1A1A1A]/90 text-white p-3.5 rounded-xl border-2 border-[#1A1A1A] text-xs sm:text-sm font-bold shadow-md max-w-md mx-auto mt-4">
                        "{currentScene.text}"
                      </div>

                    </div>
                  )}

                </div>

                {/* Timeline & Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-wider">
                    <span>Action: {currentScene.action}</span>
                    <span>Drawing: {drawingProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-[#1A1A1A]/10 rounded-full overflow-hidden border border-[#1A1A1A]/20">
                    <div
                      className="h-full bg-[#FFD43B] transition-all duration-75"
                      style={{ width: `${drawingProgress}%` }}
                    />
                  </div>
                </div>

              </div>

              {/* Player Bottom Transport Controls */}
              <div className="flex items-center justify-between w-full max-w-lg mt-4 px-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-xl bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] font-black text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_#FFD43B] hover:bg-[#333333] transition-all"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#FFD43B]" /> : <Play className="w-4 h-4 text-[#FFD43B]" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setDrawingProgress(0);
                      setActiveSceneIdx(0);
                    }}
                    className="p-2.5 rounded-xl bg-[#FAF9F5] text-[#1A1A1A] border-2 border-[#1A1A1A] font-black text-xs flex items-center gap-1 hover:bg-[#EAE6D9]"
                    title="Restart Preview"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Scene Dots */}
                <div className="flex items-center gap-1.5">
                  {selectedPrompt.scenes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveSceneIdx(i);
                        setDrawingProgress(0);
                      }}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSceneIdx === i ? 'w-6 bg-[#1A1A1A]' : 'w-2.5 bg-[#D4D4D4]'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Prompt Input & Hand Style Selector */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Custom Prompt Box */}
              <div className="bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-2xl p-5 shadow-[4px_4px_0px_#1A1A1A]">
                <div className="flex items-center gap-2 mb-2 font-black text-sm text-[#1A1A1A]">
                  <Zap className="w-4 h-4 text-[#FFD43B]" />
                  <span>Try Your Own Script / Prompt:</span>
                </div>
                <form onSubmit={handleGenerateCustom} className="space-y-3">
                  <textarea
                    value={customPromptText}
                    onChange={(e) => setCustomPromptText(e.target.value)}
                    placeholder="e.g. Draw a doctor explaining why keto works, then show a healthy heart with a 5-star rating..."
                    rows={3}
                    className="w-full text-xs font-medium p-3 rounded-xl border-2 border-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD43B] text-[#1A1A1A]"
                  />
                  <button
                    type="submit"
                    disabled={isGenerating || !customPromptText.trim()}
                    className="w-full py-3 bg-[#FFD43B] hover:bg-[#F3C72A] disabled:opacity-50 text-[#1A1A1A] font-black text-xs rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A] flex items-center justify-center gap-1.5 active:translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Doodle Animation</span>
                  </button>
                </form>
              </div>

              {/* Hand Styles List */}
              <div className="bg-[#FAF9F5] border-3 border-[#1A1A1A] rounded-2xl p-5 shadow-[4px_4px_0px_#1A1A1A]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-black text-sm text-[#1A1A1A]">Pick Hand Style ({HAND_STYLES.length}):</span>
                  <span className="text-[10px] font-black uppercase text-[#737373]">1,000+ in Library</span>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                  {HAND_STYLES.map((hand) => (
                    <button
                      key={hand.id}
                      onClick={() => setSelectedHand(hand)}
                      className={`w-full text-left p-2.5 rounded-xl border-2 transition-all flex items-center justify-between text-xs ${
                        selectedHand.id === hand.id
                          ? 'bg-[#FFD43B] text-[#1A1A1A] border-[#1A1A1A] font-black shadow-xs'
                          : 'bg-white text-[#525252] border-[#E6E1D3] hover:border-[#1A1A1A] font-medium'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{hand.name}</span>
                        <span className="text-[10px] text-[#737373]">{hand.penType}</span>
                      </div>
                      {selectedHand.id === hand.id && <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fast Direct Action Callout */}
              <div className="bg-[#1A1A1A] text-white p-5 rounded-2xl border-3 border-[#1A1A1A] shadow-[4px_4px_0px_#FFD43B] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[#FFD43B]">Unlimited Exports</span>
                  <span className="text-lg font-black text-white">$37 One-Time</span>
                </div>
                <p className="text-xs text-[#D4D4D4] font-medium leading-relaxed">
                  Includes 150 AI Starter Credits, commercial license, 1080p full HD rendering, and all 4 free bonuses.
                </p>
                <a
                  id="studio-direct-cta"
                  href={HOPLINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#FFD43B] hover:bg-[#F3C72A] text-[#1A1A1A] font-black text-xs sm:text-sm rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#FFFFFF] flex items-center justify-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Full Software License ($37)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
