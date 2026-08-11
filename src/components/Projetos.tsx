import React, { useState } from 'react';
import { ArrowUpRight, Filter, ChevronDown, Search, Lock, X } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA, ALL_TECHNOLOGIES } from '../data/projectsData';

interface ProjetosProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: (source: string) => void;
}

export const Projetos: React.FC<ProjetosProps> = ({ onSelectProject, onOpenContact }) => {
  const [selectedTech, setSelectedTech] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    // Filter by tech/category select
    const techMatch = selectedTech === 'Todos' || proj.technologies.includes(selectedTech);

    // Filter by search query (title, description, tags)
    const q = searchQuery.trim().toLowerCase();
    const searchMatch = !q || (
      proj.title.toLowerCase().includes(q) ||
      proj.shortDescription.toLowerCase().includes(q) ||
      proj.fullDescription.toLowerCase().includes(q) ||
      proj.technologies.some((tech) => tech.toLowerCase().includes(q))
    );

    return techMatch && searchMatch;
  });

  return (
    <section className="py-12 sm:py-20 bg-[#161D1D] border-y border-[#252B2B] w-full max-w-full overflow-hidden" id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#DDE4E3] tracking-tight">
              Exemplos de Soluções Práticas
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#BEC9C8]">
              Explore demonstrações de sites e sistemas desenvolvidos para gerar resultados comerciais.
            </p>
          </div>

          {/* Confidentiality Note */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#0E1514] border border-[#252B2B] rounded-lg text-xs text-[#BEC9C8] shrink-0">
            <Lock className="w-3.5 h-3.5 text-[#80D5D4] shrink-0" />
            <span>Projetos de clientes omitidos por sigilo contratual</span>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6 pb-6 border-b border-[#252B2B] items-center">
          
          {/* Search Input Bar (Spans 8 columns on md) */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-[#889392] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquise por nome, descrição ou recurso (ex: e-commerce, agendamento, celular)..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#0E1514] text-[#DDE4E3] placeholder-[#889392] border border-[#252B2B] hover:border-[#3F4948] focus:border-[#80D5D4] rounded-lg text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-[#80D5D4]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#889392] hover:text-[#DDE4E3] p-0.5 cursor-pointer"
                aria-label="Limpar pesquisa"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Select Option Dropdown (Spans 4 columns on md) */}
          <div className="md:col-span-4 flex items-center gap-2 justify-start md:justify-end">
            <label htmlFor="tech-filter-select" className="flex items-center gap-1.5 text-xs text-[#889392] font-medium shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#80D5D4]" />
              <span>Filtrar:</span>
            </label>
            <div className="relative w-full md:w-auto">
              <select
                id="tech-filter-select"
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full md:w-auto appearance-none bg-[#0E1514] text-[#80D5D4] border border-[#252B2B] hover:border-[#80D5D4] rounded-lg px-3.5 py-2.5 pr-8 text-xs font-bold transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#80D5D4]"
              >
                {ALL_TECHNOLOGIES.map((tech) => (
                  <option key={tech} value={tech} className="bg-[#161D1D] text-[#DDE4E3]">
                    {tech}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#80D5D4] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Mobile Swipe Hint */}
        {filteredProjects.length > 0 && (
          <div className="flex md:hidden items-center justify-between text-[11px] text-[#889392] mb-3 font-mono">
            <span>Deslize para ver mais soluções →</span>
            <span>{filteredProjects.length} opções</span>
          </div>
        )}

        {/* Projects Cards Container - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="w-full max-w-full">
          {filteredProjects.length === 0 ? (
            <div className="p-8 sm:p-12 text-center bg-[#0E1514] rounded-xl border border-[#252B2B] text-[#BEC9C8] text-xs space-y-3">
              <p className="text-sm font-semibold text-[#DDE4E3]">Nenhuma demonstração encontrada</p>
              <p className="text-xs text-[#889392]">
                Tente buscar com outros termos ou selecione "Todos" nos filtros.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTech('Todos');
                }}
                className="px-4 py-2 bg-[#161D1D] hover:bg-[#252B2B] text-[#80D5D4] rounded-lg text-xs font-bold border border-[#252B2B] transition-colors cursor-pointer"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="w-full overflow-x-auto scrollbar-none pb-2">
              <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onSelectProject(proj)}
                    className="w-[260px] sm:w-[280px] shrink-0 snap-start md:w-auto md:shrink-1 p-4 sm:p-6 bg-[#0E1514] rounded-xl border border-[#252B2B] hover:border-[#3F4948] transition-all flex flex-col justify-between cursor-pointer group hover:shadow-lg hover:shadow-black/40 select-none"
                  >
                  <div>
                    {/* Clean Media Placeholder Box */}
                    <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-[#161D1D] rounded-lg border border-[#252B2B] text-center group-hover:border-[#80D5D4]/40 transition-colors">
                      <p className="text-[11px] font-medium text-[#80D5D4]">
                        {proj.placeholderText}
                      </p>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#DDE4E3] mb-1.5 sm:mb-2 group-hover:text-[#80D5D4] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#BEC9C8] leading-relaxed mb-3 sm:mb-4">
                      {proj.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 bg-[#161D1D] text-[#80D5D4] text-[10px] font-medium rounded border border-[#252B2B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-[#252B2B] flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#80D5D4]">
                    <span>Ver detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Contact Prompt */}
        <div className="mt-10 sm:mt-12 p-6 bg-[#0E1514] rounded-xl border border-[#252B2B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#DDE4E3]">Precisa de uma solução diferente para o seu segmento?</h4>
            <p className="text-xs text-[#BEC9C8] mt-0.5">Desenvolvemos plataformas personalizadas sob medida para o objetivo da sua empresa.</p>
          </div>
          <button
            onClick={() => onOpenContact('Solucao Sob Medida Projetos')}
            className="py-2.5 px-5 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs rounded-lg transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Solicitar proposta personalizada</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
