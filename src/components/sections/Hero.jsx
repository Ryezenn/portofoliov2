import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, ArrowDown } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      }}
    >
      {/* Dynamic radial glow overlay */}
      <div className="absolute inset-0 interactive-glow pointer-events-none" />
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      {/* Floating Neon Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-neon-blue/10 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Welcome Pill */}
          <motion.div 
            variants={titleVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/5 mb-6 text-xs text-neon-blue uppercase tracking-widest font-mono neon-glow-blue"
          >
            <Terminal className="w-3 h-3 text-neon-cyan animate-pulse" />
            <span>Welcome to the matrix // v2.0</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={titleVariants}
            className="font-heading font-black text-5xl md:text-7xl leading-tight tracking-tight text-white mb-6"
          >
            Design the{' '}
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent text-neon-glow">
              Future
            </span>{' '}
            of Web.
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={titleVariants}
            className="font-heading font-bold text-xl md:text-2xl text-slate-300 tracking-wide mb-6"
          >
            Creative Developer & Full Stack Architect
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={titleVariants}
            className="text-base text-slate-400 max-w-lg mb-8 leading-relaxed font-light"
          >
            Membangun web berskala tinggi dengan performa menakjubkan, animasi super smooth, serta visualisasi futuristik yang memukau. Berfokus pada integrasi AI dan visual premium modern.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={titleVariants}
            className="flex flex-wrap gap-4"
          >
            <NeonButton 
              variant="blue" 
              onClick={() => document.getElementById('projects').scrollIntoView()}
              className="flex items-center gap-2"
            >
              See Projects <ArrowRight className="w-4 h-4 text-neon-blue" />
            </NeonButton>
            
            <NeonButton 
              variant="purple" 
              onClick={() => document.getElementById('contact').scrollIntoView()}
              className="flex items-center gap-2"
            >
              Hire Me
            </NeonButton>
          </motion.div>
        </motion.div>

        {/* Profile / 3D Realistic Glowing Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Animated Glow Rings behind profile */}
          <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-neon-blue/20 animate-pulse pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-neon-purple/10 animate-ping [animation-duration:3s] pointer-events-none" />

          {/* Profile Frame with glass backdrop */}
          <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full p-[2px] bg-gradient-to-tr from-neon-blue via-neon-cyan to-neon-purple shadow-[0_0_40px_rgba(0,243,255,0.2)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg/80 flex items-center justify-center backdrop-blur-3xl relative">
              {/* Virtual Cyber Mesh avatar background */}
              <div className="absolute inset-0 cyber-grid opacity-30" />
              
              {/* Futuristic Cybernetic Graphic Avatar */}
              <svg className="w-48 h-48 md:w-60 md:h-60 text-neon-blue relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer circuitry lines */}
                <path d="M15 50 C15 30.67 30.67 15 50 15 C69.33 15 85 30.67 85 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
                {/* Core orb */}
                <circle cx="50" cy="50" r="28" stroke="url(#gradient)" strokeWidth="2" className="animate-pulse" />
                {/* Hologram details */}
                <path d="M50 22L50 12M50 88L50 78M22 50L12 50M88 50L78 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 30L22 22M70 70L78 78M70 30L78 22M30 70L22 78" stroke="var(--color-neon-pink)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="50" cy="50" r="10" fill="var(--color-neon-cyan)" className="animate-ping" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--color-neon-blue)"/>
                    <stop offset="1" stopColor="var(--color-neon-purple)"/>
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Overlay realistic glow reflections */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-60 mix-blend-overlay" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => document.getElementById('about').scrollIntoView()}
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-neon-blue" />
      </motion.div>
    </section>
  );
};

export default Hero;
