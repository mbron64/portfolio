'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { awards } from '../lib/data';
import { FiAward, FiMic } from 'react-icons/fi';

export function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getIcon = (category: string) => {
    switch (category) {
      case 'competition':
        return <FiAward className="w-5 h-5" />;
      case 'speaking':
        return <FiMic className="w-5 h-5" />;
      default:
        return <FiAward className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'competition':
        return 'bg-[#D99D24] text-[#FAF8F3]';
      case 'speaking':
        return 'bg-[#E0EEF5] text-[#2C2520]';
      case 'recognition':
        return 'bg-[#D4E4D4] text-[#2C2520]';
      default:
        return 'bg-[#D99D24] text-[#FAF8F3]';
    }
  };

  return (
    <section id="awards" className="min-h-screen py-32 bg-[#FAF8F3] texture-grain relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-[#2C2520]">
            AWARDS & RECOGNITION
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white border border-[#F5F1E8] hover:border-[#D99D24] hover:shadow-md transition-all"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getCategoryColor(award.category)} shadow-sm`}>
                      {getIcon(award.category)}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#2C2520] mb-2">
                        {award.title}
                      </h3>
                      {award.organization && (
                        <p className="text-sm text-[#3D342E] mb-1">
                          {award.organization}
                        </p>
                      )}
                      {award.location && (
                        <p className="text-sm text-[#6B5D52] mb-2">
                          {award.location}
                        </p>
                      )}
                      <p className="text-sm text-[#D99D24] font-medium mb-2">{award.date}</p>
                      {award.link && (
                        <div className="flex gap-2">
                          <a
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[#D99D24] text-[#D99D24] hover:bg-[#D99D24] hover:text-[#FAF8F3] rounded-full text-sm font-medium transition-colors"
                          >
                            View
                          </a>
                          {(award as any).extraLinks && (award as any).extraLinks.map((extraLink: { label: string; url: string }, idx: number) => (
                            <a
                              key={idx}
                              href={extraLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[#D99D24] text-[#D99D24] hover:bg-[#D99D24] hover:text-[#FAF8F3] rounded-full text-sm font-medium transition-colors"
                            >
                              {extraLink.label}
                            </a>
                          ))}
                        </div>
                      )}
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

