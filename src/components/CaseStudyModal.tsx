import React from 'react';
import { X, Check, ArrowRight, ShieldAlert, Box } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

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
              <Box className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{project.category === 'tecnica' ? 'Demonstração Prática' : 'Ferramenta Comercial'}</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#DDE4E3]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 text-[#BEC9C8] hover:text-[#DDE4E3] hover:bg-[#252B2B] rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Placeholder Badge */}
        <div className="mb-4 sm:mb-6 p-4 sm:p-8 bg-[#090F0F] rounded-lg border border-[#252B2B] flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-full bg-[#1A2121] border border-[#004F4F] flex items-center justify-center text-[#80D5D4]">
            <Box className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#80D5D4] max-w-md">
            {project.placeholderText}
          </p>
          <p className="text-[11px] sm:text-xs text-[#889392] mt-1.5">
            Estrutura desenvolvida pela VoidCube com foco em conversão e facilidade de uso.
          </p>
        </div>

        {/* Short Description */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#BEC9C8] mb-2">Visão Geral</h3>
          <p className="text-sm text-[#DDE4E3] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {project.problemSolved && (
            <div className="p-4 bg-[#1A2121] rounded-lg border border-[#252B2B]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FFB4AB] mb-1.5 uppercase">
                <ShieldAlert className="w-4 h-4" />
                O Desafio Comum
              </div>
              <p className="text-xs text-[#BEC9C8] leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          )}
          {project.solutionProvided && (
            <div className="p-4 bg-[#1A2121] rounded-lg border border-[#004F4F]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#80D5D4] mb-1.5 uppercase">
                <Check className="w-4 h-4" />
                Como Resolvemos
              </div>
              <p className="text-xs text-[#BEC9C8] leading-relaxed">
                {project.solutionProvided}
              </p>
            </div>
          )}
        </div>

        {/* Technologies / Capabilities */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#BEC9C8] mb-2.5">Recursos da Solução</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#090F0F] text-[#80D5D4] border border-[#252B2B] rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[#252B2B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestSimilar(project.title);
            }}
            className="w-full sm:w-auto px-5 py-3 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Quero Algo Parecido no Meu Negócio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#1A2121] hover:bg-[#252B2B] text-[#BEC9C8] text-xs rounded-lg transition-colors cursor-pointer"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
