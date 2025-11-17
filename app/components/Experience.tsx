'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../lib/data';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="min-h-screen py-32 bg-[#E8F0E8] texture-grain relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-[#2C2520]">
            EXPERIENCE
          </h2>

          <div className="space-y-16">
            {experience.map((exp, expIndex) => (
              <motion.div
                key={expIndex}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: expIndex * 0.2 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#2C2520] mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-[#6B5D52]">{exp.location}</p>
                </div>

                <div className="space-y-10 border-l-2 border-[#D4E4D4] pl-8 ml-4">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#D99D24] border-4 border-[#E8F0E8] shadow-sm" />

                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-[#2C2520] mb-2">
                          {role.title}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-[#6B5D52]">
                          <span>{role.period}</span>
                          {role.type && (
                            <>
                              <span>•</span>
                              <span>{role.type}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {role.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-[#3D342E] leading-relaxed flex gap-3"
                          >
                            <span className="text-[#D99D24] mt-1.5">▸</span>
                            <span>{highlight}</span>
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

