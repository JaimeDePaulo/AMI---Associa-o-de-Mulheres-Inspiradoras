import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-ami-neutral-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Vamos <span className="text-ami-green-dark italic">Conversar</span>?</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Tem alguma dúvida sobre nossos programas ou quer saber como se tornar uma parceira? 
              Nossa equipe está pronta para te ouvir.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ami-purple-primary shadow-sm group-hover:bg-ami-purple-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-xl font-medium text-gray-800">contato@amiangola.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ami-green-dark shadow-sm group-hover:bg-ami-green-dark group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-xl font-medium text-gray-800">+244 943 118 548</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-ami-purple-primary shadow-sm group-hover:bg-ami-purple-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Localização</p>
                  <p className="text-xl font-medium text-gray-800">Bairro do Comandante Cow Boy, Lubango, Angola</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://instagram.com/ami_assoc.mulheresinspiradoras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-ami-purple-primary hover:shadow-lg transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/AMI- Associacao Mulheres Inspiradoras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-ami-purple-primary hover:shadow-lg transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-ami-purple-primary hover:shadow-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 rounded-2xl bg-ami-neutral-gray border-transparent focus:bg-white focus:border-ami-purple-light focus:ring-0 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-ami-neutral-gray border-transparent focus:bg-white focus:border-ami-purple-light focus:ring-0 transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Assunto</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-ami-neutral-gray border-transparent focus:bg-white focus:border-ami-purple-light focus:ring-0 transition-all outline-none appearance-none">
                  <option>Informações sobre Programas</option>
                  <option>Inscrição em Eventos</option>
                  <option>Parcerias</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Como podemos te ajudar?"
                  className="w-full px-6 py-4 rounded-2xl bg-ami-neutral-gray border-transparent focus:bg-white focus:border-ami-purple-light focus:ring-0 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg">
                Enviar Mensagem <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
