import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Star, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SELLERS = [
  { 
    id: 1, 
    name: "Vaults of Geneva", 
    type: "Heritage Private Dealer", 
    location: "Geneva, Switzerland", 
    rating: 5.0, 
    verified: true, 
    desc: "A highly discrete network of European dealers specializing in unheated colored stones and flawless diamonds. Over 40 years of trusted acquisitions.", 
    specialties: ["Colored Diamonds", "Kashmir Sapphires"],
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "The Mogok Source", 
    type: "Direct Miner & Cutter", 
    location: "Bangkok, Thailand", 
    rating: 4.9, 
    verified: true, 
    desc: "Unparalleled direct access to the world's finest Pigeon Blood rubies and Royal Blue sapphires straight from trusted artisanal mines in Southeast Asia.", 
    specialties: ["Burmese Rubies", "Padparadscha"],
    img: '/Image of jewelry.png'
  },
  { 
    id: 3, 
    name: "Fifth Avenue Exchange", 
    type: "Auction & Estate Broker", 
    location: "New York, USA", 
    rating: 4.8, 
    verified: true, 
    desc: "Curating rare vintage, Art Deco, and estate jewelry alongside investment-grade loose diamonds from major global auctions.", 
    specialties: ["Estate Jewelry", "D-Flawless Diamonds"],
    img: '/Image of earrings.png'
  },
];

export function Sellers() {
  return (
    <div className="bg-surface">
      {/* Header */}
      <section className="pt-32 pb-20 border-b border-white/10 bg-surface-mid">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-luxury text-white mb-6 block">The Private Network</span>
            <h1 className="text-5xl md:text-7xl text-white font-light mb-8">
              Curated <span className="italic">Traders</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Every seller on Aetheria Gems undergoes severe scrutiny. We connect our clients only with institutional buyers, heritage dealers, and verified direct source operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sellers List */}
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="space-y-24">
          {SELLERS.map((seller, i) => (
            <motion.div 
              key={seller.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group"
            >
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] overflow-hidden bg-surface-light border border-white/10 relative">
                  <img 
                    src={seller.img} 
                    alt={seller.name} 
                    className="w-full h-full object-cover dark:opacity-60 opacity-100 dark:mix-blend-lighten group-hover:scale-105 transition-transform duration-1000"
                  />
                  {seller.verified && (
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      <span className="text-[10px] uppercase tracking-widest text-white">Verified House</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm flex items-center space-x-2">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-[10px] tracking-widest text-white">{seller.rating} Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-luxury text-white/50">{seller.type}</span>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="flex items-center space-x-1 text-white/50">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs uppercase tracking-widest">{seller.location}</span>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-light mb-6 group-hover:text-gold transition-colors duration-500">
                  {seller.name}
                </h2>
                
                <p className="text-white/60 font-light leading-relaxed mb-8 text-lg max-w-2xl">
                  {seller.desc}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 mb-10 border-t border-white/10 pt-8">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">Specialties</span>
                    <div className="flex flex-col space-y-1">
                      {seller.specialties.map(spec => (
                        <span key={spec} className="text-sm font-light text-white/80">{spec}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-2">Active Listings</span>
                    <span className="text-sm font-light text-white/80">34 Active Pieces</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <Link to={`/seller/${seller.id}`} className="px-8 py-3 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-300 rounded-full text-xs uppercase tracking-widest font-semibold inline-block text-center cursor-pointer">
                    View Portfolio
                  </Link>
                  <a href="#" className="hidden sm:flex text-white/50 hover:text-white transition-colors items-center space-x-2 text-xs uppercase tracking-widest">
                    <ExternalLink className="w-4 h-4" />
                    <span>External Audit</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 pt-20 border-t border-white/10 text-center max-w-2xl mx-auto">
          <ShieldCheck className="w-8 h-8 text-white/30 mx-auto mb-6" />
          <h3 className="text-2xl font-light mb-4">Are you an institutional seller?</h3>
          <p className="text-white/50 font-light mb-8">
            Aetheria Gems selectively invites distinguished dealers and miners to join our private network.
          </p>
          <Link to="/contact?reason=selling" className="text-luxury border-b border-white hover:text-gold hover:border-gold transition-colors flex justify-center items-center space-x-2 mx-auto inline-flex pb-1">
            <span>Apply for Verification</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
