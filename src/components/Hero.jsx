import FeedImg from "../assets/landing-page/feed.png";

function Hero() {
  return (
    <div className="bg-landingpagebg">
      {/* 1. Usamos um grid de 12 colunas para mais controle */}
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Coluna de Texto (Bloco 1: Título e Subtítulo) */}
        {/* 2. O texto ocupa 5 colunas em telas grandes */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl tracking-tight text-neutral-900">
            Cansado de organizar pastorais por <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">planilhas</span> e avisos em <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">WhatsApp</span>?
          </h1>
          
          <p className="mt-6 text-lg max-w-2xl text-neutral-600">
            O Anima centraliza a colaboração das suas pastorais e cria um portal de informações para engajar os fiéis. A ponte digital da sua comunidade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-10 gap-4">
            <a 
              href="#inscrever" 
              className="bg-gradient-to-r from-lightgolden to-darkgolden py-3 px-8 text-base font-semibold text-white rounded-md shadow-lg hover:opacity-90 transition-opacity"
            >
              Quero demonstrar interesse
            </a>
          </div>
        </div>

        {/* Bloco 1: Visual (Prova) */}
        {/* 3. A imagem ocupa 7 colunas, ficando visivelmente maior */}
        <div className="lg:col-span-7">
          
          {/* --- O MOCKUP PROFISSIONAL --- */}
          {/* 4. Criamos um "frame" de janela para a imagem */}
          <div className="relative w-full rounded-xl shadow-2xl border border-neutral-200/50 bg-white">
            
            {/* O cabeçalho da "janela" com os botões */}
            <div className="flex items-center h-8 lg:h-10 px-4 bg-neutral-100 rounded-t-xl border-b border-neutral-200">
              <div className="flex space-x-2">
                {/* Botões de controle (estilo macOS) */}
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            {/* 5. A Imagem (Screenshot) */}
            <img 
              src={FeedImg} 
              alt="Dashboard do Sistema Anima" 
              className="w-full rounded-b-xl" // Apenas cantos inferiores arredondados
            />
          </div>
          {/* --- FIM DO MOCKUP --- */}

        </div>

      </div>
    </div>
  );
}

export default Hero;