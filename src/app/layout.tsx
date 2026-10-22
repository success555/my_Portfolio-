import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUCCESS AUTOMATIONS | We Build Automations That Make Work Easy",
  description:
    "We turn repetitive business tasks into self-running AI & n8n workflows for startups to enterprises. No more manual follow-ups, data entry, or missed leads.",
  keywords: [
    "n8n automation",
    "AI workflows",
    "business automation",
    "WhatsApp automation",
    "CRM automation",
    "lead automation",
    "Success Automations",
  ],
  authors: [{ name: "Success Automations" }],
  openGraph: {
    title: "SUCCESS AUTOMATIONS | We Build Automations That Make Work Easy",
    description:
      "Turn manual business tasks into self-running AI + n8n workflows. Save 20+ hours every week.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0066FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-[#FAFAFA] text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
