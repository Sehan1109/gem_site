import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={containerRef} className="bg-surface">
      {/* Hero section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center -mt-24">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=2600&auto=format&fit=crop" 
            alt="Artisan Jeweler" 
            className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-75"
          />
        </motion.div>
        
        <div className="relative z-10 text-center container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-luxury text-white mb-6 block">Our Heritage</span>
            <h1 className="text-5xl md:text-8xl text-white font-light mb-8 max-w-4xl mx-auto leading-tight">
              A Legacy of <br /><span className="italic">Uncompromising</span> Standards
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-32 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl mb-8">The Private Network</h2>
            <div className="space-y-6 text-white/60 font-light leading-relaxed">
              <p>
                Founded on the principles of trust, discretion, and an unyielding commitment to exceptional quality, Aetheria Gems was established to connect the world's most distinguished buyers with rare and historically significant gemstones.
              </p>
              <p>
                We do not hold inventory. Instead, we provide a secure, authenticated framework for transactions between vetted private collectors, artisanal sustainable miners, and master jewelers across the globe.
              </p>
              <p>
                Every listing on our platform undergoes a rigorous pre-approval process, requiring certification from premier gemological laboratories (such as GIA, Gübelin, or SSEF) and verification of the seller's institutional standing.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-surface-light"
          >
            <img 
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" 
              alt="Gem Examination" 
              className="absolute inset-0 w-full h-full object-cover dark:mix-blend-lighten dark:opacity-80 opacity-100"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-32 bg-surface-mid border-t border-white/5 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-luxury mb-8 block">Our Philosophy</span>
          <h3 className="font-serif text-3xl md:text-5xl leading-relaxed font-light text-white/90">
            "True luxury is found in absolute rarity and flawless provenance. We do not sell gems; we curate legacies."
          </h3>
          <div className="w-[1px] h-20 bg-white/20 mx-auto mt-16"></div>
          <div className="mt-16 flex justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-500 rounded-full text-sm uppercase tracking-widest font-semibold flex items-center space-x-2">
              Book a Private Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
