import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Quem Somos', href: '#sobre' },
  { name: 'Programas', href: '#programas' },
  { name: 'Impacto', href: '#impacto' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-ami-purple-primary rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Heart size={20} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none text-ami-purple-primary">AMI</span>
            <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-ami-green-dark">Associação de Mulheres Inspiradoras</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-ami-purple-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ami-purple-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a 
            href="https://wa.me/244937632348" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-sm py-2 px-6"
          >
            Participar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ami-purple-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-ami-purple-primary"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/244937632348" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full mt-4 text-center"
              >
                Participar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
