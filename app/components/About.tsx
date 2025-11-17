'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, education } from '../lib/data';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen py-32 bg-[#F5F1E8] texture-grain relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-[#2C2520]">
            ABOUT
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="text-lg md:text-xl text-[#3D342E] leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              <div className="space-y-3 text-[#6B5D52]">
                <p className="flex items-center gap-2">
                  <span className="font-mono text-sm">📍</span>
                  <span>{personalInfo.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-mono text-sm">📧</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-[#D99D24] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-[#D99D24] pl-6 bg-white/50 backdrop-blur-sm p-6 -ml-6 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-[#2C2520] mb-2">
                    {edu.degree}
                  </h3>
                  {edu.additionalDegree && (
                    <h4 className="text-lg font-medium text-[#3D342E] mb-2">
                      {edu.additionalDegree}
                    </h4>
                  )}
                  {edu.concentration && (
                    <p className="text-[#D99D24] font-medium mb-2">{edu.concentration}</p>
                  )}
                  <p className="text-[#6B5D52] mb-1">{edu.school}</p>
                  <p className="text-sm text-[#6B5D52]">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-sm text-[#3D342E] mt-2 font-medium">GPA: {edu.gpa}</p>
                  )}
                  {edu.coursework && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-[#FAF8F3] border border-[#D99D24]/30 text-[#3D342E] rounded-full"
                        >
                          {course}
                        </span>
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

