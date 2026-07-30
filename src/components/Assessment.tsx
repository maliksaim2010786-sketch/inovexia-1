import React, { useState } from "react";
import { ASSESSMENT_QUESTIONS, AssessmentQuestion } from "../data";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Award, Sparkles, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AssessmentProps {
  onNotifyForm: (score: number, classification: string, details: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function Assessment({ onNotifyForm }: AssessmentProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, { score: number; optionText: string; feedback: string }>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

  const handleSelectOption = (questionId: number, score: number, optionText: string, feedback: string) => {
    setAnswers({
      ...answers,
      [questionId]: { score, optionText, feedback },
    });

    // Advance to next step or complete
    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
    setFormSent(false);
    setBusinessName("");
    setBusinessEmail("");
  };

  // Calculations
  const totalScore = ASSESSMENT_QUESTIONS.reduce((acc, q) => {
    const ans = answers[q.id];
    return acc + (ans ? ans.score : 0);
  }, 0);
  const maxScore = ASSESSMENT_QUESTIONS.length * 4;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  let classification = "";
  let overallFeedback = "";
  let colorClass = "";
  let borderClass = "";

  if (totalScore <= 6) {
    classification = "Reactive Digital Posture";
    overallFeedback = "Your operations rely primarily on manual pipelines, exposing your organization to substantial bottlenecks, manual transcription errors, and competitive vulnerability in Malaysia's digital economy.";
    colorClass = "text-rose-400 bg-rose-500/10";
    borderClass = "border-rose-500/20";
  } else if (totalScore <= 10) {
    classification = "Transitioning Digital Posture";
    overallFeedback = "Your workflows feature partial digitization, but systems remain siloed. Significant manual hand-offs exist, delaying data processing and capping operational throughput.";
    colorClass = "text-amber-400 bg-amber-500/10";
    borderClass = "border-amber-500/20";
  } else if (totalScore <= 13) {
    classification = "Intelligent Digital Posture";
    overallFeedback = "You possess strong integrated foundations. Your architecture is ready to safely deploy targeted artificial intelligence modules, robotic process automation (RPA), and real-time cloud data warehousing.";
    colorClass = "text-[#00f2ff] bg-[#00f2ff]/10";
    borderClass = "border-[#00f2ff]/20";
  } else {
    classification = "Optimized / Future-Ready Posture";
    overallFeedback = "Congratulations! Your operations represent elite-tier digital execution with automated sync and modern posture. Focus on edge intelligence, specialized Agentic workflows, and predictive modeling.";
    colorClass = "text-emerald-400 bg-emerald-500/10";
    borderClass = "border-emerald-500/20";
  }

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessEmail) return;

    // Compile summary of results safely
    const summaryText = ASSESSMENT_QUESTIONS.map((q) => {
      const ans = answers[q.id];
      return ans ? `Q${q.id}: Score ${ans.score} (${ans.optionText.slice(0, 40)}...)` : "";
    })
      .filter(Boolean)
      .join(" | ");

    onNotifyForm(totalScore, classification, `Business: ${businessName}. ${summaryText}`);
    setFormSent(true);
  };

  const activeQuestion = ASSESSMENT_QUESTIONS[currentStep];

  return (
    <section id="assessment" className="py-24 bg-[#050505] border-b border-white/10 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#00f2ff]" />
            Interactive Audit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Digital Transformation Readiness Quiz
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Spend 2 minutes diagnosing your operational posture. Gain instant clarity, benchmark scoring, and an automated actionable feedback report.
          </p>
        </div>

        {/* Audit Container */}
        <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {/* Progress Indicators */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#00f2ff] font-mono">
                      STEP {currentStep + 1} OF {ASSESSMENT_QUESTIONS.length}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      | {activeQuestion.category}
                    </span>
                  </div>
                  <div className="h-1.5 w-32 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00f2ff] to-[#7000ff] transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Back Navigation */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white mb-6 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous Question
                  </button>
                )}

                {/* Active Question */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-8 leading-snug">
                  {activeQuestion.question}
                </h3>

                {/* Options list */}
                <motion.div 
                  key={currentStep}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-3.5" 
                  id={`question-grid-${activeQuestion.id}`}
                >
                  {activeQuestion.options.map((opt, idx) => {
                    const isSelected = answers[activeQuestion.id]?.score === opt.score;
                    return (
                      <motion.button
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, borderColor: "rgba(0, 242, 255, 0.4)" }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() =>
                          handleSelectOption(activeQuestion.id, opt.score, opt.text, opt.feedback)
                        }
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer ${
                          isSelected
                            ? "bg-[#7000ff]/20 border-[#00f2ff] text-white shadow-lg shadow-[#00f2ff]/5"
                            : "bg-zinc-950/60 border-white/10 hover:bg-white/5 text-zinc-300"
                        }`}
                        id={`opt-btn-${activeQuestion.id}-${idx}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 border ${
                            isSelected
                              ? "bg-[#00f2ff]/20 border-[#00f2ff] text-[#00f2ff]"
                              : "bg-zinc-900 border-white/10 text-zinc-500"
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm font-medium leading-relaxed font-light">
                          {opt.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            ) : (
              /* RESULTS SCREEN */
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Result Top Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#00f2ff] to-[#7000ff] text-black font-bold rounded-2xl">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Your Maturity Score
                      </span>
                      <span className="block text-3xl font-extrabold text-white">
                        {totalScore} <span className="text-zinc-500 text-lg font-normal">/ {maxScore}</span>
                      </span>
                    </div>
                  </div>

                  <div className={`px-4 py-2 rounded-xl border font-bold text-sm tracking-wide ${colorClass} ${borderClass}`}>
                    {classification}
                  </div>
                </div>

                {/* Overall Feedback description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {overallFeedback}
                </p>

                {/* Diagnostic Question breakdown feedback cards */}
                <div className="space-y-4 mb-10">
                  <h4 className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest">
                    Operational Gap Analysis
                  </h4>
                  {ASSESSMENT_QUESTIONS.map((q) => {
                    const ans = answers[q.id];
                    return (
                      <div key={q.id} className="bg-zinc-950/40 border border-white/10 p-5 rounded-2xl flex items-start gap-3.5 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#00f2ff] shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-extrabold text-zinc-500 uppercase tracking-wider mb-0.5">
                            {q.category}
                          </span>
                          <span className="block font-bold text-white text-sm mb-1.5 font-sans">
                            {q.question}
                          </span>
                          <p className="text-zinc-400 text-xs leading-relaxed italic font-light">
                            {ans?.feedback}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action CTA: Sync and proposal */}
                <div className="bg-gradient-to-r from-[#00f2ff]/5 to-[#7000ff]/10 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h4 className="font-extrabold text-lg text-white mb-1">
                      Request Custom Action Blueprint
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed max-w-md font-light">
                      Get a comprehensive architectural document addressing your actual friction gaps. Our engineers will draft a technical brief based on your score.
                    </p>
                  </div>

                  {!formSent ? (
                    <form onSubmit={handleSubmitReport} className="w-full md:w-auto flex flex-col gap-2.5 shrink-0">
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2ff] w-full md:w-56"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Corporate Email Address"
                        value={businessEmail}
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        className="bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00f2ff] w-full md:w-56"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-white text-black font-bold text-xs uppercase tracking-widest py-3 rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#00f2ff] hover:text-black transition-colors cursor-pointer"
                      >
                        Submit Audit Data
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-4 px-6 bg-zinc-950 rounded-2xl border border-[#00f2ff]/20 w-full md:w-auto shrink-0">
                      <div className="p-1.5 bg-[#00f2ff] text-black rounded-full mb-2">
                        <Check className="w-4 h-4 text-black font-bold" />
                      </div>
                      <span className="font-bold text-white text-xs block">
                        Audit Sent Successfully
                      </span>
                      <span className="text-zinc-400 text-[10px] block mt-0.5 font-light">
                        Blueprint under preparation.
                      </span>
                    </div>
                  )}
                </div>

                {/* Reset button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-[#00f2ff] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Restart Assessment
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
