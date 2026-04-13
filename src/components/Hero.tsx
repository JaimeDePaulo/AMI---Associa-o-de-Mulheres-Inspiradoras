import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 african-pattern -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-ami-purple-light/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-ami-green-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ami-purple-light/10 text-ami-purple-primary font-medium text-sm mb-6 border border-ami-purple-light/20">
            <span className="w-2 h-2 bg-ami-purple-vibrant rounded-full animate-pulse" />
            Empoderando Mulheres em Angola
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Crescer Mulher +: <br />
            <span className="text-ami-purple-primary italic">Transformando</span> vidas através do conhecimento
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            A AMI é uma comunidade vibrante dedicada a capacitar mulheres angolanas, 
            promovendo liderança, empreendedorismo e impacto social duradouro.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/244937632348" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary flex items-center gap-2"
            >
              Inscreva-se <ArrowRight size={18} />
            </a>
            <a 
              href="https://wa.me/244937632348" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline flex items-center gap-2"
            >
              Saiba Mais
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/woman${i}/100/100`}
                  alt="Membro AMI"
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-gray-900">+500 Mulheres</p>
              <p className="text-gray-500">Já transformaram seus negócios</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="https://picsum.photos/seed/angola-woman/800/1000"
              alt="Mulher Inspiradora AMI"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ami-purple-primary/40 to-transparent" />
            
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:scale-110 transition-transform">
              <Play size={32} fill="currentColor" />
            </button>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ami-green-medium rounded-2xl -z-10 rotate-12" />
          <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-ami-purple-light rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
