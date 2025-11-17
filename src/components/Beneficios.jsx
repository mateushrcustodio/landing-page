import { ClipboardList, Megaphone, BookOpen } from "lucide-react"; 
import CardRecursos from "./CardRecursos"; // Reutilizando seu componente

function Beneficios() {
  return (
    <div id="beneficios" className="relative py-20 bg-lightgray">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          
          {/* O Título está ótimo */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-wide text-neutral-900">
            Organize o <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">dia a dia</span> de sua paróquia e foque no que <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">realmente importa</span>
          </h2>

          {/* 2. NOVO SUBTÍTULO para dar contexto */}
          <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
            Facilite a colaboração interna das pastorais e mantenha os fiéis engajados com um portal de informações sempre atualizado.
          </p>
        </div>
        
        {/* 3. NOVOS BENEFÍCIOS REAIS */}
        <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
          
          {/* Benefício 1: Organização Interna (Pastorais + Escalas) */}
          <CardRecursos 
            Icon={ClipboardList}
            title="Gestão de pastorais e escalas"
            description="Centralize a organização das suas pastorais e crie escalas de serviço para missas e eventos de forma simples."
          />
          
          {/* Benefício 2: Comunicação Pública (Agenda, Feed, Missas) */}
          <CardRecursos 
            Icon={Megaphone}
            title="Comunicação pública unificada"
            description="Publique comunicados, horários de missas e a agenda paroquial em um portal acessível a todos os fiéis."
          />
          
          {/* Benefício 3: Recurso Espiritual (Liturgia) */}
          <CardRecursos 
            Icon={BookOpen}
            title="Recurso espiritual acessível"
            description="Disponibilize a Liturgia Diária de forma prática, ajudando a nutrir a vida de oração da sua comunidade."
          />

        </div>
      </div>
    </div>
  );
}

export default Beneficios;