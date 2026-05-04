import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-charcoal px-6 md:px-12 py-20 mt-32 border-t border-silver/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl tracking-widest font-serif text-ivory mb-6 block">
            AURELIA
          </Link>
          <p className="text-silver text-sm max-w-sm leading-relaxed mb-8">
            Exquisitely crafted bespoke jewelry and the world's finest, rarest gemstones, for those who demand the extraordinary.
          </p>
        </div>
        
        <div>
          <h4 className="text-gold tracking-widest uppercase text-xs mb-6 font-semibold">Collections</h4>
          <ul className="space-y-4">
            <li><Link to="/gems" className="text-silver hover:text-ivory text-sm transition-colors">Loose Stones</Link></li>
            <li><Link to="/jewelry" className="text-silver hover:text-ivory text-sm transition-colors">High Jewelry</Link></li>
            <li><Link to="/jewelry" className="text-silver hover:text-ivory text-sm transition-colors">Bridal & Engagement</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold tracking-widest uppercase text-xs mb-6 font-semibold">Maison</h4>
          <ul className="space-y-4">
            <li><Link to="/heritage" className="text-silver hover:text-ivory text-sm transition-colors">Our Heritage</Link></li>
            <li><Link to="/journal" className="text-silver hover:text-ivory text-sm transition-colors">The Journal</Link></li>
            <li><Link to="/contact" className="text-silver hover:text-ivory text-sm transition-colors">Boutiques</Link></li>
            <li><Link to="/contact" className="text-silver hover:text-ivory text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-silver/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-silver text-xs">© 2026 Aurelia Gems. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-silver hover:text-ivory text-xs transition-colors">Instagram</a>
          <a href="#" className="text-silver hover:text-ivory text-xs transition-colors">Pinterest</a>
          <a href="#" className="text-silver hover:text-ivory text-xs transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
