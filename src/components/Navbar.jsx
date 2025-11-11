import Logo from "./Logo"; // Reutilizando seu Logo
import { Link } from "react-router-dom"; // Se estiver usando react-router

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-3 bg-lightgray border-b border-neutral-700/20">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          
          {/* Seu Logo existente */}
          <Logo />
          
          {/* CTA principal que leva ao formulário */}
          <div className="flex items-center">
            <a 
              href="#inscrever" 
              className="text-lightgray bg-gradient-to-r from-lightgolden to-darkgolden py-2 px-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Participar do Piloto Gratuito
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;