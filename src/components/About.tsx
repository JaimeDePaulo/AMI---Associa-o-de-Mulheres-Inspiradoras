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
                  src="https://lh3.googleusercontent.com/d/17yhOf21pdVM1wTF3iRZls5sJ_FLi5FB0"
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
                  src="https://lh3.googleusercontent.com/d/1Chh93wiQhXGG4On4mgWXuMwN4UZsY2e4"
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
              A AMI (Associação de Mulheres Inspiradoras) nasceu da necessidade de criar um espaço seguro e capacitador para mulheres em Angola. 
              Acreditamos que quando uma mulher cresce, toda a comunidade evolui.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ami-purple-light/20 rounded-xl flex items-center justify-center shrink-0 text-ami-purple-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Missão</h4>
                  <p className="text-gray-500">Promover o empoderamento feminino, capacitando mulheres para alcançarem independência financeira, equilíbrio emocional e fortalecimento espiritual, através da formação, apoio e desenvolvimento de oportunidades sustentáveis.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ami-green-soft/20 rounded-xl flex items-center justify-center shrink-0 text-ami-green-dark">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Visão</h4>
                  <p className="text-gray-500">Ser uma referência em Angola na transformação de vidas de mulheres, criando uma comunidade onde cada mulher tenha autonomia, dignidade, propósito e capacidade de construir um futuro melhor para si e para a sua família.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-ami-purple-light/20 rounded-xl flex items-center justify-center shrink-0 text-ami-purple-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Valores</h4>
                  <div className="text-gray-500 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p><strong>1. Fé:</strong> Deus no centro de tudo.</p>
                    <p><strong>2. Solidariedade:</strong> Empatia e apoio mútuo.</p>
                    <p><strong>3. Transformação:</strong> Recomeçar e reconstruir.</p>
                    <p><strong>4. Autonomia:</strong> Independência integral.</p>
                    <p><strong>5. Conhecimento:</strong> Educação como libertação.</p>
                    <p><strong>6. Justiça:</strong> Direitos e igualdade.</p>
                    <p><strong>7. Dignidade:</strong> Respeito ao valor individual.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
