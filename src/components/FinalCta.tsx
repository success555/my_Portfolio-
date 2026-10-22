"use client";

import React, { useState } from "react";
import {
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Send,
} from "lucide-react";

export function FinalCta({ defaultService }: { defaultService?: string }) {
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bottleneck, setBottleneck] = useState(
    defaultService || "Lead Capture & WhatsApp Follow-up"
  );
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const times = ["09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setSubmitted(true);
  };

  return (
    <section id="book-audit" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-brand-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-600 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>15-MINUTE COMPLIMENTARY SESSION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950">
              What Boring Work Should We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-blue-600 to-indigo-600">
                Automate For You?
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Book a free 15-min call. I will map 3 automations that will save you
              <strong className="text-slate-900"> 15+ hrs/week</strong>. No fluff, no hard selling.
            </p>
          </div>

          {/* Interactive Booking & WhatsApp Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Column: Direct WhatsApp & Value Pillars */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-950 text-white p-5 sm:p-8 md:p-9 flex flex-col justify-between shadow-glass-lg relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                    Founder Available Now
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  Prefer an immediate answer? Let&apos;s chat on WhatsApp.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Skip the calendar if you need a quick audit or have an urgent
                  bottleneck you want solved this week.
                </p>

                {/* WhatsApp Action Button */}
                <div>
                  <a
                    href="https://wa.me/2348000000000?text=Hi%20Success%20Automations!%20I'd%20like%20to%20map%20out%203%20automations%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 group"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
                    <span>Open WhatsApp (Replies &lt; 5 mins)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                  <span className="text-[11px] text-slate-400 block text-center mt-2">
                    Available for clients in 🇳🇬 Nigeria, 🇬🇧 UK &amp; 🇺🇸 US
                  </span>
                </div>

                {/* Audit Guarantee Checklist */}
                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                    What happens in 15 minutes:
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>We identify your biggest time-drain task</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>I sketch out the exact n8n node architecture</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>You receive a clear timeline &amp; fixed quote</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Calendly-Style Fast Booking Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 md:p-9 shadow-sm flex flex-col justify-between">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    You&apos;re All Set, {name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We&apos;ve reserved your session for{" "}
                    <strong className="text-slate-900">{selectedDay} at {selectedTime}</strong>.
                    A calendar invitation and WhatsApp confirmation are on their way.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
                    >
                      Book Another Time
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="font-bold text-slate-950 text-base">
                        Select Your 15-Minute Slot
                      </h4>
                      <p className="text-xs text-slate-500">
                        Interactive instant audit reservation
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      <Clock className="w-3.5 h-3.5" />
                      <span>15 Mins</span>
                    </div>
                  </div>

                  {/* Day picker */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Preferred Day:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Today", "Tomorrow", "In 2 Days"].map((day) => (
                        <button
                          type="button"
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            selectedDay === day
                              ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time picker */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Preferred Time Slot:
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {times.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-1 rounded-xl text-xs font-semibold border text-center transition-all ${
                            selectedTime === t
                              ? "bg-brand-500 text-white border-brand-500 shadow-blue-glow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bottleneck select */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Primary Bottleneck To Solve:
                    </label>
                    <select
                      value={bottleneck}
                      onChange={(e) => setBottleneck(e.target.value)}
                      className="w-full text-base sm:text-xs font-medium px-3.5 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-brand-500"
                    >
                      <option>Lead Capture &amp; WhatsApp Follow-up</option>
                      <option>Customer Support AI Auto-Reply (WhatsApp/Web)</option>
                      <option>Sales Invoicing &amp; Stripe Follow-Up</option>
                      <option>Spreadsheets, Notion &amp; Email Data Sync</option>
                      <option>Content &amp; Social Repurposing Automation</option>
                      <option>Custom AI Agent / Full Business OS</option>
                    </select>
                  </div>

                  {/* Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Name:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex or Sarah"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email or WhatsApp Number:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. alex@company.com or +1..."
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full text-base sm:text-xs px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold bg-slate-950 hover:bg-brand-500 text-white shadow-md hover:shadow-blue-glow transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Confirm Free 15-Min Automation Audit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Zero spam. 100% confidential. You walk away with a custom blueprint even if we don&apos;t work together.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
