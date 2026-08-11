import React from 'react';

interface WhatsAppFloatProps {
  onOpenContact: (source: string) => void;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ onOpenContact }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex items-center gap-2 group">
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block py-1.5 px-3 bg-[#161D1D] text-[#DDE4E3] border border-[#252B2B] text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Falar no WhatsApp
      </span>

      {/* Floating Button */}
      <button
        onClick={() => onOpenContact('WhatsApp Floating Button')}
        className="p-3.5 sm:p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border-2 border-emerald-400/40"
        aria-label="Contato via WhatsApp"
        id="whatsapp-float-btn"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.115 1.028 6.979 2.894a9.837 9.837 0 012.888 6.985c-.001 5.447-4.43 9.877-9.86 9.877m0-18.167c-4.57 0-8.286 3.717-8.286 8.289 0 1.46.381 2.885 1.104 4.138l.172.297-.655 2.393 2.45-.642.287.171a8.256 8.256 0 004.922 1.393h.005c4.568 0 8.286-3.717 8.286-8.29 0-2.213-.861-4.293-2.428-5.861a8.22 8.22 0 00-5.857-2.438" />
        </svg>
      </button>
    </div>
  );
};
