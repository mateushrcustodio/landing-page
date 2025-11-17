// src/components/piloto/Bloco4_ComoFunciona.jsx 
// (Ou o nome que você deu ao arquivo)

function ComoFunciona() {
  return (
    <div id="como-funciona" className="py-20 bg-lightgray">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          
          {/* TÍTULO ATUALIZADO: Remove "Teste Gratuito" e foca no futuro */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-neutral-900">
            Faça parte do <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">lançamento</span>
          </h2>

          {/* SUBTÍTULO NOVO: Explica que está em desenvolvimento */}
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            O sistema Anima está em fase final de desenvolvimento. Demonstre seu interesse e seja o primeiro a saber das novidades!
          </p>

        </div>
        
        {/* Estrutura de Passos ATUALIZADA */}
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          
          {/* Passo 1: Foco em "Interesse", não "Inscrição" */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-darkgolden rounded-full mx-auto text-darkgolden text-2xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-800">Demonstre seu interesse</h3>
            <p className="mt-2 text-neutral-600">Você preenche o formulário rápido abaixo para entrar em nossa lista de espera.</p>
          </div>
          
          {/* Passo 2: Transparência sobre o desenvolvimento */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-darkgolden rounded-full mx-auto text-darkgolden text-2xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-800">Estamos em desenvolvimento</h3>
            <p className="mt-2 text-neutral-600">Estamos empenhados em construir a melhor plataforma, focada nas necessidades reais das paróquias.</p>
          </div>
          
          {/* Passo 3: Promessa de "Notificação", não "Acesso" */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-darkgolden rounded-full mx-auto text-darkgolden text-2xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-800">Seja o primeiro a saber</h3>
            <p className="mt-2 text-neutral-600">Assim que o Anima for lançado, você receberá um convite exclusivo para conhecer o sistema.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;