import { motion } from 'motion/react';

const images = [
  { url: 'https://picsum.photos/seed/ami-g1/800/600', title: 'Workshop Inspira+' },
  { url: 'https://picsum.photos/seed/ami-g2/600/800', title: 'Mentoria Individual' },
  { url: 'https://picsum.photos/seed/ami-g3/800/800', title: 'Evento de Networking' },
  { url: 'https://picsum.photos/seed/ami-g4/800/600', title: 'Formatura Crescer+' },
  { url: 'https://picsum.photos/seed/ami-g5/600/800', title: 'Feira de Negócios' },
  { url: 'https://picsum.photos/seed/ami-g6/800/600', title: 'Comunidade AMI' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossa <span className="text-ami-purple-primary italic">Jornada</span> em Imagens</h2>
            <p className="text-gray-600">
              Momentos marcantes de nossas formações, eventos e a união que fortalece a mulher angolana.
            </p>
          </div>
          <button className="btn-outline">Ver Galeria Completa</button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={img.url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-[2rem] cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ami-purple-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif font-bold text-xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
