import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'menu' | 'order';
  onNavigate: (page: 'home' | 'menu' | 'order') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo with decorative elements */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-2 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-accent"></div>
                <div>
                  <div className="text-2xl tracking-[0.3em] text-accent">LALA</div>
                  <div className="text-xs tracking-widest text-accent/60">CAFÉ</div>
                </div>
                <div className="w-1 h-12 bg-accent"></div>
              </div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: 'Home', value: 'home' as const },
              { label: 'Menu', value: 'menu' as const },
              { label: 'Order', value: 'order' as const },
            ].map((item) => (
              <motion.button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative tracking-[0.2em] transition-colors ${
                  currentPage === item.value ? 'text-accent' : 'text-background hover:text-accent'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {currentPage === item.value && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              onClick={scrollToContact}
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-background z-50"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-accent/30"
          >
            <div className="px-6 py-8 space-y-6">
              {[
                { label: 'Home', value: 'home' as const },
                { label: 'Menu', value: 'menu' as const },
                { label: 'Order Online', value: 'order' as const },
              ].map((item, index) => (
                <motion.button
                  key={item.value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left tracking-[0.2em] py-3 transition-colors ${
                    currentPage === item.value ? 'text-accent' : 'text-background'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={scrollToContact}
                className="block w-full text-left tracking-[0.2em] py-3 text-background"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
