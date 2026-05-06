import { Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <Gem className="w-6 h-6 text-white group-hover:text-gold transition-colors duration-300" strokeWidth={1} />
              <span className="font-serif text-xl tracking-widest uppercase text-white font-light">Aetheria</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs font-light">
              The world's most exclusive marketplace for rare gemstones and high jewelry. Discover the extraordinary.
            </p>
          </div>
          
          <div>
            <h4 className="text-luxury mb-6 text-white text-xs">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/marketplace" className="text-white/60 hover:text-white text-sm transition-colors font-light">The Marketplace</Link></li>
              <li><Link to="/jewelry" className="text-white/60 hover:text-white text-sm transition-colors font-light">High Jewelry</Link></li>
              <li><Link to="/sellers" className="text-white/60 hover:text-white text-sm transition-colors font-light">Curated Sellers</Link></li>
              <li><Link to="/map" className="text-white/60 hover:text-white text-sm transition-colors font-light">Location Discovery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-luxury mb-6 text-white text-xs">House</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-white text-sm transition-colors font-light">Our Heritage</Link></li>
              <li><Link to="/news" className="text-white/60 hover:text-white text-sm transition-colors font-light">Editorial News</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors font-light">Private Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-luxury mb-6 text-white text-xs">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4 font-light">Sign up to receive news about the rarest acquisitions.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none focus:outline-none text-white text-sm w-full font-light placeholder:text-white/30"
              />
              <button className="text-luxury text-white hover:text-gold transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Aetheria Gems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Trust & Authenticity</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
