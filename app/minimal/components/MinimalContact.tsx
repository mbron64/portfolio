'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../../lib/data';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export function MinimalContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-40 bg-[#EDECEC] dark:bg-[#1B1912] px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.4em] font-light mb-20 text-[#999895] uppercase -ml-8 md:-ml-16">
            Contact
          </h2>

          <p className="text-sm text-[#999895] mb-16 font-light leading-relaxed text-center">
            For collaboration on AI research, entrepreneurship inquiries, or sustainable beekeeping discussion.
          </p>

          {/* Social Links */}
          <motion.div
            className="mt-20 flex justify-center gap-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#999895] hover:text-[#F44E01] transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mbron64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999895] hover:text-[#F44E01] transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-bronikowski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999895] hover:text-[#F44E01] transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </motion.div>

          <p className="mt-16 text-center text-[10px] text-[#999895]/70 tracking-wider">
            © 2025 Michael Bronikowski
          </p>
        </motion.div>
      </div>
    </section>
  );
}
