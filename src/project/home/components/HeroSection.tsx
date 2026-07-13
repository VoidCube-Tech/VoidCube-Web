import React from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden px-6 py-12 md:px-16">
      
      {/* Imagem de Fundo com Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Gradiente escuro para garantir contraste perfeito com o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent md:bg-gradient-to-b md:from-background/40 md:to-background" />
      </div>

      {/* Container de Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-6 md:gap-8">
        
        {/* Título Principal - Usa display-lg no desktop e headline-lg no mobile */}
        <h1 className="text-headline-lg md:text-display-lg text-on-background max-w-4xl tracking-tight leading-tight">
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl opacity-90 leading-relaxed">
          {subtitle}
        </p>

        {/* Botões de Ação (CTAs) - Flex-col no mobile, flex-row no desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
          
          {/* Botão Primário (Preenchido) */}
          <button 
            onClick={onPrimaryCtaClick}
            className="bg-primary text-on-primary text-label-lg rounded-sm px-8 py-3.5 font-medium uppercase tracking-wider cursor-pointer transition-all hover:brightness-95 active:scale-98 text-center"
          >
            {primaryCtaText}
          </button>

          {/* Botão Secundário (Outline) */}
          <button 
            onClick={onSecondaryCtaClick}
            className="border border-primary text-primary bg-transparent text-label-lg rounded-sm px-8 py-3.5 font-medium uppercase tracking-wider cursor-pointer transition-all hover:bg-primary/10 active:scale-98 text-center"
          >
            {secondaryCtaText}
          </button>

        </div>

      </div>
    </section>
  );
}