import React from 'react';

const ContinuousCarousel = () => {
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

        {/* Continuous Scrolling Carousel */}
        <div className="relative overflow-hidden py-12">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center p-8 bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] rounded-2xl border border-[var(--primary-color)]/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-vibrant rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 object-contain filter brightness-0 dark:brightness-100 dark:invert transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContinuousCarousel;