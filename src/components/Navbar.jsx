import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Products', path: '/products' },
    { name: 'Results', path: '/results' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const glassEffect = 'glass border border-[var(--text-color)]/10 shadow-lg shadow-black/20 bg-[var(--surface-color)]/40';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${scrolled ? 'pt-4' : 'pt-0'}`}
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 
                    ${scrolled
              ? `w-[90%] md:w-[85%] lg:max-w-6xl rounded-2xl backdrop-blur-xl py-3 ${glassEffect}`
              : 'w-full py-6 bg-transparent'}`}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group relative z-10" onClick={() => setIsOpen(false)}>
            <div className={`relative px-4 py-1.5`}>
              <span
                className={`font-display font-black text-2xl tracking-tighter transition-all duration-300 transform group-hover:scale-105 inline-block text-[var(--text-color)]`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%, 0 55%, 100% 55%, 100% 100%, 0 100%)' }}
              >
                FUTURONIC
              </span>
              {/* Decorative accent for the technical look */}
              <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary/30 group-hover:bg-primary transition-colors duration-500" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center gap-1 bg-[var(--surface-color)]/50 rounded-full p-1 border border-[var(--text-color)]/5 relative`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-sm font-medium text-[var(--text-contrast-color)] hover:text-[var(--text-color)] transition-colors z-10"
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 bg-[var(--accent-color)]/10 rounded-full -z-10`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-contrast-color)] hover:text-[var(--text-color)] hover:bg-[var(--surface-color)] transition-colors"
            >
              {themeMode === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[var(--accent-color)] text-[var(--bg-color)] rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
            >
              Get Started <FaArrowRight size={10} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4 pointer-events-auto">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-color)] bg-[var(--surface-color)] backdrop-blur-md"
            >
              {themeMode === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-color)] bg-[var(--surface-color)] backdrop-blur-md active:scale-90 transition-transform"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[var(--bg-color)]/95 backdrop-blur-2xl flex items-center justify-center"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-md px-6 space-y-2">
              <div className="mb-8 text-center">
                <span className="text-xs font-mono text-primary border border-primary/30 px-3 py-1 rounded-full uppercase tracking-widest">Navigation</span>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl font-bold text-center text-[var(--text-color)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all py-3"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 flex justify-center"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 bg-[var(--accent-color)] text-[var(--bg-color)] rounded-full font-bold text-lg hover:scale-105 transition-transform"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
