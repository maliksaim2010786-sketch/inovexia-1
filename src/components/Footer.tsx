import React from "react";
import { Mail, Globe, Shield, ArrowUp } from "lucide-react";
import InovexiaLogo from "./InovexiaLogo";

interface FooterProps {
  onViewChange: (view: string) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-zinc-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onViewChange("hero")}
              className="flex items-center text-left group cursor-pointer"
            >
              <InovexiaLogo iconSize="md" />
            </button>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-light">
              Malaysia-based digital innovation and technology solutions company focused on helping organisations transform the way they operate through intelligent automation and AI.
            </p>
            <div className="text-[10px] text-zinc-500 space-y-0.5 font-mono">
              <div>Registration No: 202601016348 (1678445-V)</div>
              <div>Governed by the Companies Commission of Malaysia (SSM)</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button
                  onClick={() => onViewChange("hero")}
                  className="hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                  Home (Hero)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onViewChange("solutions")}
                  className="hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                  Our Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onViewChange("approach")}
                  className="hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                  Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onViewChange("assessment")}
                  className="hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                  Readiness Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onViewChange("contact")}
                  className="hover:text-[#00f2ff] transition-colors cursor-pointer"
                >
                  Contact Office
                </button>
              </li>
            </ul>
          </div>

          {/* Tech stack declaration */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">
              Malaysian Digital Economy
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Empowering local businesses and multinational brands to grow sustainably and adopt smarter digital integrations.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-500 text-xs font-medium">
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                <span>PDPA Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#00f2ff]" />
                <span>Sovereign Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-zinc-500">
            © {currentYear} INOVEXIA SDN. BHD. All rights reserved. Registered in Malaysia.
          </span>
          <div className="flex items-center gap-6 text-[11px] text-zinc-500">
            <span className="hover:text-[#00f2ff] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#00f2ff] cursor-pointer">Terms of Service</span>
            <button
              onClick={() => onViewChange("hero")}
              className="p-2 bg-zinc-900 border border-white/5 hover:bg-[#00f2ff] hover:text-black text-zinc-400 rounded-full transition-colors cursor-pointer"
              aria-label="Back to home"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
