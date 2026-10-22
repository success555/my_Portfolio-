"use client";

import React from "react";
import { AlertCircle, Clock, Copy, Unplug, ArrowRight, TrendingDown, Users, Flame } from "lucide-react";

export function TheProblem({ onOpenAudit }: { onOpenAudit: () => void }) {
  const problems = [
    {
      icon: Clock,
      badge: "Lost Revenue",
      title: "You lose leads because you follow up late",
      description:
        "78% of B2B and high-ticket buyers purchase from the business that responds first. If a prospect messages your WhatsApp or fills a form and waits 30+ minutes, they've already contacted your competitor.",
      impact: "Up to 40% of potential inbound deals slip away purely due to slow response times.",
      stat: "7x",
      statLabel: "lower conversion after 1 hour",
      quote: "“I was answering leads between meetings at 9 PM. Half of them were already gone.”",
    },
    {
      icon: Copy,
      badge: "Wasted Payroll",
      title: "Your team wastes 20+ hrs/week on copy-paste work",
      description:
        "Talented team members spend their best cognitive energy downloading CSVs, copying names into spreadsheets, typing the same WhatsApp replies, and manually generating invoices.",
      impact: "You are paying full-time executive salaries for human copy-paste work that a machine can do in 0.5s.",
      stat: "20+",
      statLabel: "hours lost per employee weekly",
      quote: "“My operations manager spent 4 hours every Monday just syncing client data across 3 tools.”",
    },
    {
      icon: Unplug,
      badge: "Siloed Chaos",
      title: "Tools don't talk to each other",
      description:
        "Your WhatsApp has client conversations, your Stripe has the payments, your HubSpot has the pipeline, and Google Sheets has the inventory. None of them share data automatically.",
      impact: "Orders get dropped, clients get asked for details they already sent, and business owners have zero live visibility.",
      stat: "100%",
      statLabel: "eliminated with unified n8n workflows",
      quote: "“Nothing was synced. If an invoice was paid in Stripe, we had to manually update 2 different trackers.”",
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>THE RELATABLE REALITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Is Your Business Suffering From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
              Manual Friction &amp; Late Follow-Ups?
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Most businesses don&apos;t have a traffic or sales problem. They have an
            execution bottleneck: people doing repetitive mechanical tasks that should be automated.
          </p>
        </div>

        {/* 3 Relatable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-800/60 border border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-500/80 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-700/60 border border-slate-600/60 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {prob.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {prob.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 italic mb-6">
                    {prob.quote}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-rose-400 font-mono">
                      {prob.stat}
                    </span>
                    <p className="text-[11px] text-slate-400">{prob.statLabel}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block">Solution:</span>
                    <span className="text-xs font-semibold text-emerald-400">n8n Auto-Flow</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Problem */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-800/90 to-blue-950/80 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Ready to stop the manual bleeding?</span>
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              We audit your workflow, calculate your exact hours wasted, and build you a turnkey system.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm shadow-blue-glow-sm transition-all"
          >
            <span>Audit My Bottlenecks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
