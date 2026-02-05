import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Subscribed:", email);
    setEmail('');
    alert("Thanks for subscribing!");
  };

  const footerLinks = {
    product: [
      { name: 'AI Assistant', path: '/products' },
      { name: 'Predictive Analytics', path: '/products' },
      { name: 'Vision Engine', path: '/products' },
      { name: 'Data Pipeline', path: '/products' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/about' },
      { name: 'Blog', path: '#' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Security', path: '#' },
    ]
  };

  return (
    <footer className="relative bg-[var(--surface-color)] text-[var(--text-color)] pt-24 pb-12 overflow-hidden border-t border-[var(--accent-color)]/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-[-50%] translate-x-[-20%]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-y-[50%] translate-x-[20%]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center group">
              <div className="relative px-5 py-2">
                <span
                  className="text-4xl font-black font-display tracking-tighter text-[var(--text-color)] group-hover:text-primary transition-all duration-300 transform group-hover:scale-105 inline-block"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%, 0 55%, 100% 55%, 100% 100%, 0 100%)' }}
                >
                  FUTURONIC
                </span>
                <div className="absolute -bottom-1 left-5 right-5 h-0.5 bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
              </div>
            </Link>
            <p className="text-[var(--text-contrast-color)] text-lg leading-relaxed max-w-sm">
              Empowering the next generation of enterprises with intelligent, scalable, and ethical AI solutions.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-contrast-color)] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] transition-all duration-300 hover:-translate-y-1">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-[var(--text-color)] mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-[var(--text-contrast-color)] hover:text-primary transition-colors hover:pl-2 inline-block duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[var(--text-color)] mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-[var(--text-contrast-color)] hover:text-primary transition-colors hover:pl-2 inline-block duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[var(--text-color)] mb-6 text-lg">Stay Updated</h4>
            <p className="text-[var(--text-contrast-color)] mb-6">
              Join our newsletter for the latest AI insights and product updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[var(--accent-color)]/5 border border-[var(--accent-color)]/10 rounded-xl px-4 py-3 text-[var(--text-color)] placeholder-[var(--text-contrast-color)]/50 focus:outline-none focus:border-primary transition-colors pr-12"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--primary-color)] rounded-lg flex items-center justify-center text-[var(--bg-color)] hover:bg-[var(--secondary-color)] transition-colors">
                  <FaPaperPlane size={12} />
                </button>
              </div>
              <p className="text-xs text-[var(--text-contrast-color)]/60">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--accent-color)]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-contrast-color)] text-sm">
            &copy; {new Date().getFullYear()} Futuronic AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link, i) => (
              <a key={i} href={link.path} className="text-[var(--text-contrast-color)] hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
