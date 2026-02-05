import React from 'react';
import { useSelector } from 'react-redux';

const FeatureCard = ({ title, description, icon }) => {
  const themeMode = useSelector((state) => state.theme.mode);

  const cardClass = themeMode === 'dark' 
    ? "bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-primary/20 transform hover:-translate-y-3 relative overflow-hidden group"
    : "bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-primary/20 transform hover:-translate-y-3 relative overflow-hidden group";

  return (
    <div className={cardClass}>
      {/* Animated background element */}
      <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-10 bg-vibrant group-hover:animate-spin-slow"></div>

      <div className="text-vibrant text-5xl mb-6 relative z-10">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4 font-sans relative z-10">{title}</h3>
      <p className="text-[var(--text-contrast-color)] leading-relaxed font-sans relative z-10">{description}</p>

      {/* Animated border effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-vibrant opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert AI Team',
      description: 'Our team comprises leading AI scientists and engineers dedicated to innovation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-10.5m-4.5 0L18 7.5m-4.5-4.5L13.5 6m3.75-3.75V4.5m0 0V9m0-4.5h.008c.414 0 .75.336.75.75v.008a.75.75 0 11-.75.75h-.008a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75z" />
        </svg>
      ),
    },
    {
      title: 'Tailored Solutions',
      description: 'We craft bespoke AI and automation solutions perfectly aligned with your business goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9.75 9.75m0 0lt-2.25 2.25m2.25-2.25v7.5m6-6l2.25 2.25m-2.25-2.25v7.5m0-9l-2.25 2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Future-Proof Technology',
      description: 'Implementing scalable and robust technologies that grow with your enterprise.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] py-24 px-4" id="why-choose-us">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-[var(--text-color)] font-sans relative inline-block mx-auto">
          Why Choose Futuronic?
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
        </h2>
        <p className="text-lg text-[var(--text-contrast-color)] text-center mb-16 font-sans max-w-2xl mx-auto">
          Discover what sets us apart in the world of AI and automation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
