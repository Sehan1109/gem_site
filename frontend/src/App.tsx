import { AnimatePresence } from 'motion/react';
import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Gems } from './pages/Gems';
import { Jewelry } from './pages/Jewelry';
import { Heritage } from './pages/Heritage';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';
import { ThemeProvider } from './components/ThemeProvider';

function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/gems" element={<Gems />} />
            <Route path="/jewelry" element={<Jewelry />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="aurelia-theme">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
