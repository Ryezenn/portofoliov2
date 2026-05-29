import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 400); // Small buffer for visual comfort
          return 100;
        }
        // Random incremental speed for cyber feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030014] select-none"
      exit={{ 
        opacity: 0, 
        y: -100, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-[120px]" />

      <div className="w-[80%] max-w-[400px] flex flex-col items-center gap-6 relative z-10">
        {/* Futuristic Cyber Logo placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <div className="w-8 h-8 border-2 border-neon-blue rounded-lg flex items-center justify-center relative neon-glow-blue animate-pulse">
            <span className="w-3 h-3 bg-neon-pink rounded-sm" />
          </div>
          <span className="font-heading font-black tracking-widest text-lg bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
            NEO.CORE
          </span>
        </motion.div>

        {/* Loading text */}
        <div className="w-full flex justify-between items-end font-sans">
          <span className="text-xs text-slate-500 uppercase tracking-widest animate-pulse">
            Booting System Core...
          </span>
          <span className="text-sm font-bold text-neon-blue font-mono">
            {progress}%
          </span>
        </div>

        {/* Outer futuristic bar */}
        <div className="w-full h-[3px] bg-slate-900 border border-white/5 rounded-full overflow-hidden relative">
          {/* Glowing bar fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Soft inner glow tail */}
            <span className="absolute right-0 top-0 bottom-0 w-8 bg-white filter blur-sm" />
          </motion.div>
        </div>

        {/* Extra System Data lines */}
        <div className="text-[10px] text-slate-600 font-mono flex flex-col items-center gap-1 opacity-50 mt-2">
          <span>IP: 127.0.0.1 // PORT: 2026</span>
          <span>SYSTEM STATE: STABLE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
