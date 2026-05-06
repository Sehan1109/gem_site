import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search, Menu, X, Gem, Sun, Moon } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'glass-panel border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-2 group">
              <Gem className="w-8 h-8 text-white group-hover:text-gold transition-colors duration-300" strokeWidth={1} />
              <span className="font-serif text-2xl tracking-widest uppercase text-white font-light">Aetheria</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/marketplace">Marketplace</NavLink>
              <NavLink to="/jewelry">Jewelry</NavLink>
              <NavLink to="/sellers">Sellers</NavLink>
              <NavLink to="/about">Heritage</NavLink>
              <NavLink to="/news">News</NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleTheme}
              className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link to="/map" className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span className="text-luxury">Discover</span>
            </Link>
            <div className="w-px h-4 bg-white/20"></div>
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-2 border border-white/30 rounded-full text-luxury hover:bg-white hover:text-black transition-all duration-300"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            <MobileNavLink to="/marketplace">Marketplace</MobileNavLink>
            <MobileNavLink to="/jewelry">Jewelry</MobileNavLink>
            <MobileNavLink to="/map">Map Discovery</MobileNavLink>
            <MobileNavLink to="/sellers">Sellers</MobileNavLink>
            <MobileNavLink to="/about">Heritage</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, children }: { to: string, children: ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  
  return (
    <Link 
      to={to} 
      className={`text-luxury relative group overflow-hidden ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}
    >
      <span className="relative z-10">{children}</span>
      <span 
        className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string, children: ReactNode }) {
  return (
    <Link 
      to={to} 
      className="font-serif text-4xl font-light text-white hover:text-white/70 transition-colors"
    >
      {children}
    </Link>
  );
}
