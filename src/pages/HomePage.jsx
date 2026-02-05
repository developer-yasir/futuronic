import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import InfiniteLogoTicker from '../components/InfiniteLogoTicker';


import {
  FaGoogle, FaApple, FaMicrosoft, FaAmazon, FaFacebook,
  FaSpotify, FaSlack, FaAirbnb, FaUber, FaPaypal,
  FaStripe, FaDropbox, FaTrello, FaReddit, FaTwitch
} from 'react-icons/fa';

const sampleLogos = [
  { icon: <FaGoogle />, name: 'Google', color: '#DB4437' },
  { icon: <FaApple />, name: 'Apple', color: '#A2AAAD' }, // Silver/Gray for Apple
  { icon: <FaMicrosoft />, name: 'Microsoft', color: '#F25022' }, // Microsoft Orange/Red
  { icon: <FaAmazon />, name: 'Amazon', color: '#FF9900' },
  { icon: <FaFacebook />, name: 'Meta', color: '#1877F2' },
  { icon: <FaSpotify />, name: 'Spotify', color: '#1DB954' },
  { icon: <FaSlack />, name: 'Slack', color: '#4A154B' },
  { icon: <FaAirbnb />, name: 'Airbnb', color: '#FF5A5F' },
  { icon: <FaUber />, name: 'Uber', color: '#000000' }, // Uber Black
  { icon: <FaPaypal />, name: 'PayPal', color: '#00457C' },
  { icon: <FaStripe />, name: 'Stripe', color: '#008CDD' }, // Stripe Blurple
  { icon: <FaDropbox />, name: 'Dropbox', color: '#0061FF' },
  { icon: <FaTrello />, name: 'Trello', color: '#0052CC' },
  { icon: <FaReddit />, name: 'Reddit', color: '#FF4500' },
  { icon: <FaTwitch />, name: 'Twitch', color: '#9146FF' },
  // Repeats to fill space - reusing colors
  { icon: <FaGoogle />, name: 'Google', color: '#DB4437' },
  { icon: <FaApple />, name: 'Apple', color: '#A2AAAD' },
  { icon: <FaMicrosoft />, name: 'Microsoft', color: '#F25022' },
  { icon: <FaAmazon />, name: 'Amazon', color: '#FF9900' },
  { icon: <FaFacebook />, name: 'Meta', color: '#1877F2' },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <Hero />
      <section className="py-24 bg-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Powering the <span className="text-gradient">Next Generation</span>
          </h2>
          <p className="text-text-contrast max-w-2xl mx-auto text-lg">
            Trusted by the world's most innovative teams.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <InfiniteLogoTicker logos={sampleLogos.slice(0, 10)} speed={1} direction="left" />        </div>
      </section>
      <About />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
