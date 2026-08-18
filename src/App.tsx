/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveStudio } from './components/InteractiveStudio';
import { ShowcaseSection } from './components/ShowcaseSection';
import { TemplateGallerySection } from './components/TemplateGallerySection';
import { ImageToSketchSection } from './components/ImageToSketchSection';
import { StorySection } from './components/StorySection';
import { RoiSection } from './components/RoiSection';
import { FinePrintSection } from './components/FinePrintSection';
import { BonusSection } from './components/BonusSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#FFD43B] selection:text-[#1A1A1A]">
      {/* Top Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section with Embedded Video Demo */}
        <HeroSection />

        {/* 2. Interactive DoodleAI Studio Simulator (Custom Prompts, Board Styles, Aspect Ratios) */}
        <InteractiveStudio />

        {/* 3. 3-Step Creation Workflow & Core Feature Pillars */}
        <ShowcaseSection />

        {/* 4. 350+ Ready-To-Use Niche Templates Gallery */}
        <TemplateGallerySection />

        {/* 5. 1-Click Image to Vector Sketch Converter */}
        <ImageToSketchSection />

        {/* 6. The Retention Problem & Dual-Coding Psychology */}
        <StorySection />

        {/* 7. Interactive ROI Calculator & Competitor Comparison Matrix */}
        <RoiSection />

        {/* 8. Radical Transparency & Fine Print Breakdown */}
        <FinePrintSection />

        {/* 9. 4 Free Bonuses Stack ($180 Value) */}
        <BonusSection />

        {/* 10. Verified User Testimonials & Proof */}
        <TestimonialSection />

        {/* 11. Final Conversion Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Footer with Transparency Disclosures */}
      <Footer />

      {/* Mobile-First Sticky Bottom Call To Action */}
      <StickyMobileBar />
    </div>
  );
}


