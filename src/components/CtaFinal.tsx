import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaFinalProps {
  onOpenContact: (source: string) => void;
}

export const CtaFinal: React.FC<CtaFinalProps> = ({ onOpenContact }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#161D1D] border-t border-[#252B2B]" id="cta-final">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DDE4E3] leading-tight tracking-tight mb-4">
          Seu negócio merece um parceiro técnico em quem você pode confiar.
        </h2>

        <p className="text-sm sm:text-base text-[#BEC9C8] max-w-xl mx-auto mb-8 leading-relaxed">
          Analisamos seu cenário atual, entendemos suas metas e construímos uma solução sob medida sem jargões.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => onOpenContact('CTA Final Section')}
            className="py-3.5 px-8 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-sm rounded flex items-center gap-2 transition-colors cursor-pointer group"
            id="cta-final-button"
          >
            <span>Fale comigo agora</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
