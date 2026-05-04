import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const categories = ['All', 'Diamonds', 'Emeralds', 'Rubies', 'Sapphires', 'Rare Spinel'];

const gems = [
  { id: 1, name: 'The Midnight Star', type: 'Sapphires', carat: '14.2ct', origin: 'Sri Lanka', cut: 'Oval', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Logan_Sapphire_SI.jpg/960px-Logan_Sapphire_SI.jpg' },
  { id: 2, name: 'Verdant Forest', type: 'Emeralds', carat: '4.8ct', origin: 'Colombia', cut: 'Emerald Cut', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_-2.jpg/960px-B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_-2.jpg' },
  { id: 3, name: 'Sunfire', type: 'Diamonds', carat: '6.5ct', origin: 'Botswana', cut: 'Radiant', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/One_carat_brilliant.jpg' },
  { id: 4, name: 'Blood Moon', type: 'Rubies', carat: '5.2ct', origin: 'Myanmar', cut: 'Cushion', img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Corundum-215330.jpg' },
  { id: 5, name: 'Pink Dawn', type: 'Diamonds', carat: '2.1ct', origin: 'Argyle', cut: 'Pear', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Aquamarine_P1000141.JPG/960px-Aquamarine_P1000141.JPG' },
  { id: 6, name: 'Azure Depths', type: 'Sapphires', carat: '8.9ct', origin: 'Madagascar', cut: 'Round', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Black_star_image.jpg' },
];

export function Gems() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredGems = activeTab === 'All' ? gems : gems.filter(g => g.type === activeTab);

  return (
    <PageTransition className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-32">
      <header className="mb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6 text-ivory">Loose Stones</h1>
        <p className="text-silver leading-relaxed text-sm md:text-base">
          Our vault contains the most meticulously sourced, ethically procured, and flawlessly cut gemstones. Each stone is an investment in nature's rarest accidents.
        </p>
      </header>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 border-b border-silver/10 pb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              "text-xs tracking-widest uppercase transition-colors relative pb-2",
              activeTab === cat ? "text-gold" : "text-silver hover:text-ivory"
            )}
          >
            {cat}
            {activeTab === cat && (
              <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold" />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredGems.map((gem) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            key={gem.id}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-square mb-6 bg-charcoal rounded-sm glint-effect">
              <img src={gem.img} alt={gem.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            </div>
            <div>
              <h4 className="text-xl text-ivory mb-1 font-serif group-hover:text-gold transition-colors">{gem.name}</h4>
              <div className="flex justify-between items-center text-silver text-xs">
                <span>{gem.cut} • {gem.origin}</span>
                <span className="text-gold tracking-widest">{gem.carat}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageTransition>
  );
}
