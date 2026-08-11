import React from 'react';
import logoIco from '/assets/VoidCube_ICO.jpg';

interface FooterProps {
  onOpenContact: (source: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#090F0F] border-t border-[#252B2B] pt-12 pb-8 text-[#BEC9C8] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#252B2B]">
          
          {/* Brand Info */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 overflow-hidden rounded flex items-center justify-center">
                <img src={logoIco} alt="VoidCube Logo" className="w-full h-full object-cover scale-150" />
              </div>
              <span className="font-bold text-lg text-[#DDE4E3] tracking-tight">
                VoidCube
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#BEC9C8] leading-relaxed max-w-md">
              Desenvolvimento de software sob medida e consultoria técnica para pequenas e médias empresas.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDE4E3]">
              Navegação
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <button onClick={() => scrollToSection('problema')} className="hover:text-[#80D5D4] transition-colors cursor-pointer">
                Diagnóstico
              </button>
              <button onClick={() => scrollToSection('solucao')} className="hover:text-[#80D5D4] transition-colors cursor-pointer">
                Processo
              </button>
              <button onClick={() => scrollToSection('projetos')} className="hover:text-[#80D5D4] transition-colors cursor-pointer">
                Projetos
              </button>
              <button onClick={() => scrollToSection('sobre-teaser')} className="hover:text-[#80D5D4] transition-colors cursor-pointer">
                Sobre
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Subfooter */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#889392]">
          <div>
            © {new Date().getFullYear()} VoidCube. Todos os direitos reservados.
          </div>
          <div className="font-mono text-[11px]">
            VoidCube Software Engineering
          </div>
        </div>

      </div>
    </footer>
  );
};
