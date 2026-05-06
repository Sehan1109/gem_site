import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, MapPin, Star, Mail } from 'lucide-react';

const SELLERS = [
  { id: 1, name: "Colombo Gem Exchange", type: "Heritage Private Dealer", location: "Colombo, Sri Lanka", rating: 5.0, verified: true, desc: "A premier Sri Lankan house offering elite Ceylon sapphires, padparadscha, and heritage jewelry with full provenance.", specialties: ["Ceylon Sapphires", "Padparadscha"], img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Ratnapura Source House", type: "Direct Miner & Cutter", location: "Ratnapura, Sri Lanka", rating: 4.9, verified: true, desc: "Direct access to Ratnapura's finest sapphires, rubies, and cat's eye chrysoberyl, hand-selected by third-generation gem merchants.", specialties: ["Ratnapura Rubies", "Ceylon Sapphires"], img: "/Image of jewelry.png" },
  { id: 3, name: "Galle Heritage Atelier", type: "Auction & Estate Broker", location: "Galle, Sri Lanka", rating: 4.8, verified: true, desc: "Curating rare Sri Lankan treasure jewelry, antique pearl necklaces, and museum-quality jewels from the island's finest collections.", specialties: ["Vintage Sri Lankan Jewelry", "Pearl Jewelry"], img: "/Image of earrings.png" },
];

export function SellerProfile() {
  const { id } = useParams();
  const seller = SELLERS.find(s => s.id === Number(id)) || SELLERS[0];

  return (
    <div className="bg-surface min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link to="/sellers" className="inline-flex items-center space-x-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Network</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1 space-y-8">
            <div className="bg-surface-light border border-white/10 p-8 text-center sticky top-32">
               <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/20">
                  <img src={seller.img} alt={seller.name} className="w-full h-full object-cover" />
               </div>
               <h1 className="text-2xl font-serif mb-2">{seller.name}</h1>
               <p className="text-gold text-xs uppercase tracking-widest mb-4">{seller.type}</p>
               
               <div className="flex items-center justify-center space-x-2 text-white/50 mb-6">
                 <MapPin className="w-4 h-4" />
                 <span className="text-sm">{seller.location}</span>
               </div>
               
               <div className="flex justify-center items-center space-x-4 mb-8">
                 {seller.verified && (
                   <div className="flex items-center space-x-1 text-xs">
                     <ShieldCheck className="w-4 h-4 text-green-500" />
                     <span>Verified</span>
                   </div>
                 )}
                 <div className="flex items-center space-x-1 text-xs">
                   <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                   <span>{seller.rating}</span>
                 </div>
               </div>
               
               <Link to={`/contact?seller=${seller.id}`} className="flex items-center justify-center space-x-2 w-full py-3 bg-white text-black hover:bg-gold hover:text-white transition-colors rounded-full text-xs uppercase tracking-widest font-semibold">
                  <Mail className="w-4 h-4" />
                  <span>Contact House</span>
               </Link>
            </div>
          </motion.div>
          
          {/* Main Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <div className="mb-16">
              <h2 className="text-4xl font-light mb-6">About the House</h2>
              <p className="text-white/60 font-light leading-relaxed text-lg mb-8">
                {seller.desc}
              </p>
              
              <h3 className="text-sm uppercase tracking-widest text-white/50 mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {seller.specialties.map(spec => (
                   <span key={spec} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/80 bg-white/5">
                     {spec}
                   </span>
                ))}
              </div>
            </div>
            
            <div>
               <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                 <h2 className="text-2xl font-light">Current Portfolio</h2>
                 <span className="text-xs uppercase tracking-widest text-gold text-luxury">Verified Offerings</span>
               </div>
               
               {/* Just a mockup of their inventory */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="border border-white/5 bg-surface-light group cursor-pointer">
                    <div className="aspect-[4/3] bg-black overflow-hidden relative">
                       <div className="absolute inset-0 flex items-center justify-center text-white/20 uppercase tracking-widest">
                          Protected View
                       </div>
                       <img src="/Image of jewelry.png" alt="item" className="w-full h-full object-cover opacity-50 dark:mix-blend-lighten group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="p-4">
                       <h4 className="font-serif text-lg mb-1 group-hover:text-gold transition-colors">Exclusive Private Piece</h4>
                       <p className="text-white/40 text-xs uppercase tracking-widest">Inquire for details</p>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
