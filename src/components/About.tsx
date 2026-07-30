import React from "react";
import { WHY_CHOOSE_US } from "../data";
import { Sparkles, Compass, Lightbulb, Heart, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] border-b border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24"
        >
          
          {/* Left Column: Visual Statement & Vision */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00f2ff] to-[#7000ff] rounded-3xl opacity-15 blur-xl pointer-events-none" />
            <div className="relative bg-zinc-900/60 text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
              {/* Dynamic visual light orb */}
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff] rounded-full blur-2xl" 
              />
              
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00f2ff] bg-[#00f2ff]/10 px-2.5 py-1 rounded-full border border-[#00f2ff]/20 inline-block mb-6">
                Corporate Vision
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white mb-6">
                Creating A Smarter Digital Future
              </h3>
              
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                At INOVEXIA, we believe technology should empower businesses to become more intelligent, efficient, and connected. Our vision is to help organisations unlock the full potential of digital innovation through custom AI, workflow automation, and transformative cloud structures.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-xl font-extrabold text-[#00f2ff]">100%</span>
                  <span className="text-[10px] text-zinc-500 font-medium">Malaysia Ownership</span>
                </div>
                <div>
                  <span className="block text-xl font-extrabold text-[#7000ff]">SSM</span>
                  <span className="text-[10px] text-zinc-500 font-medium">Fully Registered</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4">
              About INOVEXIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 font-display">
              Where Innovation Meets Intelligent Technology
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 font-light">
              The future belongs to businesses that can adapt, automate, and innovate. At INOVEXIA, we help organisations navigate digital transformation by delivering technology solutions that are practical, scalable, and aligned with business objectives.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 font-light">
              Our focus is not only on developing technology, but on creating solutions that deliver measurable business impact. We work closely with organizations to identify opportunities, implement intelligent systems, and build robust digital capabilities that support sustainable, long-term growth.
            </p>

            {/* Slogans */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {[
                { title: "Innovate", subtitle: "Smarter.", color: "text-[#00f2ff]" },
                { title: "Transform", subtitle: "Faster.", color: "text-[#7000ff]" },
                { title: "Grow", subtitle: "Sustainably.", color: "text-teal-400" }
              ].map((pill, pIdx) => (
                <motion.div 
                  key={pill.title}
                  whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.2)" }}
                  className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl transition-all"
                >
                  <span className={`block text-xs font-bold uppercase tracking-widest mb-1 ${pill.color}`}>
                    {pill.title}
                  </span>
                  <span className="font-extrabold text-sm text-white">{pill.subtitle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Why Us section with the customized metrics */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Our Strategic Pillars
            </h3>
            <p className="text-zinc-400 text-sm font-light">
              We leverage modern architectures and standard frameworks to deliver robust, predictable commercial performance.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: "rgba(0, 242, 255, 0.4)", boxShadow: "0 10px 30px -10px rgba(0, 242, 255, 0.15)" }}
                className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-350 cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 text-[#00f2ff] font-bold text-xs mb-4 shadow-inner">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
