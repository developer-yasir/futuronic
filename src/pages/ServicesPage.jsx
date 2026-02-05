import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaCogs, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ServiceDetail = ({ title, description, benefits, icon: Icon, reversed, index }) => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-24 border-b border-[var(--accent-color)]/5 last:border-0`}>
      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-8"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary text-3xl shadow-lg border border-primary/20">
            <Icon />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[var(--text-color)]">{title}</h2>
        </div>

        <p className="text-lg text-[var(--text-contrast-color)] leading-relaxed">
          {description}
        </p>

        <div className="space-y-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--accent-color)]/5 border border-[var(--accent-color)]/5 hover:border-primary/20 transition-colors">
              <FaCheckCircle className="text-primary mt-1 shrink-0" />
              <span className="text-[var(--text-contrast-color)]">{benefit}</span>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-2 text-[var(--text-color)] font-bold hover:text-primary transition-colors group">
          Learn more about {title} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Visual Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full"
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-[var(--accent-color)]/10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10 group-hover:opacity-75 transition-opacity" />
          {/* Placeholder for actual service imagery - using abstract gradients for now */}
          <div className={`w-full h-full bg-gradient-to-br ${index === 0 ? 'from-blue-900 to-slate-900' : index === 1 ? 'from-purple-900 to-slate-900' : 'from-emerald-900 to-slate-900'} relative`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="text-9xl text-[var(--accent-color)]/5 transform group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Strategic AI Consulting",
      description: "Navigating the complexities of artificial intelligence requires a roadmap. We partner with you to identify high-impact opportunities, assess operational readiness, and design a scalable AI strategy that aligns with your business goals.",
      benefits: [
        "In-depth Opportunity Audits & Gap Analysis",
        "Technology Stack Selection & Architecture Design",
        "ROI Projections & Risk Mitigation Strategies"
      ],
      icon: FaBrain
    },
    {
      title: "Custom Machine Learning Solutions",
      description: "Off-the-shelf tools often fall short. We engineer bespoke machine learning models tailored to your unique data infrastructure and business logic, ensuring pinpoint accuracy and maximum competitive advantage.",
      benefits: [
        "Predictive Analytics & Forecasting Models",
        "Natural Language Processing (NLP) for Unstructured Data",
        "Computer Vision for Quality Control & Security"
      ],
      icon: FaRobot
    },
    {
      title: "Intelligent Process Automation",
      description: "Transform manual, repetitive tasks into hyper-efficient automated workflows. success. Our intelligent automation agents handle complex decision-making processes, freeing your human talent to focus on innovation.",
      benefits: [
        "End-to-End Workflow Orchestration",
        "Intelligent Document Processing (IDP)",
        "Chatbots & Virtual Assistants for 24/7 Support"
      ],
      icon: FaCogs
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            OUR EXPERTISE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display mb-8"
          >
            Engineering the <br /> <span className="text-gradient">Unknown.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text-contrast-color)] leading-relaxed"
          >
            We don't just implement AI; we architect intelligent ecosystems that evolve with your enterprise. Explore our comprehensive suite of services designed for the future.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-7xl">
          {services.map((service, index) => (
            <ServiceDetail
              key={index}
              {...service}
              index={index}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[var(--surface-color)]/30 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-display mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-[var(--text-contrast-color)] mb-12">
            Let's discuss how our services can tackle your specific challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-secondary text-[var(--bg-color)] font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-primary/20"
          >
            Schedule a Consultation <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;