import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const JEWELRY_MOCK = [
  {
    id: 1,
    name: "The Imperial Emerald Drop",
    description: "Flawless 12-carat Colombian emerald suspended from a cascade of D-flawless diamonds.",
    price: "Upon Request",
    category: "Necklace",
    stone: "Colombian Emerald",
    metal: "Platinum",
    img: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Radiant Pink Diamond",
    description: "Extremely rare 3.14-carat Argyle pink diamond set in platinum and 18k rose gold.",
    price: "Private Sale",
    category: "Ring",
    stone: "Pink Diamond",
    metal: "18k Rose Gold",
    img: "https://images.unsplash.com/photo-1481980235850-66e47651e431?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Kashmir Sapphire Suite",
    description: "Matched pair of unheated Kashmir sapphires, 8.2 carats total, with pear-cut diamond crowns.",
    price: "Inquire",
    category: "Earrings",
    stone: "Kashmir Sapphire",
    metal: "White Gold",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Art Deco Ruby Bracelet",
    description: "Original 1925 design featuring over 40 carats of square-cut Burmese rubies.",
    price: "Upon Request",
    category: "Bracelet",
    stone: "Burmese Ruby",
    metal: "Platinum",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
  },
];

export function Jewelry() {
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Pieces');

  const categoryMap: { [key: string]: string } = {
    'All Pieces': '',
    'Rings': 'Ring',
    'Necklaces': 'Necklace',
    'Earrings': 'Earrings',
    'Bracelets': 'Bracelet',
    'Vintage': 'Vintage'
  };

  const filteredJewelry = selectedCategory === 'All Pieces'
    ? JEWELRY_MOCK
    : JEWELRY_MOCK.filter(item => item.category === categoryMap[selectedCategory]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 2);
      setLoadingMore(false);
    }, 800);
  };

  const displayItems = Array.from({ length: Math.min(visibleCount, filteredJewelry.length) }).map((_, i) => ({
    ...filteredJewelry[i % filteredJewelry.length],
    uniqueId: `${i}-${filteredJewelry[i % filteredJewelry.length].id}`
  }));

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden -mt-24">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-surface-mid"
        >
          <img
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2600&auto=format&fit=crop"
            alt="High Jewelry"
            className="w-full h-full object-cover opacity-30 dark:mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-luxury text-white mb-6 block">Masterpieces</span>
            <h1 className="text-5xl md:text-8xl text-white font-light mb-6">
              High <span className="italic">Jewelry</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg font-light">
              Exquisite creations crafted by master artisans. Discover the world's finest bespoke and historically significant jewelry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories / Nav */}
      <section className="border-y border-white/10 bg-surface-mid sticky top-[88px] z-30 backdrop-blur-md bg-surface-mid/80">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between py-6 overflow-x-auto custom-scrollbar">
            <div className="flex space-x-12 min-w-max pr-8">
              {['All Pieces', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Vintage'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(4);
                  }}
                  className={`text-sm uppercase tracking-widest transition-colors ${selectedCategory === cat ? 'text-white border-b-2 border-gold pb-1' : 'text-white/40 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors border border-white/20 rounded-full px-6 py-2 text-xs uppercase tracking-widest flex-shrink-0 ml-6"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-white/10"
              >
                <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {['Category', 'Stone Type', 'Price', 'Metal'].map((filter) => (
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
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {displayItems.map((item, i) => (
            <motion.div
              key={item.uniqueId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.2 }}
              className="group"
            >
              <Link to={`/jewelry/${item.id}`} className="relative aspect-[4/5] overflow-hidden mb-8 bg-surface-light border border-white/5 block">
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 dark:opacity-70 opacity-100 group-hover:opacity-100 dark:mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />

                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">
                    {item.category}
                  </span>
                </div>
              </Link>

              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div className="mb-4 md:mb-0 max-w-sm">
                  <h3 className="text-2xl md:text-3xl font-light mb-3 group-hover:text-gold transition-colors duration-500">
                    <Link to={`/jewelry/${item.id}`}>{item.name}</Link>
                  </h3>
                  <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-black/50 dark:text-white/40 mb-4">
                    <span>{item.stone}</span>
                    <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full" />
                    <span>{item.metal}</span>
                  </div>
                  <p className="text-black/60 dark:text-white/50 font-light text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="text-luxury text-white/50 border-b border-white/20 pb-1 inline-block">
                    {item.price}
                  </span>
                </div>

                <Link to={`/jewelry/${item.id}`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 flex-shrink-0 mt-2">
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex justify-center border-t border-white/10 pt-16">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore || visibleCount >= filteredJewelry.length}
            className="px-12 py-4 border border-white/30 text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-500 rounded-full text-sm uppercase tracking-widest font-semibold flex items-center h-[54px]"
          >
            {loadingMore ? 'Loading...' : visibleCount >= filteredJewelry.length ? 'No More Pieces' : 'Load More Masterpieces'}
          </button>
        </div>
      </section>
    </div>
  );
}
