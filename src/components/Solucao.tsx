import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Smartphone, Globe, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/projectsData';

export const Solucao: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll detection to automatically update step as user scrolls down the section on desktop
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = rect.height;
      const topOffset = -rect.top;

      if (topOffset < 0) {
        setActiveStep(1);
      } else if (topOffset < totalHeight * 0.33) {
        setActiveStep(1);
      } else if (topOffset < totalHeight * 0.66) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStepData = PROCESS_STEPS.find((s) => s.stepNumber === activeStep) || PROCESS_STEPS[0];

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 lg:py-24 bg-[#0E1514] w-full max-w-full overflow-hidden" id="solucao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161D1D] border border-[#252B2B] text-xs font-semibold text-[#80D5D4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Processo em 3 Etapas • Metodologia VoidCube</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#DDE4E3] tracking-tight">
            Como funciona o processo de trabalho
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#BEC9C8]">
            Passo a passo claro, sem termos complicados e com acompanhamento visual constante.
          </p>
        </div>

        {/* MOBILE VIEW (Simplified 1-Column Tabbed Experience for Phones/Tablets) */}
        <div className="block lg:hidden space-y-6">
          
          {/* Step Selector Pills (01, 02, 03) */}
          <div className="p-2 bg-[#161D1D] rounded-xl border border-[#252B2B] flex items-center justify-between gap-2">
            {PROCESS_STEPS.map((step) => {
              const isActive = step.stepNumber === activeStep;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`flex-1 py-2.5 px-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#80D5D4] text-[#003737] shadow-md'
                      : 'bg-[#090F0F] text-[#889392] border border-[#252B2B]'
                  }`}
                >
                  <span className="font-mono text-[11px]">0{step.stepNumber}.</span>
                  <span className="truncate">{step.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Visual Card */}
          <div className="bg-[#161D1D] rounded-xl border border-[#252B2B] p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#252B2B]">
              <span className="text-xs font-mono font-bold text-[#80D5D4]">
                ETAPA 0{currentStepData.stepNumber} DE 03
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1A2121] text-[#80D5D4] border border-[#004F4F]">
                {currentStepData.title}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#DDE4E3] leading-relaxed">
              {currentStepData.description}
            </p>

            {/* Visual Mockup Display */}
            <div className="p-4 bg-[#090F0F] rounded-lg border border-[#252B2B] text-center my-3">
              {activeStep === 1 && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#161D1D] rounded border border-[#80D5D4]/30 text-left space-y-2">
                    <div className="flex justify-between text-[11px] font-mono text-[#80D5D4]">
                      <span>📊 DIAGNÓSTICO COMERCIAL</span>
                      <span>98/100</span>
                    </div>
                    <div className="text-[11px] text-[#BEC9C8] space-y-1">
                      <p>• Velocidade: Otimizada (0.8s)</p>
                      <p>• Visual no Celular: 100% Responsivo</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#80D5D4] font-medium">
                    [Demonstração visual do diagnóstico e plano de ação]
                  </p>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#161D1D] rounded border border-[#80D5D4]/30 text-left space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#80D5D4]">
                      <span className="flex items-center gap-1">
                        <Smartphone className="w-3.5 h-3.5" />
                        PRÉVIA MOBILE
                      </span>
                      <span>EM CONSTRUÇÃO</span>
                    </div>
                    <p className="text-[11px] text-[#BEC9C8]">
                      Acompanhe o visual do site sendo montado em tempo real.
                    </p>
                  </div>
                  <p className="text-xs text-[#80D5D4] font-medium">
                    [Demonstração visual do site comercial sendo construído]
                  </p>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3">
                  <div className="p-3 bg-[#161D1D] rounded border border-[#80D5D4]/30 text-left space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#80D5D4]">
                      <span className="flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5" />
                        LANÇAMENTO
                      </span>
                      <span className="text-[#80D5D4] font-bold">100% ONLINE</span>
                    </div>
                    <p className="text-[11px] text-[#BEC9C8]">
                      Site publicado no seu domínio (.com.br) com botões ativos.
                    </p>
                  </div>
                  <p className="text-xs text-[#80D5D4] font-medium">
                    [Demonstração visual do site no ar gerando contatos]
                  </p>
                </div>
              )}
            </div>

            {/* Checklist Details */}
            <div className="space-y-2 pt-2 border-t border-[#252B2B]">
              {currentStepData.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#BEC9C8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#80D5D4] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DESKTOP VIEW (Rich 2-Column Scrollable Widget - Preserved for Desktop Screens) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Steps List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {PROCESS_STEPS.map((step) => {
                const isActive = step.stepNumber === activeStep;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setActiveStep(step.stepNumber)}
                    className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#161D1D] border-[#80D5D4] shadow-lg shadow-[#000000]/50'
                        : 'bg-[#090F0F] border-[#252B2B] hover:border-[#3F4948] opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#80D5D4]' : 'text-[#889392]'}`}>
                        ETAPA 0{step.stepNumber}
                      </span>
                      {isActive && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#80D5D4] text-[#003737]">
                          Em Destaque
                        </span>
                      )}
                    </div>

                    <h3 className={`text-base font-bold mb-1.5 ${isActive ? 'text-[#DDE4E3]' : 'text-[#BEC9C8]'}`}>
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#BEC9C8] leading-relaxed">
                      {step.description}
                    </p>

                    {isActive && (
                      <div className="mt-4 pt-3 border-t border-[#252B2B] space-y-2 animate-in fade-in duration-300">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#DDE4E3]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#80D5D4] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Step Indicator Controls */}
            <div className="p-4 bg-[#161D1D] rounded-xl border border-[#252B2B] flex items-center justify-between">
              <span className="text-xs text-[#BEC9C8]">Progresso do Processo:</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveStep(num)}
                    className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                      activeStep === num
                        ? 'bg-[#80D5D4] text-[#003737]'
                        : 'bg-[#090F0F] text-[#889392] border border-[#252B2B]'
                    }`}
                  >
                    0{num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Large Visual Mockup Display */}
          <div className="lg:col-span-7 bg-[#161D1D] rounded-xl border border-[#252B2B] p-6 flex flex-col justify-between min-h-[420px] shadow-2xl">
            
            {/* Visual Header / Browser Mockup Bar */}
            <div className="pb-4 border-b border-[#252B2B] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs font-mono text-[#889392]">
                  https://voidcube.com.br/etapa-0{activeStep}
                </span>
              </div>
              <span className="text-xs font-mono text-[#80D5D4] font-bold">
                Passo {activeStep} de 3
              </span>
            </div>

            {/* Large Visual Interactive Canvas Mockups */}
            <div className="my-6 py-8 px-6 bg-[#090F0F] rounded-lg border border-[#252B2B] flex flex-col items-center justify-center text-center relative overflow-hidden group">
              
              {/* Dynamic Image Content per Step */}
              {activeStep === 1 && (
                <div className="space-y-4 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
                  <div className="p-4 bg-[#161D1D] rounded-lg border border-[#80D5D4]/30 text-left space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#80D5D4]">
                      <span>📊 DIAGNÓSTICO COMERCIAL</span>
                      <span className="px-2 py-0.5 rounded bg-[#1A2121] text-[10px]">PONTUAÇÃO: 98/100</span>
                    </div>
                    <div className="space-y-2 text-xs text-[#BEC9C8]">
                      <div className="flex justify-between pb-1 border-b border-[#252B2B]">
                        <span>• Velocidade de Carregamento</span>
                        <span className="text-[#80D5D4] font-bold">Otimizada (0.8s)</span>
                      </div>
                      <div className="flex justify-between pb-1 border-b border-[#252B2B]">
                        <span>• Experiência no Celular</span>
                        <span className="text-[#80D5D4] font-bold">Responsiva</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Rota de Vendas / WhatsApp</span>
                        <span className="text-[#80D5D4] font-bold">Pronto para Captar</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-[#80D5D4] font-medium">
                    [Demonstração visual do relatório de diagnóstico e plano de ação comercial]
                  </p>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
                  <div className="p-4 bg-[#161D1D] rounded-lg border border-[#80D5D4]/30 text-left space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#80D5D4]">
                      <span className="flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4" />
                        PRÉVIA EM TEMPO REAL
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#1A2121] text-[10px]">DESKTOP + MOBILE</span>
                    </div>
                    <div className="p-3 bg-[#090F0F] rounded border border-[#252B2B] text-center">
                      <p className="text-xs text-[#DDE4E3] font-bold">
                        Site Comercial em Construção Ativa
                      </p>
                      <p className="text-[11px] text-[#BEC9C8] mt-1">
                        Layout moderno adaptado para todos os tamanhos de tela.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#80D5D4] font-medium">
                    [Demonstração visual do layout do site e sistema sendo construído]
                  </p>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4 w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
                  <div className="p-4 bg-[#161D1D] rounded-lg border border-[#80D5D4]/30 text-left space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#80D5D4]">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4" />
                        LANÇAMENTO & DOMÍNIO
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#004F4F] text-[#80D5D4] text-[10px] font-bold">ONLINE 100%</span>
                    </div>
                    <div className="p-3 bg-[#090F0F] rounded border border-[#252B2B] flex items-center justify-between text-xs text-[#DDE4E3]">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#80D5D4]" />
                        <span>seu-negocio.com.br</span>
                      </div>
                      <span className="text-[#80D5D4] text-[11px] font-bold">SSL Ativo</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#80D5D4] font-medium">
                    [Demonstração visual do site no ar com botões de contato funcionando]
                  </p>
                </div>
              )}

            </div>

            {/* Visual Footer Summary */}
            <div className="pt-4 border-t border-[#252B2B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#BEC9C8]">
              <div>
                <span className="text-[#DDE4E3] font-bold">{currentStepData.title}:</span>{' '}
                <span>Foco total na facilidade de uso e conversão de clientes.</span>
              </div>
              <button
                onClick={() => {
                  const element = document.getElementById('projetos');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-[#80D5D4] font-bold hover:underline cursor-pointer shrink-0"
              >
                <span>Ver projetos reais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
