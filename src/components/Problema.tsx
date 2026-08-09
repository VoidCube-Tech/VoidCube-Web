import React from 'react';
import { AlertTriangle, UserX, MessageSquareOff } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/projectsData';

export const Problema: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-[#80D5D4]" />;
      case 'UserX':
        return <UserX className="w-5 h-5 text-[#80D5D4]" />;
      case 'MessageSquareOff':
        return <MessageSquareOff className="w-5 h-5 text-[#80D5D4]" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-[#80D5D4]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#161D1D] border-y border-[#252B2B]" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#DDE4E3] tracking-tight">
            Situações comuns enfrentadas por donos de negócios
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#BEC9C8]">
            A maioria dos problemas técnicos decorre de falta de clareza e de um parceiro de confiança.
          </p>
        </div>

        {/* 3 Problem Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="p-6 bg-[#0E1514] rounded-lg border border-[#252B2B]"
            >
              <div className="w-10 h-10 rounded bg-[#1A2121] border border-[#252B2B] flex items-center justify-center mb-4">
                {getIcon(card.iconName)}
              </div>

              <h3 className="text-base font-bold text-[#DDE4E3] mb-2 leading-snug">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#BEC9C8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
