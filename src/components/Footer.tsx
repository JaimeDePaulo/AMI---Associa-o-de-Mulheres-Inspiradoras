import { Heart, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ami-green-dark text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 african-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-ami-green-dark">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="font-serif font-bold text-2xl">AMI</span>
            </div>
            <p className="text-ami-green-soft max-w-md mb-8 leading-relaxed">
              A AMI (Associação de Mulheres Inspiradoras) é uma organização sem fins lucrativos 
              comprometida com o desenvolvimento sustentável e o empoderamento feminino em Angola.
              “Transformando vidas, restaurando sonhos e construindo futuros.”
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/AMI- Associacao Mulheres Inspiradoras" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-ami-purple-primary transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/ami_assoc.mulheresinspiradoras" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-ami-purple-primary transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-ami-green-soft">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">Programas</a></li>
              <li><a href="#apoiar" className="hover:text-white transition-colors">Apoiar</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Newsletter</h4>
            <p className="text-ami-green-soft mb-4 text-sm">Receba novidades e dicas de empreendedorismo.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm outline-none focus:border-white/40 w-full"
              />
              <button className="bg-ami-purple-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-ami-purple-vibrant transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-ami-green-soft">
          <p>© {currentYear} AMI - Associação de Mulheres Inspiradoras. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
