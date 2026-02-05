import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import FAQ from '../components/FAQ';
import { useSelector } from 'react-redux';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const themeMode = useSelector((state) => state.theme.mode);

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$99' : '$990',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Automation Tools',
        'Up to 10,000 API calls/month',
        'Email Support',
        'Standard Integrations',
        'Basic Analytics Dashboard'
      ],
      notIncluded: ['Custom Integrations', 'Dedicated Account Manager'],
      cta: 'Get Started',
      popular: false,
      color: 'border-white/10'
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$299' : '$2,990',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Automation',
        'Up to 100,000 API calls/month',
        'Priority Email & Chat Support',
        'Custom Integrations',
        'Advanced Analytics Dashboard',
        'Dedicated Account Manager'
      ],
      notIncluded: [],
      cta: 'Try Free for 14 Days',
      popular: true,
      color: 'border-primary shadow-primary/20'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Full AI Suite Access',
        'Unlimited API calls',
        '24/7 Phone & Chat Support',
        'Custom Integrations',
        'White-label Solutions',
        'Dedicated Technical Team'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-white/10'
    }
  ];

  const planCardBorder = (isPopular) => {
    if (isPopular) return 'border-primary shadow-2xl shadow-primary/10 transform scale-105 z-10';
    if (themeMode === 'dark') return 'border border-white/5';
    return 'border border-black/5';
  };

  const ctaButtonClasses = (isPopular) => {
    if (isPopular) {
      return 'bg-primary hover:bg-secondary text-white shadow-lg shadow-primary/25';
    }
    if (themeMode === 'dark') {
      return 'bg-white/5 hover:bg-white/10 text-white border border-white/10';
    }
    return 'bg-black/5 hover:bg-black/10 text-black border border-black/10';
  };

  return (
    <section className="bg-[var(--bg-color)] py-24 px-6 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <p className="text-xl text-[var(--text-contrast-color)] max-w-2xl mx-auto mb-10">
            Choose the plan that fits your business needs. All plans include our core AI capabilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg transition-colors ${billingCycle === 'monthly' ? 'text-[var(--text-color)] font-bold' : 'text-[var(--text-contrast-color)]'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-16 h-8 bg-[var(--surface-color)] rounded-full p-1 relative transition-colors duration-300 border border-[var(--accent-color)]/10"
            >
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                className="w-6 h-6 bg-primary rounded-full shadow-lg"
              />
            </button>
            <span className={`text-lg transition-colors ${billingCycle === 'yearly' ? 'text-[var(--text-color)] font-bold' : 'text-[var(--text-contrast-color)]'}`}>
              Yearly <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded-full ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass p-8 md:p-10 rounded-3xl relative transition-all duration-300 ${planCardBorder(plan.popular)}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">{plan.name}</h3>
                <p className="text-[var(--text-contrast-color)] text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-[var(--text-color)]">{plan.price}</span>
                <span className="text-[var(--text-contrast-color)] ml-2">{plan.period}</span>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold mb-10 transition-all duration-300 ${ctaButtonClasses(plan.popular)}`}>
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="text-primary mt-1 shrink-0" />
                    <span className="text-[var(--text-contrast-color)] text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-50">
                    <FaTimes className="text-[var(--text-contrast-color)] mt-1 shrink-0" />
                    <span className="text-[var(--text-contrast-color)] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <FAQ />

      </div>
    </section>
  );
};

export default Pricing;