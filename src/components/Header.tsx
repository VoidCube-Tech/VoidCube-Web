import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoIco from '/assets/VoidCube_ICO.jpg';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a 
          href="#top" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 shrink-0 group"
          id="header-brand-logo"
        >
          <div className="w-10 h-10 overflow-hidden rounded flex items-center justify-center">
            <img src={logoIco} alt="VoidCube Logo" className="w-full h-full object-cover scale-150" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#DDE4E3] tracking-tight">
              VoidCube
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-xs font-medium text-[#BEC9C8]">
          <button 
            onClick={() => scrollToSection('problema')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer whitespace-nowrap"
            id="nav-link-problema"
          >
            Diagnóstico
          </button>
          <button 
            onClick={() => scrollToSection('solucao')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer whitespace-nowrap"
            id="nav-link-solucao"
          >
            Processo
          </button>
          <button 
            onClick={() => scrollToSection('projetos')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer whitespace-nowrap"
            id="nav-link-projetos"
          >
            Projetos
          </button>
          <button 
            onClick={() => scrollToSection('sobre-teaser')}
            className="hover:text-[#80D5D4] transition-colors cursor-pointer whitespace-nowrap"
            id="nav-link-sobre"
          >
            Sobre
          </button>
        </nav>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#BEC9C8] hover:text-[#DDE4E3] bg-[#161D1D] hover:bg-[#252B2B] rounded-lg border border-[#252B2B] transition-colors cursor-pointer flex items-center justify-center shrink-0"
          aria-label="Abrir menu de navegação"
          id="header-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Drawer (Opens for Mobile Menu toggle) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161D1D] border-b border-[#252B2B] px-4 py-3 space-y-2 animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto space-y-1">
            <button 
              onClick={() => scrollToSection('problema')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-[#BEC9C8] hover:text-[#80D5D4] hover:bg-[#0E1514] rounded-md transition-colors cursor-pointer"
            >
              Diagnóstico
            </button>
            <button 
              onClick={() => scrollToSection('solucao')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-[#BEC9C8] hover:text-[#80D5D4] hover:bg-[#0E1514] rounded-md transition-colors cursor-pointer"
            >
              Processo de Trabalho
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-[#BEC9C8] hover:text-[#80D5D4] hover:bg-[#0E1514] rounded-md transition-colors cursor-pointer"
            >
              Projetos & Showcase
            </button>
            <button 
              onClick={() => scrollToSection('sobre-teaser')}
              className="block w-full text-left py-2 px-3 text-sm font-medium text-[#BEC9C8] hover:text-[#80D5D4] hover:bg-[#0E1514] rounded-md transition-colors cursor-pointer"
            >
              Sobre
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
