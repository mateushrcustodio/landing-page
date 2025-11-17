// src/components/piloto/Bloco3ProvaVisual.jsx

import { useState } from 'react';
import { BookOpen, Users, MapPin, CalendarDays, User, Calendar, ClipboardList, History } from 'lucide-react'; // Ícones para os botões

// Suas imagens
import LiturgiaImg from "../assets/landing-page/liturgia.png";
import PastoraisImg from "../assets/landing-page/pastorais.png";
import ContatoHorariosImg from "../assets/landing-page/contato-horarios.png";
import HorariosMissasImg from "../assets/landing-page/horarios-missas.png";
import UsuariosImg from "../assets/landing-page/usuarios.png";
import AgendaImg from "../assets/landing-page/agenda.png";
import EscalasImg from "../assets/landing-page/escalas.png";
import HistoricoImg from "../assets/landing-page/historico.png";

const featuresData = [
  {
    id: 'pastorais', // Começar com o mais "central"
    src: PastoraisImg,
    alt: "Tela de Gestão de Pastorais no sistema Anima",
    title: "Gestão completa de pastorais",
    description: "Organize grupos, membros, atividades e escalas de todas as suas pastorais.",
    Icon: Users
  },
  {
    id: 'liturgia',
    src: LiturgiaImg,
    alt: "Tela da Liturgia Diária no sistema Anima",
    title: "Liturgia Diária automatizada",
    description: "Prepare suas celebrações com leituras e ritos do dia, sempre atualizados.",
    Icon: BookOpen
  },
  {
    id: 'horarios-missas',
    src: HorariosMissasImg,
    alt: "Tela de Horários de Missas da paróquia no sistema Anima",
    title: "Agenda de missas e eventos",
    description: "Publique e gerencie todos os horários de missas, batismos e eventos.",
    Icon: CalendarDays
  },
  {
    id: 'contato-horarios',
    src: ContatoHorariosImg,
    alt: "Tela de Contato e Horários da paróquia no sistema Anima",
    title: "Página de contato",
    description: "Mantenha fiéis informados com acesso fácil aos contatos e horários.",
    Icon: MapPin
  },
  {
    id: 'usuarios',
    src: UsuariosImg,
    alt: "Tela de Gestão de Usuários e Fiéis no sistema Anima",
    title: "Gestão de fiéis e usuários",
    description: "Cadastre, atualize e gerencie o perfil de todos os fiéis e agentes de pastoral.",
    Icon: User
  },
  {
    id: 'agenda',
    src: AgendaImg,
    alt: "Tela da Agenda Paroquial Integrada no sistema Anima",
    title: "Agenda paroquial integrada",
    description: "Gerencie missas, reuniões e eventos em um calendário único e acessível.",
    Icon: Calendar
  },
  {
    id: 'escalas',
    src: EscalasImg,
    alt: "Tela de Criação de Escalas de Serviço no sistema Anima",
    title: "Criação de escalas de missas",
    description: "Otimize a organização das pastorais criando e publicando as escalas.",
    Icon: ClipboardList
  },
  {
    id: 'historico',
    src: HistoricoImg,
    alt: "Tela de Histórico e Relatórios no sistema Anima",
    title: "Históricos da paróquia e dos padres",
    description: "Conheça mais a paróquia e todos os padres que atuaram nela.",
    Icon: History
  }
];

// --- Subcomponente Botão de Recurso ---
// Para evitar repetição de código, criamos um componente para o botão
function FeatureButton({ feature, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-start text-left p-4 lg:p-5 rounded-xl border
        transition-all duration-300 ease-in-out w-full cursor-pointer
        ${isActive
          ? 'bg-white shadow-lg border-darkgolden ring-2 ring-darkgolden/20 scale-105' // Estilo ATIVO
          : 'bg-white/70 border-neutral-200 shadow-sm hover:shadow-md hover:bg-white' // Estilo INATIVO
        }
      `}
    >
      {/* Ícone */}
      <div className={`flex-shrink-0 p-3 rounded-lg mr-4 ${isActive ? 'bg-lightgolden/30' : 'bg-neutral-100'}`}>
        <feature.Icon 
          className={isActive ? 'text-darkgolden' : 'text-neutral-600'} 
          size={20} // Ligeiramente menor para caber melhor
        />
      </div>
      {/* Texto */}
      <div className="w-full">
        <h4 className="text-base lg:text-lg font-semibold text-neutral-900">{feature.title}</h4>
        {/* Descrição escondida em telas pequenas e médias para limpar o layout */}
        <p className={`hidden lg:block mt-1 text-sm ${isActive ? 'text-neutral-700' : 'text-neutral-500'}`}>
          {feature.description}
        </p>
      </div>
    </button>
  );
}

// --- Componente Principal ---
function ProvaVisual() {
  const [activeFeatureId, setActiveFeatureId] = useState(featuresData[0].id); 
  const activeFeature = featuresData.find(f => f.id === activeFeatureId);

  // Dividimos os recursos em dois arrays
  const featuresCol1 = featuresData.slice(0, 4);
  const featuresCol2 = featuresData.slice(4, 8);

  return (
    <div id="prova-visual" className="py-20 lg:py-28 bg-landingpagebg overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Título */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-neutral-900">
            Veja o <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">Anima</span> em ação
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Descubra como cada ferramenta foi pensada para simplificar a gestão das informações e da colaboração da sua paróquia.
          </p>
        </div>
        
        {/* Container Principal: 3 Colunas (Recursos | Imagem | Recursos) */}
        {/* Layout: lg:grid-cols-4 (1fr | 2fr | 1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          
          {/* Coluna 1: Abas de Recursos (1-4) */}
          <div className="flex flex-col space-y-4 order-2 lg:order-1">
            {featuresCol1.map((feature) => (
              <FeatureButton
                key={feature.id}
                feature={feature}
                isActive={activeFeatureId === feature.id}
                onClick={() => setActiveFeatureId(feature.id)}
              />
            ))}
          </div>

          {/* Coluna 2: Visualização da Imagem (Central) */}
          <div className="w-full relative lg:col-span-2 order-1 lg:order-2">
            {activeFeature && (
              <img 
                key={activeFeature.id}
                src={activeFeature.src} 
                alt={activeFeature.alt} 
                className="
                  w-full rounded-xl shadow-2xl border-4 border-white
                  animate-fade-in
                " 
              />
            )}
            {/* Fundo sutil para dar profundidade */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-neutral-200 rounded-xl transform rotate-2 scale-95"></div>
          </div>

          {/* Coluna 3: Abas de Recursos (5-8) */}
          <div className="flex flex-col space-y-4 order-3 lg:order-3">
            {featuresCol2.map((feature) => (
              <FeatureButton
                key={feature.id}
                feature={feature}
                isActive={activeFeatureId === feature.id}
                onClick={() => setActiveFeatureId(feature.id)}
              />
            ))}
          </div>

        </div> {/* Fim do grid principal */}
      </div>
    </div>
  );
}

export default ProvaVisual;