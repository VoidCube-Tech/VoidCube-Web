import React, { useState } from 'react';
import { Lock, ArrowUpRight, Filter, ChevronDown } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA, ALL_TECHNOLOGIES } from '../data/projectsData';

interface ProjetosProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: (source: string) => void;
}

export const Projetos: React.FC<ProjetosProps> = ({ onSelectProject, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('tecnica');
  const [selectedTech, setSelectedTech] = useState<string>('Todos');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const categoryMatch = proj.category === activeCategory;
    const techMatch = selectedTech === 'Todos' || proj.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  return (
    <section className="py-16 sm:py-20 bg-[#161D1D] border-y border-[#252B2B]" id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#DDE4E3] tracking-tight">
            Exemplos de Soluções Práticas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#BEC9C8]">
            Projetos desenvolvidos com foco em facilidade de uso, agilidade e geração de resultados para empresas.
          </p>
        </div>

        {/* Category Tabs & Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#252B2B]">
          
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveCategory('tecnica')}
              className={`px-4 py-2 rounded text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'tecnica'
                  ? 'bg-[#80D5D4] text-[#003737]'
                  : 'bg-[#0E1514] text-[#BEC9C8] border border-[#252B2B]'
              }`}
            >
              Demonstrações Práticas
            </button>
            <button
              onClick={() => setActiveCategory('desenvolvimento')}
              className={`px-4 py-2 rounded text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'desenvolvimento'
                  ? 'bg-[#80D5D4] text-[#003737]'
                  : 'bg-[#0E1514] text-[#BEC9C8] border border-[#252B2B]'
              }`}
            >
              Automações & Ferramentas
            </button>
            <button
              onClick={() => setActiveCategory('clientes')}
              className={`px-4 py-2 rounded text-xs font-bold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeCategory === 'clientes'
                  ? 'bg-[#80D5D4] text-[#003737]'
                  : 'bg-[#0E1514] text-[#BEC9C8] border border-[#252B2B]'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Projetos de Clientes (Confidencial)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="tech-filter-select" className="flex items-center gap-1.5 text-xs text-[#889392] font-medium shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#80D5D4]" />
              <span>Filtrar por:</span>
            </label>
            <div className="relative">
              <select
                id="tech-filter-select"
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="appearance-none bg-[#0E1514] text-[#80D5D4] border border-[#252B2B] hover:border-[#80D5D4] rounded px-3 py-1.5 pr-8 text-xs font-bold transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#80D5D4]"
              >
                {ALL_TECHNOLOGIES.map((tech) => (
                  <option key={tech} value={tech} className="bg-[#161D1D] text-[#DDE4E3]">
                    {tech}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#80D5D4] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* NDA Category Notice */}
        {activeCategory === 'clientes' && (
          <div className="p-8 bg-[#0E1514] rounded-lg border border-[#252B2B] text-center max-w-xl mx-auto my-6 space-y-4">
            <div className="w-10 h-10 rounded bg-[#1A2121] border border-[#252B2B] flex items-center justify-center text-[#80D5D4] mx-auto">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#DDE4E3]">
              Projetos de Clientes Protegidos por Confidencialidade
            </h3>
            <p className="text-xs sm:text-sm text-[#BEC9C8] leading-relaxed">
              Por contrato e respeito à privacidade dos nossos parceiros, os detalhes de projetos de clientes não são exibidos publicamente nesta página.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Projetos NDA Informacao')}
                className="py-2.5 px-5 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Falar sobre a necessidade do seu negócio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Projects Cards Grid */}
        {activeCategory !== 'clientes' && (
          <div>
            {filteredProjects.length === 0 ? (
              <div className="p-8 text-center bg-[#0E1514] rounded-lg border border-[#252B2B] text-[#BEC9C8] text-xs">
                Nenhuma demonstração encontrada para o filtro selecionado.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onSelectProject(proj)}
                    className="p-6 bg-[#0E1514] rounded-lg border border-[#252B2B] hover:border-[#3F4948] transition-colors flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Clean Media Placeholder Box */}
                      <div className="mb-4 p-4 bg-[#161D1D] rounded border border-[#252B2B] text-center">
                        <p className="text-[11px] font-medium text-[#80D5D4]">
                          {proj.placeholderText}
                        </p>
                      </div>

                      <h3 className="text-base font-bold text-[#DDE4E3] mb-2">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-[#BEC9C8] leading-relaxed mb-4">
                        {proj.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[#161D1D] text-[#80D5D4] text-[10px] font-medium rounded border border-[#252B2B]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#252B2B] flex items-center justify-between text-xs font-semibold text-[#80D5D4]">
                      <span>Ver como funciona</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
