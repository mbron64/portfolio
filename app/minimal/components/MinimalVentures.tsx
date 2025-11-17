'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { entrepreneurship } from '../../lib/data';

export function MinimalVentures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ventures" className="py-40 bg-[#EDECEC] dark:bg-[#13120A] px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] tracking-[0.4em] font-light mb-24 text-[#999895] uppercase -ml-8 md:-ml-16">
          Ventures
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-24">
            {entrepreneurship.map((venture, index) => (
              <motion.div
                key={index}
                className="pb-24 border-b border-[#999895]/20 last:border-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              >
                <h3 className="text-lg font-light mb-2 text-[#13120A] dark:text-[#EDECEC] tracking-wide">
                  {venture.name}
                </h3>
                <p className="text-[#999895] text-xs mb-1 tracking-wider">{venture.role}</p>
                <p className="text-[#999895]/70 text-[10px] mb-6">{venture.period}</p>

                <div className="inline-block px-3 py-1 border border-[#F44E01] text-[#F44E01] text-[10px] tracking-wider mb-8">
                  {venture.impact}
                </div>

                <p className="text-[#13120A] dark:text-[#EDECEC] text-sm mb-8 leading-relaxed font-light">
                  {venture.description}
                </p>

                {(venture as any).links && (
                  <div className="flex gap-3 mb-8">
                    {(venture as any).links.map((link: { label: string; url: string }, linkIndex: number) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] tracking-wider px-3 py-1 border border-[#999895]/40 text-[#999895] hover:border-[#F44E01] hover:text-[#F44E01] transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                <ul className="space-y-3">
                  {venture.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-[#999895] text-xs leading-relaxed"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
