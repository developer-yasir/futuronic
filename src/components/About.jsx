import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCrosshairs, FaDatabase, FaMicrochip, FaSatelliteDish } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const HudCard = ({ title, value, label, icon: Icon, delay }) => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative group bg-[var(--surface-color)]/40 border border-primary/30 p-6 overflow-hidden"
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

      {/* Scanning Line */}
      <motion.div
        initial={{ top: "-10%" }}
        whileInView={{ top: "110%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: Math.random() }}
        className="absolute left-0 right-0 h-[2px] bg-primary/50 shadow-[0_0_10px_#06b6d4] z-0"
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary/70 font-mono text-xs">
            <Icon />
            <span>//{title}</span>
          </div>
          <div className="text-3xl font-bold font-mono text-[var(--text-color)] tracking-widest group-hover:text-primary transition-colors">
            {value}
          </div>
          <div className="text-[10px] text-[var(--text-contrast-color)] uppercase mt-1 tracking-widest">
            {label}
          </div>
        </div>
        <FaCrosshairs className="text-primary/30 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
      </div>
    </motion.div>
  );
};

const About = () => {
  const [ticker, setTicker] = useState(0);
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--bg-color)] relative py-32 overflow-hidden" id="about">

      {/* Background Grid - Blueprint Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Rotating Radar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-primary/10 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[60vw] h-[60vw] border border-primary/10 rounded-full flex items-center justify-center">
          <div className="w-[40vw] h-[40vw] border border-primary/10 rounded-full" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent w-1/2 h-full left-1/2 origin-left"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Data Stream */}
          <div className="font-mono">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-6 flex items-center gap-2 text-primary"
            >
              <span className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-xs tracking-[0.2em]">SYSTEM_IDENTITY_RECOGNIZED</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold text-[var(--text-color)] mb-8 uppercase tracking-tighter leading-none">
              We Are <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[var(--text-color)] border-b-4 border-primary/50 pb-2">Future</span> <br />
              OS v2.0
            </h2>

            <div className="space-y-6 text-[var(--text-contrast-color)]/80 border-l mb-12 border-primary/30 pl-6 relative">
              <div className="absolute -left-[3px] top-0 w-[5px] h-8 bg-primary" />
              <p className="text-lg">
                <span className="text-primary font-bold mr-2">{'>'}</span>
                Executing transformative algorithms to redefine disparate industry verticals.
              </p>
              <p className="text-lg">
                <span className="text-primary font-bold mr-2">{'>'}</span>
                Compiling intelligence into tangible assets. The latency between thought and reality is 0ms.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border border-primary text-primary font-bold tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initialize Uplink <FaSatelliteDish className="group-hover:rotate-45 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Right: HUD Stats Grid */}
          <div className="relative">
            {/* Decorative Tech Lines */}
            <svg className="absolute -top-10 -right-10 w-32 h-32 opacity-30 text-primary">
              <circle cx="50%" cy="50%" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="grid grid-cols-2 gap-4">
              <HudCard
                icon={FaMicrochip}
                title="CPU_LOAD"
                value={`${84 + (ticker % 5)}%`}
                label="Optimized Core"
                delay={0.1}
              />
              <HudCard
                icon={FaDatabase}
                title="DATA_FLOW"
                value="40TB"
                label="Daily Throughput"
                delay={0.2}
              />
              <HudCard
                icon={FaSatelliteDish}
                title="SAT_LINK"
                value="ACTIVE"
                label="Global Mesh"
                delay={0.3}
              />
              <motion.div
                className="bg-primary/10 border border-primary/30 p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4" />
                <div className="text-xs text-primary font-mono">SYSTEM DIAGNOSTIC</div>
                <div className="text-[var(--text-color)] font-bold text-lg">RUNNING...</div>
              </motion.div>
            </div>

            {/* Floating "AR" Element */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-8 bg-[var(--bg-color)] border border-[var(--accent-color)]/20 p-3 rounded shadow-xl max-w-[150px]"
            >
              <div className="text-[10px] text-primary mb-1">TARGET LOCK:</div>
              <div className="h-[2px] w-full bg-[var(--accent-color)]/20 mb-1">
                <div className="h-full bg-red-500 w-[70%]" />
              </div>
              <div className="flex justify-between text-[9px] text-[var(--text-color)] font-mono">
                <span>X: 492.31</span>
                <span>Y: 881.04</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
