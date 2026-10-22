"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  Zap,
  Clock,
  DollarSign,
  AlertOctagon,
  Sparkles,
  TrendingUp,
  Smile,
  Frown,
} from "lucide-react";

export function BeforeVsAfter() {
  const [viewMode, setViewMode] = useState<"after" | "before">("after");

  const comparisonPoints = [
    {
      metric: "Lead Response Time",
      before: "3 to 8 hours (or next morning)",
      after: "< 15 seconds, 24/7/365",
      detail: "AI immediately answers FAQs, qualifies budget, and sends booking link.",
    },
    {
      metric: "Data Entry & Sync",
      before: "15-20 hours/week manual copy-paste",
      after: "Zero seconds (100% automated background sync)",
      detail: "Google Sheets, Notion, HubSpot, and Stripe sync seamlessly with zero typos.",
    },
    {
      metric: "Invoicing & Payment Collection",
      before: "Manual PDF drafting, forgotten follow-ups",
      after: "Instant auto-generated invoices + WhatsApp reminders",
      detail: "Payment notifications reconcile immediately into accounting software.",
    },
    {
      metric: "Human Error Rate",
      before: "8% to 15% missing data & wrong phone numbers",
      after: "0.0% precision execution",
      detail: "Deterministic n8n node logic eliminates human transcription blunders.",
    },
    {
      metric: "Customer Experience",
      before: "Frustrating waiting times, unanswered WhatsApps",
      after: "Instant VIP responsiveness, always pleasant",
      detail: "Prospects feel cared for instantly, leading to higher closing rates.",
    },
    {
      metric: "Monthly Overhead Cost",
      before: "$1,500 - $3,000/mo extra admin payroll",
      after: "$0 extra headcount (Single one-off setup)",
      detail: "Scale your revenue 5x without hiring 5 more assistants.",
    },
  ];

  return (
    <section id="before-after" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORMATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Before vs. After: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-blue-600">
              The Power of Autonomous Systems
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See the exact operational shift when you replace messy manual human tasks
            with clean, reliable n8n + AI workflows.
          </p>

          {/* Interactive Visual Toggle */}
          <div className="pt-4 flex items-center justify-center w-full max-w-lg mx-auto">
            <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-white border border-slate-300/80 shadow-sm w-full">
              <button
                onClick={() => setViewMode("before")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === "before"
                    ? "bg-rose-50 text-rose-700 border border-rose-200 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Frown className="w-4 h-4 text-rose-500 shrink-0" />
                <span>
                  BEFORE <span className="hidden sm:inline font-normal text-xs text-rose-600/80">(Manual &amp; Slow)</span>
                </span>
              </button>

              <button
                onClick={() => setViewMode("after")}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === "after"
                    ? "bg-brand-500 text-white shadow-blue-glow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Smile className="w-4 h-4 text-white shrink-0" />
                <span>
                  AFTER <span className="hidden sm:inline font-normal text-xs text-white/90">(24/7 Autopilot)</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisonPoints.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-7 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                viewMode === "after"
                  ? "bg-white border-blue-200/90 shadow-glass"
                  : "bg-white border-rose-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    {item.metric}
                  </span>
                  {viewMode === "after" ? (
                    <span className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="p-1 rounded-full bg-rose-100 text-rose-700">
                      <X className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  {viewMode === "after" ? (
                    <div>
                      <div className="text-lg font-bold text-slate-950 flex items-center gap-2">
                        <span className="text-brand-600">⚡</span>
                        <span>{item.after}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-lg font-bold text-rose-700 flex items-center gap-2">
                        <span>⚠️</span>
                        <span>{item.before}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Leads get cold, high friction, human exhaustion, and unpredictable results.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                  viewMode === "after"
                    ? "border-slate-100 text-emerald-600"
                    : "border-slate-100 text-rose-600"
                }`}
              >
                <span>{viewMode === "after" ? "Autonomous Autopilot" : "Manual Drudgery"}</span>
                <span>{viewMode === "after" ? "ROI: Instant" : "Cost: Recurring"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-Side Quick Summary Bar */}
        <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <AlertOctagon className="w-4 h-4" />
              <span>The Status Quo Cost</span>
            </div>
            <p className="text-2xl font-black text-white">
              Over 1,000 Hours / Year
            </p>
            <p className="text-xs text-slate-400">
              Wasted on manual data transfers, chasing invoices, and typing repetitive WhatsApp responses.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>With Success Automations</span>
            </div>
            <p className="text-2xl font-black text-brand-400">
              $0 Headcount &bull; 100% Autopilot
            </p>
            <p className="text-xs text-slate-400">
              Your business operations run smoothly in the background while you focus on growth and closing deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
