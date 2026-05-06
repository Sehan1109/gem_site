import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NEWS_ARTICLES = [
  { id: 1, title: "Sri Lanka Padparadscha Market Hits New High", summary: "Demand for rare Sri Lankan padparadscha sapphires is surging among collectors seeking luminous pink-orange stones with certified provenance.", date: "May 2, 2026", category: "Market Insight", img: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Ratnapura Mining Season: 2026 Quality Outlook", summary: "The new harvest promises a strong run of Ceylon sapphires and rubies, with local cutters preparing to bring Sri Lanka's finest stones to market.", date: "April 28, 2026", category: "Origin Report", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Heritage Sri Lankan Jewelry Trends for Private Collectors", summary: "An overview of the rising interest in bespoke island-made sapphire and pearl pieces among international high-net-worth buyers.", date: "April 15, 2026", category: "Authentication", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop" },
];

export function News() {
  return (
    <div className="bg-surface min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="border-b border-white/10 pb-12 mb-16">
           <h1 className="text-5xl md:text-7xl font-light mb-6">Editorial & <span className="italic">Insight</span></h1>
           <p className="text-white/50 text-xl font-light max-w-2xl">Market analysis, authentic origin reporting, and private collecting strategies for high-net-worth individuals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="group">
             <div className="aspect-[4/3] bg-surface-light overflow-hidden mb-6 relative border border-white/5">
                <img src={NEWS_ARTICLES[0].img} alt={NEWS_ARTICLES[0].title} className="w-full h-full object-cover dark:opacity-80 opacity-100 dark:mix-blend-lighten group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             </div>
             <div className="flex items-center space-x-4 mb-4 text-xs font-light tracking-widest uppercase">
                <span className="text-gold">{NEWS_ARTICLES[0].category}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/50 flex items-center"><Clock className="w-3 h-3 mr-1"/> {NEWS_ARTICLES[0].date}</span>
             </div>
             <h2 className="text-3xl lg:text-4xl font-light mb-4 group-hover:text-gold transition-colors">{NEWS_ARTICLES[0].title}</h2>
             <p className="text-white/60 font-light leading-relaxed mb-6">{NEWS_ARTICLES[0].summary}</p>
             <Link to={`/news/${NEWS_ARTICLES[0].id}`} className="inline-flex items-center space-x-2 text-white border-b border-white hover:border-gold hover:text-gold transition-colors pb-1 text-sm uppercase tracking-widest">
               <span>Read Analysis</span>
               <ArrowRight className="w-4 h-4" />
             </Link>
          </motion.div>

          <div className="space-y-16 lg:pl-16 lg:border-l border-white/10">
             {NEWS_ARTICLES.slice(1).map((article, i) => (
                <motion.div key={article.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }} className="group flex flex-col md:flex-row gap-6">
                   <div className="aspect-square md:w-40 bg-surface-light overflow-hidden flex-shrink-0 border border-white/5">
                       <img src={article.img} alt={article.title} className="w-full h-full object-cover dark:opacity-80 opacity-100 dark:mix-blend-lighten group-hover:scale-110 transition-transform duration-1000" />
                   </div>
                   <div className="flex flex-col justify-center">
                     <div className="flex items-center space-x-3 mb-3 text-[10px] font-light tracking-widest uppercase">
                        <span className="text-gold">{article.category}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/50">{article.date}</span>
                     </div>
                     <h3 className="text-xl font-light mb-3 group-hover:text-white/80 transition-colors">{article.title}</h3>
                     <Link to={`/news/${article.id}`} className="inline-flex items-center space-x-1 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest mt-auto">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                     </Link>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>

        <div className="text-center pt-16 border-t border-white/10">
          <p className="text-white/40 mb-6 font-light">Subscribe to receive our quarterly market report privately.</p>
          <div className="max-w-md mx-auto flex">
             <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border-b border-white/20 focus:border-gold py-3 outline-none text-white transition-colors placeholder:text-white/30 font-light" />
             <button className="border-b border-white/20 text-gold uppercase tracking-widest text-xs font-semibold px-4 hover:border-gold transition-colors">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}
