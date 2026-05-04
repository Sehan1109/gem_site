import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Gems', path: '/gems' },
  { name: 'Bespoke', path: '/jewelry' },
  { name: 'Heritage', path: '/heritage' },
  { name: 'Journal', path: '/journal' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700 w-full',
          scrolled ? 'bg-obsidian/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl tracking-widest font-serif text-ivory hover:text-gold transition-colors"
          >
            AURELIA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-gold',
                  location.pathname === link.path ? 'text-gold' : 'text-silver'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-silver hover:text-gold transition-colors flex items-center justify-center cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/contact"
              className="text-xs uppercase tracking-widest border border-silver/30 px-6 py-3 hover:border-gold hover:text-gold transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-silver hover:text-gold transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-ivory hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-lg tracking-[0.2em] uppercase font-serif transition-colors hover:text-gold',
                  location.pathname === link.path ? 'text-gold' : 'text-ivory'
                )}
              >
                {link.name}
              </Link>
            ))}
             <Link
              to="/contact"
              className="text-sm uppercase tracking-widest border border-silver/30 px-8 py-4 mt-8 hover:border-gold hover:text-gold transition-colors"
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
