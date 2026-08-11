import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import bgLogo from '/assets/VoidCube_LOGO.jpeg';

interface HeroProps {
  onOpenContact: (source: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#0E1514] w-full max-w-full overflow-hidden" id="hero-section">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${bgLogo})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1514]/80 via-[#0E1514]/60 to-[#0E1514] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheadline, CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tag / Eyebrow */}
            

            {/* Main Headline (H1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#DDE4E3] leading-[1.15] tracking-tight">
              Seu negócio merece um site que <span className="text-[#80D5D4]">realmente traz clientes</span> e um parceiro em quem você pode confiar.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#BEC9C8] leading-relaxed max-w-2xl">
              Desenvolvimento de sites e sistemas sob medida para pequenas e médias empresas. Sem palavras complicadas, com conversa direta e foco total em fazer sua empresa vender mais.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenContact('Hero Main CTA')}
                className="py-3.5 px-7 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer group"
                id="hero-primary-cta"
              >
                <span>Fale comigo agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solucao"
                className="py-3.5 px-6 bg-[#161D1D] hover:bg-[#1A2121] text-[#BEC9C8] hover:text-[#DDE4E3] border border-[#252B2B] font-medium text-sm rounded-lg text-center transition-colors"
              >
                Como funciona o processo
              </a>
            </div>

          </div>

          {/* Right Column: Clean, Solid Showcase Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#161D1D] border border-[#252B2B] p-6 text-left">
              <div className="text-xs font-semibold text-[#80D5D4] mb-3 pb-3 border-b border-[#252B2B] flex items-center justify-between">
                <span>// Solução para o Seu Negócio</span>
                <span className="text-[#889392]">VoidCube</span>
              </div>
              
              {/* Image Placeholder (Mandatory as per section 10) */}
              <div className="p-8 bg-[#090F0F] rounded border border-[#252B2B] text-center my-2">
                <p className="text-xs text-[#80D5D4]">
                  [Demonstração visual do site e sistema comercial]
                </p>
              </div>

              <p className="text-xs text-[#BEC9C8] mt-4 leading-relaxed">
                Desenvolvimento focado em rapidez, visual impecável no celular e rotas diretas para atração de novos clientes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
