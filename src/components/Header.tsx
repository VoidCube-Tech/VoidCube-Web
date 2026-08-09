import React, { useState, useEffect } from 'react';
import { Box, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenContact: (source: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors ${
      scrolled 
        ? 'bg-[#0E1514] border-b border-[#252B2B]' 
        : 'bg-[#0E1514] border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 group"
          id="header-brand-logo"
        >
          <div className="w-8 h-8 rounded bg-[#161D1D] border border-[#252B2B] flex items-center justify-center text-[#80D5D4]">
            <Box className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#DDE4E3] tracking-tight">
              VoidCube
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#BEC9C8]">
          <button 
            onClick={() => scrollToSection('problema')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer"
            id="nav-link-problema"
          >
            Diagnóstico
          </button>
          <button 
            onClick={() => scrollToSection('solucao')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer"
            id="nav-link-solucao"
          >
            Processo
          </button>
          <button 
            onClick={() => scrollToSection('projetos')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer"
            id="nav-link-projetos"
          >
            Projetos
          </button>
          <button 
            onClick={() => scrollToSection('sobre-teaser')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer"
            id="nav-link-sobre"
          >
            Sobre
          </button>
        </nav>

        {/* Desktop Status & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenContact('Header Navigation')}
            className="py-2 px-4 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs rounded transition-colors cursor-pointer"
            id="header-cta-button"
          >
            <span>Fale comigo agora</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenContact('Header Mobile Direct')}
            className="py-1.5 px-3 bg-[#80D5D4] text-[#003737] font-bold text-xs rounded mr-1"
            id="mobile-header-cta"
          >
            Contato
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#BEC9C8] hover:text-[#DDE4E3] bg-[#161D1D] rounded border border-[#252B2B]"
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161D1D] border-b border-[#252B2B] px-4 pt-3 pb-6 space-y-3">
          <button 
            onClick={() => scrollToSection('problema')}
            className="block w-full text-left py-2 text-sm text-[#BEC9C8] hover:text-[#80D5D4]"
          >
            Diagnóstico
          </button>
          <button 
            onClick={() => scrollToSection('solucao')}
            className="block w-full text-left py-2 text-sm text-[#BEC9C8] hover:text-[#80D5D4]"
          >
            Processo de Trabalho
          </button>
          <button 
            onClick={() => scrollToSection('projetos')}
            className="block w-full text-left py-2 text-sm text-[#BEC9C8] hover:text-[#80D5D4]"
          >
            Projetos & Showcase
          </button>
          <button 
            onClick={() => scrollToSection('sobre-teaser')}
            className="block w-full text-left py-2 text-sm text-[#BEC9C8] hover:text-[#80D5D4]"
          >
            Sobre o Desenvolvedor
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Header Mobile Drawer');
              }}
              className="w-full py-2.5 bg-[#80D5D4] text-[#003737] font-bold text-xs rounded text-center"
            >
              Fale comigo agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
