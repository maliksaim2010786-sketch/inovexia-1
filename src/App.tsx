/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Approach from "./components/Approach";
import Assessment from "./components/Assessment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [assessmentReport, setAssessmentReport] = useState<string>("");
  const [currentView, setCurrentView] = useState<string>("hero"); // "hero" | "about" | "solutions" | "approach" | "assessment" | "contact"

  const handleAssessmentCompleted = (score: number, classification: string, details: string) => {
    setAssessmentReport(
      `Status: ${classification} (Score: ${score}/16).\nNotes: ${details}`
    );
    // Auto-switch to Contact tab so they can submit their report with prepopulated message
    setCurrentView("contact");
  };

  const renderActiveView = () => {
    switch (currentView) {
      case "hero":
        return <Hero onViewChange={setCurrentView} />;
      case "about":
        return <About />;
      case "solutions":
        return <Solutions onViewChange={setCurrentView} />;
      case "approach":
        return <Approach />;
      case "assessment":
        return <Assessment onNotifyForm={handleAssessmentCompleted} />;
      case "contact":
        return <Contact prepopulatedMessage={assessmentReport} />;
      default:
        return <Hero onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 antialiased font-sans flex flex-col justify-between overflow-x-hidden">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      {/* Viewport container with route transitions */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onViewChange={setCurrentView} />
    </div>
  );
}


