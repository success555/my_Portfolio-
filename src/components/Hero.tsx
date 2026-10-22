"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  Zap,
  Bot,
  MessageSquare,
  FileSpreadsheet,
  Database,
  Send,
  Layers,
  ChevronRight,
} from "lucide-react";

export function Hero({
  onOpenAudit,
  onOpenDemo,
}: {
  onOpenAudit: () => void;
  onOpenDemo: () => void;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);

  // Auto-cycle through automation steps to demonstrate live execution
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-dot-pattern">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none bg-gradient-radial-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-sm hover:bg-blue-100/70 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
            <span className="inline-block font-medium">
              Top-Rated AI + n8n Automation Specialist
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-normal">Save 20+ hrs/week</span>
          </div>
        </div>

        {/* Headline & Subhead */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.12] sm:leading-[1.08]">
            We Build Automations <br className="hidden sm:inline" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-blue-600 to-indigo-600">
              That Make Work Easy
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            For startups to enterprises — we turn your repetitive tasks into
            self-running AI workflows using <span className="font-semibold text-slate-900">n8n</span>.
            No more manual follow-ups, copy-paste data entry, or missed high-value leads.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-slate-950 hover:bg-brand-500 rounded-xl shadow-lg hover:shadow-blue-glow transition-all duration-300 group"
            >
              <span>Get My Free Automation Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl shadow-sm hover:border-slate-400 transition-all group"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>See How It Works</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium">
                60s Demo
              </span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              <span>Zero coding needed on your end</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              <span>Live in 3 to 7 days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              <span>Full turnkey n8n setup & training</span>
            </div>
          </div>

          {/* Client spotlight ticker badge */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 font-medium">
            <span className="text-slate-400">Trusted by fast-moving brands including</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900 text-white font-bold text-[11px] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Jara Wallet (AI Chatbot)
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">Apex Real Estate</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">GrowthWave</span>
          </div>
        </div>

        {/* HERO VISUAL: Split Screen (Messy Chaos vs Clean n8n Automation Flow) */}
        <div className="mt-14 lg:mt-18 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-glass-lg overflow-hidden">
            {/* Visual Top Bar */}
            <div className="bg-slate-900 px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                  system-comparison://success-automations/live-flow
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  n8n engine: active
                </span>
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="text-[11px] text-slate-400 hover:text-white underline underline-offset-2 hidden sm:inline"
                >
                  {isSimulating ? "Pause preview" : "Resume preview"}
                </button>
              </div>
            </div>

            {/* Split Screen Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {/* LEFT SIDE: Messy Manual Work (The Chaos) */}
              <div className="lg:col-span-5 p-5 sm:p-7 bg-slate-50/70 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <h3 className="font-bold text-slate-900 text-sm tracking-tight uppercase">
                      Without Automations (Chaos)
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                    22 hrs wasted / wk
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Chaos Item 1: 100 Tabs & Spreadsheet Hell */}
                  <div className="p-3.5 rounded-xl bg-white border border-rose-200/90 shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500" />
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-rose-50 text-rose-600 shrink-0">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">
                            Messy Excel & 47 Chrome Tabs
                          </p>
                          <span className="text-[10px] text-rose-500 font-medium">Overdue</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Copy-pasting names, phone numbers, and orders by hand across 4 spreadsheets. Typos everywhere.
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded">Row 382: NULL</span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded">Sync Error: 404</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chaos Item 2: WhatsApp Pings at 11pm */}
                  <div className="p-3.5 rounded-xl bg-white border border-amber-200/90 shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">
                            WhatsApp Pings Piling Up
                          </p>
                          <span className="text-[10px] text-amber-600 font-semibold">14 Unread</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          &quot;Did anyone reply to Daniel about the $2,500 quote?&quot; Lead went cold 6 hours ago.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chaos Item 3: Forgotten Invoices & Manual Followups */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-400" />
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">
                            Manual Invoicing & Late Chasing
                          </p>
                          <span className="text-[10px] text-slate-500 font-medium">Late by 9d</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          Writing PDFs manually, forgetting to send reminder emails, cashflow blocked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-rose-600 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5" /> High Human Fatigue
                  </span>
                  <span>Human Error Rate: ~12%</span>
                </div>
              </div>

              {/* RIGHT SIDE: Clean Automation Flow with n8n Nodes */}
              <div className="lg:col-span-7 p-5 sm:p-7 bg-white relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-ping" />
                    <h3 className="font-bold text-slate-900 text-sm tracking-tight uppercase flex items-center gap-1.5">
                      Success Automations (n8n + AI)
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                    Runs 24/7 in 0.8s
                  </span>
                </div>

                {/* Simulated Live n8n Pipeline */}
                <div className="space-y-3 relative">
                  {/* Step 0: Webhook Trigger */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 ${
                      activeStep === 0
                        ? "bg-blue-50/60 border-brand-500 shadow-blue-glow-sm"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors shrink-0 ${
                            activeStep === 0
                              ? "bg-brand-500 text-white shadow-sm"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 leading-snug">
                              Webhook: New Lead Inbound
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              WhatsApp / Web
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            Payload captured with phone, intent &amp; budget
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-brand-600">
                          {activeStep === 0 ? "⚡ Running..." : "✓ 0.12s"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1.5">
                    <div className="w-0.5 h-3 bg-brand-400" />
                  </div>

                  {/* Step 1: Claude/GPT-4 AI Extraction */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 ${
                      activeStep === 1
                        ? "bg-blue-50/60 border-brand-500 shadow-blue-glow-sm"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors shrink-0 ${
                            activeStep === 1
                              ? "bg-brand-500 text-white shadow-sm"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 leading-snug">
                              AI Node: Lead Qualification
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-50 text-purple-700">
                              Score: 94/100
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            Analyzes lead, writes custom proposal draft &amp; urgency
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-brand-600">
                          {activeStep === 1 ? "⚡ Thinking..." : "✓ 0.45s"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1.5">
                    <div className="w-0.5 h-3 bg-brand-400" />
                  </div>

                  {/* Step 2: Instant WhatsApp Reply */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 ${
                      activeStep === 2
                        ? "bg-blue-50/60 border-brand-500 shadow-blue-glow-sm"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors shrink-0 ${
                            activeStep === 2
                              ? "bg-brand-500 text-white shadow-sm"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 leading-snug">
                              WhatsApp API: Auto-Reply
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                              Instant &lt; 5s
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            &quot;Hi Daniel, here is the custom quote &amp; booking link...&quot;
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-brand-600">
                          {activeStep === 2 ? "⚡ Sending..." : "✓ 0.20s"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-1.5">
                    <div className="w-0.5 h-3 bg-brand-400" />
                  </div>

                  {/* Step 3: CRM & Invoice Auto-Sync */}
                  <div
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all duration-300 ${
                      activeStep === 3
                        ? "bg-blue-50/60 border-brand-500 shadow-blue-glow-sm"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors shrink-0 ${
                            activeStep === 3
                              ? "bg-brand-500 text-white shadow-sm"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 leading-snug">
                              HubSpot &amp; Stripe Sync
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-brand-700">
                              Auto-Recorded
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            Deal stage moved to &apos;Qualified&apos;, team alerted in Slack
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-brand-600">
                          {activeStep === 3 ? "⚡ Synced!" : "✓ 0.15s"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" /> Total Time: 0.92 Seconds
                  </span>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % 4)}
                    className="text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1"
                  >
                    Trigger Step Manual <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
