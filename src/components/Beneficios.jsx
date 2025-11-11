import { DollarSign, Users, CalendarDays } from "lucide-react"; 
import CardRecursos from "./CardRecursos"; // Reutilizando seu Card

function Beneficios() {
  return (
    <div id="beneficios" className="relative py-20 bg-lightgray">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-wide text-neutral-900">
            Organize sua paróquia e foque no que <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">realmente importa</span>
          </h2>
        </div>
        
        {/* Reutilizando seu CardRecursos com os novos benefícios */}
        <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
          <CardRecursos 
            Icon={DollarSign}
            title="Controle Financeiro Transparente"
            description="Tenha relatórios de dízimos e ofertas em segundos."
          />
          <CardRecursos 
            Icon={Users}
            title="Gestão de Fiéis Simplificada"
            description="Acesse o cadastro de famílias e membros de qualquer lugar."
          />
          <CardRecursos 
            Icon={CalendarDays}
            title="Agenda Paroquial Integrada"
            description="Gerencie missas, batismos e eventos sem conflitos de horário."
          />
        </div>
      </div>
    </div>
  );
}

export default Beneficios;