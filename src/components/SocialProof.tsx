"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2, Globe2, Quote, Bot, Sparkles, MessageSquare, Zap, ArrowRight } from "lucide-react";

export function SocialProof() {
  const tools = [
    { name: "n8n", category: "Core Engine", bg: "bg-red-50 text-red-600 border-red-200" },
    { name: "OpenAI", category: "LLM / GPT-4o", bg: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Claude 3.5", category: "Anthropic AI", bg: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: "WhatsApp API", category: "Meta Business", bg: "bg-green-50 text-green-700 border-green-200" },
    { name: "HubSpot", category: "CRM", bg: "bg-orange-50 text-orange-700 border-orange-200" },
    { name: "Google Sheets", category: "Data Sync", bg: "bg-teal-50 text-teal-700 border-teal-200" },
    { name: "Stripe", category: "Payments", bg: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { name: "Notion", category: "Knowledge Base", bg: "bg-slate-100 text-slate-800 border-slate-300" },
    { name: "Gmail", category: "Email Dispatch", bg: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Airtable", category: "Relational DB", bg: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Slack", category: "Team Alerts", bg: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "Calendly", category: "Auto-Scheduling", bg: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  ];

  const testimonials = [
    {
      name: "Jara Wallet",
      role: "Digital Wallet & Fintech Brand",
      location: "Lagos, Nigeria 🇳🇬",
      metric: "24/7 AI Chatbot Deployed",
      quote:
        "Success Automations built our customer support chatbot from the ground up. The AI handles user onboarding inquiries, wallet FAQs, and transaction guidance 24/7 with under 1-second response times. Transformed our user experience.",
      stars: 5,
    },
    {
      name: "Tunde Adeyemi",
      role: "Founder, Apex Real Estate",
      location: "Lagos, Nigeria 🇳🇬",
      metric: "400+ WhatsApp Leads Automated",
      quote:
        "Before Success Automations, our agents missed high-value property buyers inquiring on WhatsApp past 7 PM. Now, the AI auto-qualifies the buyer's budget, sends available listings, and books viewings on our calendars in seconds. Closed 3 extra deals in month one.",
      stars: 5,
    },
    {
      name: "Oliver Harrison",
      role: "Managing Director, Harrison & Co. Logistics",
      location: "London, UK 🇬🇧",
      metric: "Saved 24 Hours Every Week",
      quote:
        "We were drowning in manual consignment spreadsheets and dispatch emails. Success Automations connected our email parsing straight into Google Sheets and WhatsApp driver alerts via n8n. Flawless execution and delivered in just 5 days.",
      stars: 5,
    },
    {
      name: "Marcus Vance",
      role: "CEO, GrowthWave Digital Agency",
      location: "Austin, Texas, US 🇺🇸",
      metric: "Stripe Invoices 100% Automated",
      quote:
        "The sales follow-up and Stripe invoicing automation paid for itself on day 3. Invoices go out automatically, follow-ups happen without my team lifting a finger, and deals close without friction. True agency-grade work.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Geographic Trust Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm mb-4">
            <Globe2 className="w-3.5 h-3.5 text-brand-400" />
            <span>GLOBAL CLIENTELE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Trusted By Fast-Growing Businesses In <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600">
              Nigeria 🇳🇬 &bull; United Kingdom 🇬🇧 &bull; United States 🇺🇸
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From deploying 24/7 AI chatbots for brands like <strong className="text-slate-900 font-semibold">Jara Wallet</strong> to end-to-end operational workflows across three continents.
          </p>
        </div>

        {/* Quantified Impact Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
            <span className="text-3xl sm:text-4xl font-black text-slate-950 font-mono">
              250,000+
            </span>
            <p className="text-xs font-medium text-slate-600 mt-1">
              Automated Tasks Executed
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
            <span className="text-3xl sm:text-4xl font-black text-brand-600 font-mono">
              20+ hrs
            </span>
            <p className="text-xs font-medium text-slate-600 mt-1">
              Average Weekly Time Saved
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
              99.9%
            </span>
            <p className="text-xs font-medium text-slate-600 mt-1">
              Workflow Execution Uptime
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
            <span className="text-3xl sm:text-4xl font-black text-indigo-600 font-mono">
              3-7 Days
            </span>
            <p className="text-xs font-medium text-slate-600 mt-1">
              Rapid System Delivery
            </p>
          </div>
        </div>

        {/* Integrated Tools Marquee / Grid */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Seamless Integration With Your Existing Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-brand-500 hover:shadow-sm transition-all text-center flex flex-col items-center justify-center gap-1 group"
              >
                <span className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {tool.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Study Spotlight: Jara Wallet */}
        <div className="mb-14 sm:mb-20 rounded-3xl bg-slate-950 border border-slate-800 text-white p-5 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols: Story & Highlights */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 text-xs font-bold uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5" />
                <span>Featured Client Project</span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Jara Wallet
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Fintech &amp; Digital Wallet Brand
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200">
                  Automated 24/7 AI Customer Support Chatbot
                </h4>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                We engineered and deployed an intelligent conversational chatbot for <strong className="text-white font-semibold">Jara Wallet</strong>.
                The AI assistant handles customer inquiries, onboarding walkthroughs, transaction questions, and wallet FAQs in real time — eliminating customer wait times and freeing up their human operations.
              </p>

              {/* Core Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Instant 24/7 user support with zero wait time</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automated onboarding &amp; wallet navigation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Intelligent intent classification &amp; instant replies</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-reliability n8n + LLM conversation engine</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Live metrics & chat visual */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wide">
                    Chatbot Impact
                  </span>
                </div>
                <span className="text-[11px] font-mono text-brand-400">Jara Wallet Engine</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 font-mono">
                    &lt; 1s
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                    Avg Response Time
                  </p>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-brand-400 font-mono">
                    85%+
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                    Inquiries Resolved
                  </p>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-white font-mono">
                    24/7
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                    Automated Uptime
                  </p>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-indigo-400 font-mono">
                    0s
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                    Queue Wait Time
                  </p>
                </div>
              </div>

              {/* Chat snippet preview */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex items-start gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 shrink-0">User:</span>
                  <span className="text-slate-300">How do I verify my Jara Wallet tier 2 limit?</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-400 text-[10px] shrink-0 font-bold">Jara Bot:</span>
                  <span className="text-emerald-400">To upgrade to Tier 2, head to Settings &gt; KYC &gt; upload a valid ID. Verification is automatic in under 2 mins! ⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
            What Founders &amp; Operators Say
          </span>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-glass-lg hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {test.metric}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {test.name}
                  </h4>
                  <p className="text-xs text-slate-500">{test.role}</p>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  {test.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
