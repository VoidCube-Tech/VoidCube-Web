import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';

interface SobreTeaserProps {
  onOpenFullAbout: () => void;
  onOpenContact: (source: string) => void;
}

export const SobreTeaser: React.FC<SobreTeaserProps> = ({
  onOpenFullAbout,
  onOpenContact,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#0E1514]" id="sobre-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 bg-[#161D1D] rounded-lg border border-[#252B2B]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Developer Photo Placeholder */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-[#0E1514] rounded border border-[#252B2B] text-center">
              <div className="w-14 h-14 rounded bg-[#1A2121] border border-[#252B2B] flex items-center justify-center text-[#80D5D4] mb-3">
                <UserCheck className="w-7 h-7" />
              </div>
              <p className="text-xs text-[#80D5D4] font-medium">
                [Foto do responsável — VoidCube]
              </p>
              <span className="text-[11px] text-[#889392] mt-1">
                Atendimento e Desenvolvimento Direto
              </span>
            </div>

            {/* Content */}
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#DDE4E3]">
                Desenvolvimento focado em autonomia e resultados reais para o seu negócio
              </h2>

              <p className="text-sm text-[#BEC9C8] leading-relaxed">
                Desenvolvedor e fundador da VoidCube, atuo transformando os objetivos de pequenas e médias empresas em sites e sistemas ágeis e eficientes. Atuação próxima ao cliente com comunicação clara, direta e sem intermediários.
              </p>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenFullAbout}
                  className="py-2.5 px-5 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs rounded transition-colors flex items-center gap-2 cursor-pointer"
                  id="sobre-full-trajectory-btn"
                >
                  <span>Conhecer mais sobre o trabalho</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenContact('Sobre Teaser Direct')}
                  className="py-2.5 px-4 text-[#BEC9C8] hover:text-[#DDE4E3] font-medium text-xs transition-colors cursor-pointer"
                >
                  Conversar diretamente
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
