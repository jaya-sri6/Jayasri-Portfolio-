'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/projects';

interface TimelineItemProps {
  experience: typeof experiences[0];
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start gap-8"
    >
      {/* Timeline Line & Dot */}
      <div className="absolute left-[19px] top-0 bottom-0 flex flex-col items-center">
        {/* Animated Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
          className="relative z-10 w-10 h-10 rounded-full bg-dark-800 border-2 border-accent-purple flex items-center justify-center"
        >
          <motion.div
            animate={isInView ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            className="w-3 h-3 rounded-full bg-accent-purple"
          />
        </motion.div>
        
        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            className="w-[2px] flex-1 bg-gradient-to-b from-accent-purple to-accent-blue origin-top"
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, x: 10 }}
        transition={{ duration: 0.3 }}
        className="ml-16 flex-1 glass rounded-2xl p-6 glow-border group"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
              {experience.role}
            </h3>
            <p className="text-accent-cyan font-medium mt-1">{experience.company}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {experience.duration}
            </span>
            {experience.location && (
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {experience.location}
              </span>
            )}
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-3">
          {experience.responsibilities.map((responsibility, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.3 }}
              className="flex items-start gap-3 text-gray-400"
            >
              <ChevronRight size={16} className="text-accent-purple mt-1 flex-shrink-0" />
              <span>{responsibility}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[120px]" />
      </div>

      <motion.div style={{ opacity }} className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Briefcase size={16} />
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-glow mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey building AI-powered applications and scalable backend systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
