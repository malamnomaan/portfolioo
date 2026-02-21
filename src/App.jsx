import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiGrid, FiZap, FiClock, FiTerminal } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

import PhysicsEngine from './physics/PhysicsEngine';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import TimeMachine from './pages/TimeMachine';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
};

const NavLink = ({ to, icon, label, currentPath }) => {
  const active = currentPath === to;
  return (
    <Link to={to} className="text-decoration-none d-flex align-items-center gap-2 px-2 py-1 transition-all" style={{ color: active ? 'var(--primary-gold)' : 'var(--text-muted)', fontWeight: active ? '700' : '500', transition: 'all 0.3s ease' }}>
      <span style={{ fontSize: '1.2rem' }}>{icon}</span>
      <span className="d-none d-xl-inline small text-uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>{label}</span>
    </Link>
  );
};

function AnimatedRoutes({ isStabilized, setIsStabilized }) {
  const location = useLocation();

  return (
    <PhysicsEngine isStabilized={isStabilized}>
      <nav className="fixed-top px-4 py-3 navbar-luxury shadow-sm" style={{ zIndex: 1000 }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'var(--primary-gold)', color: 'white' }}>
              <FiTerminal size={20} />
            </div>
            <div className="d-none d-sm-block">
              <span className="h5 mb-0 fw-bold" style={{ color: 'var(--text-dark)', letterSpacing: '-0.02em' }}>Nomaan</span>
              <span className="h5 mb-0 luxury-heading ms-1" style={{ color: 'var(--primary-gold)' }}>Alam</span>
            </div>
          </Link>

          <div className="d-flex align-items-center gap-2 gap-md-4">
            <div className="d-flex gap-3 gap-md-4 me-2 me-md-4 border-end pe-4 border-light">
              <NavLink to="/" icon={<FiHome />} label="Home" currentPath={location.pathname} />
              <NavLink to="/about" icon={<FiUser />} label="About" currentPath={location.pathname} />
              <NavLink to="/experience" icon={<FiBriefcase />} label="Experience" currentPath={location.pathname} />
              <NavLink to="/projects" icon={<FiGrid />} label="Projects" currentPath={location.pathname} />
              <NavLink to="/skills" icon={<FiZap />} label="Skills" currentPath={location.pathname} />
              <NavLink to="/time-machine" icon={<FiClock />} label="Vault" currentPath={location.pathname} />
            </div>

            <button
              className="btn btn-gold btn-sm btn-md-normal"
              onClick={() => setIsStabilized(!isStabilized)}
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em', padding: '8px 16px' }}
            >
              {isStabilized ? "DE-STABILIZE" : "STABILIZE"}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-5 mt-4">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
            <Route path="/time-machine" element={<PageWrapper><TimeMachine /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </PhysicsEngine>
  );
}

function App() {
  const [isStabilized, setIsStabilized] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <div className="noise-overlay" />
        <ParticleBackground />
        <CustomCursor />
        <AnimatedRoutes isStabilized={isStabilized} setIsStabilized={setIsStabilized} />
      </div>
    </Router>
  );
}

export default App;
