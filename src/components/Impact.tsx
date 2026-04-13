import { motion } from 'motion/react';

const stats = [
  { label: 'Mulheres Formadas', value: '500+', color: 'text-ami-purple-primary' },
  { label: 'Negócios Criados', value: '120+', color: 'text-ami-green-dark' },
  { label: 'Eventos Realizados', value: '45', color: 'text-ami-purple-vibrant' },
  { label: 'Parceiros Ativos', value: '15', color: 'text-ami-green-medium' },
];

export default function Impact() {
  return (
    <section id="impacto" className="py-24 bg-ami-purple-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 african-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ami-purple-primary to-ami-green-dark/50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nosso Impacto em Números</h2>
          <p className="text-ami-purple-light max-w-2xl mx-auto text-lg">
            Cada número representa uma história de superação, um sonho realizado e uma família transformada.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10"
            >
              <p className="text-5xl md:text-6xl font-serif font-bold mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-widest font-semibold opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-video group"
            >
              <img
                src={`https://picsum.photos/seed/impact-${i}/600/400`}
                alt="Impacto AMI"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium italic">"A AMI mudou minha forma de ver o mundo e meu negócio."</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
