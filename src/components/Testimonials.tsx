import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Antónia',
    role: 'Empreendedora de Moda',
    content: 'O programa Crescer+ deu-me a estrutura que eu precisava para organizar as minhas finanças. Hoje a minha marca é reconhecida em Luanda.',
    image: 'https://picsum.photos/seed/woman-t1/200/200'
  },
  {
    name: 'Isabel dos Santos',
    role: 'Consultora de Marketing',
    content: 'Encontrei na AMI uma rede de apoio que nunca imaginei. A sororidade aqui é real e impulsiona-nos a ir mais longe.',
    image: 'https://picsum.photos/seed/woman-t2/200/200'
  },
  {
    name: 'Teresa Bento',
    role: 'Fundadora de Startup',
    content: 'A formação Inspira+ mudou a minha mentalidade. Aprendi que liderar é, acima de tudo, servir e inspirar outras mulheres.',
    image: 'https://picsum.photos/seed/woman-t3/200/200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Vozes que <span className="text-ami-purple-primary italic">Inspiram</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de mulheres que decidiram investir em si mesmas e transformaram suas realidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-ami-neutral-gray relative group hover:bg-ami-purple-light/5 transition-colors"
            >
              <Quote className="absolute top-6 right-8 text-ami-purple-light/20" size={64} />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-ami-purple-primary"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-ami-purple-primary font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
