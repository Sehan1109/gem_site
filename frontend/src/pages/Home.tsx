import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import img01 from '../public/gems.jpg';

export function Home () {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="-mt-24" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0 z-0">
          <img
            src={img01}
            alt="Luxury Gemstone Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10" />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <span className="px-4 py-1 border border-white/20 rounded-full text-luxury backdrop-blur-sm bg-white/5">
              The Private Collection
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl mb-6 text-white"
          >
            Rare & <br />
            <span className="italic text-white/90">Exceptional</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/60 max-w-xl mx-auto text-lg md:text-xl font-light mb-12"
          >
            Discover the world's most exclusive marketplace for investment-grade gemstones and high jewelry creations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/marketplace" className="px-10 py-4 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-500 rounded-full text-sm uppercase tracking-widest font-semibold w-full sm:w-auto">
              Enter Marketplace
            </Link>
            <Link to="/sellers" className="px-10 py-4 border border-white/30 text-white hover:bg-white/10 transition-colors duration-500 rounded-full text-sm uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Find Traders</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-luxury text-[10px] mb-4">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Featured Gems Carousel (Simplified Grid for now) */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Curated Acquisitions</h2>
              <p className="text-white/50 font-light max-w-md">Exceptionally rare pieces, recently verified and added to our private network.</p>
            </div>
            <Link to="/marketplace" className="hidden md:flex items-center space-x-2 text-luxury hover:text-white transition-colors border-b border-white/20 pb-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4 relative -top-[1px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Royal Blue Sapphire", origin: "Kashmir", carat: "4.52", price: "Upon Request", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
              { id: 2, name: "Pigeon Blood Ruby", origin: "Burma", carat: "2.14", price: "Inquire", img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Rough_Diamond.jpg" },
              { id: 3, name: "Flawless Yellow Diamond", origin: "South Africa", carat: "10.05", price: "Private Sale", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" }
            ].map((gem, i) => (
              <motion.div
                key={gem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-light">
                  <Link to={`/gem/${gem.id}`}>
                    <img
                      src={gem.img}
                      alt={gem.name}
                      className="w-full h-full object-cover aspect-[3/4] transition-transform duration-1000 group-hover:scale-110 dark:opacity-80 opacity-100 dark:mix-blend-lighten"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent pointer-events-none transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link to={`/gem/${gem.id}`} className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full text-center">
                      View Piece
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-1 group-hover:text-gold transition-colors">
                      <Link to={`/gem/${gem.id}`}>{gem.name}</Link>
                    </h3>
                    <p className="text-white/50 text-sm font-light mb-2">{gem.origin} &middot; {gem.carat} ct</p>
                  </div>
                  <span className="text-luxury text-[10px]">{gem.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-y border-white/5 bg-surface-mid">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="px-6 flex flex-col items-center pt-8 md:pt-0"
            >
              <ShieldCheck className="w-8 h-8 text-white/50 mb-6" strokeWidth={1} />
              <h4 className="font-serif text-xl mb-3">Verified Authenticity</h4>
              <p className="text-white/40 font-light text-sm">Every stone is accompanied by major laboratory certification (GIA, Gübelin, SSEF).</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="px-6 flex flex-col items-center pt-8 md:pt-0"
            >
              <Gem className="w-8 h-8 text-white/50 mb-6" strokeWidth={1} />
              <h4 className="font-serif text-xl mb-3">Direct Trader Access</h4>
              <p className="text-white/40 font-light text-sm">Connect directly with vetted international dealers, miners, and private collectors.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="px-6 flex flex-col items-center pt-8 md:pt-0"
            >
              <Star className="w-8 h-8 text-white/50 mb-6" strokeWidth={1} />
              <h4 className="font-serif text-xl mb-3">Discrete Transactions</h4>
              <p className="text-white/40 font-light text-sm">Secure inquiry and negotiation platform maintaining total privacy for high-net-worth clients.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discovery CTA */}
      <section className="relative py-40 overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity grayscale"
          style={{ backgroundImage: `url(${img01})` }}
        />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-8 leading-tight"
          >
            Locate exceptional pieces <span className="italic block text-white/80">near you.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg mb-12 max-w-xl mx-auto font-light"
          >
            Use our interactive discovery map to connect with verified sellers and view rare collections in your immediate vicinity or next travel destination.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/map" className="inline-block px-12 py-5 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-500 rounded-full text-sm uppercase tracking-widest font-semibold shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Open Map Discovery
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
