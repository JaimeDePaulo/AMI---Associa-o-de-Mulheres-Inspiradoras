import { motion } from 'motion/react';
import { Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const programs = [
  {
    id: 'cuidar',
    title: 'CUIDAR+ AMI',
    subtitle: 'Um programa completo para transformar vidas',
    description: 'Criado para apoiar mulheres que desejam recomeçar, fortalecer-se e construir uma vida com mais equilíbrio, dignidade e propósito. Com duração de 5 meses e encontros semanais.',
    icon: <Sparkles className="text-ami-purple-primary" size={32} />,
    areas: [
      { title: 'Apoio Espiritual', desc: 'Fortalecer a fé e encontrar direção' },
      { title: 'Apoio Emocional', desc: 'Reconhecer emoções e curar feridas' },
      { title: 'Experiência de Vida', desc: 'Partilhas e situações reais' },
      { title: 'Apoio Jurídico', desc: 'Conhecer direitos e proteger-se' },
      { title: 'Gestão de Negócios', desc: 'Renda e autonomia' }
    ],
    health: [
      'Consultas de ginecologia',
      'Planeamento familiar',
      'Consulta pré-natal',
      'Consultas de psicologia',
      'Doação de preservativos',
      'Distribuição de pílulas'
    ],
    color: 'bg-ami-purple-light/10',
    borderColor: 'border-ami-purple-light/30'
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
            Programa <span className="text-ami-green-dark italic">CUIDAR+</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Cuidamos da mulher de forma integral, trabalhando áreas essenciais para o seu florescimento.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
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
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-2">{program.title}</h3>
                  <p className="text-ami-purple-primary font-semibold mb-6">{program.subtitle}</p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <h4 className="font-bold text-xl mb-4">5 Áreas Essenciais:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {program.areas.map((area) => (
                      <div key={area.title} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-ami-green-dark mt-1 shrink-0" />
                        <div>
                          <p className="font-bold text-gray-800 text-sm">{area.title}</p>
                          <p className="text-gray-500 text-xs">{area.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 bg-white/50 p-6 rounded-2xl border border-white">
                  <h4 className="font-bold text-xl mb-4">Saúde e Prevenção:</h4>
                  <ul className="space-y-3 mb-8">
                    {program.health.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-ami-purple-vibrant rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-ami-purple-primary/5 p-4 rounded-xl border border-ami-purple-primary/10">
                    <p className="text-xs text-ami-purple-primary font-bold uppercase mb-2">Ao final do programa:</p>
                    <p className="text-sm text-gray-700">✔ Certificado de participação</p>
                    <p className="text-sm text-gray-700">✔ Brinde especial de transformação</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://wa.me/244952567577" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "w-full mt-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 btn-primary"
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
