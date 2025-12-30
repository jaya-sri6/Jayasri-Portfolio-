'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`group relative glass rounded-2xl overflow-hidden glow-border ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            {featured && (
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-purple/20 text-accent-purple">
                Featured
              </span>
            )}
            <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>
          </div>
          
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg glass hover:shadow-glow-sm transition-all duration-300"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          </motion.a>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={14} />
          <span>{project.duration}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-dark-600 text-gray-300 border border-dark-500 hover:border-accent-purple/50 hover:text-white transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* View Project Button */}
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 pt-4 text-accent-cyan hover:text-white transition-colors group/link"
        >
          <span className="font-medium">View Project</span>
          <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-1" />
        </motion.a>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
}
