import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import MoreInfo from './pages/MoreInfo';
import AboutUs from './pages/AboutUs';
import MissionStatement from './pages/MissionStatement';
import Support from './pages/Support';

const HomeContent = () => (
  <main className="bg-black min-h-screen text-white">
    <Hero />
    <Highlights />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission" element={<MissionStatement />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
