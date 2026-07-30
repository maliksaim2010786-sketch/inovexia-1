import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InovexiaLogo from "./InovexiaLogo";

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", target: "about" },
    { label: "Solutions", target: "solutions" },
    { label: "Our Approach", target: "approach" },
    { label: "Readiness Quiz", target: "assessment" },
    { label: "Contact", target: "contact" },
  ];

  const handleLinkClick = (target: string) => {
    setIsMobileMenuOpen(false);
    onViewChange(target);
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || currentView !== "hero"
            ? "bg-[#050505]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center text-left group cursor-pointer"
            id="logo-button"
          >
            <InovexiaLogo iconSize="md" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = currentView === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className={`relative py-1.5 font-medium text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                    isActive ? "text-[#00f2ff]" : "text-zinc-400 hover:text-[#00f2ff]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f2ff] to-[#7000ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("assessment")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer ${
                currentView === "assessment"
                  ? "bg-[#00f2ff] text-black font-extrabold"
                  : "bg-white hover:bg-[#00f2ff] text-black hover:text-black"
              }`}
              id="cta-assessment-header"
            >
              Business Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-[#00f2ff] transition-colors cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#0a0a0a]/95 border-b border-white/10 shadow-2xl md:hidden"
            id="mobile-nav-drawer"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="w-full text-left py-2.5 text-zinc-300 hover:text-[#00f2ff] font-semibold text-base border-b border-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick("assessment")}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] text-black py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Take Free Readiness Audit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
