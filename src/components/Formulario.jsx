import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle } from 'lucide-react';

const FORM_ID = import.meta.env.VITE_FORM_ID;

function Formulario() {
  const [state, handleSubmit] = useForm(FORM_ID);
  
  // 3. NÃO precisamos mais do useState (formData) nem do handleChange

  // Estilo de input (mantido)
  const inputStyle = "block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-darkgolden sm:text-sm/6";
  
  // Estilo para os erros de validação
  const errorStyle = "text-red-600 text-sm mt-1";

  // 4. Se o formulário foi enviado com sucesso, mostre uma bela mensagem
  if (state.succeeded) {
    return (
      <div id="inscrever" className="py-20 bg-landingpagebg">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          <div className="bg-lightgray p-8 rounded-2xl shadow-lg border border-neutral-200 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Inscrição recebida!
            </h2>
            <p className="text-lg text-neutral-600">
              Obrigado por se registrar! Entraremos em contato em breve para agendar sua apresentação.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="inscrever" className="py-20 bg-landingpagebg">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        
        {/* Título e Subtítulo */}
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
          
          {/* 6. O onSubmit={handleSubmit} agora é o do Formspree */}
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
                    name="nomeCompleto" // O 'name' é o que o Formspree usa
                    type="text"
                    autoComplete="name"
                    required
                    className={inputStyle}
                    // 7. Removido 'value' e 'onChange'
                  />
                </div>
                {/* 8. Corrigido 'field' para 'nomeCompleto' e adicionado 'className' */}
                <ValidationError 
                  field="nomeCompleto" 
                  prefix="Nome Completo" 
                  errors={state.errors} 
                  className={errorStyle} 
                />
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Seu melhor e-mail <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email" // O 'name' é o que o Formspree usa
                    type="email"
                    autoComplete="email"
                    required
                    className={inputStyle}
                    // Removido 'value' e 'onChange'
                  />
                </div>
                <ValidationError 
                  field="email" 
                  prefix="Email" 
                  errors={state.errors} 
                  className={errorStyle} 
                />
              </div>

              {/* Nome da Paróquia */}
              <div>
                <label htmlFor="nomeParoquia" className="block text-sm/6 font-medium text-gray-900">
                  Nome da Paróquia <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="nomeParoquia"
                    name="nomeParoquia" // O 'name' é o que o Formspree usa
                    type="text"
                    required
                    className={inputStyle}
                    // Removido 'value' e 'onChange'
                  />
                </div>
                <ValidationError 
                  field="nomeParoquia" 
                  prefix="Nome da Paróquia" 
                  errors={state.errors} 
                  className={errorStyle} 
                />
              </div>

              {/* WhatsApp (Opcional) */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm/6 font-medium text-gray-900">
                  WhatsApp (Opcional, para agendamento)
                </label>
                <div className="mt-2">
                  <input
                    id="whatsapp"
                    name="whatsapp" // O 'name' é o que o Formspree usa
                    type="tel"
                    autoComplete="tel"
                    placeholder="(XX) XXXXX-XXXX"
                    className={inputStyle}
                    // Removido 'value' e 'onChange'
                  />
                </div>
                {/* Campo opcional, não precisa de validação */}
              </div>

            </div>

            {/* Botão CTA Final (Bloco 5) */}
            <div className="mt-8 flex flex-col items-center">
              <button
                type="submit"
                // 9. Desabilita o botão enquanto está enviando
                disabled={state.submitting}
                className="w-full rounded-md bg-gradient-to-r from-lightgolden to-darkgolden px-8 py-3 text-lg font-semibold text-white shadow-lg transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-darkgolden focus:ring-offset-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* 10. Muda o texto do botão durante o envio */}
                {state.submitting ? 'Enviando...' : 'Garantir minha vaga no piloto!'}
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