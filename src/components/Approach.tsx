import React from "react";
import { APPROACH } from "../data";
import { Eye, Lightbulb, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Approach() {
  const icons = [
    <Eye className="w-6 h-6 text-[#00f2ff]" />,
    <Lightbulb className="w-6 h-6 text-[#7000ff]" />,
    <RefreshCw className="w-6 h-6 text-teal-400" />,
  ];

  const borders = [
    "border-white/10 bg-zinc-900/40 hover:border-[#00f2ff]/50",
    "border-white/10 bg-zinc-900/40 hover:border-[#7000ff]/50",
    "border-white/10 bg-zinc-900/40 hover:border-teal-400/50",
  ];

  const badges = [
    "bg-[#00f2ff]/10 text-[#00f2ff]",
    "bg-[#7000ff]/10 text-purple-400",
    "bg-teal-400/10 text-teal-400",
  ];

  return (
    <section id="approach" className="py-24 bg-[#050505] border-b border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 font-display">
              Our Digital Transformation Approach
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-zinc-400 text-base leading-relaxed font-light">
              We do not believe in cookie-cutter software deployments. INOVEXIA utilizes a three-phase rigorous discovery and design methodology to guarantee alignment with actual commercial targets.
            </p>
          </div>
        </div>

        {/* 3-Step Sequential Flow */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Horizontal connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-white/10 z-0" />

          {APPROACH.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: idx === 0 
                  ? "0 20px 40px -15px rgba(0, 242, 255, 0.25)" 
                  : idx === 1 
                    ? "0 20px 40px -15px rgba(112, 0, 255, 0.25)" 
                    : "0 20px 40px -15px rgba(45, 212, 191, 0.25)" 
              }}
              className={`relative z-10 border p-8 rounded-2xl transition-all duration-300 ${borders[idx]} flex flex-col items-start cursor-pointer group`}
            >
              {/* Dynamic RGB/Neon glow backing inside */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"
                  style={{
                    background: idx === 0 
                      ? "radial-gradient(circle, #00f2ff 0%, transparent 70%)" 
                      : idx === 1 
                        ? "radial-gradient(circle, #7000ff 0%, transparent 70%)" 
                        : "radial-gradient(circle, #2dd4bf 0%, transparent 70%)"
                  }}
                  animate={{
                    x: [0, 15, -10, 0],
                    y: [0, -10, 15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full blur-3xl opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"
                  style={{
                    background: idx === 0 
                      ? "radial-gradient(circle, #7000ff 0%, transparent 70%)" 
                      : idx === 1 
                        ? "radial-gradient(circle, #2dd4bf 0%, transparent 70%)" 
                        : "radial-gradient(circle, #00f2ff 0%, transparent 70%)"
                  }}
                  animate={{
                    x: [0, -15, 10, 0],
                    y: [0, 15, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Header block */}
              <div className="w-full flex items-center justify-between mb-6">
                <div className="p-3 bg-zinc-950 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {icons[idx]}
                </div>
                <span className={`text-sm font-extrabold px-3 py-0.5 rounded-full ${badges[idx]} font-mono`}>
                  {step.number}
                </span>
              </div>

              {/* Title & subtitle */}
              <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-[#00f2ff] transition-colors duration-300">
                {step.title}
              </h3>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 block">
                {step.subtitle}
              </span>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Corporate Information - Why Choose us and Industries */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 pt-16 border-t border-white/10">
          {/* Why INOVEXIA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-extrabold text-white mb-6">
              Why Malaysian Enterprises Partner With Us
            </h3>
            <div className="space-y-5">
              {[
                { title: "Innovation Driven", desc: "We leverage emerging intelligent systems to create genuine competitive advantages." },
                { title: "Business Focused", desc: "No technology for technology's sake. Every deployment is optimized around strict ROI targets." },
                { title: "Scalable & Future-Ready", desc: "We design microservice-based systems capable of expanding dynamically alongside your metrics." }
              ].map((partner, pIdx) => (
                <div key={pIdx} className="flex items-start gap-4 group">
                  <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full mt-2 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-zinc-200 text-sm group-hover:text-white transition-colors duration-300">{partner.title}</h4>
                    <p className="text-zinc-400 text-xs mt-1 font-light">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries We Support */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/40 border border-white/10 p-8 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />
            <h3 className="text-lg font-bold text-white mb-4">
              Sector Expertise
            </h3>
            <p className="text-zinc-400 text-xs mb-6 font-light">
              Our specialists engineering team designs custom architectures optimized for industry-specific compliance requirements across:
            </p>
            <div className="grid grid-cols-2 gap-3.5">
              {[
                "Technology & Digital Economy",
                "Financial Services",
                "Professional Services",
                "Retail & E-Commerce",
                "Healthcare",
                "Education",
                "Manufacturing",
                "Startups & Growth Companies"
              ].map((ind, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-full group-hover:bg-[#7000ff] transition-colors" />
                  <span className="text-zinc-300 text-xs font-semibold font-light group-hover:text-white transition-colors">{ind}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
