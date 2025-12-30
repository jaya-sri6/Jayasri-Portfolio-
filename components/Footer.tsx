'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '@/data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: personalInfo.leetcode, label: 'LeetCode' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-dark-600">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              JJ
            </motion.span>
            <p className="text-gray-500 text-sm">
              © {currentYear} Jayasri Jonnalagadda. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass hover:shadow-glow-sm transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-gray-400 hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-accent-pink fill-accent-pink" />
            </motion.span>
            using Next.js & Framer Motion
          </motion.p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-dark-700">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => {
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ color: '#a855f7' }}
              className="text-gray-400 text-sm hover:text-accent-purple transition-colors"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </footer>
  );
}
