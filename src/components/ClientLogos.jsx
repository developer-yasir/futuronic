import React, { useState, useEffect, useRef } from 'react';

const ClientLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Client logos with placeholder images
  const clients = [
    { name: 'TechCorp', logo: 'https://placehold.co/150x60/f97316/ffffff?text=TechCorp' },
    { name: 'InnovateX', logo: 'https://placehold.co/150x60/22c55e/ffffff?text=InnovateX' },
    { name: 'DataSystems', logo: 'https://placehold.co/150x60/000000/ffffff?text=DataSys' },
    { name: 'FutureLabs', logo: 'https://placehold.co/150x60/ffffff/000000?text=FutureLabs' },
    { name: 'AI Solutions', logo: 'https://placehold.co/150x60/f97316/ffffff?text=AISol' },
    { name: 'CloudTech', logo: 'https://placehold.co/150x60/22c55e/ffffff?text=CloudTech' },
    { name: 'Global Systems', logo: 'https://placehold.co/150x60/000000/ffffff?text=Global' },
    { name: 'Quantum Inc', logo: 'https://placehold.co/150x60/ffffff/000000?text=Quantum' },
  ];

  // Auto-rotate the carousel
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (clients.length - 3));
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, clients.length]);

  // Pause auto-play when user interacts
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Manual navigation
  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 4 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (clients.length - 3)
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)] text-[var(--text-color)] relative overflow-hidden" id="clients">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vibrant rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-primary rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-color)] font-sans relative inline-block mx-auto">
            Trusted by Industry Leaders
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-vibrant rounded-full"></div>
          </h2>
          <p className="text-lg text-[var(--text-contrast-color)] max-w-2xl mx-auto font-sans">
            Join hundreds of forward-thinking companies leveraging our AI solutions
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <div
            className="relative overflow-hidden rounded-3xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="w-1/4 flex-shrink-0 px-6 flex items-center justify-center"
                >
                  <div className="relative group">
                    {/* Animated border effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-vibrant rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse blur-sm"></div>
                    <div className="relative flex items-center justify-center p-8 bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] rounded-2xl border-2 border-[var(--primary-color)]/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-20 object-contain filter brightness-0 dark:brightness-100 dark:invert transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 bg-gradient-to-r from-primary to-vibrant text-[var(--text-color)] p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-vibrant/30 transition-all duration-300 z-20 hover:scale-110"
              aria-label="Previous client"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 bg-gradient-to-r from-primary to-vibrant text-[var(--text-color)] p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-vibrant/30 transition-all duration-300 z-20 hover:scale-110"
              aria-label="Next client"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {clients.slice(0, clients.length - 3).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-gradient-to-r from-primary to-vibrant w-10'
                    : 'bg-[var(--surface-color)] hover:bg-vibrant'
                  }`}
                aria-label={`Go to client group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Scroller */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center p-6 bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] rounded-2xl border-2 border-[var(--primary-color)]/30 shadow-xl min-w-[180px] relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-vibrant rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse blur-sm"></div>
                <div className="relative flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 object-contain filter brightness-0 dark:brightness-100 dark:invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-2 lg:hidden">
          {clients.slice(0, clients.length - 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-gradient-to-r from-primary to-vibrant w-8'
                  : 'bg-[var(--surface-color)] hover:bg-vibrant'
                }`}
              aria-label={`Go to client group ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add CSS for animation delays */}
    </section>
  );
};

export default ClientLogos;