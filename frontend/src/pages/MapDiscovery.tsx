import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, ChevronRight, Locate } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default leaflet icons not showing in React properly
delete (L.Icon.Default.prototype as any)._getIconUrl;

// Custom luxury marker - simpler approach since we're using default for now, but we can customize
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const SELLERS = [
  { id: 1, name: "Colombo Gem Exchange", location: "Colombo, Sri Lanka", coords: [6.9271, 79.8612] as [number, number], specialty: "Ceylon Sapphires", gems: 42 },
  { id: 2, name: "Ratnapura Source House", location: "Ratnapura, Sri Lanka", coords: [6.6940, 80.3980] as [number, number], specialty: "Rubies & Sapphires", gems: 34 },
  { id: 3, name: "Galle Heritage Atelier", location: "Galle, Sri Lanka", coords: [6.0535, 80.2210] as [number, number], specialty: "Heritage Jewelry", gems: 18 },
  { id: 4, name: "Kandy Gem Cutters", location: "Kandy, Sri Lanka", coords: [7.2906, 80.6337] as [number, number], specialty: "Gem Cutting", gems: 24 },
  { id: 5, name: "Bentota Pearl House", location: "Bentota, Sri Lanka", coords: [6.4214, 80.0076] as [number, number], specialty: "Pearls & Coral", gems: 22 },
];

function LocationMarker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>
        <div className="text-black font-sans">
          <strong className="font-serif text-lg">Your Location</strong>
          <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Discover nearby</p>
        </div>
      </Popup>
    </Marker>
  );
}

export function MapDiscovery() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Focus map on selected seller
  function MapFocus({ sellerId }: { sellerId: number | null }) {
    const map = useMap();
    useEffect(() => {
      if (sellerId) {
        const seller = SELLERS.find(s => s.id === sellerId);
        if (seller) {
          map.flyTo(seller.coords, 10, { duration: 2 });
        }
      }
    }, [sellerId, map]);
    return null;
  }

  return (
    <div className="relative h-[calc(100dvh-theme('spacing.16'))] md:h-[calc(100vh-theme('spacing.24'))] w-full bg-black overflow-hidden flex flex-col md:flex-row">
      {/* Sidebar - Appears on bottom on mobile, left on desktop */}
      <div className="w-full md:w-80 lg:w-96 bg-surface-mid border-t md:border-t-0 md:border-r border-white/10 flex flex-col z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.3)] md:shadow-[20px_0_40px_rgba(0,0,0,0.5)] h-[50%] md:h-full order-2 md:order-1">
        <div className="p-4 lg:p-6 border-b border-white/10 bg-black/50 backdrop-blur-xl shrink-0">
          <h1 className="text-2xl lg:text-3xl font-light mb-1 lg:mb-2">Sri Lanka Network</h1>
          <p className="text-white/50 text-xs lg:text-sm font-light mb-4 lg:mb-6">Discover verified Sri Lankan sellers and rare island-sourced pieces near your location.</p>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by city..." 
              className="w-full bg-surface-light border border-white/20 rounded-full py-2.5 lg:py-3 px-4 lg:px-5 pl-10 lg:pl-12 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <button className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
              <Locate className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 lg:p-6 space-y-3 lg:space-y-4">
          {SELLERS.map((seller) => (
            <motion.div 
              key={seller.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-4 lg:p-5 rounded-xl lg:rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeLocation === seller.id 
                  ? 'border-gold bg-surface-light shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                  : 'border-white/10 hover:border-white/30 bg-surface'
              }`}
              onClick={() => setActiveLocation(seller.id)}
            >
              <div className="flex justify-between items-start mb-1 lg:mb-2">
                <h3 className="font-serif text-lg lg:text-xl">{seller.name}</h3>
                {activeLocation === seller.id && <MapPin className="w-4 h-4 text-gold shrink-0 ml-2" />}
              </div>
              <p className="text-white/60 text-xs lg:text-sm font-light mb-3 lg:mb-4">{seller.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-luxury text-[10px] text-white/40">{seller.specialty}</span>
                <span className="text-[10px] lg:text-xs bg-white/10 px-2 py-1 rounded-sm">{seller.gems} active listings</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Area - Appears on top on mobile, right on desktop */}
      <div className="flex-1 relative h-[50%] md:h-full z-10 w-full order-1 md:order-2" id="map-container">
        {/* We use a dark styled map via CartoDB Dark Matter */}
        <MapContainer 
          key={isDark ? 'dark' : 'light'}
          center={[7.5, 80]} 
          zoom={6} 
          scrollWheelZoom={true}
          className="w-full h-full"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url={isDark 
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            }
          />
          <MapFocus sellerId={activeLocation} />
          
          {SELLERS.map((seller) => (
            <Marker 
              key={seller.id} 
              position={seller.coords} 
              icon={customIcon}
              eventHandlers={{
                click: () => setActiveLocation(seller.id),
              }}
            >
              <Popup className="luxury-popup">
                <div className="bg-surface-light text-white p-2 min-w-[180px] sm:min-w-[200px]">
                  <h3 className="font-serif text-base sm:text-lg font-light mb-1 text-gold">{seller.name}</h3>
                  <p className="text-[10px] sm:text-xs text-white/60 mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-white/10">{seller.location}</p>
                  <div className="flex justify-between items-center text-[10px] sm:text-xs">
                    <span className="uppercase tracking-wider text-white/40">{seller.gems} Pieces</span>
                    <Link to={`/seller/${seller.id}`} className="flex items-center space-x-1 text-white hover:text-gold transition-colors">
                      <span>View</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Map Overlay for luxury feel */}
        <div className={`absolute inset-0 pointer-events-none z-[20] transition-shadow duration-500 ${isDark ? 'shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] md:shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]' : 'shadow-[inset_0_0_50px_rgba(255,255,255,0.8)] md:shadow-[inset_0_0_100px_rgba(255,255,255,0.8)]'}`} />
        
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-[30] pointer-events-auto">
          <button className="bg-black/80 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-full text-white hover:bg-gold hover:border-gold hover:text-black transition-all shadow-lg active:scale-95 duration-300">
            <Locate className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}