'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { research } from '../../lib/data';

export function MinimalResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="py-40 bg-[#EDECEC] dark:bg-[#13120A] px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.4em] font-light mb-24 text-[#999895] uppercase -ml-8 md:-ml-16">
            Research
          </h2>

          {/* Publications */}
          <div className="mb-32">
            <h3 className="text-xs tracking-[0.3em] font-light mb-12 text-[#999895] uppercase">Publications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {research.publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="pb-6 mb-6 border-b border-[#999895]/20 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.6 }}
                >
                  <h4 className="text-sm font-light mb-3 text-[#13120A] dark:text-[#EDECEC] leading-relaxed">
                    {pub.title}
                  </h4>
                  <p className="text-xs text-[#999895] mb-3">
                    {pub.venue}, {pub.year}
                  </p>
                  {pub.award && (
                    <span className="inline-block text-[10px] tracking-wider px-2 py-1 border border-[#F44E01] text-[#F44E01] mb-3">
                      {pub.award}
                    </span>
                  )}
                  {(pub as any).links && (
                    <div className="flex gap-3 mt-4">
                      {(pub as any).links.map((link: { label: string; url: string }, linkIndex: number) => (
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pre-Publications */}
          <div>
            <h3 className="text-xs tracking-[0.3em] font-light mb-12 text-[#999895] uppercase">
              Pre-Publications
            </h3>
            <div className="space-y-6">
              {research.prePublications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="pb-6 mb-6 border-b border-[#999895]/20 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                >
                  <h4 className="text-sm font-light text-[#13120A] dark:text-[#EDECEC] leading-relaxed">{pub.title}</h4>
                  {(pub as any).links && (
                    <div className="flex gap-3 mt-4">
                      {(pub as any).links.map((link: { label: string; url: string }, linkIndex: number) => (
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
