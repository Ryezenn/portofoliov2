import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import NeonButton from '../ui/NeonButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate premium submit
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const socials = [
    { name: 'Github', href: 'https://github.com/Ryezenn', icon: Github, color: 'blue' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'purple' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'pink' },
    { name: 'Email', href: 'mailto:zarukayaagami@gmail.com', icon: Mail, color: 'cyan' }
  ];

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-neon-blue uppercase tracking-widest font-mono font-semibold mb-2"
          >
            // 05. Uplink Core
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl text-white"
          >
            Establish{' '}
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
              Connection
            </span>
          </motion.h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Social Links & Prompt */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <GlassCard glowColor="blue" className="text-left flex-grow">
              <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
                Let's Build Together
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
                Punya ide proyek revolusioner, kemitraan strategis, atau sekadar ingin menyapa? Hubungi saya kapan saja dan mari wujudkan masa depan web modern.
              </p>

              {/* Direct email display */}
              <div className="flex flex-col gap-2 font-mono text-xs text-slate-500 mb-8">
                <span>DIRECT ADDR: rehan@example.com</span>
                <span>SECURE HASH: SSH-RSA-2026-CORE</span>
              </div>
            </GlassCard>

            {/* Social Link Cards Row */}
            <div className="grid grid-cols-4 gap-4">
              {socials.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="group"
                  >
                    <div className={`
                      h-14 rounded-xl flex items-center justify-center border transition-all duration-300 cursor-pointer glass
                      ${soc.color === 'blue' ? 'border-white/5 hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]' : ''}
                      ${soc.color === 'purple' ? 'border-white/5 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_15px_rgba(185,39,252,0.2)]' : ''}
                      ${soc.color === 'pink' ? 'border-white/5 hover:border-neon-pink hover:text-neon-pink hover:shadow-[0_0_15px_rgba(255,0,127,0.2)]' : ''}
                      ${soc.color === 'cyan' ? 'border-white/5 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,213,0.2)]' : ''}
                    `}>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="purple" className="text-left w-full h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mb-6 neon-glow-cyan">
                    <Send className="w-6 h-6 text-neon-cyan animate-pulse" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-white mb-2">Connection Established!</h4>
                  <p className="text-sm text-slate-400 max-w-xs leading-relaxed font-light">
                    Terima kasih! Sinyal pesan Anda telah dienkripsi dan berhasil dikirim ke server pusat kami. Saya akan segera menghubungi Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Transmission Payload</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <NeonButton
                      type="submit"
                      variant="purple"
                      className="w-full flex items-center justify-center gap-2 py-3.5 font-bold uppercase tracking-wider text-xs cursor-pointer"
                    >
                      <span>Send Signal</span>
                      <Send className="w-4 h-4 text-neon-purple animate-pulse" />
                    </NeonButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
