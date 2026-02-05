import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaShieldAlt, FaRocket, FaClock } from 'react-icons/fa';

const ContactCard = ({ icon, title, content }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { damping: 20, stiffness: 150 });

  function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-10 group-hover:opacity-30 transition-opacity" />
      <div className="glass p-8 rounded-3xl border border-white/5 relative z-10 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl border border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div>
          <h4 className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-1">{title}</h4>
          <p className="text-xl font-bold text-[var(--text-color)]">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 8000);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="relative min-h-screen py-40 bg-[var(--bg-color)] overflow-hidden" id="contact">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[150px] animate-pulse" />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--text-color-rgb),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--text-color-rgb),0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(white,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Intro Side */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-10">
                <FaShieldAlt className="animate-pulse" /> SECURE UPLINK 102
              </div>
              <h2 className="text-6xl lg:text-[7rem] font-black font-display text-[var(--text-color)] tracking-tighter mb-8 leading-[0.85] uppercase">
                INITIATE<br />
                <span className="text-gradient">DIALOGUE</span>
              </h2>
              <p className="text-2xl text-[var(--text-contrast-color)] font-light leading-relaxed max-w-xl">
                Bridge the gap between vision and reality. Our neural network is primed to receive your specifications.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {[
                { icon: <FaMapMarkerAlt />, title: "HQ LOCATION", content: "SILICON VALLEY, CA" },
                { icon: <FaPhone />, title: "SECURE LINE", content: "+1 (555) 000-TECH" },
                { icon: <FaEnvelope />, title: "DIRECT ACCESS", content: "yasirraeesit@gmail.com" },
              ].map((item, index) => (
                <ContactCard key={index} {...item} />
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-color)] bg-surface flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="team" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-mono text-[var(--text-contrast-color)]">
                <span className="text-primary font-bold">12 AGENTS</span> ONLINE NOW
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[3.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
              <div className="glass p-1 rounded-[3.5rem] relative z-10 overflow-hidden bg-[var(--surface-color)]/50 backdrop-blur-3xl border border-white/10">
                <div className="p-10 md:p-16 space-y-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-8 mb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter">New Specifications</h3>
                      <p className="text-xs font-mono text-[var(--text-contrast-color)]">ENCRYPTION LEVEL: MIL-SPEC</p>
                    </div>
                    <FaClock className="text-primary animate-spin-slow" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] pl-4">Identification</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your identity..."
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] pl-4">Digital Mail</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="yourname@network.com"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] pl-4">Mission Brief</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Detail your requirements..."
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-20 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-[0.5em] rounded-2xl shadow-[0_0_50px_rgba(var(--primary-color-rgb),0.3)] hover:shadow-[0_0_80px_rgba(var(--primary-color-rgb),0.5)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-4 group"
                    >
                      {isSubmitting ? (
                        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="text-lg">Transmit Package</span>
                          <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-center font-bold flex items-center justify-center gap-3"
                      >
                        <FaRocket className="animate-bounce" /> UPLINK ESTABLISHED. MESSAGE TRANSMITTED.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-center font-bold flex items-center justify-center gap-3"
                      >
                        UPLINK FAILED. PLEASE VERIFY CONNECTION AND TRY AGAIN.
                      </motion.div>
                    )}
                  </form>

                  <div className="flex items-center justify-center gap-8 pt-4 grayscale opacity-30">
                    <FaGlobe className="text-2xl" />
                    <FaShieldAlt className="text-2xl" />
                    <FaRocket className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
