"use client";

import React, { useState, useEffect } from "react";
import { X, Play, RotateCcw, CheckCircle2, Zap, Bot, MessageCircle, Database, ArrowRight } from "lucide-react";

export function DemoModal({
  isOpen,
  onClose,
  onOpenAudit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenAudit: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      title: "Inbound Lead Webhook",
      node: "Webhook (POST)",
      status: "Triggered",
      time: "0.08s",
      icon: Zap,
      payload: JSON.stringify(
        {
          event: "inbound_message",
          sender: "+234 801 234 5678",
          name: "Daniel Cole",
          message: "Hi, I need an automated WhatsApp booking bot for my dental clinic. What's the cost?",
        },
        null,
        2
      ),
    },
    {
      title: "AI Analysis & Intent Classification",
      node: "Claude 3.5 Sonnet / GPT-4o",
      status: "Classified",
      time: "0.42s",
      icon: Bot,
      payload: JSON.stringify(
        {
          intent: "quote_inquiry",
          service_category: "whatsapp_bot",
          qualification_score: 95,
          recommended_plan: "Business Autopilot (₦ 2,240,000)",
          draft_reply: "Hi Daniel! We build custom WhatsApp booking engines with automatic Google Calendar sync. Our starter setup is ready in 3 days. Here is our direct booking link...",
        },
        null,
        2
      ),
    },
    {
      title: "WhatsApp Cloud API Auto-Reply",
      node: "Meta Cloud API",
      status: "Dispatched",
      time: "0.18s",
      icon: MessageCircle,
      payload: JSON.stringify(
        {
          status: "delivered",
          timestamp: new Date().toLocaleTimeString(),
          recipient: "+234 801 234 5678",
          message_id: "wamid.HBgLMjM0ODA...",
        },
        null,
        2
      ),
    },
    {
      title: "CRM Deal & Slack Notification",
      node: "HubSpot & Slack Sync",
      status: "Completed",
      time: "0.14s",
      icon: Database,
      payload: JSON.stringify(
        {
          hubspot_deal_id: "DEAL-9921",
          deal_stage: "Discovery Scheduled",
          slack_alert_channel: "#vip-leads-instant",
        },
        null,
        2
      ),
    },
  ];

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStep(0);

    const runNext = (stepIdx: number) => {
      if (stepIdx < steps.length - 1) {
        setTimeout(() => {
          setCurrentStep(stepIdx + 1);
          runNext(stepIdx + 1);
        }, 1200);
      } else {
        setIsRunning(false);
      }
    };

    runNext(0);
  };

  useEffect(() => {
    if (isOpen) {
      runSimulation();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl shadow-2xl text-white overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse shrink-0" />
            <span id="demo-modal-title" className="text-[11px] sm:text-xs font-mono font-bold text-slate-200 truncate">
              SIMULATOR: 60s n8n + AI FLOW
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] sm:text-xs font-semibold text-slate-200 transition-colors"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">{isRunning ? "Running..." : "Restart Demo"}</span>
              <span className="sm:hidden">{isRunning ? "..." : "Restart"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Watch an Inbound WhatsApp Lead Get Handled in 0.82 Seconds
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400">
              This is the exact production architecture we deploy into your n8n workspace.
            </p>
          </div>

          {/* Node Progression Tracker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isPast = currentStep >= idx;
              const isCurrent = currentStep === idx;
              return (
                <div
                  key={idx}
                  className={`p-2.5 sm:p-3.5 rounded-xl border transition-all ${
                    isCurrent
                      ? "bg-brand-500/20 border-brand-500 shadow-blue-glow-sm"
                      : isPast
                      ? "bg-slate-800/80 border-slate-700 text-slate-300"
                      : "bg-slate-900/60 border-slate-800 text-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isCurrent
                          ? "bg-brand-500 text-white"
                          : isPast
                          ? "bg-slate-700 text-slate-200"
                          : "bg-slate-800 text-slate-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">
                      Step {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold leading-tight mb-1">{st.title}</h4>
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className={isPast ? "text-emerald-400" : "text-slate-500"}>
                      {isPast ? "✓ Executed" : "Waiting"}
                    </span>
                    <span className="text-slate-400">{st.time}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inspection View: Live Node Payload */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
              <span>ACTIVE NODE: {steps[currentStep].node}</span>
              <span className="text-emerald-400">EXECUTION STATUS: 200 OK</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
              {steps[currentStep].payload}
            </pre>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to replace manual tasks with this autonomous engine?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-blue-glow-sm transition-all"
          >
            <span>Book 15-Min Setup Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
