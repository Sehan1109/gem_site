import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Contact() {
  const location = useLocation();
  const [subject, setSubject] = useState('acquisition');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reason = params.get('reason');
    const item = params.get('item');
    const type = params.get('type');
    const seller = params.get('seller');

    if (reason === 'selling') {
      setSubject('selling');
    }
    
    if (item && type) {
       setSubject('acquisition');
       setMessage(`I would like to inquire about the ${type} with ID #${item}. Please provide pricing and availability details.`);
    }

    if (seller) {
       setSubject('other');
       setMessage(`I would like to contact Seller #${seller} regarding their portfolio.`);
    }
  }, [location.search]);

  return (
    <div className="container mx-auto px-6 max-w-7xl pt-20 pb-32">
      <div className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl mb-6"
        >
          Private Consultation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/50 font-light max-w-2xl mx-auto"
        >
          Inquire about specific pieces, bespoke acquisition services, or scheduling a discrete viewing.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <h2 className="text-3xl font-light mb-8">Send an Inquiry</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-luxury text-white/50">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-gold py-2 outline-none text-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-luxury text-white/50">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-gold py-2 outline-none text-white transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-luxury text-white/50">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-gold py-2 outline-none text-white transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-luxury text-white/50">Subject of Inquiry</label>
              <select 
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 focus:border-gold py-2 outline-none text-white transition-colors appearance-none"
              >
                <option value="acquisition" className="bg-black text-white">Gemstone Acquisition</option>
                <option value="selling" className="bg-black text-white">Listing an Item</option>
                <option value="bespoke" className="bg-black text-white">Bespoke Jewelry Service</option>
                <option value="other" className="bg-black text-white">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-luxury text-white/50">Message</label>
              <textarea 
                rows={4} 
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 focus:border-gold py-2 outline-none text-white transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              onClick={(e) => {
                e.preventDefault();
                alert("Thank you. Our concierge will be in touch shortly.");
                setMessage('');
              }}
              className="px-10 py-4 bg-white text-black hover:bg-gold hover:text-white transition-colors duration-500 rounded-full text-sm uppercase tracking-widest font-semibold w-full md:w-auto"
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:pl-12 lg:border-l border-white/10">
          <h2 className="text-3xl font-light mb-12">Direct Contact</h2>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="p-4 rounded-full border border-white/10 bg-white/5">
                <Phone className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2 text-white">Global Concierge</h3>
                <p className="text-white/50 font-light mb-4">Available 24/7 for our distinguished clients.</p>
                <a href="tel:+41000000000" className="text-gold hover:text-white transition-colors text-xl font-light">+41 22 000 0000</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="p-4 rounded-full border border-white/10 bg-white/5">
                <MessageSquare className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2 text-white">Secure Messaging</h3>
                <p className="text-white/50 font-light mb-4">Encrypted communication via WhatsApp for immediate inquiries.</p>
                <a href="https://wa.me/94770000000" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors text-sm uppercase tracking-widest border border-gold px-6 py-2 rounded-full inline-block mt-2">Open WhatsApp</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 rounded-full border border-white/10 bg-white/5">
                <MapPin className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2 text-white">Corporate Headquarters</h3>
                <p className="text-white/50 font-light mb-4 text-sm leading-relaxed">
                  No. 8, Marine Drive<br />
                  Colombo 2<br />
                  Sri Lanka
                </p>
                <span className="text-luxury text-white/30 text-[10px]">Strictly by appointment only</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
