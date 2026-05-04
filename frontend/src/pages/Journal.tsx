import { PageTransition } from '../components/PageTransition';
import { motion } from 'motion/react';

const articles = [
  {
    category: 'Market Report',
    date: 'OCT 12, 2026',
    title: 'The Resurgence of the Unheated Ruby',
    desc: 'Why collectors are shifting their gaze from diamonds to the visceral depth of unheated Burmese rubies.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Corundum-215330.jpg'
  },
  {
    category: 'Behind the Design',
    date: 'SEP 28, 2026',
    title: 'Engineering the Floating Setting',
    desc: 'An invisible lattice of titanium and platinum that creates the illusion of stones resting on bare skin.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Rough_Diamond.jpg'
  },
  {
    category: 'Sourcing',
    date: 'AUG 05, 2026',
    title: 'Journey to the Muzo Mines',
    desc: 'Our latest expedition reveals a cache of emeralds exhibiting the legendary "butterfly wing" phenomenon.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg/960px-B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg'
  }
];

export function Journal() {
  return (
    <PageTransition className="pt-32 pb-32 max-w-7xl mx-auto px-6 md:px-12">
      <header className="mb-24 text-center border-b border-silver/10 pb-16">
        <h1 className="text-4xl md:text-6xl mb-6 text-ivory">The Journal</h1>
        <p className="text-silver text-sm md:text-base uppercase tracking-widest">
          Industry Insights & Editorial Reflections
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {articles.map((article, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden aspect-square mb-6">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
            </div>
            <div className="flex justify-between items-center mb-4 text-xs font-mono text-silver uppercase tracking-widest">
              <span className="text-gold">{article.category}</span>
              <span>{article.date}</span>
            </div>
            <h2 className="text-2xl font-serif text-ivory mb-3 group-hover:text-gold transition-colors">{article.title}</h2>
            <p className="text-silver text-sm leading-relaxed">{article.desc}</p>
          </motion.article>
        ))}
      </div>
    </PageTransition>
  );
}
