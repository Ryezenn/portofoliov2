import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Users } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const About = () => {
  const stats = [
    { label: 'Tahun Pengalaman', val: '5+', icon: Sparkles, color: 'blue' },
    { label: 'Proyek Selesai', val: '50+', icon: Award, color: 'purple' },
    { label: 'Klien Puas', val: '30+', icon: Users, color: 'cyan' },
    { label: 'Keamanan Code', val: '100%', icon: Shield, color: 'pink' }
  ];

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Dynamic Background subtle shapes */}
      <div className="absolute top-[30%] right-[5%] w-[250px] h-[250px] rounded-full bg-neon-cyan/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-neon-pink/5 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-neon-blue uppercase tracking-widest font-mono font-semibold mb-2"
          >
            // 01. Discovery Core
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl text-white"
          >
            About{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(255,0,127,0.3)]">
              Myself
            </span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Biography Text Card */}
          <div className="lg:col-span-7 flex">
            <GlassCard glowColor="purple" className="flex flex-col justify-between w-full h-full text-left">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-purple" />
                  Misi & Filosofi Kerja
                </h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6">
                  Halo! Saya adalah seorang pengembang piranti lunak (Software Engineer) yang memiliki hasrat besar untuk menggabungkan fungsionalitas murni dengan estetika futuristik. Saya percaya bahwa sebuah produk digital tidak hanya dituntut untuk berjalan cepat dan stabil, melainkan juga harus mampu memberikan pengalaman visual yang mengagumkan saat berinteraksi.
                </p>
                <p className="text-slate-400 leading-relaxed font-light mb-6">
                  Dengan pengalaman dalam arsitektur modern Javascript, React, dan integrasi backend, saya senang mendobrak batasan dalam pengembangan frontend dengan micro-animations, layout premium, dan efek lighting realism yang luar biasa.
                </p>
              </div>
              
              <div className="border-t border-white/5 pt-6 mt-6 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                <span>Location: Jakarta, ID // GMT+7</span>
                <span>•</span>
                <span>Status: Available for Freelance & Remote Work</span>
              </div>
            </GlassCard>
          </div>

          {/* Interactive Stats Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <GlassCard 
                  key={idx} 
                  glowColor={stat.color}
                  delay={idx * 0.1}
                  className="flex flex-col items-center justify-center text-center p-6"
                >
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4 border
                    ${stat.color === 'blue' ? 'bg-neon-blue/5 border-neon-blue/20 text-neon-blue neon-glow-blue' : ''}
                    ${stat.color === 'purple' ? 'bg-neon-purple/5 border-neon-purple/20 text-neon-purple neon-glow-purple' : ''}
                    ${stat.color === 'cyan' ? 'bg-neon-cyan/5 border-neon-cyan/20 text-neon-cyan neon-glow-cyan' : ''}
                    ${stat.color === 'pink' ? 'bg-neon-pink/5 border-neon-pink/20 text-neon-pink neon-glow-pink' : ''}
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className={`
                    font-heading font-black text-3xl mb-2
                    ${stat.color === 'blue' ? 'text-neon-blue' : ''}
                    ${stat.color === 'purple' ? 'text-neon-purple' : ''}
                    ${stat.color === 'cyan' ? 'text-neon-cyan' : ''}
                    ${stat.color === 'pink' ? 'text-neon-pink' : ''}
                  `}>
                    {stat.val}
                  </span>
                  
                  <span className="text-xs text-slate-400 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </GlassCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
