import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FaBrain, FaRobot, FaCogs, FaChartLine, FaShieldAlt, FaCloud, FaArrowRight, FaFingerprint, FaNetworkWired } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const TiltCard = ({ children, color }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--secondary-color)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 50 Q 25 25 50 50 T 100 50"
          stroke="url(#neural-grad)"
          strokeWidth="0.1"
          fill="none"
          animate={{
            d: [
              "M0 50 Q 25 25 50 50 T 100 50",
              "M0 50 Q 25 75 50 50 T 100 50",
              "M0 50 Q 25 25 50 50 T 100 50"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0 30 Q 30 60 60 30 T 100 30"
          stroke="url(#neural-grad)"
          strokeWidth="0.05"
          fill="none"
          animate={{
            d: [
              "M0 30 Q 30 60 60 30 T 100 30",
              "M0 30 Q 30 0 60 30 T 100 30",
              "M0 30 Q 30 60 60 30 T 100 30"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

const Services = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  const services = [
    {
      title: 'Neural Solutions',
      description: 'Advanced deep learning architectures that mimic human cognitive functions for complex problem solving.',
      icon: <FaBrain />,
      color: 'from-cyan-500 to-blue-600',
      stats: '99.8% Precision'
    },
    {
      title: 'Autonomous Flow',
      description: 'End-to-end process automation powered by self-evolving AI agents that optimize in real-time.',
      icon: <FaRobot />,
      color: 'from-purple-500 to-pink-600',
      stats: '10x Speed'
    },
    {
      title: 'Cognitive Engine',
      description: 'Custom ML models that learn from your unique data patterns to provide predictive operational intelligence.',
      icon: <FaNetworkWired />,
      color: 'from-emerald-500 to-teal-600',
      stats: 'Real-time Sync'
    },
    {
      title: 'Data Weaver',
      description: 'Transform fragmented data into a cohesive strategic asset with high-fidelity visualization and analysis.',
      icon: <FaChartLine />,
      color: 'from-orange-500 to-amber-600',
      stats: 'Live Insights'
    },
    {
      title: 'Shield AI',
      description: 'Proactive cybersecurity that uses behavioral analysis to neutralize threats before they impact your network.',
      icon: <FaShieldAlt />,
      color: 'from-red-500 to-rose-600',
      stats: 'Zero Breaches'
    },
    {
      title: 'Quantum Cloud',
      description: 'Next-gen cloud infrastructure optimized for AI training and inference at unprecedented scales.',
      icon: <FaCloud />,
      color: 'from-indigo-500 to-violet-600',
      stats: 'Global Edge'
    },
  ];

  return (
    <section className="bg-[var(--bg-color)] py-32 px-6 relative overflow-hidden" id="services">
      <NeuralBackground />

      {/* Dynamic Ambient Light */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-8">
            Digital <span className="text-gradient">Superpowers</span>
          </h2>
          <p className="text-xl md:text-2xl text-[var(--text-contrast-color)] max-w-3xl mx-auto leading-relaxed">
            We don't just provide services; we equip your enterprise with the intelligence to conquer the digital frontier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <TiltCard>
                <div className="glass p-10 rounded-[3rem] h-full flex flex-col relative overflow-hidden border border-[var(--accent-color)]/10 hover:border-primary/30 transition-colors duration-500 bg-[var(--surface-color)]/40 hover:bg-[var(--surface-color)]/60">
                  {/* Hover Glow */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl text-white mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 font-display text-[var(--text-color)] group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[var(--text-contrast-color)] text-lg leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-[var(--accent-color)]/10">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">{service.stats}</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-10 h-10 rounded-full bg-[var(--bg-color)] flex items-center justify-center text-primary border border-primary/20 cursor-pointer"
                    >
                      <FaArrowRight size={14} />
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
