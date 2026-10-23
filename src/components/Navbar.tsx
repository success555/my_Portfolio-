"use client";

import React, { useState } from "react";
import { Zap, Menu, X, ArrowRight, MessageCircle } from "lucide-react";

export function Navbar({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/85 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950 flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:bg-brand-500 transition-colors duration-300 shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-slate-950 text-base sm:text-lg leading-none flex items-center gap-1">
                SUCCESS <span className="text-brand-500">AUTOMATIONS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-slate-400 mt-0.5 sm:mt-1">
                AI + n8n Systems
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-slate-950 transition-colors">
              The Problem
            </a>
            <a href="#services" className="hover:text-slate-950 transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-slate-950 transition-colors">
              How It Works
            </a>
            <a href="#before-after" className="hover:text-slate-950 transition-colors">
              Before & After
            </a>
            <a href="#pricing" className="hover:text-slate-950 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-950 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/2349069118159?text=Hi%20Success%20Automations!%20I%20want%20to%20automate%20my%20business%20workflows."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              title="Chat on WhatsApp (+234 906 911 8159)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenAudit}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-brand-500 rounded-lg shadow-sm transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              The Problem
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              How It Works
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Before & After
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-blue-glow-sm"
            >
              Get My Free Automation Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/2349069118159?text=Hi%20Success%20Automations!%20I%20want%20to%20automate%20my%20business%20workflows."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp (+234 906 911 8159)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
