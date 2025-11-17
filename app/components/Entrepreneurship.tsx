'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { entrepreneurship } from '../lib/data';
import { FiTrendingUp } from 'react-icons/fi';

export function Entrepreneurship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="entrepreneurship"
      className="min-h-screen py-32 bg-[#2C2520] honeycomb-pattern relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-[#FAF8F3]">
            ENTREPRENEURSHIP
          </h2>

          <div className="space-y-16">
            {entrepreneurship.map((venture, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="border border-[#3D342E] bg-[#FAF8F3] p-8 md:p-12 hover:border-[#D99D24] hover:shadow-2xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-[#2C2520] mb-2 group-hover:text-[#D99D24] transition-colors">
                          {venture.name}
                        </h3>
                        <p className="text-lg text-[#3D342E] mb-2">
                          {venture.role}
                        </p>
                        <p className="text-sm text-[#6B5D52]">{venture.period}</p>
                      </div>
                      <FiTrendingUp className="w-8 h-8 text-[#D99D24] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D99D24] text-[#FAF8F3] rounded-full text-sm font-medium mb-6 shadow-md">
                      {venture.impact}
                    </div>
                  </div>

                  <p className="text-[#3D342E] leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  {(venture as any).links && (
                    <div className="flex gap-3 mb-6">
                      {(venture as any).links.map((link: { label: string; url: string }, linkIndex: number) => (
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

                  <div className="space-y-2">
                    {venture.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-start gap-3 text-sm text-[#6B5D52]"
                      >
                        <span className="text-[#D99D24] mt-1">●</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

