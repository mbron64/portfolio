'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../lib/data';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'AI / ML', items: skills.aiml },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Tools', items: skills.tools },
    { title: 'Domains', items: skills.domains },
  ];

  return (
    <section id="skills" className="min-h-screen py-32 bg-[#E0EEF5] texture-grain relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 text-[#2C2520]">
            SKILLS
          </h2>

          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-[#2C2520] mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      className="px-4 py-2 bg-white text-[#3D342E] border border-[#EDF3F7] hover:border-[#D99D24] hover:text-[#D99D24] hover:shadow-md transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + itemIndex * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
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

