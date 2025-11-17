'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { research } from '../lib/data';
import { FiAward } from 'react-icons/fi';

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="min-h-screen py-32 bg-[#EDF3F7] texture-grain relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-[#2C2520]">
            RESEARCH
          </h2>

          {/* Current Labs */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold mb-8 text-[#2C2520]">Current Labs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {research.currentLabs.map((lab, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white border border-[#E0EEF5] hover:border-[#D99D24] hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-[#2C2520] mb-2">
                      {lab.name}
                    </h4>
                    {lab.institution && (
                      <p className="text-sm text-[#6B5D52] mb-2">
                        {lab.institution}
                      </p>
                    )}
                    <p className="text-sm text-[#D99D24] font-medium">{lab.period}</p>
                  </div>
                  <p className="text-sm font-medium text-[#3D342E] mb-3">
                    {lab.focus}
                  </p>
                  <p className="text-sm text-[#6B5D52] leading-relaxed">
                    {lab.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold mb-8 text-[#2C2520]">Publications</h3>
            <div className="space-y-6">
              {research.publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="pb-6 border-b-2 border-[#D99D24]/30 last:border-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold text-[#2C2520] mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-[#6B5D52] mb-2">
                    {pub.venue}, {pub.year}
                  </p>
                  {pub.award && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D99D24] text-[#FAF8F3] rounded-full text-sm font-medium shadow-md mb-4">
                      <FiAward className="w-4 h-4" />
                      {pub.award}
                    </div>
                  )}
                  {(pub as any).links && (
                    <div className="flex gap-3 mt-4">
                      {(pub as any).links.map((link: { label: string; url: string }, linkIndex: number) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#D99D24] text-[#D99D24] hover:bg-[#D99D24] hover:text-[#FAF8F3] rounded-full text-sm font-medium transition-colors"
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
            <h3 className="text-3xl font-semibold mb-8 text-[#2C2520]">
              Pre-Publications
            </h3>
            <div className="space-y-4">
              {research.prePublications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="pb-6 border-b border-[#D99D24]/20 last:border-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <h4 className="text-lg font-medium text-[#2C2520] mb-3">{pub.title}</h4>
                  {(pub as any).links && (
                    <div className="flex gap-3">
                      {(pub as any).links.map((link: { label: string; url: string }, linkIndex: number) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#D99D24] text-[#D99D24] hover:bg-[#D99D24] hover:text-[#FAF8F3] rounded-full text-sm font-medium transition-colors"
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

