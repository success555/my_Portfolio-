"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";

export function RoiCalculator({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(25);

  const totalWeeklyHours = teamSize * hoursPerWeek;
  const annualHoursLost = totalWeeklyHours * 50;
  const annualCostWasted = annualHoursLost * hourlyRate;
  const automatedSavings = Math.round(annualCostWasted * 0.85);

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-8 md:p-12 shadow-glass-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE ROI CALCULATOR</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white">
                How Much Is Manual Work <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-blue-400">
                  Actually Costing Your Business?
                </span>
              </h3>

              <div className="space-y-6 pt-2">
                {/* Slider 1: Team members */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold">
                    <span className="text-slate-300">Team members doing manual data work:</span>
                    <span className="text-brand-400 font-mono text-base shrink-0">{teamSize} people</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1 person</span>
                    <span>10 people</span>
                    <span>20 people</span>
                  </div>
                </div>

                {/* Slider 2: Hours/week */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold">
                    <span className="text-slate-300">Hours spent on manual work per person:</span>
                    <span className="text-brand-400 font-mono text-base shrink-0">{hoursPerWeek} hrs/wk</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="35"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>2 hrs</span>
                    <span>18 hrs</span>
                    <span>35 hrs</span>
                  </div>
                </div>

                {/* Slider 3: Hourly Rate */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-semibold">
                    <span className="text-slate-300">Average team hourly cost / equivalent:</span>
                    <span className="text-brand-400 font-mono text-base shrink-0">${hourlyRate}/hr</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>$10/hr</span>
                    <span>$50/hr</span>
                    <span>$100/hr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Output Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 border border-slate-700 text-center flex flex-col justify-between relative shadow-glass">
              <div className="space-y-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Your Annual Opportunity Loss
                </span>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-500/30">
                  <span className="text-xs text-rose-300 font-medium block mb-1">
                    Current Payroll Wasted on Manual Drudgery:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono">
                    ${annualCostWasted.toLocaleString()} <span className="text-sm font-normal text-slate-400">/ yr</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    {annualHoursLost.toLocaleString()} wasted human hours every year
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/60 border border-brand-500/40">
                  <span className="text-xs text-brand-300 font-medium block mb-1">
                    Potential Savings with Success Automations:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                    ${automatedSavings.toLocaleString()} <span className="text-sm font-normal text-slate-400">/ yr</span>
                  </div>
                  <span className="text-[11px] text-emerald-300/80 mt-1 block">
                    Recovers {Math.round(annualHoursLost * 0.85).toLocaleString()} hours of productive closing time
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenAudit}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-brand-500 hover:bg-brand-600 text-white shadow-blue-glow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Recapture This With An Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
