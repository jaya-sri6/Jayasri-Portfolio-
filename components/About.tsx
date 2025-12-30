'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { personalInfo, certifications } from '@/data/projects';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent-purple/10 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span className="text-accent-purple text-sm tracking-widest uppercase">
            About Me
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafting <span className="text-gradient">Intelligent Solutions</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-glow mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-400 leading-relaxed">
                My expertise spans across building RAG systems, multi-agent architectures, 
                and production-grade APIs. I believe in writing clean, maintainable code 
                that scales and delivers real-world impact.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 glow-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-purple/20">
                  <GraduationCap className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-accent-cyan font-medium">
                    {personalInfo.education.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {personalInfo.education.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {personalInfo.education.duration}
                    </span>
                  </div>
                  <div className="mt-4 inline-block px-4 py-2 rounded-full bg-gradient-glow/20 text-white font-semibold">
                    CGPA: {personalInfo.education.cgpa}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Certifications */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <Award className="w-6 h-6 text-accent-purple" />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass rounded-xl p-5 glow-border cursor-default"
                >
                  <h4 className="font-medium text-white mb-1">{cert.title}</h4>
                  <p className="text-sm text-accent-cyan">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '3+', label: 'Internships' },
            { value: '6+', label: 'Projects' },
            { value: '9.45', label: 'CGPA' },
            { value: '6+', label: 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center glow-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
