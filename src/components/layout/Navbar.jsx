import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section highlighters on scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className={`
          mx-auto max-w-5xl rounded-2xl glass transition-all duration-500 flex items-center justify-between px-6 py-3
          ${scrolled ? 'shadow-2xl border-white/10 py-2' : 'border-white/5'}
        `}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center neon-glow-blue"
            >
              <Cpu className="w-4 h-4 text-neon-blue" />
            </motion.div>
            <span className="font-heading font-extrabold tracking-wider text-base bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent group-hover:filter group-hover:brightness-125 transition-all">
              REHAN | WEB & APP DEV
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1.5 font-medium text-sm tracking-wide transition-colors duration-300 hover:text-white ${
                  activeSection === link.id ? 'text-neon-cyan' : 'text-slate-400'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-blue shadow-[0_0_10px_rgba(0,255,213,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Hire Me CTA Button */}
          <div className="hidden md:block">
            <NeonButton variant="blue" className="px-5 py-2 text-xs" onClick={() => document.getElementById('contact').scrollIntoView()}>
              Let's Talk
            </NeonButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-neon-pink" /> : <Menu className="w-5 h-5 text-neon-blue" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-5xl mx-auto px-6 mt-2 relative z-50"
          >
            <div className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.id 
                      ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' 
                      : 'text-slate-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/5 my-2" />
              <NeonButton variant="pink" className="w-full text-center text-sm py-2.5" onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact').scrollIntoView();
              }}>
                Hire Me
              </NeonButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
