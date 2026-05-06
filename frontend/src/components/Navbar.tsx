import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search, Menu, X, Gem, Sun, Moon } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

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
            ? 'glass-panel border-white/10 py-3 sm:py-4' 
            : 'bg-transparent border-transparent py-4 sm:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          
          {/* Logo & Desktop Links */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link to="/" className="flex items-center space-x-2 group shrink-0">
              <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-gold transition-colors duration-300" strokeWidth={1} />
              <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-widest uppercase text-white font-light">Aetheria</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <NavLink to="/marketplace">Marketplace</NavLink>
              <NavLink to="/jewelry">Jewelry</NavLink>
              <NavLink to="/sellers">Sellers</NavLink>
              <NavLink to="/about">Heritage</NavLink>
              <NavLink to="/news">News</NavLink>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button 
              onClick={toggleTheme}
              className="text-white/70 hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link to="/map" className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span className="text-luxury whitespace-nowrap">Discover</span>
            </Link>
            <div className="w-px h-4 bg-white/20"></div>
            <Link 
              to="/contact" 
              className="px-5 xl:px-6 py-2 border border-white/30 rounded-full text-luxury hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
            >
              Inquire
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/sell"
                  className="px-5 xl:px-6 py-2 rounded-full bg-gold text-black uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors whitespace-nowrap"
                >
                  Sell Gem
                </Link>
                <button
                  onClick={logout}
                  className="px-5 xl:px-6 py-2 rounded-full border border-white/30 text-white uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-5 xl:px-6 py-2 rounded-full border border-white/30 text-luxury hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-semibold whitespace-nowrap"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Actions Toggle (Visible < 1024px) */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={toggleTheme}
              className="text-white/70 hover:text-white transition-colors duration-300 p-1 sm:p-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Hidden on ultra-small screens to prevent squishing, visible on small tablets */}
            <Link
              to={isAuthenticated ? '/sell' : '/login'}
              className="hidden sm:flex text-sm text-white/70 hover:text-white transition-colors duration-300 px-4 py-1.5 border border-white/30 rounded-full"
            >
              {isAuthenticated ? 'Sell' : 'Login'}
            </Link>
            
            <button 
              className="text-white p-1 sm:p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-[100dvh] w-80 max-w-[85vw] z-40 bg-surface/95 backdrop-blur-xl border-l border-white/10 flex flex-col overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 shrink-0">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1} />
                <span className="font-serif text-lg sm:text-xl tracking-widest uppercase text-white font-light">Aetheria</span>
              </Link>
              <button 
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col p-5 sm:p-6 overflow-y-auto">
              <div className="space-y-4 sm:space-y-6">
                <MobileNavLink to="/marketplace" onClick={() => setMobileMenuOpen(false)}>Marketplace</MobileNavLink>
                <MobileNavLink to="/jewelry" onClick={() => setMobileMenuOpen(false)}>Jewelry</MobileNavLink>
                <MobileNavLink to="/sellers" onClick={() => setMobileMenuOpen(false)}>Sellers</MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>Heritage</MobileNavLink>
                <MobileNavLink to="/news" onClick={() => setMobileMenuOpen(false)}>News</MobileNavLink>
                
                <div className="border-t border-white/10 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                  <MobileNavLink to="/map" onClick={() => setMobileMenuOpen(false)}>
                    <MapPin className="w-5 h-5 mr-3 text-white/70" />
                    Discover
                  </MobileNavLink>
                  <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-5 sm:p-6 border-t border-white/10 shrink-0 space-y-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/sell"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full block text-center px-6 py-3 rounded-full bg-gold text-black uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors"
                  >
                    Sell Gem
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full block text-center px-6 py-3 rounded-full border border-white/30 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                >
                  Login
                </Link>
              )}
            </div>
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
      className={`text-sm xl:text-base relative group overflow-hidden ${isActive ? 'text-white' : 'text-white/60 hover:text-white transition-colors'}`}
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

function MobileNavLink({ to, children, onClick }: { to: string, children: ReactNode, onClick?: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="flex items-center text-base sm:text-lg font-light text-white/80 hover:text-white transition-colors py-2"
    >
      {children}
    </Link>
  );
}