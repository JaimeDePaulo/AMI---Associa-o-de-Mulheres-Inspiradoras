import { motion } from 'motion/react';
import { Instagram, Play, Heart, MessageCircle } from 'lucide-react';

const feedItems = [
  { url: 'https://lh3.googleusercontent.com/d/1GncSoEFTnW7jWPFg2fnoy3cxoP68lz_7', type: 'image', likes: '124', comments: '12' },
  { url: 'https://lh3.googleusercontent.com/d/1JHhSbBPzv3Vdk99G6l8__-wfXTvcsYE8', type: 'video', likes: '256', comments: '45' },
  { url: 'https://lh3.googleusercontent.com/d/1Likk22YsDdB0nrhTPR5ZBAnSw8HsGw7o', type: 'image', likes: '89', comments: '8' },
  { url: 'https://lh3.googleusercontent.com/d/1R5uB-cG9NssCLTg0naxQmlW9t-6d-nZR', type: 'image', likes: '156', comments: '22' },
  { url: 'https://lh3.googleusercontent.com/d/1Ut-Dj7FPbYAchA7M2058iR8_5L0fI47j', type: 'video', likes: '432', comments: '67' },
  { url: 'https://lh3.googleusercontent.com/d/1jG_j-jnGg7vxrEf3xURQwLJJbpPIdbqr', type: 'image', likes: '112', comments: '15' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-ami-purple-primary font-bold uppercase tracking-widest text-sm mb-4">
              <Instagram size={20} />
              <span>Siga-nos no Instagram</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossa Comunidade <span className="text-ami-purple-primary italic">Digital</span></h2>
            <p className="text-gray-600">
              Acompanhe o dia a dia da AMI, nossos eventos e histórias de superação em tempo real.
            </p>
          </div>
          <a 
            href="https://instagram.com/ami_assoc.mulheresinspiradoras" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            @ami_assoc.mulheresinspiradoras
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {feedItems.map((item, i) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-2xl cursor-pointer bg-gray-100"
            >
              <img
                src={item.url}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 text-white drop-shadow-lg">
                  <Play size={24} fill="currentColor" />
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="currentColor" />
                  <span className="font-bold">{item.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} fill="currentColor" />
                  <span className="font-bold">{item.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
