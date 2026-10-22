"use client";

import React, { useState } from "react";
import {
  UserCheck,
  MessageSquare,
  Receipt,
  Share2,
  RefreshCw,
  Cpu,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export function WhatIAutomate({ onSelectService }: { onSelectService: (serviceName: string) => void }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      id: "leads",
      icon: UserCheck,
      title: "Lead Capture to CRM Automation",
      subtitle: "Instant lead ingestion, AI qualification & pipeline routing",
      whatItDoes:
        "Every lead from your website, Facebook ads, LinkedIn, or WhatsApp is automatically captured, enriched with company details, scored by AI, and injected into HubSpot or Notion in under 3 seconds.",
      timeSaved: "15 hrs / week",
      impact: "Zero missed leads. 100% follow-up within 15 seconds.",
      tools: ["n8n", "HubSpot", "Google Sheets", "ChatGPT", "Webhooks"],
      color: "from-blue-500/10 to-indigo-500/10",
      accent: "text-blue-600 bg-blue-50 border-blue-200",
      example: "Inbound Form ➔ ChatGPT Lead Score ➔ HubSpot Deal Stage 'Hot' ➔ Slack Alert",
    },
    {
      id: "support",
      icon: MessageSquare,
      title: "Customer Support & WhatsApp Auto-Reply",
      subtitle: "24/7 Intelligent conversational AI on official WhatsApp API",
      whatItDoes:
        "Turn your business WhatsApp into a 24/7 client assistant. AI answers FAQs, sends pricing PDFs, checks order status, collects customer requirements, and escalates VIPs to your phone.",
      timeSaved: "25 hrs / week",
      impact: "90% of routine customer questions resolved with zero human staff.",
      tools: ["WhatsApp Cloud API", "Claude 3.5", "n8n", "Supabase", "ChatGPT"],
      color: "from-emerald-500/10 to-teal-500/10",
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
      example: "WhatsApp Ping ➔ Claude Knowledge Retriever ➔ Instant Friendly Answer ➔ CRM Logged",
      clientProof: "Live Deployment: Automated 24/7 Support Chatbot for Jara Wallet",
    },
    {
      id: "sales",
      icon: Receipt,
      title: "Sales Follow-Up & Invoicing",
      subtitle: "Automated payment links, reminder sequences & payment reconciliation",
      whatItDoes:
        "When a deal is agreed, n8n generates a branded Stripe or QuickBooks invoice, sends it via WhatsApp & Email, and sends automated polite reminders until payment is reconciled.",
      timeSaved: "12 hrs / week",
      impact: "Paid 3x faster with zero uncomfortable manual chasing.",
      tools: ["Stripe", "Gmail", "n8n", "QuickBooks", "WhatsApp"],
      color: "from-amber-500/10 to-orange-500/10",
      accent: "text-amber-600 bg-amber-50 border-amber-200",
      example: "Deal Won ➔ Stripe Invoice Created ➔ WhatsApp Dispatch ➔ Auto-Reminder if unpaid after 48h",
    },
    {
      id: "content",
      icon: Share2,
      title: "Content & Social Media Automation",
      subtitle: "Turn 1 core idea into automated multi-platform posts",
      whatItDoes:
        "Feed a voice memo, YouTube link, or raw bullet points into n8n. AI repurposes it into LinkedIn posts, Twitter threads, newsletter copy, and schedules them automatically.",
      timeSaved: "18 hrs / week",
      impact: "Consistent multi-channel visibility without spending 4 hours a day writing.",
      tools: ["ChatGPT", "Claude", "LinkedIn API", "n8n", "Canva", "Google Sheets"],
      color: "from-purple-500/10 to-pink-500/10",
      accent: "text-purple-600 bg-purple-50 border-purple-200",
      example: "Audio Memo ➔ Whisper Transcription ➔ Claude Thread Drafter ➔ Auto-Schedule",
    },
    {
      id: "data-sync",
      icon: RefreshCw,
      title: "Data Entry: Sheets, Email, Notion Sync",
      subtitle: "Two-way automated sync across your entire tool ecosystem",
      whatItDoes:
        "Eliminate human copy-pasting. Orders in your inbox extract into Google Sheets, update inventory in Notion, and email the warehouse team without a single manual click.",
      timeSaved: "20 hrs / week",
      impact: "Zero data discrepancies. Zero human transcription errors.",
      tools: ["Google Sheets", "Notion", "Gmail", "Airtable", "n8n"],
      color: "from-cyan-500/10 to-blue-500/10",
      accent: "text-cyan-600 bg-cyan-50 border-cyan-200",
      example: "Email Order Received ➔ PDF Parser ➔ Notion Inventory Deducted ➔ Google Sheets Logged",
    },
    {
      id: "custom-ai",
      icon: Cpu,
      title: "Custom n8n + AI Agent Workflows",
      subtitle: "Bespoke autonomous agents designed for your exact business logic",
      whatItDoes:
        "Complex multi-step pipelines: document analysis, contract extraction, competitor monitoring, inventory restocking alerts, or autonomous research agents built specifically for your model.",
      timeSaved: "30+ hrs / week",
      impact: "Bespoke superpowers that give your business an unfair competitive advantage.",
      tools: ["n8n", "Claude 3.5 Sonnet", "ChatGPT-4o", "Pinecone", "Custom Webhooks"],
      color: "from-indigo-500/10 to-violet-500/10",
      accent: "text-indigo-600 bg-indigo-50 border-indigo-200",
      example: "Weekly Trigger ➔ Web Scrape Data ➔ AI Deep Summary ➔ Executive Email Briefing",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            What I Automate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-blue-600">
              For High-Growth Businesses
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            I don&apos;t build vanity toys. I engineer production-grade AI &amp; n8n
            workflows that immediately cut payroll costs, speed up operations, and drive revenue.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeCard === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`rounded-2xl border bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-sm hover:shadow-glass-lg ${
                  isHovered ? "border-brand-500 -translate-y-1" : "border-slate-200/90"
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-brand-700 bg-blue-50 border border-blue-200/80">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.timeSaved}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-1 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-600 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.whatItDoes}
                  </p>

                  {"clientProof" in service && service.clientProof && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold w-full">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{service.clientProof}</span>
                    </div>
                  )}

                  {/* Impact badge */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-700 font-medium leading-snug">
                        {service.impact}
                      </p>
                    </div>
                  </div>

                  {/* Real Logic Flow Preview */}
                  <div className="mb-5 p-2.5 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-mono leading-tight">
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-1">
                      n8n Node Pipeline:
                    </span>
                    {service.example}
                  </div>
                </div>

                <div>
                  {/* Tools Stack */}
                  <div className="pt-4 border-t border-slate-100 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                      Integrated Tools:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px] font-medium border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-brand-500 hover:text-white transition-colors flex items-center justify-center gap-1.5 group"
                  >
                    <span>Request This Automation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
