import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaChartBar, FaUsers, FaCoins, FaQuoteLeft, FaArrowRight, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const AnimatedCounter = ({ value, label, icon: Icon, delay }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const target = parseInt(value.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const start = 0;
    const end = target;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass p-8 rounded-[2.5rem] relative group overflow-hidden border border-[var(--accent-color)]/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon />
        </div>
        <div className="text-5xl font-bold font-display text-[var(--text-color)] mb-2">
          {count}{suffix}
        </div>
        <div className="text-[var(--text-contrast-color)] font-medium tracking-wide uppercase text-sm">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const EnhancedCaseStudy = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)]/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass rounded-[4rem] overflow-hidden border border-[var(--accent-color)]/10 bg-[var(--surface-color)]/30 backdrop-blur-2xl"
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-12 left-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />

            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.2em] mb-6 text-sm uppercase">
              <span className="w-8 h-[2px] bg-primary"></span> Featured Case Study
            </span>

            <h3 className="text-5xl md:text-6xl font-bold font-display text-[var(--text-color)] mb-8 leading-tight">
              Revolutionizing <br /> <span className="text-gradient">Financial Intelligence</span>
            </h3>

            <p className="text-xl text-[var(--text-contrast-color)] mb-10 leading-relaxed max-w-lg">
              We partnered with GlobalFinance Inc. to deploy a cognitive neural network that redefined fraud prevention and operational excellence.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { label: 'Fraud Detection Accuracy', val: '99.9%' },
                { label: 'Operational Cost Reduction', val: '$50M+' },
                { label: 'Model Deployment Speed', val: '2 Weeks' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-color)]/30 border border-[var(--accent-color)]/5">
                  <span className="text-[var(--text-contrast-color)]">{item.label}</span>
                  <span className="text-primary font-bold text-lg">{item.val}</span>
                </div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3 w-fit">
              Read Full Success Story <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative min-h-[600px] bg-[var(--bg-color)]/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

            {/* Visualizer Mockup */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full h-full glass rounded-[2.5rem] border border-[var(--accent-color)]/10 p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-[var(--text-contrast-color)]">system.analyze_risk()</div>
                </div>

                <div className="space-y-6">
                  {[80, 45, 90, 65].map((w, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs text-[var(--text-contrast-color)]">
                        <span>Node Analytics {i + 1}</span>
                        <span>{w}%</span>
                      </div>
                      <div className="h-2 w-full bg-[var(--accent-color)]/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Glowing Pulse */}
                  <div className="mt-8 flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-primary/20 rounded-full animate-ping absolute" />
                      <div className="w-32 h-32 bg-primary/40 rounded-full flex items-center justify-center relative z-10 border border-primary/50">
                        <FaTrophy className="text-4xl text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      text: "Futuronic didn't just provide a tool; they provided a strategic advantage. Our data throughput tripled within months of implementation.",
      author: "Sarah Jenkins",
      role: "CTO, TechGrowth Global",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      text: "The precision of their Computer Vision engine is unlike anything we've seen. It has completely transformed our quality control process.",
      author: "Marcus Chen",
      role: "Head of AI, AutoManufacture",
      image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      text: "Ethical AI that actually works. Their transparency and expertise made them the perfect partners for our healthcare data project.",
      author: "Dr. Elena Rodriguez",
      role: "Director of Innovation, HealthNet",
      image: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold font-display italic">Voices of <span className="text-gradient">Success</span></h3>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="glass p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 p-8 opacity-10">
              <FaQuoteLeft size={80} className="text-primary" />
            </div>

            <p className="text-2xl md:text-3xl font-medium text-[var(--text-color)] mb-12 relative z-10 italic leading-relaxed">
              "{testimonials[index].text}"
            </p>

            <div className="flex flex-col items-center gap-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].author}
                className="w-20 h-20 rounded-full border-2 border-primary p-1"
              />
              <div>
                <h4 className="font-bold text-xl text-[var(--text-color)]">{testimonials[index].author}</h4>
                <p className="text-primary font-medium">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-12">
          <button onClick={prev} className="w-14 h-14 rounded-full glass flex items-center justify-center text-[var(--text-color)] hover:bg-primary hover:text-white transition-all">
            <FaArrowLeft />
          </button>
          <button onClick={next} className="w-14 h-14 rounded-full glass flex items-center justify-center text-[var(--text-color)] hover:bg-primary hover:text-white transition-all">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <section className="bg-[var(--bg-color)] py-32 px-6 relative overflow-hidden" id="results">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-bold font-display mb-8">
            Measured <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl md:text-2xl text-[var(--text-contrast-color)] max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between AI potential and business reality through precision engineering and data-driven strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          <AnimatedCounter icon={FaUsers} value="500+" label="Global Clients" delay={0.1} />
          <AnimatedCounter icon={FaChartBar} value="40%" label="Process Efficiency" delay={0.2} />
          <AnimatedCounter icon={FaCoins} value="$50M" label="Cost Savings" delay={0.3} />
          <AnimatedCounter icon={FaTrophy} value="99.9%" label="Success Rate" delay={0.4} />
        </div>

        <EnhancedCaseStudy />

        <Testimonials />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 md:p-20 glass rounded-[4rem] text-center border-2 border-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-bold font-display text-[var(--text-color)] mb-8">Ready to define your <br /> own success story?</h3>
            <button className="px-10 py-5 bg-primary hover:bg-secondary text-white font-bold rounded-2xl transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 mx-auto text-lg">
              Get Your Custom Strategy <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;