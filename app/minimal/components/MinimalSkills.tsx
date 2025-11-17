'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../../lib/data';

export function MinimalSkills() {
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
    <section id="skills" className="py-40 bg-[#EDECEC] dark:bg-[#1B1912] px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] tracking-[0.4em] font-light mb-24 text-[#999895] uppercase -ml-8 md:-ml-16">
          Expertise
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + catIndex * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xs tracking-[0.3em] font-light mb-8 text-[#999895] uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      className="px-3 py-1.5 border border-[#999895]/20 text-[#999895] text-xs font-light hover:border-[#F44E01] hover:text-[#F44E01] transition-colors"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + catIndex * 0.1 + itemIndex * 0.02, duration: 0.3 }}
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
