import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaLightbulb, FaCode, FaRocket, FaCogs, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We dive deep into your business ecosystem to identify bottlenecks and opportunities for AI intervention.",
      icon: <FaSearch />
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: "Our architects draft a comprehensive roadmap and technical specifications tailored to your goals.",
      icon: <FaLightbulb />
    },
    {
      number: "03",
      title: "Agile Development",
      description: "We build your solution in iterative sprints, ensuring transparency and rapid feedback loops.",
      icon: <FaCode />
    },
    {
      number: "04",
      title: "Integration & Testing",
      description: "Seamless integration with your existing stack, followed by rigorous stress-testing and QA.",
      icon: <FaCogs />
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth rollout with zero downtime, including team training and documentation.",
      icon: <FaRocket />
    },
    {
      number: "06",
      title: "Optimization & Scale",
      description: "Continuous monitoring and refinement to ensure the solution scales with your growth.",
      icon: <FaChartLine />
    }
  ];

  return (
    <section className="bg-[var(--bg-color)] py-24 px-6 relative overflow-hidden" id="process">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            The <span className="text-gradient">Process</span>
          </motion.h2>
          <p className="text-xl text-[var(--text-contrast-color)] max-w-2xl mx-auto">
            From concept to code, our streamlined workflow ensures delivery of high-impact AI solutions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--accent-color)]/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary h-full"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Step Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`glass p-8 rounded-3xl border border-[var(--accent-color)]/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-[var(--text-contrast-color)] leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary text-2xl border border-[var(--accent-color)]/10 shadow-lg shadow-primary/20 relative group">
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                    {step.icon}
                  </div>
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;