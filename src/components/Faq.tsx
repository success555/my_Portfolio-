"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why do you build on n8n instead of Zapier or Make?",
      a: "n8n offers immense advantages over Zapier and Make: there are no arbitrary task limits or crazy price spikes as your business scales. n8n allows deep custom code, self-hosting for complete data privacy (GDPR / HIPAA compliant), and natively integrates cutting-edge AI models (Claude 3.5, OpenAI Assistants, LangChain) with zero latency.",
    },
    {
      q: "Will my team need to know how to code to use these automations?",
      a: "Not at all. You and your team will interact with your existing, familiar interfaces: your WhatsApp, Google Sheets, email, Notion, and CRM. The n8n engine runs quietly in the cloud 24/7. When we finish, we provide a 5-minute video walkthrough showing exactly how everything works.",
    },
    {
      q: "What happens if an API changes or an external service goes down?",
      a: "Every workflow we engineer comes built with robust fallback logic: if an external API experiences a temporary blip, n8n automatically retries, caches the payload, and sends an alert to your Slack or email with the exact details. Zero data is ever lost.",
    },
    {
      q: "Can you automate our WhatsApp Business without getting banned?",
      a: "Yes! We strictly build on the official Meta WhatsApp Cloud API via approved business solution providers. This guarantees 100% compliance with WhatsApp's terms of service, allowing verified business accounts, templates, and high message throughput without risk.",
    },
    {
      q: "How fast can we go live?",
      a: "Most single-bottleneck projects (Automation Starter) are delivered and tested in 3 days. Our full Business Autopilot package is completed in 5 to 7 days.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-600 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Got Questions? We Have Clear Answers.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about working with Success Automations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-brand-600 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-500" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
