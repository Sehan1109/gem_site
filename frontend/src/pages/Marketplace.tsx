import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, ChevronDown, Check, LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import img01 from '../public/Emerald1.png';
import img02 from '../public/Yellow Diamond.png';
import img03 from '../public/Ruby.png';
import img04 from '../public/Sapphire.png';

const MOCK_GEMS = [
  { id: 1, name: "Royal Blue Sapphire", origin: "Kashmir", carat: "4.52", price: "Upon Request", cert: "Gübelin", type: "Sapphire", color: "Blue", img: img04 },
  { id: 2, name: "Pigeon Blood Ruby", origin: "Burma", carat: "2.14", price: "Private Sale", cert: "SSEF", type: "Ruby", color: "Red", img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Rough_Diamond.jpg" },
  { id: 3, name: "Flawless Yellow Diamond", origin: "South Africa", carat: "10.05", price: "Inquire", cert: "GIA", type: "Diamond", color: "Yellow", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Colombian Emerald", origin: "Muzo", carat: "6.20", price: "Upon Request", cert: "CDTEC", type: "Emerald", color: "Green", img: img01 },
  { id: 5, name: "Padparadscha Sapphire", origin: "Sri Lanka", carat: "3.80", price: "Private Sale", cert: "Gübelin", type: "Sapphire", color: "Pink-Orange", img: img02 },
  { id: 6, name: "Paraiba Tourmaline", origin: "Brazil", carat: "1.95", price: "Inquire", cert: "GIA", type: "Tourmaline", color: "Neon Blue", img: img03 },
];

export function Marketplace() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setLoadingMore(false);
    }, 800);
  };

  // Keep looping mock gems to simulate more data
  const displayGems = Array.from({ length: visibleCount }).map((_, i) => ({
    ...MOCK_GEMS[i % MOCK_GEMS.length],
    uniqueId: `${i}-${MOCK_GEMS[i % MOCK_GEMS.length].id}`
  }));

  return (
    <div className="container mx-auto px-6 max-w-7xl pt-10 pb-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <h1 className="text-5xl md:text-7xl mb-4">The Collection</h1>
          <p className="text-white/50 font-light max-w-lg text-lg">Browse our exclusive catalog of rare and investment-grade gems from verified international dealers.</p>
        </div>
        <div className="flex items-center space-x-6 mt-8 md:mt-0">
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'}`}
            >
              <LayoutGrid className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'}`}
            >
              <List className="w-5 h-5 text-white" />
            </button>
          </div>
          <button 
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center space-x-2 text-white hover:text-gold transition-colors font-light text-sm uppercase tracking-widest border border-white/20 rounded-full px-6 py-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-12 border-y border-white/10"
          >
            <div className="py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['Gem Type', 'Color', 'Origin', 'Carat', 'Price', 'Certification'].map((filter) => (
                <div key={filter}>
                  <h4 className="text-luxury mb-4">{filter}</h4>
                  <button className="flex items-center justify-between w-full border-b border-white/20 pb-2 text-sm text-white/70 hover:text-white transition-colors">
                    <span>All</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-end pb-8">
              <button 
                onClick={() => setFiltersOpen(false)}
                className="px-6 py-2 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-300 rounded-full text-xs uppercase tracking-widest font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`grid gap-x-8 gap-y-16 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {displayGems.map((gem, i) => (
          <motion.div 
            key={gem.uniqueId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group flex ${viewMode === 'list' ? 'flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 border-b border-white/10 pb-12' : 'flex-col'}`}
          >
            <Link to={`/gem/${gem.id}`} className={`relative overflow-hidden bg-surface-light overflow-hidden block ${viewMode === 'list' ? 'w-full md:w-1/3 aspect-[4/3] md:aspect-[3/4]' : 'aspect-[3/4] mb-6'}`}>
               <img 
                src={gem.img} 
                alt={gem.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 dark:opacity-80 opacity-100 dark:mix-blend-lighten"
              />
              <div className="absolute top-4 right-4 z-10 flex space-x-2">
                 <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest border border-white/10 text-white">
                  {gem.type}
                </span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest border border-white/10 text-white truncate max-w-[80px]">
                  {gem.cert}
                </span>
              </div>
            </Link>
            
            <div className={`flex flex-col justify-center ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-2xl md:text-3xl font-light group-hover:text-gold transition-colors duration-300 ${viewMode === 'grid' ? 'mb-1' : 'mb-3'}`}>
                  <Link to={`/gem/${gem.id}`}>{gem.name}</Link>
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm font-light text-white/50 mb-6">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Origin</span>
                  {gem.origin}
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Weight</span>
                  {gem.carat} ct
                </div>
              </div>
              <div className={`flex items-center justify-between ${viewMode === 'list' ? 'mt-auto pt-6 border-t border-white/10' : ''}`}>
                 <span className="text-luxury">{gem.price}</span>
                 <Link to={`/gem/${gem.id}`} className="px-6 py-2 border border-white/20 text-white rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    View
                  </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 flex justify-center">
        <button 
          onClick={handleLoadMore}
          disabled={loadingMore}
          className="text-luxury border-b border-white hover:text-gold hover:border-gold transition-colors pb-1 flex items-center space-x-2"
        >
          {loadingMore ? 'Loading...' : 'Load More Acquisitions'}
        </button>
      </div>
    </div>
  );
}
