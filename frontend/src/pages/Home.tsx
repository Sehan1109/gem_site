import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';

export function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-obsidian">
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0"
        >
          {/* Abstract dark luxury gem image */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian z-10" />
          <img 
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic luxury gem reflection" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl text-ivory mb-6 tracking-tight text-balance"
          >
            Unearth the <br/><span className="text-gold italic">Extraordinary.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-silver tracking-[0.3em] uppercase text-xs md:text-sm max-w-lg mx-auto"
          >
            The world's most exclusive gems & bespoke creations
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <span className="text-silver/50 tracking-widest text-[10px] uppercase mb-4">Discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* Featured Statement */}
      <section className="py-32 md:py-48 px-6 bg-obsidian">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl leading-tight text-ivory mb-12"
          >
            "A gemstone is not merely formed by the Earth; it is waiting to be awakened by a master's touch."
          </motion.h2>
          <Link to="/heritage" className="text-gold uppercase tracking-[0.2em] text-xs border-b border-gold/30 pb-1 hover:border-gold transition-colors inline-block">
            Discover Our Heritage
          </Link>
        </div>
      </section>

      {/* Curated Selections */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-2xl md:text-4xl text-ivory">Curated Treasures</h3>
          <Link to="/gems" className="hidden md:block text-silver hover:text-gold uppercase tracking-widest text-xs transition-colors">
            View All Loose Stones
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden aspect-[3/4] mb-6 glint-effect">
              <img src="https://images.unsplash.com/photo-1599643477877-508b506dbb18?q=80&w=1000&auto=format&fit=crop" alt="The Crimson Heart Ruby" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl text-ivory mb-2">The Crimson Heart</h4>
                <p className="text-silver text-sm">Pigeon Blood Ruby, 8.42ct</p>
              </div>
              <span className="text-gold tracking-widest text-xs uppercase">Enquire</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer md:mt-24"
          >
            <div className="overflow-hidden aspect-[3/4] mb-6 glint-effect">
              <img src="https://images.unsplash.com/photo-1573408301145-b98f24b162f4?q=80&w=1000&auto=format&fit=crop" alt="Ocean Deep Sapphire" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl text-ivory mb-2">Ocean Deep</h4>
                <p className="text-silver text-sm">Royal Blue Sapphire, 12.05ct</p>
              </div>
              <span className="text-gold tracking-widest text-xs uppercase">Enquire</span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
