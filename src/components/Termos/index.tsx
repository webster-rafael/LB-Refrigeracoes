interface Props {
  handleTermosInvisible: () => void;
}
const TermosDeServiço = ({ handleTermosInvisible }: Props) => {
  return (
    <section className="w-screen h-screen inset-0 fixed z-30">
      <div className="absolute top-0 left-0 inset-0 bg-zinc-900 z-20 opacity-90"></div>
      <div className="absolute p-4 w-full max-w-2xl max-h-full z-50 inset-0 top-0 overflow-y-auto left-2/4 -translate-x-2/4 ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Termos de Serviço
            </h3>
            <button
              onClick={handleTermosInvisible}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-sm lg:text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Ao acessar e utilizar o site LB Refrigerações, você concorda em
              cumprir e estar vinculado aos seguintes Termos de Serviço. Caso
              não concorde com estes Termos, não utilize este Site.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Reservamo-nos o direito de alterar estes Termos a qualquer
              momento. As alterações serão publicadas nesta página, e a
              continuidade do uso do Site após a publicação das alterações
              constituirá sua aceitação dos novos Termos.
            </p>

            <p className="text-sm lg:text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Você concorda em utilizar o Site apenas para fins lícitos e de
              acordo com estes Termos. Você concorda em não: Utilizar o Site de
              qualquer maneira que possa desativar, sobrecarregar, danificar ou
              prejudicar o Site. Tentar obter acesso não autorizado a qualquer
              parte do Site, sistemas ou redes conectadas ao Site. Usar qualquer
              dispositivo, software ou rotina para interferir no funcionamento
              adequado do Site.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Todo o conteúdo do Site, incluindo textos, gráficos, logotipos,
              ícones, imagens, clipes de áudio, downloads, interfaces e código
              de software, é de propriedade da LB Refrigerações ou de seus
              fornecedores de conteúdo e é protegido pelas leis de direitos
              autorais, marcas registradas e outras leis de propriedade
              intelectual. O uso não autorizado do conteúdo pode violar essas
              leis e é estritamente proibido.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Todas as descrições, imagens, referências, recursos, conteúdos,
              especificações, produtos e preços de produtos e serviços descritos
              ou representados no Site estão sujeitos a alterações a qualquer
              momento, sem aviso prévio. Reservamo-nos o direito de descontinuar
              qualquer produto a qualquer momento.
            </p>

            <p className="text-sm lg:text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Se qualquer disposição destes Termos for considerada inválida ou
              inexequível por qualquer tribunal de jurisdição competente, a
              invalidade ou inexequibilidade de tal disposição não afetará a
              validade das demais disposições destes Termos, que permanecerão em
              pleno vigor e efeito. Se tiver alguma dúvida sobre estes Termos de
              Serviço, entre em contato conosco em <a className="underline font-bold" href="https://api.whatsapp.com/send?phone=5521978737571&text=Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida!">Entrar em contato</a>.
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handleTermosInvisible}
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Eu aceito
            </button>
            <a
              href="/"
              data-modal-hide="default-modal"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Recusar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermosDeServiço;
