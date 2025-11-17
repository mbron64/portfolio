'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, education } from '../../lib/data';

export function MinimalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
      <section id="about" className="py-40 bg-[#EDECEC] dark:bg-[#1B1912] px-6" ref={ref}>
        <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] tracking-[0.4em] font-light mb-24 text-[#999895] uppercase -ml-8 md:-ml-16">
            Background
          </h2>

          <div className="space-y-8 text-base md:text-lg leading-loose font-light">
            <motion.p
              className="text-[#13120A] dark:text-[#EDECEC]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>
          </div>

          <motion.div
            className="mt-24 space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l border-[#999895]/30 pl-8"
              >
                <h3 className="font-light text-sm text-[#13120A] dark:text-[#EDECEC] mb-1 tracking-wide">
                  {edu.degree}
                </h3>
                {edu.additionalDegree && (
                  <h4 className="font-light text-sm text-[#999895] mb-1 tracking-wide">
                    {edu.additionalDegree}
                  </h4>
                )}
                {edu.concentration && (
                  <p className="text-[#999895] text-xs mb-1">{edu.concentration}</p>
                )}
                <p className="text-[#999895] text-xs">{edu.school}</p>
                <p className="text-[#999895]/70 text-[10px] mt-1">
                  {edu.period}
                  {edu.gpa && ` · ${edu.gpa}`}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
