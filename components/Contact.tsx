'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  Send, 
  MapPin,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '@/data/projects';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: personalInfo.github,
    color: 'hover:text-white hover:border-white',
    description: 'Check out my code',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: personalInfo.linkedin,
    color: 'hover:text-blue-400 hover:border-blue-400',
    description: 'Connect with me',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: personalInfo.leetcode,
    color: 'hover:text-yellow-400 hover:border-yellow-400',
    description: 'See my solutions',
  },
  {
    name: 'Email',
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    color: 'hover:text-accent-purple hover:border-accent-purple',
    description: 'Send me a message',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-purple/20 via-transparent to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Sparkles size={16} />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-glow mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
            or just have a chat about AI and technology.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Email CTA */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-glow text-white font-medium text-lg shadow-glow hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-300 mb-8"
          >
            <Mail size={24} />
            <span>{personalInfo.email}</span>
            <Send size={20} />
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-400 mb-12"
          >
            <MapPin size={18} />
            <span>Chennai, Tamil Nadu, India</span>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative glass rounded-2xl p-6 border border-transparent transition-all duration-300 ${link.color}`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-purple/0 to-accent-cyan/0 group-hover:from-accent-purple/10 group-hover:to-accent-cyan/10 transition-all duration-300" />
                
                <div className="relative flex flex-col items-center gap-3">
                  <link.icon size={28} className="text-gray-400 group-hover:scale-110 transition-all duration-300" />
                  <span className="font-medium text-white">{link.name}</span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {link.description}
                  </span>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  className="absolute top-3 right-3"
                >
                  <ArrowUpRight size={16} className="text-accent-purple" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          Open to internship opportunities, collaborations, and exciting projects.
        </motion.p>
      </div>
    </section>
  );
}
