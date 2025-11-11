import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Beneficios from "../components/Beneficios"
import ProvaVisual from "../components/ProvaVisual"
import ComoFunciona from "../components/ComoFunciona"
import Formulario from "../components/Formulario"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Beneficios />
      <ProvaVisual />
      <ComoFunciona />
      <Formulario />
      <Footer />
    </>
  );
};

export default LandingPage;
