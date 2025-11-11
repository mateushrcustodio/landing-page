import { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    nomeParoquia: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio para seu backend, Netlify, etc.
    console.log('Dados do formulário:', formData);
    alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
    // Limpar formulário
    setFormData({ nomeCompleto: '', email: '', nomeParoquia: '', whatsapp: '' });
  };

  // Estilo de input reutilizado do seu FaleConosco.jsx
  const inputStyle = "block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-darkgolden sm:text-sm/6";

  return (
    <div id="inscrever" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        
        {/* Título e Subtítulo do Bloco 5 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-neutral-900">
            Inscreva-se agora no <span className="bg-gradient-to-r from-lightgolden to-darkgolden text-transparent bg-clip-text">Piloto Gratuito</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Vagas limitadas. Seja um dos primeiros a modernizar sua gestão.
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-lightgray p-8 rounded-2xl shadow-lg border border-neutral-200">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              
              {/* Nome Completo */}
              <div>
                <label htmlFor="nomeCompleto" className="block text-sm/6 font-medium text-gray-900">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="nomeCompleto"
                    name="nomeCompleto"
                    type="text"
                    autoComplete="name"
                    required
                    className={inputStyle}
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Seu melhor e-mail <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputStyle}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Nome da Paróquia */}
              <div>
                <label htmlFor="nomeParoquia" className="block text-sm/6 font-medium text-gray-900">
                  Nome da Paróquia <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="nomeParoquia"
                    name="nomeParoquia"
                    type="text"
                    required
                    className={inputStyle}
                    value={formData.nomeParoquia}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* WhatsApp (Opcional) */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm/6 font-medium text-gray-900">
                  WhatsApp (Opcional, para agendamento)
                </label>
                <div className="mt-2">
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(XX) XXXXX-XXXX"
                    className={inputStyle}
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
              </div>

            </div>

            {/* Botão CTA Final (Bloco 5) */}
            <div className="mt-8 flex flex-col items-center">
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-lightgolden to-darkgolden px-8 py-3 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-darkgolden focus:ring-offset-2"
              >
                Garantir minha vaga no piloto!
              </button>

              {/* Bloco 6: Microcopy de Confiança */}
              <p className="mt-4 text-sm text-neutral-500">
                Sem compromisso. 100% gratuito e não pedimos dados de cartão.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;