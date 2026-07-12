import React from 'react';

export default function AppLayout({ children }) {
  return (
    <div className="min-screen-height display-flex flex-column surface">
        <header className="surface-container text-primary-on-surface p-md display-flex align-center justify-between">
            <div className="display-lg text-title font-weight-bold tracking-tight">
                VoidCube
            </div>

            <nav className="display-flex gap-lg">
                <a href="#servicos" className="text-body font-weight-medium text-secondary-on-surface hover-opacity">
                Serviços
                </a>
                <a href="#projetos" className="text-body font-weight-medium text-secondary-on-surface hover-opacity">
                Projetos
                </a>
                <a href="#sobre" className="text-body font-weight-medium text-secondary-on-surface hover-opacity">
                Sobre
                </a>
            </nav>

            <button className="primary-button shape-md text-label font-weight-bold uppercase tracking-wide cursor-pointer">
                Solicitar Orçamento
            </button>
        </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer / Rodapé */}
      <footer className="surface-container-low text-primary-on-surface p-xl border-top-variant display-flex justify-between align-start gap-xl flex-wrap">
        
        {/* Seção da Marca & Copyright */}
        <div className="display-flex flex-column gap-md max-width-xs">
          <div className="display-lg text-title font-weight-bold tracking-tight">
            VoidCube
          </div>
          <p className="text-label-small font-mono text-variant-on-surface uppercase tracking-wider line-height-relaxed">
            © 2024 VOIDCUBE. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Grupos de Links / Menu */}
        <div className="display-flex gap-xxl flex-wrap">
          
          {/* Coluna 1: Menu */}
          <div className="display-flex flex-column gap-sm">
            <h4 className="text-label font-mono font-weight-bold text-variant-on-surface uppercase tracking-widest">
              Menu
            </h4>
            <nav className="display-flex flex-column gap-xs">
              <a href="#servicos" className="text-body-medium text-secondary-on-surface text-decoration-none hover-opacity">
                Serviços
              </a>
              <a href="#projetos" className="text-body-medium text-secondary-on-surface text-decoration-none hover-opacity">
                Projetos
              </a>
              <a href="#sobre" className="text-body-medium text-secondary-on-surface text-decoration-none hover-opacity">
                Sobre
              </a>
            </nav>
          </div>

          {/* Coluna 2: Empresa */}
          <div className="display-flex flex-column gap-sm">
            <h4 className="text-label font-mono font-weight-bold text-variant-on-surface uppercase tracking-widest">
              Empresa
            </h4>
            <nav className="display-flex flex-column gap-xs">
              <a href="#carreiras" className="text-body-medium text-secondary-on-surface text-decoration-none hover-opacity">
                Carreiras
              </a>
              <a href="#privacidade" className="text-body-medium text-secondary-on-surface text-decoration-none hover-opacity">
                Privacidade
              </a>
            </nav>
          </div>

        </div>

      </footer>
    </div>
  );
}