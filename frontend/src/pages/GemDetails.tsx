import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Heart, Share2, Info } from 'lucide-react';

const MOCK_GEMS = [
  { id: 1, name: "Royal Blue Sapphire", origin: "Kashmir", carat: "4.52", price: "Upon Request", cert: "Gübelin", type: "Sapphire", color: "Blue", sellerId: 1, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop", desc: "An exceptionally rare, unheated Royal Blue Sapphire from the legendary mines of Kashmir. This stone exhibits the classic 'velvety' appearance unique to Kashmir sapphires." },
  { id: 2, name: "Pigeon Blood Ruby", origin: "Burma", carat: "2.14", price: "Private Sale", cert: "SSEF", type: "Ruby", color: "Red", sellerId: 2, img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Rough_Diamond.jpg", desc: "A vibrant pigeon blood ruby showing strong fluorescence and rich saturation, sourced directly from the Mogok Valley." },
  { id: 3, name: "Flawless Yellow Diamond", origin: "South Africa", carat: "10.05", price: "Inquire", cert: "GIA", type: "Diamond", color: "Yellow", sellerId: 3, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop", desc: "A museum-quality Fancy Vivid Yellow diamond with Internally Flawless clarity. Expertly step-cut by master artisans." },
  { id: 4, name: "Colombian Emerald", origin: "Muzo", carat: "6.20", price: "Upon Request", cert: "CDTEC", type: "Emerald", color: "Green", sellerId: 1, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop", desc: "A magnificent Muzo emerald with typical jardine but unparalleled color saturation." },
  { id: 5, name: "Padparadscha Sapphire", origin: "Sri Lanka", carat: "3.80", price: "Private Sale", cert: "Gübelin", type: "Sapphire", color: "Pink-Orange", sellerId: 2, img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=1000&auto=format&fit=crop", desc: "The elusive padparadscha, displaying a perfect balance of pink and orange hues resembling a tropical lotus blossom." },
  { id: 6, name: "Paraiba Tourmaline", origin: "Brazil", carat: "1.95", price: "Inquire", cert: "GIA", type: "Tourmaline", color: "Neon Blue", sellerId: 1, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop", desc: "A highly sought-after neon copper-bearing tourmaline from the original Brazilian strikes." },
];

export function GemDetails() {
  const { id } = useParams();
  const gem = MOCK_GEMS.find(g => g.id === Number(id)) || MOCK_GEMS[0];

  return (
    <div className="bg-surface min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link to="/marketplace" className="inline-flex items-center space-x-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="aspect-[3/4] bg-surface-light relative border border-white/5 overflow-hidden">
              <img src={gem.img} alt={gem.name} className="w-full h-full object-cover dark:mix-blend-lighten dark:opacity-90 opacity-100" />
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

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-luxury text-gold">{gem.type}</span>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-luxury text-white/50">{gem.origin}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-light mb-6">{gem.name}</h1>
              <p className="text-3xl font-light text-white/80 border-b border-white/10 pb-8">{gem.price}</p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <Info className="w-5 h-5 text-white/40 mt-1" />
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/70 mb-2">Description</h4>
                  <p className="text-white/50 font-light leading-relaxed">{gem.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Weight</span>
                  <span className="text-lg font-light">{gem.carat} Carats</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Color Grade</span>
                  <span className="text-lg font-light">{gem.color}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Origin</span>
                  <span className="text-lg font-light">{gem.origin}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Documentation</span>
                  <span className="text-lg font-light">{gem.cert} Certificate</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-light p-6 border border-white/10 mt-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span className="text-sm uppercase tracking-widest">Verified Seller</span>
                </div>
                <Link to={`/seller/${gem.sellerId}`} className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1">
                  View Profile
                </Link>
              </div>
              <p className="text-white/40 text-sm font-light mb-6">
                This piece is offered by a vetted institutional seller. Inquiries will be securely routed through our private concierge.
              </p>
              <Link to={`/contact?item=${gem.id}&type=gem`} className="block w-full py-4 bg-white text-black text-center hover:bg-gold hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest font-semibold">
                Inquire About This Piece
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
