import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const InfiniteLogoTicker = ({ logos, speed = 20, direction = 'left' }) => {
  const controls = useAnimation();
  const innerRef = useRef(null);
  const wrapperRef = useRef(null);

  // Speed factor: Multiplier to make the 'speed' prop feel intuitive (e.g. speed=10 is slow, speed=50 is fast)
  const pixelsPerSecond = speed * 20;

  const animationProperties = useRef({});

  useEffect(() => {
    if (innerRef.current) {
      const innerWidth = innerRef.current.offsetWidth;
      const duration = innerWidth / pixelsPerSecond;

      const xStart = direction === 'left' ? '0%' : '-100%';
      const xEnd = direction === 'left' ? '-100%' : '0%';

      const config = {
        x: [xStart, xEnd],
        transition: {
          x: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
          },
        },
      };

      animationProperties.current = config;
      controls.start(config);
    }
    return () => controls.stop();
  }, [controls, logos, pixelsPerSecond, direction]);

  return (
    <div className="relative w-full overflow-hidden py-12 group bg-bg/50 backdrop-blur-sm border-y border-white/5">
      {/* Soft Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-16 pr-16"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => controls.start(animationProperties.current)}
        >
          {/* We render multiple copies to ensure seamless infinity loops */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={`set-${setIndex}`} ref={setIndex === 0 ? innerRef : null} className="flex flex-shrink-0 items-center gap-16">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${setIndex}-${index}`}
                  className="flex items-center justify-center text-text-contrast hover:text-[var(--brand-color)] transition-all duration-300 transform hover:scale-110 cursor-pointer text-4xl md:text-5xl opacity-40 hover:opacity-100"
                  style={{ '--brand-color': logo.color || 'var(--primary-color)' }}
                  title={logo.name}
                >
                  {logo.icon}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteLogoTicker;