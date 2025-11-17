'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../../lib/data';

export function MinimalExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-40 bg-[#EDECEC] dark:bg-[#1B1912] px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] tracking-[0.4em] font-light mb-20 text-[#999895] uppercase -ml-8 md:-ml-16">
          Experience
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-16">
            {experience.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: expIndex * 0.15 }}
                className="pb-8 border-b border-[#999895]/20 last:border-b-0"
              >
                <div className="mb-6">
                  <h3 className="text-base font-normal text-[#13120A] dark:text-[#EDECEC] mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-[#999895] font-light">{exp.location}</p>
                </div>

                <div className="space-y-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="pl-0">
                      <div className="mb-4">
                        <h4 className="text-sm font-light text-[#13120A] dark:text-[#EDECEC] mb-1">
                          {role.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 text-[10px] text-[#999895] tracking-wider">
                          <span>{role.period}</span>
                          {role.type && (
                            <>
                              <span>·</span>
                              <span>{role.type}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {role.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-xs text-[#999895] leading-relaxed font-light pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[#F44E01]"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

