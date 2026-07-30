import React from "react";
import { motion } from "motion/react";

interface InovexiaLogoProps {
  iconSize?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export default function InovexiaLogo({
  iconSize = "md",
  showText = true,
  textColor = "text-white",
  className = "",
}: InovexiaLogoProps) {
  // Map friendly size labels to px values
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
    xl: { width: 96, height: 96 },
  };

  const currentSize = sizeMap[iconSize];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* High-fidelity Vector Icon of the CPU "I" Logo */}
      <motion.div
        className="relative shrink-0"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: currentSize.width, height: currentSize.height }}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,195,255,0.15)]"
        >
          <defs>
            {/* Background Blue to Purple Gradient */}
            <linearGradient id="logo-bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b4ff" />
              <stop offset="50%" stopColor="#0052ff" />
              <stop offset="100%" stopColor="#8000ff" />
            </linearGradient>

            {/* Microchip Glow Gradient */}
            <linearGradient id="chip-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b4ff" />
              <stop offset="100%" stopColor="#8000ff" />
            </linearGradient>
          </defs>

          {/* 1. Rounded Square Container */}
          <rect
            width="120"
            height="120"
            rx="28"
            fill="url(#logo-bg-gradient)"
          />

          {/* 2. Stylized Black Capital "I" Stem Block */}
          {/* Path outlines a thick "I" block that fits cleanly inside the rounded square */}
          <path
            d="M 50 20 H 90 C 90 20 90 28 90 32 C 90 36 82 36 80 36 H 68 V 84 H 80 C 82 84 90 84 90 88 C 90 92 90 100 90 100 H 50 V 84 H 60 V 36 H 50 V 20 Z"
            fill="#050508"
          />

          {/* 3. Microchip Connection Pins (Horizontal & Vertical leads) */}
          {/* Pins on Left (Cyan) */}
          <line x1="32" y1="48" x2="48" y2="48" stroke="#00b4ff" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="32" y1="60" x2="48" y2="60" stroke="#00b4ff" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="32" y1="72" x2="48" y2="72" stroke="#00b4ff" strokeWidth="4.5" strokeLinecap="round" />

          {/* Pins on Right (Purple) */}
          <line x1="72" y1="48" x2="88" y2="48" stroke="#8000ff" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="72" y1="60" x2="88" y2="60" stroke="#8000ff" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="72" y1="72" x2="88" y2="72" stroke="#8000ff" strokeWidth="4.5" strokeLinecap="round" />

          {/* Pins on Top */}
          <line x1="56" y1="32" x2="56" y2="46" stroke="#00b4ff" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="64" y1="32" x2="64" y2="46" stroke="#8000ff" strokeWidth="4.5" strokeLinecap="round" />

          {/* Pins on Bottom */}
          <line x1="56" y1="74" x2="56" y2="88" stroke="#00b4ff" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="64" y1="74" x2="64" y2="88" stroke="#8000ff" strokeWidth="4.5" strokeLinecap="round" />

          {/* 4. CPU Chip Body (Superimposed in the center right) */}
          <rect
            x="44"
            y="42"
            width="32"
            height="32"
            rx="7"
            fill="#050508"
            stroke="url(#chip-glow)"
            strokeWidth="3.5"
          />

          {/* 5. Center Silicon Die Core */}
          <rect
            x="51"
            y="49"
            width="18"
            height="18"
            rx="3"
            fill="#12121a"
            stroke="#00b4ff"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Corporate Typography Layout */}
      {showText && (
        <div className="flex flex-col items-start leading-none">
          {/* "INOVEXIA" with Gradient Styled 'X' */}
          <div className={`font-extrabold text-white tracking-wide ${iconSize === "sm" ? "text-base" : iconSize === "lg" ? "text-2xl" : "text-xl"} font-sans flex items-center`}>
            <span>INOVE</span>
            <span className="bg-gradient-to-r from-[#00b4ff] to-[#8000ff] bg-clip-text text-transparent">X</span>
            <span>IA</span>
          </div>

          {/* "SDN. BHD." with flanking blue & purple lines matching the logo */}
          <div className="flex items-center gap-1.5 w-full mt-1">
            {/* Left Cyan Accent Line */}
            <div className="h-[1.5px] flex-grow bg-gradient-to-r from-transparent to-[#00b4ff] opacity-80" />
            
            {/* SDN. BHD. Text */}
            <span className="text-[9px] tracking-[0.25em] text-zinc-400 font-bold uppercase font-mono">
              SDN. BHD.
            </span>
            
            {/* Right Purple Accent Line */}
            <div className="h-[1.5px] flex-grow bg-gradient-to-r from-[#8000ff] to-transparent opacity-80" />
          </div>
        </div>
      )}
    </div>
  );
}
