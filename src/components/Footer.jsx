function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-400 py-6">
      <div className="container mx-auto px-6 lg:px-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Sagrada Influência. Todos os direitos reservados.</p>
        {/* Se você tiver uma política de privacidade, pode linkar aqui. */}
        {/* <a href="/privacidade" className="hover:text-white">Política de Privacidade</a> */}
      </div>
    </footer>
  );
}

export default Footer;