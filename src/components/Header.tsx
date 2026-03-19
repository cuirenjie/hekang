import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Hospital, Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '服务介绍', href: '#services' },
    { name: '优势对比', href: '#comparison' },
    { name: '医院环境', href: '#environment' },
    { name: '常见问题', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-primary/5 py-3 border-b border-white/40' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-primary p-2.5 rounded-2xl text-white shadow-lg shadow-primary/30 relative overflow-hidden group">
              <Hospital size={28} />
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 leading-tight tracking-tight">和康医疗<span className="text-primary">服务</span></h1>
              <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold">HeKang Medical Services</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => (
              <motion.a 
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-primary font-bold text-sm transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3 text-sm text-slate-600 font-bold">
              <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600 animate-pulse">
                <Phone size={16} />
              </div>
              <span>+852 98306058</span>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking" 
              className="btn-primary px-8 py-3"
            >
              立即预约
            </motion.a>
          </div>

          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="md:hidden bg-white overflow-hidden border-t border-slate-100"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-slate-700 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a 
              href="#booking" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full btn-primary flex justify-center"
            >
              立即预约
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
