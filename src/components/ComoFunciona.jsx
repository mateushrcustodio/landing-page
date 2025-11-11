function ComoFunciona() {
  return (
    <div id="como-funciona" className="py-20 bg-lightgray">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-neutral-900">
            Como funciona o <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">Teste Gratuito</span>?
          </h2>
        </div>
        
        {/* Estrutura de Passos */}
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          
          {/* Passo 1 */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-darkgolden rounded-full mx-auto text-darkgolden text-2xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-800">Preencha o formulário</h3>
            <p className="mt-2 text-neutral-600">Você preenche o formulário de inscrição abaixo.</p>
          </div>
          
          {/* Passo 2 */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-darkgolden rounded-full mx-auto text-darkgolden text-2xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-800">Agende a apresentação</h3>
            <p className="mt-2 text-neutral-600">Nossa equipe entra em contato para uma breve apresentação de 15 minutos.</p>
          </div>
          
          {/* Passo 3 */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-darkgolden rounded-full mx-auto text-darkgolden text-2xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-800">Receba seu Acesso</h3>
            <p className="mt-2 text-neutral-600">Você recebe o acesso para testar o Anima na sua paróquia, sem custo e sem compromisso.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;