import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/projectsData';

export const Solucao: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0E1514]" id="solucao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#DDE4E3] tracking-tight">
            Processo de trabalho em 3 etapas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#BEC9C8]">
            Entenda exatamente como conduzimos do planejamento inicial ao lançamento.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 bg-[#161D1D] rounded-lg border border-[#252B2B] flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#80D5D4] font-bold mb-3">
                  0{step.stepNumber}. {step.title}
                </div>

                <p className="text-xs sm:text-sm text-[#BEC9C8] leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2 pt-4 border-t border-[#252B2B]">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#DDE4E3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#80D5D4] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
