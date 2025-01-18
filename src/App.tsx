import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import HindiSelfRealization from './pages/HindiSelfRealization';
import EnglishSelfRealization from './pages/EnglishSelfRealization';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/hindi-self-realization" element={<HindiSelfRealization />} />
          <Route path="/english-self-realization" element={<EnglishSelfRealization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;