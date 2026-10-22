"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { WhatIAutomate } from "@/components/WhatIAutomate";
import { HowItWorks } from "@/components/HowItWorks";
import { BeforeVsAfter } from "@/components/BeforeVsAfter";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { DemoModal } from "@/components/DemoModal";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToAudit = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const target = document.getElementById("book-audit");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectTier = (tierName: string, price: string) => {
    setSelectedService(`${tierName} (${price})`);
    scrollToAudit();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Banner Announcement */}
      <div className="bg-slate-950 text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium border-b border-slate-800">
        <span className="text-brand-400 font-bold mr-2">⚡ NEW:</span>
        Automate your business WhatsApp with Claude 3.5 &amp; n8n in under 7 days.
        <a
          href="#book-audit"
          className="ml-2 underline font-semibold text-white hover:text-brand-400 transition-colors"
        >
          Book 15-Min Audit &rarr;
        </a>
      </div>

      {/* Navigation */}
      <Navbar onOpenAudit={() => scrollToAudit()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenAudit={() => scrollToAudit()}
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* Section 2: The Problem */}
        <TheProblem onOpenAudit={() => scrollToAudit()} />

        {/* Section 3: What I Automate */}
        <WhatIAutomate
          onSelectService={(service) => scrollToAudit(service)}
        />

        {/* Section 4: How It Works */}
        <HowItWorks onOpenAudit={() => scrollToAudit()} />

        {/* Section 5: Before vs After */}
        <BeforeVsAfter />

        {/* Section 6: Social Proof & Global Trust */}
        <SocialProof />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onOpenAudit={() => scrollToAudit()} />

        {/* Section 7: Pricing */}
        <Pricing onSelectTier={handleSelectTier} />

        {/* Section 8: FAQ */}
        <Faq />

        {/* Section 9: Final CTA & Booking */}
        <FinalCta defaultService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta onOpenAudit={() => scrollToAudit()} />

      {/* Interactive 60s Demo Modal */}
      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        onOpenAudit={() => scrollToAudit("60s Demo Follow-up")}
      />
    </div>
  );
}
