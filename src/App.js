import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BiomassPelletsPage from './pages/BiomassPelletsPage';
import ProcessPage from './pages/ProcessPage';
import ApplicationsPage from './pages/ApplicationsPage';
import WhyKaragreenPage from './pages/WhyKaragreenPage';
import SustainabilityPage from './pages/SustainabilityPage';
import BuyersPage from './pages/BuyersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/biomass-pellets" element={<BiomassPelletsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/why-karagreen" element={<WhyKaragreenPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/buyers" element={<BuyersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;