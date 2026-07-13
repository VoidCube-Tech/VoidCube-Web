import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    // Certifica-te de que a classe 'dark' está presente para ativar os teus tokens de cores escuras RGB.
    // 'bg-background' e 'text-on-background' aplicam as tuas cores customizadas ao body.
    <body className="dark min-h-screen flex flex-col bg-background text-on-background font-sans antialiased">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-surface-container/80 backdrop-blur-md text-on-surface px-8 py-4 flex items-center justify-between border-b border-outline-variant/30">
        <div className="text-headline-md tracking-tight">
          VoidCube
        </div>

        <nav className="flex gap-6">
          <a href="#servicos" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
            Serviços
          </a>
          <a href="#projetos" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
            Projetos
          </a>
          <a href="#sobre" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
            Sobre
          </a>
        </nav>

        <button className="bg-primary text-on-primary text-label-lg rounded-sm px-6 py-2.5 font-medium uppercase tracking-wider cursor-pointer transition-all hover:brightness-90 active:scale-95">
          Solicitar
        </button>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      {/* Aplicado bg-surface-container-low e a borda com border-outline-variant */}
      <footer className="bg-surface-container-low text-on-surface px-12 py-16 border-t border-outline-variant flex justify-between items-start gap-12 flex-wrap">
        
        {/* Marca & Copyright */}
        <div className="flex flex-col gap-5 max-w-[320px]">
          <div className="text-headline-md tracking-tight">
            VoidCube
          </div>
          <p className="text-label-sm text-on-surface-variant opacity-70 uppercase tracking-widest">
            © 2026 VOIDCUBE. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Links do Rodapé */}
        <div className="flex gap-24 flex-wrap">
          
          {/* Coluna Menu */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm text-on-surface-variant font-bold uppercase tracking-widest">
              Menu
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#servicos" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
                Serviços
              </a>
              <a href="#projetos" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
                Projetos
              </a>
              <a href="#sobre" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
                Sobre
              </a>
            </nav>
          </div>

          {/* <div className="flex flex-col gap-4">
            <h4 className="text-label-sm text-on-surface-variant font-bold uppercase tracking-widest">
              Empresa
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#carreiras" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
                Carreiras
              </a>
              <a href="#privacidade" className="text-body-md text-on-surface-variant no-underline transition-opacity hover:opacity-70">
                Privacidade
              </a>
            </nav>
          </div>
 */}
          
        </div>
      </footer>

    </body>
  );
}