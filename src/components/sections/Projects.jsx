import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ShieldCheck, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const Projects = () => {
  const projects = [
    {
      title: 'Aetheria Portal',
      desc: 'AI-Driven Cyberpunk dashboard untuk menganalisis data metrik dengan visualisasi futuristik modern, real-time node rendering, dan analitik cerdas.',
      tech: ['React', 'Tailwind v4', 'Framer Motion', 'Recharts'],
      img: '/aetheria_dashboard.png',
      live: '#',
      github: '#',
      color: 'blue',
      feature: 'AI Predictive Matrix'
    },
    {
      title: 'Nova Wallet',
      desc: 'Platform perbankan desentralisasi premium dengan visualisasi real-time aset kriptografi, multi-chain gateway, dan perlindungan keamanan end-to-end.',
      tech: ['Next.js', 'PostgreSQL', 'Framer Motion', 'Web3'],
      img: '/nova_wallet.png',
      live: '#',
      github: '#',
      color: 'purple',
      feature: 'Multi-Chain Node'
    },
    {
      title: 'Helios OS',
      desc: 'Sistem operasi interaktif berbasis web dengan holographic widgets, dynamic docking panels, dan performa visual super smooth berstandar tinggi.',
      tech: ['React', 'Tailwind CSS', 'Three.js', 'GSAP'],
      img: '/helios_os.png',
      live: '#',
      github: '#',
      color: 'pink',
      feature: 'Three.js Hologram'
    }
  ];

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Dynamic Background subtle glows */}
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-neon-pink uppercase tracking-widest font-mono font-semibold mb-2"
          >
            // 03. Creative Showroom
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl text-white"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(255,0,127,0.3)]">
              Projects
            </span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-pink to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <GlassCard
              key={idx}
              glowColor={project.color}
              delay={idx * 0.15}
              className="flex flex-col h-full overflow-hidden p-0 rounded-2xl relative border border-white/5"
            >
              {/* Cover Image container */}
              <div className="relative w-full h-[200px] overflow-hidden bg-slate-950/60">
                {/* Visual Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
                
                {/* Glowing Feature Chip */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/10 text-[10px] font-mono font-semibold tracking-wider text-white uppercase">
                  <Zap className="w-3 h-3 text-neon-cyan animate-pulse" />
                  <span>{project.feature}</span>
                </div>

                {/* Project Image */}
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to stylized futuristic SVG design if image isn't copied yet
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Graphic */}
                <div className="hidden absolute inset-0 bg-slate-900/40 items-center justify-center flex-col gap-2">
                  <Layers className="w-8 h-8 text-neon-blue animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500">// GRAPHIC GENERATING...</span>
                </div>
              </div>

              {/* Project Info details */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left">
                <div>
                  <h3 className="font-heading font-black text-xl text-white mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-neon-cyan font-mono transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>CODEBASE</span>
                    </a>
                    
                    <a
                      href={project.live}
                      className={`
                        flex items-center gap-1.5 text-xs font-mono font-bold transition-all px-4 py-2 rounded-lg border
                        ${project.color === 'blue' ? 'border-neon-blue/20 bg-neon-blue/5 text-neon-blue hover:bg-neon-blue/15 hover:border-neon-blue' : ''}
                        ${project.color === 'purple' ? 'border-neon-purple/20 bg-neon-purple/5 text-neon-purple hover:bg-neon-purple/15 hover:border-neon-purple' : ''}
                        ${project.color === 'pink' ? 'border-neon-pink/20 bg-neon-pink/5 text-neon-pink hover:bg-neon-pink/15 hover:border-neon-pink' : ''}
                      `}
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
