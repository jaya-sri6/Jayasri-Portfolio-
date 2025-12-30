'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Brain, 
  Wrench,
  Library,
  Sparkles
} from 'lucide-react';
import { skills, Skill } from '@/data/projects';

const categoryConfig: Record<Skill['category'], { label: string; icon: typeof Code2; color: string }> = {
  language: { label: 'Languages', icon: Code2, color: 'from-purple-500 to-pink-500' },
  framework: { label: 'Frameworks & Backend', icon: Database, color: 'from-blue-500 to-cyan-500' },
  ai: { label: 'AI / ML', icon: Brain, color: 'from-green-500 to-emerald-500' },
  tool: { label: 'Developer Tools', icon: Wrench, color: 'from-orange-500 to-yellow-500' },
  library: { label: 'Libraries', icon: Library, color: 'from-pink-500 to-rose-500' },
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)',
      }}
      className="glass rounded-xl p-4 cursor-default group glow-border relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10" />
      
      <div className="relative flex items-center gap-3">
        <Sparkles size={16} className="text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

function SkillCategory({ 
  category, 
  skills, 
  index 
}: { 
  category: Skill['category']; 
  skills: Skill[]; 
  index: number;
}) {
  const config = categoryConfig[category];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${config.color}`}>
          <Icon size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{config.label}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  const categories = Object.keys(groupedSkills) as Skill['category'][];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-glow mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, backend development, and modern software engineering practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <SkillCategory
              key={category}
              category={category}
              skills={groupedSkills[category]}
              index={index}
            />
          ))}
        </div>

        {/* Floating Tech Icons Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-lg glass flex items-center justify-center text-accent-purple/50"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Code2 size={16} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
