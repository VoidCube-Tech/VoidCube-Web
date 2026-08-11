import React, { useState } from 'react';
import { X, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { ContactContext } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: ContactContext;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  context,
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState(context.initialNote || '');

  if (!isOpen) return null;

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatting message for WhatsApp
    const defaultPhone = '5591981859653'; // VoidCube commercial contact number
    let messageText = '';
    if (context.projectTitle) {
      messageText += `*Projeto de Referência:* ${context.projectTitle}\n`;
    }
    if (name.trim()) {
      messageText += `*Nome:* ${name.trim()}\n`;
    }
    if (businessName.trim()) {
      messageText += `*Empresa/Negócio:* ${businessName.trim()}\n`;
    }
    if (description.trim()) {
      messageText += `${description.trim()}`;
    }

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${defaultPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-[#090F0F]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#161D1D] border border-[#3F4948] rounded-xl shadow-2xl p-4 sm:p-6 text-[#DDE4E3] my-auto box-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3 mb-4 border-b border-[#252B2B]">
          <div className="pr-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#1A2121] text-[#80D5D4] border border-[#004F4F] mb-1.5">
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>Contato Direto WhatsApp</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#DDE4E3]">
              Fale Direto Comigo
            </h2>
            <p className="text-xs text-[#BEC9C8] mt-1">
              Atendimento rápido em linguagem simples para entender o seu negócio.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#BEC9C8] hover:text-[#DDE4E3] hover:bg-[#252B2B] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Context Banner */}
        <div className="mb-4 p-3 bg-[#1A2121] rounded-lg border border-[#252B2B] text-xs text-[#BEC9C8]">
          <span className="text-[#80D5D4] font-medium">Origem do contato:</span>{' '}
          <span className="text-[#DDE4E3] font-medium">{context.source}</span>
          {context.projectTitle && (
            <div className="mt-1 text-[#DDE4E3]">
              <span className="text-[#80D5D4]">Exemplo de interesse:</span> {context.projectTitle}
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppRedirect} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#BEC9C8] mb-1">
              Seu Nome ou da Sua Empresa
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Silva ou Loja Exemplo"
              className="w-full px-3 py-2.5 bg-[#090F0F] border border-[#3F4948] rounded-lg text-xs sm:text-sm text-[#DDE4E3] placeholder-[#889392] focus:outline-none focus:border-[#80D5D4] focus:ring-1 focus:ring-[#80D5D4] transition-all box-border"
            />
          </div>

          <div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#BEC9C8] mb-1">
                Ramo do Seu Negócio
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ex: Loja, Clínica, Serviços"
                className="w-full px-3 py-2.5 bg-[#090F0F] border border-[#3F4948] rounded-lg text-xs sm:text-sm text-[#DDE4E3] placeholder-[#889392] focus:outline-none focus:border-[#80D5D4] focus:ring-1 focus:ring-[#80D5D4] transition-all box-border"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#BEC9C8] mb-1">
              O que seu negócio precisa hoje?
            </label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva se precisa criar um site, refazer um existente ou se quer tirar dúvidas."
              className="w-full px-3 py-2.5 bg-[#090F0F] border border-[#3F4948] rounded-lg text-xs sm:text-sm text-[#DDE4E3] placeholder-[#889392] focus:outline-none focus:border-[#80D5D4] focus:ring-1 focus:ring-[#80D5D4] transition-all resize-none box-border"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#80D5D4] hover:bg-[#9CF1F0] text-[#003737] font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              <span>Continuar para o WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Footer Guarantee */}
        <div className="mt-4 pt-3 border-t border-[#252B2B] flex items-center justify-center gap-2 text-xs text-[#889392]">
          <ShieldCheck className="w-4 h-4 text-[#80D5D4] shrink-0" />
          <span>Atendimento direto e sem intermediários</span>
        </div>
      </div>
    </div>
  );
};
