import React from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface SobreFullModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const SobreFullModal: React.FC<SobreFullModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-[#090F0F]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#161D1D] border border-[#3F4948] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 text-[#DDE4E3] my-auto box-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3 mb-4 sm:pb-4 sm:mb-6 border-b border-[#252B2B]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#1A2121] text-[#80D5D4] border border-[#004F4F] mb-1.5 uppercase">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Parceiro de Confiança</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#DDE4E3]">
              Sobre a VoidCube
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 text-[#BEC9C8] hover:text-[#DDE4E3] hover:bg-[#252B2B] rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Story */}
        <div className="space-y-4 text-sm text-[#BEC9C8] leading-relaxed mb-6">
          <p>
            Especializada em desenvolvimento web comercial e automação de processos, a <strong className="text-[#DDE4E3]">VoidCube</strong> cria sites e sistemas sob medida para pequenas e médias empresas que buscam resultados práticos, carregamento rápido e atração constante de novos clientes.
          </p>
          <p>
            Nosso compromisso é com a clareza e a transparência: desde a reunião inicial até o lançamento e acompanhamento.
          </p>
          <p>
            Eliminamos burocracias e processos engessados de agências tradicionais para garantir agilidade nas entregas e foco absoluto nas metas do seu negócio.
          </p>
        </div>

        {/* Core Commitments */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DDE4E3] mb-3">Diretrizes do Nosso Trabalho</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-[#1A2121] rounded-lg border border-[#252B2B] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#80D5D4] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-medium text-[#DDE4E3]">Sem Termos Complicados</span>
                <p className="text-[#BEC9C8] mt-0.5">Comunicação clara em linguagem simples de negócios.</p>
              </div>
            </div>
            <div className="p-3 bg-[#1A2121] rounded-lg border border-[#252B2B] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#80D5D4] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-medium text-[#DDE4E3]">Site Rápido & Seguro</span>
                <p className="text-[#BEC9C8] mt-0.5">Abertura instantânea no celular do seu cliente.</p>
              </div>
            </div>
            <div className="p-3 bg-[#1A2121] rounded-lg border border-[#252B2B] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#80D5D4] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-medium text-[#DDE4E3]">Atendimento Direto</span>
                <p className="text-[#BEC9C8] mt-0.5">Sem intermediários ou filas de espera.</p>
              </div>
            </div>
            <div className="p-3 bg-[#1A2121] rounded-lg border border-[#252B2B] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#80D5D4] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-medium text-[#DDE4E3]">Total Autonomia</span>
                <p className="text-[#BEC9C8] mt-0.5">O cliente é dono de 100% do seu site e das suas informações.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-4 border-t border-[#252B2B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full sm:w-auto px-5 py-3 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Falar com a VoidCube</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-[#1A2121] hover:bg-[#252B2B] text-[#BEC9C8] text-xs rounded-lg transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
