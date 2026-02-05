import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Decorative Globs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-text-contrast mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the revolution today. Let Futuronic empower your enterprise with intelligent AI solutions and cutting-edge automation tools.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-[var(--text-color)] text-[var(--bg-color)] px-10 py-5 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300"
          >
            <span>Start Your Journey</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
