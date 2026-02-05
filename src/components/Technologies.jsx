import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import {
  SiPython, SiNodedotjs, SiReact, SiTypescript, SiGo, SiDjango, SiFastapi,
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpencv, SiOpenai,
  SiAmazon, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform,
  SiPostgresql, SiMongodb, SiApachekafka, SiApachespark, SiPandas, SiNumpy
} from 'react-icons/si';

// Data structure for the tech stack
const technologies = [
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', category: 'AI/ML' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', category: 'AI/ML' },
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Language' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'DevOps' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900', category: 'Cloud' },
  { name: 'OpenAI', icon: SiOpenai, color: '#412991', category: 'AI/ML' },
  { name: 'Go', icon: SiGo, color: '#00ADD8', category: 'Language' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Backend' },
];

const FloatingIcon = ({ tech, index, total }) => {
  // Calculate distinct positions for a distributed "cloud" feel
  // Using a spiral distribution or random within bounds
  const angle = (index / total) * 2 * Math.PI;
  const radius = 150 + (index % 3) * 60; // Varying radius
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ x, y }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4 + (index % 3), // Randomize duration
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
        className="relative group cursor-pointer"
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300"
          style={{ backgroundColor: tech.color }}
        />

        {/* Icon Container */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--surface-color)]/80 backdrop-blur-md rounded-2xl border border-[var(--accent-color)]/10 flex items-center justify-center relative z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50">
          <tech.icon className="text-3xl md:text-4xl transition-colors duration-300" style={{ color: tech.color }} />
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
          <div className="bg-[var(--bg-color)]/80 text-[var(--text-color)] text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-[var(--accent-color)]/10">
            {tech.name}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const NeuralConnection = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(var(--accent-color-rgb),0.1)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};

const Technologies = () => {
  return (
    <section className="min-h-[800px] flex items-center justify-center py-24 px-6 bg-[var(--bg-color)] relative overflow-hidden" id="technologies">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0)_0%,_var(--bg-color)_100%)] z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen" />

      <NeuralConnection />

      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="text-center mb-10 md:mb-0 relative pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-30 inline-block"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
              Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x">Nexus</span>
            </h2>
            <p className="text-xl text-[var(--text-contrast-color)] max-w-2xl mx-auto backdrop-blur-sm">
              Our architecture is built on a constellation of advanced technologies, orbiting around performance and scalability.
            </p>
          </motion.div>
        </div>

        {/* The Orbit Container */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
          <motion.div
            className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            {/* Core Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--accent-color)] rounded-full shadow-[0_0_20px_rgba(var(--accent-color-rgb),0.8)] z-0" />

            {/* Satellites */}
            {technologies.map((tech, index) => (
              <FloatingIcon key={index} tech={tech} index={index} total={technologies.length} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
