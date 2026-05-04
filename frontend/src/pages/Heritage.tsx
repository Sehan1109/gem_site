import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';

export function Heritage() {
  return (
    <PageTransition className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
         <h1 className="text-4xl md:text-6xl mb-6 text-ivory">Our Heritage</h1>
         <p className="text-silver text-sm md:text-base leading-relaxed">
            Founded in 1912 by Master Lapidary Elias Aurelia, our maison has spent over a century sourcing the unreachable and cutting the unyielding. Here is our story, told in stones.
         </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-silver/10 hidden md:block" />

        <div className="space-y-24">
          {[
            { year: '1912', title: 'The First Atilier', desc: 'Elias Aurelia opens a small workshop in Geneva, focusing entirely on re-cutting vintage diamonds to unlock their hidden fire.' },
            { year: '1948', title: 'The Royal Commission', desc: 'Aurelia is chosen to set the legendary "Star of the East" sapphire for a European monarch, cementing our status in high luxury.' },
            { year: '1982', title: 'Unearthing Origins', desc: 'The maison begins direct partnerships with ethical mines in Colombia and Sri Lanka, pioneering transparent sourcing before it became an industry standard.' },
            { year: 'Present', title: 'Modern Architecture', desc: 'Today, the fourth generation of the Aurelia family pushes the boundaries of metallurgical engineering and sculptural jewelry design.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center justify-between gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-5/12 hidden md:block" />
              
              {/* Center Dot */}
              <div className="hidden md:flex w-12 h-12 bg-obsidian border border-gold rounded-full items-center justify-center z-10">
                <div className="w-2 h-2 bg-gold border rounded-full" />
              </div>

              <div className={`w-full md:w-5/12 bg-charcoal p-8 md:p-12 border border-silver/5`}>
                <span className="text-gold text-sm tracking-widest font-mono block mb-4">{item.year}</span>
                <h3 className="text-2xl font-serif text-ivory mb-4">{item.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
