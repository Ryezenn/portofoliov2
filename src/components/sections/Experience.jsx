import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Frontend Architect',
      company: 'Quantum Tech Solutions',
      date: '2024 - Present',
      loc: 'Remote / Jakarta',
      desc: 'Memimpin tim pengembang dalam membangun arsitektur Next.js skala besar, merancang sistem UI/UX dengan standar performa premium, dan mengoptimalkan bundle size hingga 40%.',
      color: 'blue'
    },
    {
      role: 'Full Stack Developer',
      company: 'Nexus Creative Studio',
      date: '2022 - 2024',
      loc: 'Jakarta, ID',
      desc: 'Membangun aplikasi web interaktif, mengintegrasikan sistem pembayaran digital, serta mengelola deployment microservices Node.js dan optimasi database MongoDB.',
      color: 'purple'
    },
    {
      role: 'UI/UX Developer & Designer',
      company: 'Aethera Startup',
      date: '2020 - 2022',
      loc: 'Bandung, ID',
      desc: 'Mengembangkan visualisasi interaktif produk digital dengan fokus pada web responsive, micro-animations, dan prototipe desain Figma berkualitas tinggi.',
      color: 'pink'
    }
  ];

  return (
    <section id="timeline" className="relative py-28 px-6 overflow-hidden bg-dark-bg/30">
      {/* Background Neon Shapes */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-neon-blue uppercase tracking-widest font-mono font-semibold mb-2"
          >
            // 04. Career Registry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl text-white"
          >
            Experience{' '}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
              Journey
            </span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 md:pl-10 pl-6 ml-4 md:ml-6 flex flex-col gap-12">
          
          {/* Animated vertical track neon overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink opacity-70" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Glowing Dot on timeline */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: idx * 0.1 }}
                className={`
                  absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-dark-bg z-20
                  ${exp.color === 'blue' ? 'border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.8)]' : ''}
                  ${exp.color === 'purple' ? 'border-neon-purple shadow-[0_0_10px_rgba(185,39,252,0.8)]' : ''}
                  ${exp.color === 'pink' ? 'border-neon-pink shadow-[0_0_10px_rgba(255,0,127,0.8)]' : ''}
                `}
              />

              {/* Card Container */}
              <GlassCard
                glowColor={exp.color}
                delay={idx * 0.15}
                className="w-full text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                  <div>
                    <h3 className="font-heading font-black text-lg text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-slate-400">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-1 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-600" />
                      {exp.loc}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {exp.desc}
                </p>
              </GlassCard>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
