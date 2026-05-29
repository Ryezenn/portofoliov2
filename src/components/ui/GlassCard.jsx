import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hoverGlow = true,
  glowColor = 'blue', // 'blue', 'purple', 'pink', 'cyan'
  delay = 0 
}) => {
  const getGlowShadow = () => {
    if (!hoverGlow) return 'none';
    switch (glowColor) {
      case 'purple':
        return 'rgba(185, 39, 252, 0.25) 0px 0px 20px';
      case 'pink':
        return 'rgba(255, 0, 127, 0.25) 0px 0px 20px';
      case 'cyan':
        return 'rgba(0, 255, 213, 0.25) 0px 0px 20px';
      case 'blue':
      default:
        return 'rgba(0, 243, 255, 0.25) 0px 0px 20px';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={hoverGlow ? { 
        y: -5,
        boxShadow: getGlowShadow(),
        borderColor: glowColor === 'blue' ? 'rgba(0, 243, 255, 0.4)' : 
                     glowColor === 'purple' ? 'rgba(185, 39, 252, 0.4)' : 
                     glowColor === 'pink' ? 'rgba(255, 0, 127, 0.4)' : 'rgba(0, 255, 213, 0.4)'
      } : {}}
      className={`
        glass-premium rounded-2xl p-6 transition-all duration-500
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
