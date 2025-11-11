function ProvaVisual() {
  return (
    <div id="prova-visual" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-neutral-900">
            Veja o <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">Anima</span> em Ação
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Screenshot 1 - Financeiro */}
          <img src="src/assets/landing-page/liturgia.png" alt="Tela de Gestão Financeira" className="rounded-lg shadow-lg" />
          
          {/* Screenshot 2 - Membros */}
          <img src="src/assets/landing-page/pastorais.png" alt="Tela de Gestão de Membros" className="rounded-lg shadow-lg" />
          
          {/* Screenshot 3 - Agenda */}
          <img src="src/assets/landing-page/contato-horarios.png" alt="Tela da Agenda Paroquial" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default ProvaVisual;