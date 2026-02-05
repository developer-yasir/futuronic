import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { applyTheme } from './features/theme/themeSlice';

// Lazy load pages for performance optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// High-fidelity loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)]">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
      <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">Orbit</span>
      </div>
    </div>
  </div>
);

// Component to handle scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the location (route) changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App