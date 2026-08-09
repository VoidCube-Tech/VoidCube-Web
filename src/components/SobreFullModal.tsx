import React from 'react';
import { X, ShieldCheck, Award, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090F0F]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#161D1D] border border-[#3F4948] rounded-xl shadow-2xl overflow-y-auto p-6 sm:p-8 text-[#DDE4E3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#252B2B]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-[#1A2121] text-[#80D5D4] border border-[#004F4F] mb-2 uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Parceiro de Confiança
            </div>
            <h2 className="text-2xl font-bold text-[#DDE4E3]">
              Sobre a VoidCube
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#BEC9C8] hover:text-[#DDE4E3] hover:bg-[#252B2B] rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Developer Image Placeholder Badge */}
        <div className="mb-6 p-6 bg-[#090F0F] rounded-lg border border-[#252B2B] flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 mb-3 rounded-full bg-[#1A2121] border border-[#004F4F] flex items-center justify-center text-[#80D5D4]">
            <UserCheck className="w-8 h-8" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#80D5D4]">
            [Foto do responsável — VoidCube]
          </p>
          <p className="text-xs text-[#889392] mt-1">
            Atendimento direto e personalizado
          </p>
        </div>

        {/* Story */}
        <div className="space-y-4 text-sm text-[#BEC9C8] leading-relaxed mb-6">
          <p>
            Desenvolvedor e especialista em soluções digitais comerciais, atuo criando sites e sistemas sob medida para pequenas e médias empresas que precisam de uma presença digital forte e eficiente, sem burocracia ou custos desnecessários.
          </p>
          <p>
            Na <strong className="text-[#DDE4E3]">VoidCube</strong>, meu compromisso é ser um parceiro de negócios direto: desde o primeiro entendimento do que sua empresa precisa até a entrega final e o suporte.
          </p>
          <p>
            Diferente das agências tradicionais onde seu projeto passa por gerentes e atendentes, aqui você conversa diretamente com quem está criando o seu site.
          </p>
        </div>

        {/* Core Commitments */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DDE4E3] mb-3">Compromissos de Trabalho</h3>
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
            <span>Fale Comigo Agora</span>
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
