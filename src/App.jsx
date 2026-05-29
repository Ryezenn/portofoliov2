import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Layout components
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import BackgroundMusic from './components/ui/BackgroundMusic';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [particlesInit, setParticlesInit] = useState(false);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  // Particle configuration
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3,
            color: "#00f3ff"
          }
        }
      },
    },
    particles: {
      color: {
        value: ["#00f3ff", "#b927fc", "#ff007f"],
      },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.08,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {/* Animated Loader screen */}
      <AnimatePresence mode="wait">
        {loading && <Preloader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden selection:bg-neon-pink/30 selection:text-white">
          
          {/* Custom fluid cursor */}
          <CustomCursor />

          {/* Interactive particles background layer */}
          {particlesInit && (
            <Particles
              id="tsparticles"
              options={particlesOptions}
              className="absolute inset-0 z-0 pointer-events-none"
            />
          )}

          {/* Floating Music visualizer */}
          <BackgroundMusic />

          {/* Main layouts */}
          <Navbar />

          <main className="relative z-10">
            {/* Sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Premium footer with glowing matrix details */}
          <footer className="relative z-10 border-t border-white/5 py-10 bg-dark-bg text-center text-xs text-slate-500 font-mono">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <span>// DESIGNED & ENGINEERED BY REHAN | WEB & APP DEV // © 2026</span>
              <div className="flex items-center gap-6">
                <a href="#home" className="hover:text-neon-blue transition-colors">BACK TO TOP</a>
                <span>•</span>
                <span className="text-neon-cyan animate-pulse">SYSTEM STATUS: FULLY FUNCTIONAL</span>
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}

export default App;
