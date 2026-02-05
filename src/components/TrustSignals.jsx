import React from 'react';

const TrustSignals = () => {
  const trustElements = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ISO 27001 Certified",
      description: "Our security management meets international standards"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.304 4.52M12 3c-2.485 0-4.5 4.03-4.5 9a8.997 8.997 0 007.304 4.52" />
        </svg>
      ),
      title: "GDPR Compliant",
      description: "We protect your data with strict privacy regulations"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock assistance for your peace of mind"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "99.9% Uptime",
      description: "Reliable service with minimal downtime guaranteed"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[var(--bg-color)] to-[var(--surface-color)]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] p-8 rounded-2xl border border-[var(--primary-color)]/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-vibrant mb-4 flex justify-center">
                {element.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--text-color)]">{element.title}</h3>
              <p className="text-[var(--text-contrast-color)]">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;