import { motion } from 'motion/react';
import { Users, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://picsum.photos/seed/ami-1/400/600"
                  alt="AMI Atividade"
                  className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-ami-purple-primary p-6 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-1">5+</p>
                  <p className="text-sm opacity-80 uppercase tracking-wider">Anos de Impacto</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-ami-green-medium p-6 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-wider">Foco Feminino</p>
                </div>
                <img
                  src="https://picsum.photos/seed/ami-2/400/600"
                  alt="AMI Atividade"
                  className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full african-pattern opacity-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ami-purple-primary font-bold tracking-widest uppercase text-sm">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8">
              Unidas para <span className="text-ami-purple-primary italic">Inspirar</span> e Transformar
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              A AMI nasceu da necessidade de criar um espaço seguro e capacitador para mulheres em Angola. 
              Acreditamos que quando uma mulher cresce, toda a comunidade evolui. Nossa missão é 
              proporcionar as ferramentas necessárias para que cada mulher alcance sua autonomia 
              financeira e liderança pessoal.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ami-purple-light/20 rounded-xl flex items-center justify-center shrink-0 text-ami-purple-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Missão</h4>
                  <p className="text-gray-500">Capacitar mulheres através de formação contínua e networking estratégico.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ami-green-soft/20 rounded-xl flex items-center justify-center shrink-0 text-ami-green-dark">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Visão</h4>
                  <p className="text-gray-500">Ser a maior rede de referência em empreendedorismo feminino em Angola até 2030.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ami-purple-light/20 rounded-xl flex items-center justify-center shrink-0 text-ami-purple-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Valores</h4>
                  <p className="text-gray-500">Sororidade, Transparência, Excelência e Impacto Social.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
