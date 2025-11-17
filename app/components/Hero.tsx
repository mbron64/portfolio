'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '../lib/data';
import { FiArrowDown } from 'react-icons/fi';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#2C2520] via-[#1A1816] to-[#1A1816] honeycomb-pattern">
      {/* Animated honey gold gradient glow */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(217, 157, 36, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(244, 213, 141, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(217, 157, 36, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(217, 157, 36, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-[#FAF8F3]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl mb-4 text-[#D4E4D4] font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.div>

          <motion.div
            className="text-lg md:text-xl text-[#F4D58D] mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Current Role: {personalInfo.role}
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#E8F0E8] hover:text-[#D99D24] transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ y: 5 }}
          >
            Explore
            <FiArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-[#F4D58D]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-[#D99D24] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

