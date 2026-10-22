"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export function StickyMobileCta({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick booking actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="https://wa.me/2348000000000?text=Hi%20Success%20Automations!%20I%20want%20to%20automate%20my%20business%20workflows."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-colors shrink-0"
          title="Direct WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        <button
          onClick={onOpenAudit}
          className="flex-1 py-3 px-4 rounded-xl bg-slate-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          <span>Book Free Audit (15 Min)</span>
          <ArrowRight className="w-4 h-4 text-brand-400" />
        </button>
      </div>
    </aside>
  );
}
