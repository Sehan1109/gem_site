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
  { id: 1, name: "Geneva Vaults", location: "Geneva, Switzerland", coords: [46.2044, 6.1432] as [number, number], specialty: "Rare Diamonds", gems: 12 },
  { id: 2, name: "Mogok Traders", location: "Bangkok, Thailand", coords: [13.7563, 100.5018] as [number, number], specialty: "Rubies & Sapphires", gems: 34 },
  { id: 3, name: "Fifth Ave Collections", location: "New York, USA", coords: [40.7128, -74.0060] as [number, number], specialty: "High Jewelry", gems: 8 },
  { id: 4, name: "Antwerp Diamond Bourse", location: "Antwerp, Belgium", coords: [51.2194, 4.4025] as [number, number], specialty: "Uncut Diamonds", gems: 56 },
  { id: 5, name: "Colombo Gem Exchange", location: "Colombo, Sri Lanka", coords: [6.9271, 79.8612] as [number, number], specialty: "Padparadscha", gems: 22 },
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
    <div className="relative h-[calc(100vh-theme('spacing.24'))] w-full bg-black overflow-hidden flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-surface-mid border-r border-white/10 flex flex-col z-20 shadow-[20px_0_40px_rgba(0,0,0,0.5)] z-20 h-1/2 md:h-full">
        <div className="p-6 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <h1 className="text-3xl font-light mb-2">Global Network</h1>
          <p className="text-white/50 text-sm font-light mb-6">Discover verified sellers and rare pieces near your location.</p>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by city or country..." 
              className="w-full bg-surface-light border border-white/20 rounded-full py-3 px-5 pl-12 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
              <Locate className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
          {SELLERS.map((seller) => (
            <motion.div 
              key={seller.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeLocation === seller.id 
                  ? 'border-gold bg-surface-light shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                  : 'border-white/10 hover:border-white/30 bg-surface'
              }`}
              onClick={() => setActiveLocation(seller.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-xl">{seller.name}</h3>
                {activeLocation === seller.id && <MapPin className="w-4 h-4 text-gold" />}
              </div>
              <p className="text-white/60 text-sm font-light mb-4">{seller.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-luxury text-[10px] text-white/40">{seller.specialty}</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded-sm">{seller.gems} active listings</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative h-1/2 md:h-full z-10 w-full" id="map-container">
        {/* We use a dark styled map via CartoDB Dark Matter */}
        <MapContainer 
          key={isDark ? 'dark' : 'light'}
          center={[30, 0]} 
          zoom={3} 
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
                <div className="bg-surface-light text-white p-2 min-w-[200px]">
                  <h3 className="font-serif text-lg font-light mb-1 text-gold">{seller.name}</h3>
                  <p className="text-xs text-white/60 mb-3 pb-3 border-b border-white/10">{seller.location}</p>
                  <div className="flex justify-between items-center text-xs">
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
        <div className={`absolute inset-0 pointer-events-none z-[20] transition-shadow duration-500 ${isDark ? 'shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]' : 'shadow-[inset_0_0_100px_rgba(255,255,255,0.8)]'}`} />
        
        <div className="absolute bottom-6 right-6 z-[30] pointer-events-auto">
          <button className="bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-gold hover:border-gold hover:text-black transition-all shadow-lg active:scale-95 duration-300">
            <Locate className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
