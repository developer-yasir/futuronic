import React from 'react';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import TrustSignals from '../components/TrustSignals';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <About />
      <MissionVision />
      <TrustSignals />
      <Team />
      <WhyChooseUs />
    </div>
  );
};

export default AboutPage;