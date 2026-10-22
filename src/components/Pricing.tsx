"use client";

import React from "react";
import { Check, Zap, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export function Pricing({
  onSelectTier,
}: {
  onSelectTier: (tierName: string, price: string) => void;
}) {
  const plans = [
    {
      name: "Automation Starter",
      price: "₦ 750,000",
      period: "one-time investment",
      badge: "Quick Win",
      description: "Fix one major operational bottleneck and free up 5-10 hours every week.",
      turnaround: "Delivered in 3 Days",
      popular: false,
      features: [
        "1 Core Automated Workflow (n8n)",
        "Single Integration Pipeline (e.g. Leads to CRM or WhatsApp Bot)",
        "AI Prompts & Extraction logic included",
        "Full webhook & error handling",
        "Team video walkthrough & setup documentation",
        "14-Day Post-Launch Support & Tweaks",
      ],
      idealFor: "Ideal for businesses looking to test the waters and solve one painful task immediately.",
      cta: "Get Started - ₦ 750,000",
    },
    {
      name: "Business Autopilot",
      price: "₦ 2,240,000",
      period: "one-time investment",
      badge: "MOST POPULAR",
      description: "Turn 3 core operations into a self-running machine. Save 20+ hours every week.",
      turnaround: "Delivered in 5 to 7 Days",
      popular: true,
      features: [
        "3 Core End-to-End Automations (n8n)",
        "WhatsApp AI Smart Agent (Claude 3.5 / ChatGPT)",
        "Automated Lead Capture + CRM Deal Sync",
        "Automated Invoicing & Stripe Payment Tracking",
        "Multi-tool syncing: Sheets, Notion, Gmail, Slack",
        "Custom fallback handling (zero dropped data)",
        "30-Day VIP Support & Fine-Tuning Guarantee",
      ],
      idealFor: "Ideal for growing startups and agencies looking to eliminate manual busywork permanently.",
      cta: "Claim Business Autopilot",
    },
    {
      name: "Enterprise System",
      price: "Custom",
      period: "tailored architecture",
      badge: "Full Scale",
      description: "A complete autonomous operating system built specifically for your enterprise logic.",
      turnaround: "Phased Deployment (2-3 Weeks)",
      popular: false,
      features: [
        "Unlimited / Bespoke n8n Workflow Architecture",
        "Multi-Agent AI Systems & Vector Knowledge Bases",
        "Internal Database & Legacy Software Integrations",
        "Custom Webhooks, Auth & Security Hardening",
        "Self-Hosted n8n Instance Setup (Optional)",
        "Dedicated Slack Channel & Priority SLA",
        "Ongoing Monthly Optimization & Maintenance",
      ],
      idealFor: "Ideal for established companies with multiple departments and custom legacy software.",
      cta: "Book Custom Consultation",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-600 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Simple, High-ROI Investment. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-blue-600">
              No Hidden Fees. No Retainers Required.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            One-time implementation fees that pay for themselves within the first 30 days
            in recovered sales and saved labor hours.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-slate-950 text-white shadow-glass-lg lg:-translate-y-2 border-2 border-brand-500"
                  : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:border-slate-300"
              }`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-500 text-white font-bold text-xs uppercase tracking-wider shadow-blue-glow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      plan.popular ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {!plan.popular && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span
                    className={`text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-black font-mono tracking-tight whitespace-nowrap ${
                      plan.popular ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    / {plan.period}
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm mb-4 leading-relaxed ${
                    plan.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-lg mb-6 ${
                    plan.popular
                      ? "bg-brand-500/20 text-brand-300 border border-brand-500/40"
                      : "bg-blue-50 text-brand-700 border border-blue-200"
                  }`}
                >
                  ⚡ {plan.turnaround}
                </div>

                <div
                  className={`pt-6 border-t ${
                    plan.popular ? "border-slate-800" : "border-slate-100"
                  }`}
                >
                  <p
                    className={`text-xs uppercase font-bold tracking-wider mb-4 ${
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-brand-400" : "text-brand-600"
                          }`}
                        />
                        <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectTier(plan.name, plan.price)}
                  className={`w-full py-4 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 group ${
                    plan.popular
                      ? "bg-brand-500 hover:bg-brand-600 text-white shadow-blue-glow"
                      : "bg-slate-950 hover:bg-brand-500 text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p
                  className={`text-[11px] text-center mt-3 ${
                    plan.popular ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {plan.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-950 text-base sm:text-lg">
              100% Risk-Free Delivery Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If the deployed automation doesn&apos;t save you the agreed hours or run smoothly
              in testing, we iterate until it does — or you don&apos;t pay a single cent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
