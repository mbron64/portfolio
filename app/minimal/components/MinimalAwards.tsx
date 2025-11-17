'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { awards } from '../../lib/data';

export function MinimalAwards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Group awards by year
  const awardsByYear = awards.reduce((acc, award) => {
    const year = award.date.split(' ').pop() || '';
    if (!acc[year]) acc[year] = [];
    acc[year].push(award);
    return acc;
  }, {} as Record<string, typeof awards>);

  const years = Object.keys(awardsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="awards" className="py-40 bg-[#EDECEC] dark:bg-[#13120A] px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] tracking-[0.4em] font-light mb-24 text-[#999895] uppercase -ml-8 md:-ml-16">
          Recognition
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-16">
            {years.map((year, yearIndex) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + yearIndex * 0.1, duration: 0.6 }}
              >
                <div className="border-l border-[#999895]/30 pl-8">
                  <h3 className="text-xs tracking-[0.3em] font-light mb-8 text-[#999895] uppercase">{year}</h3>
                  <ul className="space-y-4">
                    {awardsByYear[year].map((award, awardIndex) => (
                      <li
                        key={awardIndex}
                        className="text-[#13120A] dark:text-[#EDECEC] text-sm font-light leading-relaxed"
                      >
                        {award.title}
                        {award.organization && (
                          <span className="block text-xs text-[#999895] mt-1">{award.organization}</span>
                        )}
                        {award.location && (
                          <span className="block text-[10px] text-[#999895]/70 mt-0.5">{award.location}</span>
                        )}
                        {award.link && (
                          <div className="flex gap-2 mt-2">
                            <a
                              href={award.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-[10px] tracking-wider px-2 py-1 border border-[#999895]/40 text-[#999895] hover:border-[#F44E01] hover:text-[#F44E01] transition-colors"
                            >
                              View
                            </a>
                            {(award as any).extraLinks && (award as any).extraLinks.map((extraLink: { label: string; url: string }, idx: number) => (
                              <a
                                key={idx}
                                href={extraLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-[10px] tracking-wider px-2 py-1 border border-[#999895]/40 text-[#999895] hover:border-[#F44E01] hover:text-[#F44E01] transition-colors"
                              >
                                {extraLink.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
