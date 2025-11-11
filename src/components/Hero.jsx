import FeedImg from "../assets/landing-page/feed.png";

function Hero() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna de Texto (Bloco 1: Título e Subtítulo) */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl tracking-tight text-neutral-900">
            Cansado de gerir o dízimo e a agenda da paróquia em <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">planilhas</span>?
          </h1>
          
          <p className="mt-6 text-lg max-w-2xl text-neutral-600">
            O Anima centraliza a gestão de fiéis, finanças e eventos. Simples, seguro e pensado para a sua paróquia.
          </p>
          
          {/* Bloco 1: CTA Principal */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-10 gap-4">
            <a 
              href="#inscrever" 
              className="bg-gradient-to-r from-lightgolden to-darkgolden py-3 px-8 text-base font-semibold text-white rounded-md shadow-lg hover:opacity-90 transition-opacity"
            >
              Quero participar do piloto gratuito
            </a>
          </div>
        </div>

        {/* Bloco 1: Visual (Prova) */}
        <div className="flex justify-center">
          <img src={FeedImg} alt="Dashboard do Sistema Anima" className="rounded-lg shadow-xl ring-1 ring-black/5" />
        </div>

      </div>
    </div>
  );
}

export default Hero;