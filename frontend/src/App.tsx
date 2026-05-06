import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { MapDiscovery } from './pages/MapDiscovery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Jewelry } from './pages/Jewelry';
import { Sellers } from './pages/Sellers';
import { GemDetails } from './pages/GemDetails';
import { JewelryDetails } from './pages/JewelryDetails';
import { SellerProfile } from './pages/SellerProfile';
import { News } from './pages/News';
import { NewsDetails } from './pages/NewsDetails';
import { Login } from './pages/Login';
import { SellGem } from './pages/SellGem';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="gem/:id" element={<GemDetails />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="jewelry/:id" element={<JewelryDetails />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="seller/:id" element={<SellerProfile />} />
            <Route path="map" element={<MapDiscovery />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<NewsDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="sell" element={<SellGem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
