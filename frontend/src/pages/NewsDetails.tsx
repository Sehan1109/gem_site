import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import { NEWS_ARTICLES } from './News';

export function NewsDetails() {
  const { id } = useParams();
  const article = NEWS_ARTICLES.find(a => a.id === Number(id)) || NEWS_ARTICLES[0];

  return (
    <div className="bg-surface min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/news" 
          className="inline-flex items-center space-x-2 text-white/50 hover:text-white transition-colors mb-12 text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News</span>
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
          <div className="flex items-center space-x-4 mb-6 text-xs font-light tracking-widest uppercase">
            <span className="text-gold">{article.category}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50 flex items-center"><Clock className="w-3 h-3 mr-1"/> {article.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">{article.title}</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed">{article.summary}</p>
        </motion.div>

        {/* Feature Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="aspect-[21/9] bg-surface-light relative border border-white/5 overflow-hidden mb-16">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover dark:mix-blend-lighten dark:opacity-90 opacity-100" />
        </motion.div>

        {/* Content Body */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-invert prose-lg max-w-none font-light text-white/80">
          <p>
            The world of high jewelry and precious gemstones continues to evolve, bringing forth 
            fascinating developments that capture the attention of collectors and investors globally.
            As we delve into this topic, it becomes increasingly clear that the true value of these 
            pieces extends far beyond their physical characteristics.
          </p>
          <p>
            Historical provenance, meticulous craftsmanship, and extreme rarity combine to create
            assets that not only hold tremendous monetary value but also carry cultural and historical 
            significance. The market dynamics we observe today reflect a sophisticated understanding 
            among buyers who increasingly seek pieces that offer both aesthetic brilliance and 
            investment security.
          </p>
          <blockquote className="border-l-2 border-gold pl-6 py-2 my-8 text-2xl font-serif italic text-white">
            "The truest luxury remains that which cannot be easily replicated—time, history, and the 
            pinnacle of natural formation."
          </blockquote>
          <p>
            Looking ahead, we anticipate continued strong performance for exceptional colored diamonds 
            and unheated rubies, particularly those with prestigious certification and clear provenance. 
            For collectors, the focus should remain on acquiring the absolute best quality within their 
            chosen categories, as these top-tier assets consistently outperform broader market trends.
          </p>
          <p>
            It is imperative for potential buyers to conduct thorough due diligence, working closely 
            with trusted advisors and reputable sellers to verify authenticity, origin, and condition. 
            In a market where nuance dictates significant price differentials, expert guidance is not 
            just a luxury, but a necessity.
          </p>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
          <button className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">
            <Share2 className="w-4 h-4" />
            <span>Share Article</span>
          </button>
        </div>
      </div>
    </div>
  );
}
