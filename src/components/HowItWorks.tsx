"use client";

import React from "react";
import { PhoneCall, Cpu, CheckCheck, ArrowRight, Zap, ShieldCheck, Clock } from "lucide-react";

export function HowItWorks({ onOpenAudit }: { onOpenAudit: () => void }) {
  const steps = [
    {
      stepNumber: "01",
      icon: PhoneCall,
      title: "You Show Me The Boring Work",
      subtitle: "15-Min Discovery & Workflow Mapping Call",
      timeline: "Day 1 (15 Minutes)",
      description:
        "Hop on a quick Zoom call. Share your screen or describe your bottlenecks: where are you copy-pasting? Which WhatsApp messages are you typing over and over? We map out the high-ROI automation roadmap together.",
      deliverable: "Custom Automation Blueprint & ROI calculation",
      badge: "Zero Commitment",
    },
    {
      stepNumber: "02",
      icon: Cpu,
      title: "I Build The System in n8n",
      subtitle: "Rapid Engineering, Webhooks & AI Prompts",
      timeline: "Days 2 - 5",
      description:
        "I build the complete architecture in n8n, configure the AI models (Claude 3.5 / ChatGPT-4o), connect your APIs (WhatsApp, CRM, Sheets, Stripe), and build strict error handling so nothing breaks.",
      deliverable: "Fully configured sandbox & live testing",
      badge: "Turnkey Development",
    },
    {
      stepNumber: "03",
      icon: CheckCheck,
      title: "Your Business Runs On Autopilot",
      subtitle: "Deployment, Team Walkthrough & Handover",
      timeline: "Day 6 - 7",
      description:
        "We push the workflows live. I walk your team through the system with a short Loom video, provide documentation, and monitor the first 500 executions to guarantee 99.9% smooth operation.",
      deliverable: "Self-running pipeline + 30-day warranty",
      badge: "24/7 Freedom",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-600 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>SIMPLE 3-STEP PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            From Manual Headache to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-blue-600">
              Autopilot in 3 to 7 Days
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No long drawn-out corporate timelines. We move fast, deploy stable n8n
            workflows, and get you back your time immediately.
          </p>
        </div>

        {/* Desktop Animated n8n Connecting Flow Line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-12 pointer-events-none z-0">
            <svg
              className="w-full h-16 overflow-visible"
              viewBox="0 0 1000 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background trace line */}
              <path
                d="M 50 30 C 250 30, 250 30, 500 30 C 750 30, 750 30, 950 30"
                stroke="#E2E8F0"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              {/* Animated active electric blue flow line */}
              <path
                d="M 50 30 C 250 30, 250 30, 500 30 C 750 30, 750 30, 950 30"
                stroke="#0066FF"
                strokeWidth="4"
                className="animate-flow-dash"
              />
              {/* Middle node indicator */}
              <circle cx="500" cy="30" r="7" fill="#0066FF" className="animate-ping opacity-75" />
              <circle cx="500" cy="30" r="5" fill="#0066FF" />
            </svg>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-glass-lg hover:border-brand-500 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center font-mono text-base font-bold shadow-md group-hover:bg-brand-500 transition-colors">
                          <Icon className="w-6 h-6 text-brand-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-brand-500 transition-colors">
                          {step.stepNumber}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-brand-700 border border-blue-200/80">
                        {step.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-brand-600">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.timeline}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mb-4">
                      {step.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Deliverable:
                      </span>
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Bottom Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-brand-500 shadow-md hover:shadow-blue-glow transition-all duration-300 group"
          >
            <span>Start With Step 1: Book Your 15-Min Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-slate-400 mt-2.5">
            Free 15-minute diagnostic. No pushy sales pitching — just actionable automation architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
