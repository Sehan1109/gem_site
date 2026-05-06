import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Heart, Share2, Info } from 'lucide-react';

const JEWELRY_MOCK = [
  { id: 1, name: "The Imperial Emerald Drop", description: "Flawless 12-carat Colombian emerald suspended from a cascade of D-flawless diamonds.", price: "Upon Request", category: "Necklace", sellerId: 3, img: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Radiant Pink Diamond", description: "Extremely rare 3.14-carat Argyle pink diamond set in platinum and 18k rose gold.", price: "Private Sale", category: "Ring", sellerId: 3, img: "https://images.unsplash.com/photo-1481980235850-66e47651e431?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Kashmir Sapphire Suite", description: "Matched pair of unheated Kashmir sapphires, 8.2 carats total, with pear-cut diamond crowns.", price: "Inquire", category: "Earrings", sellerId: 1, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Art Deco Ruby Bracelet", description: "Original 1925 design featuring over 40 carats of square-cut Burmese rubies.", price: "Upon Request", category: "Bracelet", sellerId: 2, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
];

export function JewelryDetails() {
  const { id } = useParams();
  const item = JEWELRY_MOCK.find(g => g.id === Number(id)) || JEWELRY_MOCK[0];

  return (
    <div className="bg-surface min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link to="/jewelry" className="inline-flex items-center space-x-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Masterpieces</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="aspect-[4/5] bg-surface-light relative border border-white/5 overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover dark:mix-blend-lighten dark:opacity-90 opacity-100" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex-1 py-3 border border-white/10 hover:border-gold transition-colors text-xs uppercase tracking-widest text-white/80 flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Save Piece</span>
              </button>
              <button className="flex-1 py-3 border border-white/10 hover:border-white transition-colors text-xs uppercase tracking-widest text-white/80 flex items-center justify-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-luxury text-gold">{item.category}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-light mb-6">{item.name}</h1>
              <p className="text-3xl font-light text-white/80 border-b border-white/10 pb-8">{item.price}</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <Info className="w-5 h-5 text-white/40 mt-1" />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/70 mb-2">The Creation</h4>
                  <p className="text-white/50 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                 <h4 className="font-serif text-xl text-white mb-2 underline decoration-gold/50 underline-offset-4">Provenance</h4>
                 <p className="text-white/60 font-light text-sm">
                   Accompanied by original maker's mark and complete lineage of ownership. Includes grading reports for all major center stones.
                 </p>
              </div>
            </div>

            <div className="bg-surface-light p-6 border border-white/10 mt-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span className="text-sm uppercase tracking-widest">Verified Haute Joaillerie</span>
                </div>
                <Link to={`/seller/${item.sellerId}`} className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1">
                  View House
                </Link>
              </div>
              <Link to={`/contact?item=${item.id}&type=jewelry`} className="block w-full py-4 bg-white text-black text-center hover:bg-gold hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest font-semibold">
                Inquire About This Masterpiece
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
