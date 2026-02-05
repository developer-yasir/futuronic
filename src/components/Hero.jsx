import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaPlay, FaRobot, FaBrain, FaNetworkWired, FaGlobe, FaBolt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[var(--primary-color)]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--secondary-color)]/10 rounded-full blur-[100px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--accent-color)/0.03_1px,transparent_1px),linear-gradient(90deg,var(--accent-color)/0.03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,var(--bg-color)_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Futuronic AI 2.0 is Live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            The Future of <br />
            <span className="text-gradient hover:text-gradient-vibrant transition-all duration-500 cursor-default">Intelligence</span>
            <span className="text-primary">.</span>
          </h1>

          <p className="text-xl text-[var(--text-contrast-color)] mb-8 max-w-lg leading-relaxed">
            Revolutionize your workflow with autonomous agents and cognitive computing.
            We build the AI that builds the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl font-bold text-[var(--bg-color)] shadow-lg shadow-[var(--primary-color)]/25 flex items-center justify-center gap-3 group"
            >
              Start Building <FaRocket className="group-hover:-translate-y-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo"
              className="px-8 py-4 glass border border-[var(--accent-color)]/10 rounded-xl font-semibold text-[var(--text-color)] hover:bg-[var(--accent-color)]/5 flex items-center justify-center gap-3 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center">
                <FaPlay className="text-xs ml-1 text-[var(--text-color)]" />
              </div>
              Watch Demo
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-[var(--text-contrast-color)]">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-color)] bg-surface-highlight flex items-center justify-center text-xs font-bold text-[var(--text-color)]">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full rounded-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[var(--bg-color)] bg-surface-highlight flex items-center justify-center text-xs font-bold text-[var(--text-color)]">
                +2k
              </div>
            </div>
            <div className="text-sm font-medium">
              Trusted by <span className="text-[var(--text-color)] font-bold">2,000+</span> innovators
            </div>
          </div>
        </motion.div>

        {/* 3D Visual - Digital Hive Mind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center h-[600px] w-full perspective-1000"
        >
          {/* Central Connectivity Hub */}
          <div className="relative w-80 h-80">
            {/* Main Orb */}
            <motion.div
              animate={{
                boxShadow: [`0 0 20px var(--primary-color)/0.3`, `0 0 40px var(--primary-color)/0.4`, `0 0 20px var(--primary-color)/0.3`]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-20 bg-gradient-to-br from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center z-20"
            >
              <FaBrain className="text-6xl text-[var(--bg-color)]/90 drop-shadow-lg" />
            </motion.div>

            {/* Spinning Rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  inset: i * -20,
                  border: '1px solid var(--accent-color)/0.1',
                  borderRadius: '50%',
                  borderTopColor: 'var(--primary-color)/0.3',
                  borderBottomColor: 'var(--vibrant-color)/0.3'
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
                transition={{ duration: 15 + (i * 5), repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Orbiting Tech Nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-60px] z-10"
            >
              {/* Node 1 */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass rounded-2xl border border-[var(--accent-color)]/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group"
                whileHover={{ scale: 1.2 }}
              >
                <div className="absolute inset-0 bg-[var(--primary-color)]/20 blur-lg rounded-full group-hover:bg-[var(--primary-color)]/40 transition-colors" />
                <FaGlobe className="text-[var(--text-color)] text-2xl relative z-10" />
                <div className="absolute -top-8 bg-[var(--surface-color)]/90 text-[var(--text-color)] text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Global Connect</div>
              </motion.div>

              {/* Node 2 */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 glass rounded-full border border-[var(--accent-color)]/20 flex items-center justify-center shadow-lg"
              >
                <FaNetworkWired className="text-[var(--secondary-color)] text-xl" />
              </motion.div>

              {/* Node 3 */}
              <motion.div
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--surface-highlight)] border border-[var(--accent-color)]/10 rounded-lg flex items-center justify-center shadow-lg"
              >
                <FaBolt className="text-[var(--vibrant-color)] text-lg" />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Info Cards - Abstract Data */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-20 right-0 lg:right-10 glass p-4 rounded-xl border-l-2 border-[var(--primary-color)] max-w-[180px]"
          >
            <div className="text-[10px] text-[var(--text-contrast-color)] uppercase mb-1">Processing Power</div>
            <div className="h-1 w-full bg-[var(--accent-color)]/10 rounded-full overflow-hidden mb-2">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-full bg-[var(--primary-color)]"
              />
            </div>
            <div className="text-xs font-bold text-[var(--text-color)]">128 TFLOPS</div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-20 left-0 lg:left-10 glass p-4 rounded-xl border-l-2 border-[var(--secondary-color)] max-w-[180px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[var(--secondary-color)] animate-pulse" />
              <span className="text-[10px] text-[var(--text-contrast-color)] uppercase">System Status</span>
            </div>
            <div className="text-xs font-bold text-[var(--text-color)]">Optimized</div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
