import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

const HolographicCard = ({ children, isActive }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      className={`relative w-full transition-shadow duration-500 ${isActive ? 'z-10' : 'z-0'}`}
    >
      <div
        style={{
          transform: "translateZ(100px)",
          transformStyle: "preserve-3d",
        }}
        className="glass p-12 md:p-16 rounded-[4rem] relative overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-3xl group"
      >
        {/* Holographic Shimmer */}
        <motion.div
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([x, y]) => `radial-gradient(circle at ${50 + x * 100}% ${50 + y * 100}%, rgba(6, 182, 212, 0.15), transparent 60%)`
            )
          }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Edge Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />

        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, Tech Innovations",
      content: "Futuronic transformed our business with their AI solutions. Their team delivered beyond our expectations, increasing our operational efficiency by 40%.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      result: "+40% Efficiency",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Director, Global Systems",
      content: "The automation tools developed by Futuronic saved us 150+ hours weekly. Their attention to detail and innovative approach is unmatched.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      result: "150+ Hours Saved",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CEO, Data Dynamics",
      content: "Working with Futuronic was a game-changer. Their custom ML tools provided insights that increased our revenue by 25%.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      result: "25% Revenue Increase",
      color: "from-orange-500 to-rose-500"
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="bg-[var(--bg-color)] py-32 px-6 relative overflow-hidden" id="testimonials">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Proven Success</span>
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-8">
            The World's <span className="text-gradient">Innovators</span> Speak
          </h2>
          <p className="text-xl text-[var(--text-contrast-color)] max-w-2xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Hear from the leaders who are redefining industries with Futuronic.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[500px]">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    delay: i * 0.1
                  }}
                  className="w-full"
                >
                  <HolographicCard isActive={true}>
                    <div className="flex flex-col items-center text-center">
                      <div className="absolute -top-6 -left-6 opacity-10">
                        <FaQuoteLeft size={80} className="text-primary" />
                      </div>

                      <div className="relative mb-8">
                        <div className="w-24 h-24 rounded-full border-4 border-primary/30 p-1 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-[var(--bg-color)] text-white text-[10px]">
                          <FaStar />
                        </div>
                      </div>

                      <p className="text-xl md:text-2xl font-display font-light text-[var(--text-color)] mb-8 italic leading-snug">
                        "{testimonial.content}"
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xl font-bold font-display tracking-tight text-white">{testimonial.name}</h4>
                        <p className="text-primary/80 font-medium uppercase tracking-[0.2em] text-xs">{testimonial.role}</p>
                        <div className="mt-4 inline-flex px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold shadow-lg shadow-primary/10">
                          {testimonial.result}
                        </div>
                      </div>
                    </div>
                  </HolographicCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls Container */}
          <div className="flex items-center justify-center gap-8 mt-20">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all text-xl"
            >
              <FaChevronLeft />
            </motion.button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-primary/50 hover:text-primary transition-all text-sm font-mono"
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all text-xl"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-32">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-primary' : 'w-4 bg-white/10'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;