import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FloatingButtons from './components/FloatingButtons';
import CookieBanner from './components/CookieBanner';

import Hero from './components/Hero';
import About from './components/About';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Challenges from './components/Challenges';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

import DoorSupervision from './pages/services/DoorSupervision';
import MannedGuarding from './pages/services/MannedGuarding';
import EventSecurity from './pages/services/EventSecurity';
import RetailSecurity from './pages/services/RetailSecurity';
import AccessControl from './pages/services/AccessControl';
import CorporateSecurity from './pages/services/CorporateSecurity';

import Privacy from './pages/Privacy';
import Manchester from './pages/locations/Manchester';
import Oldham from './pages/locations/Oldham';
import Rochdale from './pages/locations/Rochdale';
import Bury from './pages/locations/Bury';
import Salford from './pages/locations/Salford';

const HomePage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('section, .reveal-item').forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <Team />
        <Challenges />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/door-supervision"  element={<DoorSupervision />} />
      <Route path="/services/manned-guarding"   element={<MannedGuarding />} />
      <Route path="/services/event-security"    element={<EventSecurity />} />
      <Route path="/services/retail-security"   element={<RetailSecurity />} />
      <Route path="/services/access-control"    element={<AccessControl />} />
      <Route path="/services/corporate-security" element={<CorporateSecurity />} />
      <Route path="/areas/manchester" element={<Manchester />} />
      <Route path="/areas/oldham"     element={<Oldham />} />
      <Route path="/areas/rochdale"   element={<Rochdale />} />
      <Route path="/areas/bury"       element={<Bury />} />
      <Route path="/areas/salford"    element={<Salford />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
