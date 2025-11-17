'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../lib/data';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="min-h-screen py-32 bg-[#2C2520]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#FAF8F3]">
            GET IN TOUCH
          </h2>

          <p className="text-xl text-[#D4E4D4] mb-16 max-w-2xl mx-auto">
            Interested in collaborating on AI research, discussing entrepreneurship, or learning
            about sustainable beekeeping? Let&apos;s connect.
          </p>

          <div className="flex flex-col items-center gap-6 mb-16">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-lg text-[#FAF8F3] hover:text-[#D99D24] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FiMail className="w-6 h-6" />
              <span>{personalInfo.email}</span>
            </motion.a>

            <motion.div
              className="flex items-center gap-3 text-lg text-[#FAF8F3]"
              whileHover={{ scale: 1.05 }}
            >
              <FiMapPin className="w-6 h-6" />
              <span>{personalInfo.location}</span>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/mbron64"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#3D342E] border border-[#3D342E] hover:border-[#D99D24] hover:bg-[#D99D24] text-[#FAF8F3] transition-all shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/michael-bronikowski/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#3D342E] border border-[#3D342E] hover:border-[#D99D24] hover:bg-[#D99D24] text-[#FAF8F3] transition-all shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
          </div>

          <motion.div
            className="mt-24 pt-12 border-t border-[#3D342E] text-sm text-[#D4E4D4]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>© 2025 Michael Bronikowski. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

