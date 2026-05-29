import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Eye, Terminal } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'React.js / Next.js', level: 92 },
        { name: 'Tailwind CSS / SCSS', level: 95 },
        { name: 'Framer Motion & Animation', level: 88 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      title: 'Backend Engineering',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 82 },
        { name: 'GraphQL / REST APIs', level: 90 },
        { name: 'Firebase', level: 78 }
      ]
    },
    {
      title: 'Creative Web Design',
      icon: Eye,
      color: 'pink',
      skills: [
        { name: 'Figma UI/UX Mockups', level: 85 },
        { name: 'Three.js (3D Graphics)', level: 60 },
        { name: 'Neon Realism Styling', level: 95 },
        { name: 'Performance Optimization', level: 90 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      color: 'cyan',
      skills: [
        { name: 'Git & Github CI/CD', level: 88 },
        { name: 'Docker Containers', level: 70 },
        { name: 'Vite Build System', level: 92 },
        { name: 'Vercel / Netlify Staging', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-dark-bg/40">
      {/* Background neon elements */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-neon-cyan uppercase tracking-widest font-mono font-semibold mb-2"
          >
            // 02. Technical Matrix
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl text-white"
          >
            Skills &{' '}
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-cyan bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(0,255,213,0.3)]">
              Abilities
            </span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <GlassCard 
                key={catIdx} 
                glowColor={category.color}
                delay={catIdx * 0.1}
                className="w-full text-left"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center border
                    ${category.color === 'blue' ? 'bg-neon-blue/5 border-neon-blue/20 text-neon-blue neon-glow-blue' : ''}
                    ${category.color === 'purple' ? 'bg-neon-purple/5 border-neon-purple/20 text-neon-purple neon-glow-purple' : ''}
                    ${category.color === 'pink' ? 'bg-neon-pink/5 border-neon-pink/20 text-neon-pink neon-glow-pink' : ''}
                    ${category.color === 'cyan' ? 'bg-neon-cyan/5 border-neon-cyan/20 text-neon-cyan neon-glow-cyan' : ''}
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress Lines */}
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col gap-2">
                      <div className="flex justify-between items-end font-sans text-xs">
                        <span className="font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className={`
                          font-mono font-bold
                          ${category.color === 'blue' ? 'text-neon-blue' : ''}
                          ${category.color === 'purple' ? 'text-neon-purple' : ''}
                          ${category.color === 'pink' ? 'text-neon-pink' : ''}
                          ${category.color === 'cyan' ? 'text-neon-cyan' : ''}
                        `}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Outer track bar */}
                      <div className="w-full h-1.5 bg-slate-950 border border-white/5 rounded-full overflow-hidden relative">
                        {/* Glow filling track */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.1 }}
                          className={`
                            h-full rounded-full relative
                            ${category.color === 'blue' ? 'bg-gradient-to-r from-neon-blue/70 to-neon-blue' : ''}
                            ${category.color === 'purple' ? 'bg-gradient-to-r from-neon-purple/70 to-neon-purple' : ''}
                            ${category.color === 'pink' ? 'bg-gradient-to-r from-neon-pink/70 to-neon-pink' : ''}
                            ${category.color === 'cyan' ? 'bg-gradient-to-r from-neon-cyan/70 to-neon-cyan' : ''}
                          `}
                          style={{
                            boxShadow: category.color === 'blue' ? '0 0 10px rgba(0, 243, 255, 0.5)' : 
                                       category.color === 'purple' ? '0 0 10px rgba(185, 39, 252, 0.5)' : 
                                       category.color === 'pink' ? '0 0 10px rgba(255, 0, 127, 0.5)' : '0 0 10px rgba(0, 255, 213, 0.5)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
