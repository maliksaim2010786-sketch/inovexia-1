import React, { useState, useEffect } from "react";
import { Mail, Shield, Building, Globe, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  prepopulatedMessage: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Contact({ prepopulatedMessage }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("AI & Intelligent Solutions");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync pre-populated audit message if received
  useEffect(() => {
    if (prepopulatedMessage) {
      setMessage((prev) => {
        if (prev.includes("Audit Posture")) return prev; // Avoid overwriting multiple times
        return `${prev}\n\n[Digital Readiness Audit Report - Injected]:\n${prepopulatedMessage}`.trim();
      });
      // Scroll contact into view smoothly
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [prepopulatedMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Simulate sending
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-b border-white/10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Corporate Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-6 font-display">
                Let's Innovate Smarter, Together
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
                Ready to transform your traditional workflows into high-yield automated pipelines? Contact our technology architects to schedule an engineering kickoff call.
              </p>
 
              {/* Corporate detail chips */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Registrations */}
                <motion.div variants={itemVariants} className="flex gap-4 p-4 bg-zinc-900/40 border border-white/10 rounded-xl group hover:border-[#00f2ff]/40 transition-colors">
                  <div className="p-2.5 bg-white/5 text-[#00f2ff] rounded-lg shrink-0 group-hover:bg-[#00f2ff]/10 transition-colors">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      Company Entity
                    </span>
                    <span className="block text-sm font-bold text-white">
                      INOVEXIA SDN. BHD.
                    </span>
                    <span className="block text-xs text-zinc-400 font-mono mt-0.5">
                      Reg: 202601016348 (1678445-V)
                    </span>
                  </div>
                </motion.div>

                {/* Region */}
                <motion.div variants={itemVariants} className="flex gap-4 p-4 bg-zinc-900/40 border border-white/10 rounded-xl group hover:border-teal-400/40 transition-colors">
                  <div className="p-2.5 bg-white/5 text-teal-400 rounded-lg shrink-0 group-hover:bg-teal-400/10 transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      Regional Head Office
                    </span>
                    <span className="block text-sm font-bold text-white">
                      Kuala Lumpur, Malaysia
                    </span>
                    <span className="block text-xs text-zinc-400">
                      Strategic Cloud Operations Hub
                    </span>
                  </div>
                </motion.div>

                {/* Email Address */}
                <motion.div variants={itemVariants} className="flex gap-4 p-4 bg-zinc-900/40 border border-white/10 rounded-xl group hover:border-sky-400/40 transition-colors">
                  <div className="p-2.5 bg-white/5 text-sky-400 rounded-lg shrink-0 group-hover:bg-sky-400/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                      Inquiries & Support
                    </span>
                    <a
                      href="mailto:info@inovexia.com"
                      className="block text-sm font-bold text-[#00f2ff] hover:underline"
                    >
                      info@inovexia.com
                    </a>
                    <span className="block text-[11px] text-zinc-500 mt-0.5 font-light">
                      Response standard: Under 24 business hours
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Compliance note */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-500 font-light">
              <Shield className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Full compliance with Malaysia PDPA (Personal Data Protection Act).</span>
            </div>
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Send Briefing Proposal
                    </h3>
                    <p className="text-zinc-400 text-xs font-light">
                      Please describe your current technology requirements.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Contact Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        placeholder="e.g. Saim Malik"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-950 border border-white/10 focus:border-[#00f2ff] focus:bg-zinc-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all font-light"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Corporate Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-950 border border-white/10 focus:border-[#00f2ff] focus:bg-zinc-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all font-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Interested Technology Suite
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-zinc-950 border border-white/10 focus:border-[#00f2ff] focus:bg-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all cursor-pointer font-light"
                    >
                      <option value="AI & Intelligent Solutions" className="bg-zinc-950 text-white">AI & Intelligent Solutions</option>
                      <option value="Digital Applications & Platforms" className="bg-zinc-950 text-white">Digital Applications & Platforms</option>
                      <option value="Automation & Business Optimisation" className="bg-zinc-950 text-white">Automation & Business Optimisation</option>
                      <option value="Cloud & Technology Enablement" className="bg-zinc-950 text-white">Cloud & Technology Enablement</option>
                      <option value="General Corporate Inquiry" className="bg-zinc-950 text-white">General Corporate Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex justify-between">
                      <span>Message Brief / Notes</span>
                      {prepopulatedMessage && (
                        <span className="text-[10px] text-[#00f2ff] font-semibold uppercase tracking-wider">
                          ★ Diagnostics Connected
                        </span>
                      )}
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      rows={4}
                      placeholder="Provide a brief explanation of your requirements or operational gaps..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-zinc-950 border border-white/10 focus:border-[#00f2ff] focus:bg-zinc-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-all resize-none font-light"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, backgroundColor: "#00f2ff" }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                    id="submit-contact-form"
                  >
                    Send Business Message
                    <Send className="w-4 h-4 text-black" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="p-4 bg-teal-500/10 text-teal-400 rounded-full mb-6 border border-teal-500/20"
                  >
                    <Check className="w-8 h-8 text-teal-400" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-white mb-2 font-display">
                    Message Sent Successfully
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mb-8 font-light">
                    Thank you for reaching out to INOVEXIA. A dedicated technology consultant will review your specifications and contact you via <strong className="text-[#00f2ff] font-semibold">{email || "your corporate inbox"}</strong> shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="text-xs font-bold text-[#00f2ff] hover:underline cursor-pointer uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
