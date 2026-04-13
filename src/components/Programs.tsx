import { motion } from 'motion/react';
import { Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const programs = [
  {
    id: 'inspira',
    title: 'Inspira+',
    subtitle: 'Desenvolvimento Pessoal e Liderança',
    description: 'Focado em fortalecer a mentalidade empreendedora e as habilidades de liderança da mulher angolana.',
    icon: <Sparkles className="text-ami-purple-primary" size={32} />,
    benefits: [
      'Mentalidade Empreendedora',
      'Liderança Feminina',
      'Inteligência Emocional',
      'Networking Estratégico'
    ],
    color: 'bg-ami-purple-light/10',
    borderColor: 'border-ami-purple-light/30'
  },
  {
    id: 'crescer',
    title: 'Crescer+',
    subtitle: 'Criação e Gestão de Negócios',
    description: 'Capacitação técnica para transformar ideias em negócios sustentáveis e lucrativos.',
    icon: <TrendingUp className="text-ami-green-dark" size={32} />,
    benefits: [
      'Plano de Negócios',
      'Gestão Financeira',
      'Marketing e Vendas',
      'Escalabilidade'
    ],
    color: 'bg-ami-green-soft/10',
    borderColor: 'border-ami-green-soft/30'
  }
];

export default function Programs() {
  return (
    <section id="programas" className="py-24 bg-ami-neutral-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-ami-purple-primary font-bold tracking-widest uppercase text-sm"
          >
            Nossos Programas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6"
          >
            Caminhos para a sua <span className="text-ami-green-dark italic">Evolução</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Oferecemos trilhas de aprendizado desenhadas especificamente para os desafios 
            e oportunidades da mulher empreendedora em Angola.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "p-8 md:p-12 rounded-[2rem] border-2 transition-all hover:shadow-xl group",
                program.color,
                program.borderColor
              )}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {program.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2">{program.title}</h3>
              <p className="text-ami-purple-primary font-semibold mb-6">{program.subtitle}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {program.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {program.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-ami-green-dark" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://wa.me/244937632348" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
                  program.id === 'inspira' ? "btn-primary" : "btn-secondary"
                )}
              >
                Quero Participar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
