import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';

const collections = [
  {
    title: 'The Celestial Orbit',
    desc: 'Inspired by the infinite dance of galaxies, featuring floating diamonds set in invisible platinum structures.',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Echoes of Antiquity',
    desc: 'A modern revival of Byzantine grandeur. Heavy 22k gold cuffs embedded with unpolished, raw emeralds and sunken rubies.',
    img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Bridal Resonance',
    desc: 'Bespoke engagements designed around the intrinsic geometry of the center stone. Architecture in miniature.',
    img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1200&auto=format&fit=crop'
  }
];

export function Jewelry() {
  return (
    <PageTransition className="pt-32 pb-32">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-24 md:flex justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl mb-6 text-ivory">Bespoke Creations</h1>
            <p className="text-silver leading-relaxed text-sm md:text-base">
              Beyond the gem itself lies the architecture of the setting. Our master jewelers spend hundreds of hours engineering pieces that disappear, leaving only light and form.
            </p>
          </div>
          <div className="mt-8 md:mt-0 pb-2">
             <span className="text-gold tracking-widest text-xs uppercase border-b border-gold/30 pb-1">Commission a Piece</span>
          </div>
        </header>

        {/* Editorial Layout */}
        <div className="space-y-32">
          {collections.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-3/5 overflow-hidden glint-effect">
                <img src={col.img} alt={col.title} className="w-full aspect-[4/3] md:aspect-[16/10] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="w-full md:w-2/5 p-4 md:p-8">
                <span className="text-gold tracking-widest text-xs uppercase mb-4 block">Chapter 0{idx + 1}</span>
                <h3 className="text-3xl md:text-4xl text-ivory mb-6 font-serif">{col.title}</h3>
                <p className="text-silver text-sm leading-relaxed mb-8">{col.desc}</p>
                <button className="text-xs uppercase tracking-widest border border-silver/30 px-6 py-3 hover:border-gold hover:text-gold transition-colors">
                  Explore Collection
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
