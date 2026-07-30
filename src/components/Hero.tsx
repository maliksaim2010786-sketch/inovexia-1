import React from "react";
import { ArrowRight, Bot, Shield, Cloud } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onViewChange: (view: string) => void;
}

export default function Hero({ onViewChange }: HeroProps) {
  // Path of the generated hero image
  const heroImageUrl = "/src/assets/images/inovexia_hero_banner_1785411733338.jpg";

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050505] text-white"
    >
      {/* Background soft lighting effects */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Bot className="w-3.5 h-3.5 text-[#00f2ff]" />
              Digital Transformation Partner
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 font-display"
            >
              Building Intelligent <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#487eff] to-[#7000ff] font-extrabold">
                Digital Solutions
              </span>{" "}
              For The Future
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              INOVEXIA is a Malaysia-based technology solutions company focused on helping organisations transform, automate, and scale through custom AI systems, modern platforms, and cloud enablement.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#00f2ff" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onViewChange("solutions")}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md transition-colors shadow-lg cursor-pointer"
                id="hero-cta-solutions"
              >
                Our Solutions
                <ArrowRight className="w-5 h-5 text-black animate-pulse" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, borderColor: "#ffffff" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onViewChange("assessment")}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md transition-all cursor-pointer"
                id="hero-cta-assessment"
              >
                Check Readiness Score
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                Trusted Frameworks
              </span>
              <div className="flex items-center gap-6 text-zinc-400 font-medium text-sm">
                <div className="flex items-center gap-1.5 hover:text-[#00f2ff] transition-colors">
                  <Bot className="w-4 h-4 text-[#00f2ff]" />
                  <span>Secure AI</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-[#00f2ff] transition-colors">
                  <Shield className="w-4 h-4 text-[#00f2ff]" />
                  <span>ISO-Aligned Integrity</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-[#00f2ff] transition-colors">
                  <Cloud className="w-4 h-4 text-[#00f2ff]" />
                  <span>AWS & GCP Cloud</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Graphical Frame with generated image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual geometric accent elements */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#00f2ff] to-[#7000ff] rounded-3xl opacity-15 blur-xl pointer-events-none" />
            <div className="relative border border-white/10 bg-zinc-900/40 p-3 rounded-2xl shadow-2xl overflow-hidden group">
              <img
                src={heroImageUrl}
                alt="INOVEXIA Intelligent Digital Solutions and AI Innovation"
                className="w-full h-auto object-cover rounded-xl opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlaid stat badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/85 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-md flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-extrabold text-white leading-none">
                    100%
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    Corporate Compliance
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-[#00f2ff] uppercase tracking-wide">
                    SDN. BHD. Registered
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    No: 202601016348
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
