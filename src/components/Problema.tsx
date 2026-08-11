import React from 'react';
import { AlertCircle, CheckCircle2, Smartphone, Clock, MessageSquareX } from 'lucide-react';

export const Problema: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#161D1D] border-y border-[#252B2B]" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#DDE4E3] tracking-tight">
            Situações comuns enfrentadas por donos de negócios
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#BEC9C8]">
            A maioria das frustrações com tecnologia decorre de falhas de comunicação e sistemas desatualizados.
          </p>
        </div>

        {/* Visual Cards Grid with Mockup Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Item 1 */}
          <div className="bg-[#0E1514] rounded-xl border border-[#252B2B] p-5 flex flex-col justify-between hover:border-[#3F4948] transition-colors">
            <div>
              {/* Visual Mockup Box */}
              <div className="h-36 mb-4 bg-[#161D1D] rounded-lg border border-[#252B2B] p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#FFB4AB]">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    [Site no Celular]
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#211210] rounded border border-[#3E1A17] text-[10px]">
                    Lento • 8s
                  </span>
                </div>
                
                <div className="my-auto text-center p-2 bg-[#090F0F] rounded border border-[#3E1A17] text-[11px] text-[#FFB4AB] font-mono">
                  ⚠️ "Página demorando para carregar..."
                </div>

                <div className="text-[10px] text-[#889392] font-mono text-center">
                  Cliente fecha a aba antes de comprar
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-[#211210] text-[#FFB4AB] border border-[#3E1A17] mb-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Site Lento & Ineficiente</span>
              </div>

              <h3 className="text-base font-bold text-[#DDE4E3] mb-1.5">
                Visitantes Desistem da Compra
              </h3>

              <p className="text-xs text-[#BEC9C8] leading-relaxed mb-4">
                Páginas antigas ou pesadas que travam no smartphone do seu cliente.
              </p>
            </div>

            <div className="pt-3 border-t border-[#252B2B] flex items-center gap-2 text-xs text-[#80D5D4] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Solução VoidCube: Carregamento instantâneo</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#0E1514] rounded-xl border border-[#252B2B] p-5 flex flex-col justify-between hover:border-[#3F4948] transition-colors">
            <div>
              {/* Visual Mockup Box */}
              <div className="h-36 mb-4 bg-[#161D1D] rounded-lg border border-[#252B2B] p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#FFB4AB]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    [Status do Projeto]
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#211210] rounded border border-[#3E1A17] text-[10px]">
                    Atrasado • 30d
                  </span>
                </div>

                <div className="my-auto text-center p-2 bg-[#090F0F] rounded border border-[#3E1A17] text-[11px] text-[#FFB4AB] font-mono">
                  ❌ Entrega interrompida sem prazo
                </div>

                <div className="text-[10px] text-[#889392] font-mono text-center">
                  Prestador sumiu após pagamento
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-[#211210] text-[#FFB4AB] border border-[#3E1A17] mb-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Prazos Não Cumprirem</span>
              </div>

              <h3 className="text-base font-bold text-[#DDE4E3] mb-1.5">
                Projetos Incompletos & Sumiço
              </h3>

              <p className="text-xs text-[#BEC9C8] leading-relaxed mb-4">
                Histórico com prestadores que deixam a entrega pela metade.
              </p>
            </div>

            <div className="pt-3 border-t border-[#252B2B] flex items-center gap-2 text-xs text-[#80D5D4] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Solução VoidCube: Cronograma 100% cumprido</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#0E1514] rounded-xl border border-[#252B2B] p-5 flex flex-col justify-between hover:border-[#3F4948] transition-colors">
            <div>
              {/* Visual Mockup Box */}
              <div className="h-36 mb-4 bg-[#161D1D] rounded-lg border border-[#252B2B] p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#FFB4AB]">
                  <span className="flex items-center gap-1">
                    <MessageSquareX className="w-3.5 h-3.5" />
                    [Comunicação]
                  </span>
                  <span className="px-1.5 py-0.5 bg-[#211210] rounded border border-[#3E1A17] text-[10px]">
                    Confuso
                  </span>
                </div>

                <div className="my-auto text-center p-2 bg-[#090F0F] rounded border border-[#3E1A17] text-[11px] text-[#FFB4AB] font-mono">
                  💬 "Framework X, API REST, Serverless..."
                </div>

                <div className="text-[10px] text-[#889392] font-mono text-center">
                  Zero foco no lucro e vendas da empresa
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-[#211210] text-[#FFB4AB] border border-[#3E1A17] mb-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Linguagem Complicada</span>
              </div>

              <h3 className="text-base font-bold text-[#DDE4E3] mb-1.5">
                Jargões Técnicos Sem Sentido
              </h3>

              <p className="text-xs text-[#BEC9C8] leading-relaxed mb-4">
                Explicações que não trazem clareza para o dono da empresa.
              </p>
            </div>

            <div className="pt-3 border-t border-[#252B2B] flex items-center gap-2 text-xs text-[#80D5D4] font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Solução VoidCube: Foco em metas de negócios</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
