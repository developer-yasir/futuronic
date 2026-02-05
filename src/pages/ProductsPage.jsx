import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { FaArrowDown, FaCheck, FaRocket, FaRobot, FaChartLine, FaEye, FaComments } from 'react-icons/fa';

const CinematicSection = ({ product, index, total, containerRef }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative snap-start overflow-hidden bg-[var(--bg-color)]"
    >
      {/* Dynamic Background */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className={`absolute inset-0 bg-gradient-to-br from-[var(--bg-color)] via-[var(--bg-color)] to-${product.color}/10`} />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--text-color-rgb),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--text-color-rgb),0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_70%)]" />
      </motion.div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Visual Side */}
        <motion.div
          style={{ scale, opacity, y: yImage }}
          className="relative group h-[50vh] lg:h-[70vh] flex items-center justify-center"
        >
          {/* Decorative aura */}
          <div className={`absolute inset-0 bg-${product.color}/20 rounded-full blur-[100px] transform group-hover:scale-110 transition-transform duration-700`} />

          <div className="relative w-full h-full glass rounded-[3rem] overflow-hidden border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[var(--surface-color)]/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Glossy scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />

            <div className="absolute top-12 left-12 z-20 w-24 h-24 bg-[var(--bg-color)]/50 backdrop-blur-3xl rounded-3xl flex items-center justify-center text-primary text-5xl border border-white/10 shadow-2xl">
              {product.icon}
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          style={{ opacity, y: yText }}
          className="space-y-8 lg:pl-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase">Module 0{index + 1}</span>
              <div className="h-[1px] w-12 bg-primary/50" />
              <span className="text-xs text-[var(--text-contrast-color)] uppercase tracking-widest font-bold">Operational Ready</span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black font-display text-[var(--text-color)] tracking-tighter mb-4 leading-none">
              {product.name.split(' ')[0]}
              <br />
              <span className="text-gradient">{product.name.split(' ').slice(1).join(' ')}</span>
            </h2>

            <p className="text-2xl text-[var(--text-contrast-color)] font-light leading-relaxed max-w-xl">
              {product.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-[var(--accent-color)]/10">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-4 h-4 rounded bg-primary/20 flex items-center justify-center text-primary text-[10px]">
                  <FaCheck />
                </div>
                <span className="text-sm text-[var(--text-color)] font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button className="px-10 py-5 bg-[var(--text-color)] text-[var(--bg-color)] font-black uppercase tracking-widest rounded-2xl hover:bg-primary hover:text-white transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 text-sm">
              Deploy Solution <FaRocket />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] text-[var(--text-contrast-color)] uppercase tracking-[0.2em] font-mono mb-1">Scale Price</span>
              <span className="text-2xl font-black text-[var(--text-color)]">{product.price}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Navigation Dot */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 transition-all duration-500 rounded-full ${i === index ? 'h-12 bg-primary' : 'h-2 bg-[var(--text-color)]/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

const ProductsPage = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const products = [
    {
      id: 1,
      name: 'AI ASSISTANT PRO',
      color: 'cyan',
      tagline: 'Cognitive automation architecture for the autonomous enterprise.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&q=80&w=1200',
      icon: <FaRobot />,
      price: '$49/mo',
      features: ['Context-Aware NLP', 'Workflow Auto-Orchestration', 'ERP/CRM Deep Integration', 'Ethical AI Guards']
    },
    {
      id: 2,
      name: 'PREDICTIVE ANALYTICS',
      color: 'purple',
      tagline: 'Transform raw entropy into definitive business outcomes.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&q=80&w=1200',
      icon: <FaChartLine />,
      price: '$99/mo',
      features: ['Real-time Stream Intelligence', 'Churn Prediction Models', 'Supply Chain Forecasting', 'Anomaly Detection Core']
    },
    {
      id: 3,
      name: 'VISION AI ENGINE',
      color: 'pink',
      tagline: 'Hyperspectral visual interpretation with sub-millisecond latency.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&q=80&w=1200',
      icon: <FaEye />,
      price: '$79/mo',
      features: ['Object Neural Tracking', 'Industrial Quality Inspection', 'Advanced OCR Extraction', 'Security Perimeter AI']
    },
    {
      id: 4,
      name: 'OMNICHAT STUDIO',
      color: 'emerald',
      tagline: 'Interconnected conversational fabric for global engagement.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&q=80&w=1200',
      icon: <FaComments />,
      price: '$29/mo',
      features: ['No-Code Agent Builder', 'Omnichannel Synchronization', 'Sentiment Logic Flow', 'Autonomous Handoff']
    }
  ];

  return (
    <div className="bg-[var(--bg-color)] relative h-screen overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
      />

      <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar">

        {/* Intro Section */}
        <section className="h-screen w-full flex flex-col items-center justify-center snap-start relative bg-[var(--bg-color)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ root: scrollRef, amount: 0.5 }}
            className="text-center z-10"
          >
            <span className="text-primary font-mono text-xs tracking-[1em] uppercase mb-8 block">Project Futuronic</span>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-[var(--text-color)] mb-8 leading-none italic uppercase">
              THE <span className="text-gradient">CORE</span>
              <br />
              SELECTION
            </h1>
            <p className="text-xl text-[var(--text-contrast-color)] font-light max-w-xl mx-auto mb-12">
              Explore the four fundamental pillars of our neural architecture. Engineered for focus. Optimized for results.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-[var(--text-contrast-color)]"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">Initiate Scroll</span>
              <FaArrowDown />
            </motion.div>
          </motion.div>

          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-30" />
        </section>

        {products.map((product, index) => (
          <CinematicSection
            key={product.id}
            product={product}
            index={index}
            total={products.length}
            containerRef={scrollRef}
          />
        ))}

        {/* Closing Section */}
        <section className="h-screen w-full flex items-center justify-center snap-start bg-[var(--bg-color)] relative">
          <div className="text-center">
            <h2 className="text-6xl md:text-9xl font-black text-[var(--text-color)] tracking-tighter mb-12 uppercase">
              READY TO <span className="text-gradient">EVOLVE?</span>
            </h2>
            <button className="px-16 py-6 bg-primary text-white font-black uppercase tracking-widest rounded-full hover:scale-110 transition-transform shadow-[0_0_50px_rgba(6,182,212,0.4)]">
              Get Started Now
            </button>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .text-gradient {
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass {
          background: rgba(var(--surface-color-rgb), 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(var(--text-color-rgb), 0.05);
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;