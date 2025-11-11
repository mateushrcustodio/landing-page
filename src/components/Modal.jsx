import { X } from 'lucide-react';

function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-lg" }) {
  if (!isOpen) {
    return null; // Se não estiver aberto, não renderiza nada
  }

  return (
    // Backdrop (fundo escuro semi-transparente)
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose} // Fecha o modal ao clicar no fundo
    >
      {/* Painel do Modal */}
      <div
        className={`bg-white rounded-2xl shadow-xl w-full relative transition-transform duration-300 ${maxWidth}`}
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
      >
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center p-5 border-b border-neutral-200">
          <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-800 cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo do Modal (aqui entrará nosso formulário) */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;