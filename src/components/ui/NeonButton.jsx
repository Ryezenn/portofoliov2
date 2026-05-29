import React from 'react';
import { motion } from 'framer-motion';

const NeonButton = ({ 
  children, 
  onClick, 
  variant = 'blue', 
  className = '', 
  type = 'button',
  glow = true
}) => {
  const getColors = () => {
    switch (variant) {
      case 'purple':
        return {
          border: 'border-neon-purple/40 hover:border-neon-purple',
          glowClass: 'neon-glow-purple',
          text: 'text-neon-purple',
          bg: 'rgba(185, 39, 252, 0.1)'
        };
      case 'pink':
        return {
          border: 'border-neon-pink/40 hover:border-neon-pink',
          glowClass: 'neon-glow-pink',
          text: 'text-neon-pink',
          bg: 'rgba(255, 0, 127, 0.1)'
        };
      case 'cyan':
        return {
          border: 'border-neon-cyan/40 hover:border-neon-cyan',
          glowClass: 'neon-glow-cyan',
          text: 'text-neon-cyan',
          bg: 'rgba(0, 255, 213, 0.1)'
        };
      case 'blue':
      default:
        return {
          border: 'border-neon-blue/40 hover:border-neon-blue',
          glowClass: 'neon-glow-blue',
          text: 'text-neon-blue',
          bg: 'rgba(0, 243, 255, 0.1)'
        };
    }
  };

  const colors = getColors();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative px-6 py-3 rounded-xl border font-medium tracking-wide 
        transition-all duration-300 backdrop-blur-md cursor-pointer
        ${colors.border} ${colors.text} ${className}
      `}
      style={{
        background: colors.bg,
        boxShadow: glow ? `0 0 15px ${colors.bg}` : 'none'
      }}
    >
      {/* Dynamic glow overlay on hover */}
      <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default NeonButton;
