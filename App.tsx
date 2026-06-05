import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

// Home page sections
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Challenges from './components/Challenges';
import Contact from './components/Contact';

// Service pages
import DoorSupervision from './pages/services/DoorSupervision';
import MannedGuarding from './pages/services/MannedGuarding';
import EventSecurity from './pages/services/EventSecurity';
import RetailSecurity from './pages/services/RetailSecurity';
import AccessControl from './pages/services/AccessControl';
import CorporateSecurity from './pages/services/CorporateSecurity';

// Location pages
import Manchester from './pages/locations/Manchester';
import Oldham from './pages/locations/Oldham';
import Rochdale from './pages/locations/Rochdale';
import Bury from './pages/locations/Bury';
import Salford from './pages/locations/Salford';

const HomePage: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      document.querySelectorAll('section, .reveal-item').forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Challenges />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Service pages */}
        <Route path="/services/door-supervision" element={<DoorSupervision />} />
        <Route path="/services/manned-guarding" element={<MannedGuarding />} />
        <Route path="/services/event-security" element={<EventSecurity />} />
        <Route path="/services/retail-security" element={<RetailSecurity />} />
        <Route path="/services/access-control" element={<AccessControl />} />
        <Route path="/services/corporate-security" element={<CorporateSecurity />} />

        {/* Location pages */}
        <Route path="/areas/manchester" element={<Manchester />} />
        <Route path="/areas/oldham" element={<Oldham />} />
        <Route path="/areas/rochdale" element={<Rochdale />} />
        <Route path="/areas/bury" element={<Bury />} />
        <Route path="/areas/salford" element={<Salford />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
