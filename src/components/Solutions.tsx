import React, { useState } from "react";
import { SOLUTIONS, SolutionItem } from "../data";
import { Cpu, Layout, Workflow, Cloud, CheckCircle2, ArrowRight, Server, Play, Zap, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SolutionsProps {
  onViewChange?: (view: string) => void;
}

export default function Solutions({ onViewChange }: SolutionsProps) {
  const [activeSolution, setActiveSolution] = useState<number>(0);

  // Map generated images properly
  const imageMapping: Record<string, string> = {
    ai_solutions: "/src/assets/images/inovexia_ai_solutions_1785411748667.jpg",
    digital_platforms: "/src/assets/images/inovexia_digital_platforms_1785411762647.jpg",
  };

  const icons = [
    <Cpu className="w-6 h-6" />,
    <Layout className="w-6 h-6" />,
    <Workflow className="w-6 h-6" />,
    <Cloud className="w-6 h-6" />,
  ];

  const badgeColors = [
    "bg-[#00f2ff]/10 border-[#00f2ff]/20 text-[#00f2ff]",
    "bg-teal-500/10 border-teal-500/20 text-teal-400",
    "bg-sky-500/10 border-sky-500/20 text-sky-400",
    "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  ];

  return (
    <section id="solutions" className="py-24 bg-[#050505] border-b border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Enterprise Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-5 font-display">
            Intelligent Tech Crafted For Value
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed font-light">
            We move beyond legacy operations. Our engineered platforms integrate seamlessly to create unified, secure, and smart business workflows.
          </p>
        </div>

        {/* Dynamic Solutions Tab/Presenter Panel */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Interactive Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {SOLUTIONS.map((sol, index) => (
              <motion.button
                key={sol.title}
                whileHover={{ x: 6, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSolution(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                  activeSolution === index
                    ? "bg-zinc-900 border-white/20 shadow-md shadow-[#00f2ff]/5"
                    : "bg-transparent border-transparent hover:bg-white/5"
                }`}
                id={`sol-tab-${index}`}
              >
                {/* Active Border Glow */}
                {activeSolution === index && (
                  <motion.div
                    layoutId="activeTabOutline"
                    className="absolute inset-0 border border-[#00f2ff]/35 rounded-2xl pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <div
                  className={`p-3 rounded-xl ${
                    activeSolution === index
                      ? "bg-gradient-to-br from-[#00f2ff] to-[#7000ff] text-black"
                      : "bg-zinc-850 text-zinc-400"
                  } transition-colors`}
                >
                  {icons[index]}
                </div>
                <div>
                  <h3
                    className={`font-bold text-base transition-colors ${
                      activeSolution === index ? "text-[#00f2ff]" : "text-zinc-300"
                    }`}
                  >
                    {sol.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1 line-clamp-1">
                    {sol.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Active Detail Presenter */}
          <div className="lg:col-span-8 bg-zinc-900/40 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden min-h-[500px]">
            {/* Background absolute subtle accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2ff]/5 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 flex-grow flex flex-col justify-between"
              >
                <div>
                  {/* Solution Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        badgeColors[activeSolution]
                      }`}
                    >
                      Solution Stage {activeSolution + 1}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      INOVEXIA CORE STACK
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    {SOLUTIONS[activeSolution].title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base font-light mb-8">
                    {SOLUTIONS[activeSolution].description}
                  </p>

                  {/* Sub-capabilities Showcase (Alternating Layout Grid) */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Capabilities List */}
                    <div className="space-y-4">
                      <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                        Key Deliverables
                      </span>
                      {SOLUTIONS[activeSolution].items.map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#00f2ff] shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm leading-relaxed font-light">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Imagery / Live Graphic Frame */}
                    <div className="relative">
                      {SOLUTIONS[activeSolution].image in imageMapping ? (
                        <motion.div 
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.35 }}
                          className="border border-white/10 bg-zinc-950 p-2.5 rounded-2xl shadow-lg"
                        >
                          <img
                            src={imageMapping[SOLUTIONS[activeSolution].image]}
                            alt={SOLUTIONS[activeSolution].title}
                            className="w-full h-48 object-cover rounded-xl opacity-90"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      ) : (
                        // Asymmetrical CSS interactive visual card for non-image solutions
                        <motion.div 
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.35 }}
                          className="bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[190px]"
                        >
                          {activeSolution === 2 ? (
                            <>
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
                                  <Workflow className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-white text-sm">
                                  Operational Pipeline
                                </span>
                              </div>
                              <div className="space-y-2.5 my-4">
                                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                    className="h-full bg-sky-500 rounded-full" 
                                  />
                                </div>
                                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                                  <span>PROCESS AUTOMATION</span>
                                  <span>85% EFFICIENCY GAIN</span>
                                </div>
                              </div>
                              <p className="text-zinc-400 text-xs font-light">
                                Eliminating operational friction with automated state transitions and real-time alerts.
                              </p>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                  <Server className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-white text-sm">
                                  Cloud Native Topology
                                </span>
                              </div>
                              <div className="space-y-1.5 my-3">
                                <div className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                                  <Zap className="w-3.5 h-3.5 text-[#00f2ff]" />
                                  <span>Zero Downtime Migration</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                                  <Zap className="w-3.5 h-3.5 text-[#00f2ff]" />
                                  <span>Serverless Autoscaling Systems</span>
                                </div>
                              </div>
                              <p className="text-zinc-400 text-xs font-light">
                                Secure infrastructure with regional backups ensuring absolute compliance.
                              </p>
                            </>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer CTA for solutions */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div className="text-zinc-500 text-xs font-medium">
                    Want to see this in action? Get a tailored blueprint.
                  </div>
                  <button
                    onClick={() => onViewChange?.("assessment")}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-[#00f2ff] hover:text-white group cursor-pointer"
                  >
                    Run Assessment
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00f2ff]" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
