import React from 'react';
import { ArrowRight, Target, CheckCircle2 } from 'lucide-react';

interface SobreTeaserProps {
  onOpenFullAbout: () => void;
  onOpenContact: (source: string) => void;
}

export const SobreTeaser: React.FC<SobreTeaserProps> = ({
  onOpenFullAbout,
  onOpenContact,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#0E1514] w-full max-w-full overflow-hidden" id="sobre-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 bg-[#161D1D] rounded-xl border border-[#252B2B]">
          <div className="max-w-3xl space-y-5">
          

            <h2 className="text-2xl sm:text-3xl font-bold text-[#DDE4E3] tracking-tight">
              Desenvolvimento focado em eficiência e crescimento para a sua empresa
            </h2>

            <p className="text-sm sm:text-base text-[#BEC9C8] leading-relaxed">
              Na VoidCube, construímos sistemas e sites sob medida para pequenas e médias empresas. Nosso compromisso é entregar soluções ágeis, com carregamento rápido e navegação simples para transformar seus visitantes em clientes reais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-[#0E1514] rounded border border-[#252B2B] text-xs">
                <span className="font-bold text-[#80D5D4] block mb-1">Sem Intermediários</span>
                <p className="text-[#BEC9C8]">Comunicação direta para agilizar decisões e entregas.</p>
              </div>
              <div className="p-3 bg-[#0E1514] rounded border border-[#252B2B] text-xs">
                <span className="font-bold text-[#80D5D4] block mb-1">Agilidade Total</span>
                <p className="text-[#BEC9C8]">Sites leves prontos para funcionar perfeitamente no celular.</p>
              </div>
              <div className="p-3 bg-[#0E1514] rounded border border-[#252B2B] text-xs">
                <span className="font-bold text-[#80D5D4] block mb-1">Independência do Cliente</span>
                <p className="text-[#BEC9C8]">Você tem controle e propriedade total sobre sua solução.</p>
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenFullAbout}
                className="py-3 px-6 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs rounded transition-colors flex items-center gap-2 cursor-pointer"
                id="sobre-full-trajectory-btn"
              >
                <span>Conhecer mais sobre nossa atuação</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenContact('Sobre Teaser Direct')}
                className="py-3 px-4 text-[#BEC9C8] hover:text-[#DDE4E3] font-medium text-xs transition-colors cursor-pointer"
              >
                Conversar sobre seu projeto
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
