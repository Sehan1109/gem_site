import { PageTransition } from '../components/PageTransition';

export function Contact() {
  return (
    <PageTransition className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Contact Form */}
        <div>
          <h1 className="text-4xl md:text-6xl text-ivory mb-6 font-serif">Private Viewings</h1>
          <p className="text-silver text-sm leading-relaxed mb-12 max-w-md">
            Our master jewelers and gemologists are available for private consultations. Please enclose your details to request an appointment at a boutique or a secure private location.
          </p>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-silver text-xs uppercase tracking-widest mb-2 font-mono">First Name</label>
                <input type="text" className="bg-transparent border-b border-silver/30 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="flex flex-col">
                <label className="text-silver text-xs uppercase tracking-widest mb-2 font-mono">Last Name</label>
                <input type="text" className="bg-transparent border-b border-silver/30 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-silver text-xs uppercase tracking-widest mb-2 font-mono">Email</label>
              <input type="email" className="bg-transparent border-b border-silver/30 py-3 text-ivory focus:outline-none focus:border-gold transition-colors" />
            </div>

            <div className="flex flex-col">
              <label className="text-silver text-xs uppercase tracking-widest mb-2 font-mono">Area of Interest</label>
              <select className="bg-transparent border-b border-silver/30 py-3 text-ivory focus:outline-none focus:border-gold transition-colors appearance-none">
                <option className="bg-charcoal">Loose Gemstones</option>
                <option className="bg-charcoal">High Jewelry Commission</option>
                <option className="bg-charcoal">Bridal</option>
                <option className="bg-charcoal">Other Inquiry</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-silver text-xs uppercase tracking-widest mb-2 font-mono">Message (Optional)</label>
              <textarea rows={3} className="bg-transparent border-b border-silver/30 py-3 text-ivory focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="text-xs uppercase tracking-widest border border-gold text-gold px-10 py-4 hover:bg-gold hover:text-obsidian transition-colors w-full md:w-auto">
              Request Appointment
            </button>
          </form>
        </div>

        {/* Location Info / Map Placeholder */}
        <div className="bg-charcoal p-8 md:p-16 flex flex-col justify-center relative overflow-hidden border border-silver/5">
          <div className="absolute top-0 right-0 p-8 text-6xl text-silver/5 font-serif select-none">
            GENEVA
          </div>
          
          <h3 className="text-gold tracking-widest uppercase text-xs mb-8">Headquarters & Salòn</h3>
          <p className="text-2xl text-ivory font-serif mb-4">Maison Aurelia</p>
          <p className="text-silver text-sm leading-relaxed mb-8 font-mono">
            Rue du Rhône 42<br/>
            1204 Geneva<br/>
            Switzerland
          </p>
          
          <div className="space-y-4">
            <p className="flex items-center gap-4 border-b border-silver/10 pb-4">
              <span className="text-gold text-xs uppercase tracking-widest">Phone</span>
              <span className="text-ivory font-mono text-sm">+41 22 555 0192</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="text-gold text-xs uppercase tracking-widest">Email</span>
              <span className="text-ivory font-mono text-sm">concierge@aurelia-gems.com</span>
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-silver/10">
            <h4 className="text-ivory font-serif mb-4">Other Boutiques</h4>
            <div className="grid grid-cols-2 gap-4 text-silver font-mono text-xs">
              <p>Place Vendôme, Paris</p>
              <p>Bond Street, London</p>
              <p>Fifth Avenue, New York</p>
              <p>Ginza, Tokyo</p>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
