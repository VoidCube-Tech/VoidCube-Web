import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problema } from './components/Problema';
import { Solucao } from './components/Solucao';
import { Projetos } from './components/Projetos';
import { SobreTeaser } from './components/SobreTeaser';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';

import { ContactModal } from './components/ContactModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SobreFullModal } from './components/SobreFullModal';

import { Project, ContactContext } from './types';

export default function App() {
  // Modal states
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactContext, setContactContext] = useState<ContactContext>({
    source: 'Geral',
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sobreModalOpen, setSobreModalOpen] = useState(false);

  // Handlers
  const handleOpenContact = (source: string, projectTitle?: string, initialNote?: string) => {
    setContactContext({
      source,
      projectTitle,
      initialNote,
    });
    setContactModalOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-[#0E1514] text-[#DDE4E3] flex flex-col font-sans selection:bg-[#004F4F] selection:text-[#9CF1F0]">
      {/* 1. Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Landing Content */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 3. Problema */}
        <Problema />

        {/* 4. Solução */}
        <Solucao />

        {/* 5. Projetos */}
        <Projetos 
          onSelectProject={handleSelectProject} 
          onOpenContact={handleOpenContact}
        />

        {/* 6. Sobre (teaser) */}
        <SobreTeaser 
          onOpenFullAbout={() => setSobreModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 7. CTA Final */}
        <CtaFinal onOpenContact={handleOpenContact} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Modals & Flow Controllers */}
      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        context={contactContext}
      />

      <CaseStudyModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(projectTitle) => handleOpenContact('Case Study Modal', projectTitle)}
      />

      <SobreFullModal 
        isOpen={sobreModalOpen}
        onClose={() => setSobreModalOpen(false)}
        onContactClick={() => handleOpenContact('Sobre Full Trajectory Modal')}
      />
    </div>
  );
}
