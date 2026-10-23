"use client";

import React from "react";
import { Zap, ArrowUp, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-28 sm:pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                SUCCESS <span className="text-brand-400">AUTOMATIONS</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Brand Promise: <strong className="text-white">I BUILD AUTOMATIONS TO MAKE WORK EASY FOR BUSINESSES.</strong>
            </p>
            <p className="text-slate-400 text-xs max-w-sm">
              We engineer production-ready AI &amp; n8n workflows that eliminate manual
              busywork for small and big businesses worldwide.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>n8n automation clusters: 99.98% operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-white text-xs">
              Navigation
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  What I Automate
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  Before vs After
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-white text-xs">
              Connect
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/2349069118159?text=Hi%20Success%20Automations!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp: +234 906 911 8159</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@successautomations.com"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>hello@successautomations.com</span>
                </a>
              </li>
              <li className="text-slate-500 pt-2 text-[11px]">
                Serving clients in Lagos, London, Austin &amp; worldwide.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SUCCESS AUTOMATIONS. All rights reserved. Built for high performance.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
