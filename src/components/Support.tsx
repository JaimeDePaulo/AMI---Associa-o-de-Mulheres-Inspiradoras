import { motion } from 'motion/react';
import { Heart, ShoppingBag, Droplets, CreditCard } from 'lucide-react';

const partners = [
  'ONG Criança Feliz',
  'Governo Provincial da Huíla',
  'Rádio Mais',
  'ISPEL',
  'Belas Shopping',
  'Shopping Talatona',
  'Administração Municipal da Huíla',
  'Comando Provincial da Polícia',
  'Hospital Central do Lubango',
  'Maternidade Irene Neto',
  'Dra. Karina Nunes',
  'Sra. Victória Valente',
  'Dra. Betsabé Pompa',
  'Sra. Yerlim Portal'
];

export default function Support() {
  return (
    <section id="apoiar" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-ami-purple-primary font-bold tracking-widest uppercase text-sm">Apoie a AMI</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8">
              Transforme vidas com apenas <span className="text-ami-purple-primary italic">1.000 Kz</span> por mês
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Ajudar uma mulher é transformar uma vida, fortalecer uma família e impactar uma sociedade. 
              Sua contribuição direta apoia o programa <strong>CUIDAR+</strong>.
            </p>

            <div className="bg-ami-neutral-gray p-8 rounded-3xl border border-gray-100 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ami-purple-primary rounded-xl flex items-center justify-center text-white">
                  <CreditCard size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">IBAN para Doação</p>
                  <p className="text-lg font-mono font-bold text-gray-800">0040 0000 8786 0042 1016 0</p>
                  <p className="text-sm text-ami-purple-primary font-medium">Associacao Mulheres Inspiradoras</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">"Cada contribuição é um passo para a restauração de um sonho."</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-ami-purple-light/5 rounded-2xl border border-ami-purple-light/10">
                <ShoppingBag className="text-ami-purple-primary" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Bolsas Artesanais</p>
                  <p className="text-xs text-gray-500">Venda revertida para o CUIDAR+</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-ami-green-soft/5 rounded-2xl border border-ami-green-soft/10">
                <Droplets className="text-ami-green-dark" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Sabonetes Artesanais</p>
                  <p className="text-xs text-gray-500">Produzidos pelas nossas mulheres</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ami-neutral-gray p-8 md:p-12 rounded-[2.5rem] border border-gray-100"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">Nossos Parceiros</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((partner) => (
                <span 
                  key={partner}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-100 shadow-sm hover:border-ami-purple-light transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-ami-purple-primary font-bold mb-4">Seja um parceiro institucional</p>
              <a 
                href="https://wa.me/244952567577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
