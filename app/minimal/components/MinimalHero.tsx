'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '../../lib/data';
import { EvolvingDots } from './EvolvingDots';

// Component to sweep blur from left to right
function BlurSweepText({ 
  text, 
  delay = 0, 
  duration = 2,
  className = ""
}: { 
  text: string; 
  delay?: number; 
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Invisible placeholder for layout */}
      <div className="invisible">{text}</div>
      
      {/* Text with blur gradient mask that sweeps */}
      <motion.div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 40px, black)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 40px, black)"
        }}
        initial={{ 
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(8px)"
        }}
        animate={{ 
          clipPath: "inset(0 0% 0 0)",
          filter: "blur(0px)"
        }}
        transition={{ 
          delay,
          duration,
          ease: "easeOut"
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export function MinimalHero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#EDECEC] dark:bg-[#13120A] px-6 pt-20 overflow-hidden">
      {/* Evolving mathematical dot simulation */}
      <EvolvingDots />

      {/* Centered with precision - Abloh × Ive aesthetic */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-16">
          <BlurSweepText
            text="Deploying AI systems for the future of humanity"
            delay={0.3}
            duration={2.0}
            className="text-2xl md:text-3xl font-light tracking-wide text-[#13120A] dark:text-[#EDECEC] leading-relaxed"
          />

          <div className="space-y-3 text-xs text-[#999895] tracking-wider">
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="uppercase text-[10px]"
            >
              CURRENT ROLES:
            </motion.p>
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 3.5, duration: 0.8 }}
            >
              AI Program Coordinator, NYU Langone
            </motion.p>
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 4.5, duration: 0.8 }}
            >
              Co-Founder, BuzzHive
            </motion.p>
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 5.5, duration: 0.8 }}
            >
              MS Computer Science, Binghamton University
            </motion.p>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-12 text-[#999895] hover:text-[#F44E01] transition-colors"
        aria-label="Scroll to content"
      >
        <svg className="w-4 h-8" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="8" y1="0" x2="8" y2="24" />
          <polyline points="4,20 8,24 12,20" />
        </svg>
      </motion.button>
    </section>
  );
}
