import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Heart, Share2, Info } from 'lucide-react';

const MOCK_GEMS = [
  { id: 1, name: "Ceylon Blue Sapphire", origin: "Sri Lanka", carat: "5.12", price: "Upon Request", cert: "Gübelin", type: "Sapphire", color: "Blue", sellerId: 1, img: "/Sapphire.png", desc: "An exceptional Ceylon sapphire with the hallmark silky blue hue and clarity sourced from Sri Lanka's historic gem fields." },
  { id: 2, name: "Padparadscha Sapphire", origin: "Sri Lanka", carat: "3.24", price: "Private Sale", cert: "SSEF", type: "Sapphire", color: "Pink-Orange", sellerId: 2, img: "/Yellow Diamond.png", desc: "A royal Sri Lankan padparadscha, prized for its lotus-blush harmony of pink and orange and exceptional transparency." },
  { id: 3, name: "Ratnapura Ruby", origin: "Sri Lanka", carat: "4.05", price: "Inquire", cert: "GIA", type: "Ruby", color: "Red", sellerId: 2, img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Rough_Diamond.jpg", desc: "A vivid Sri Lankan ruby from Ratnapura, noted for rich saturation, fine polish, and strong trader provenance." },
  { id: 4, name: "Sri Lankan White Sapphire", origin: "Sri Lanka", carat: "6.20", price: "Upon Request", cert: "GIA", type: "Sapphire", color: "White", sellerId: 1, img: "/Emerald1.png", desc: "A clean, brilliant white sapphire from Sri Lanka, ideal for high jewelry and modern investment collections." },
  { id: 5, name: "Golden Cat's Eye", origin: "Sri Lanka", carat: "3.80", price: "Private Sale", cert: "Gübelin", type: "Chrysoberyl", color: "Golden", sellerId: 1, img: "/Yellow Diamond.png", desc: "A rare Sri Lankan cat's eye chrysoberyl showing sharp asterism and polished brilliance." },
  { id: 6, name: "Ceylon Pink Spinel", origin: "Sri Lanka", carat: "2.15", price: "Inquire", cert: "GIA", type: "Spinel", color: "Pink", sellerId: 3, img: "/Ruby.png", desc: "A vivid pink spinel from Sri Lanka, prized for its bright saturation and fine gemstone quality." },
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
