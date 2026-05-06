import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Layout() {
  const location = useLocation();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <motion.main 
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow pt-24" // pt-24 ensures content is below the transparent navbar mostly, but we might want full bleed for some pages. Home can override.
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
