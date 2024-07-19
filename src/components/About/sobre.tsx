import { GiConfirmed } from "react-icons/gi";

const Sobre = () => {
  return (
    <section className="w-full max-w-[1200px] h-full px-3 lg:px-0" id="sobre">
      <h1 className="text-3xl lg:text-5xl text-zinc-600 font-semibold border-b border-zinc-300">
        Quem somos?
      </h1>
      <div className="w-full h-full grid lg:grid-cols-2 mt-10">
        <div className="flex flex-col relative h-full lg:h-[700px] p-5">
          <div className="absolute top-0 left-0 inset-0 bg-background -z-10 opacity-40"></div>
          <p className="text-lg lg:text-2xl">
            Na{" "}
            <span className="text-blue-700 font-semibold">LB Refrigeração</span>
            , nos dedicamos a estar sempre na vanguarda das inovações no setor
            de climatização, proporcionando a temperatura ideal para o seu
            conforto. Nosso objetivo é{" "}
            <strong>
              tornar seu ambiente climatizado e extremamente acolhedor
            </strong>
            , permitindo que você aproveite ao máximo cada momento. Para
            alcançar essa meta, trabalhamos com as marcas mais renomadas do
            mercado, garantindo produtos de alta qualidade, eficiência
            energética e durabilidade. Contamos com uma equipe altamente
            qualificada, que passa por constantes treinamentos e atualizações
            para oferecer o melhor atendimento e suporte técnico. Nossa equipe
            está preparada para atender desde instalações residenciais até
            grandes projetos comerciais e industriais, sempre com o compromisso
            de superar as expectativas de nossos clientes. Nossa cultura
            organizacional, cultivada ao longo dos anos, nos posiciona como uma
            das empresas{" "}
            <strong>
              mais reconhecidas na manutenção de ar condicionado e
              climatizadores
            </strong>
            .
          </p>
          <ul className="w-full h-full flex flex-col space-y-2 py-10">
            <li className="flex gap-2 items-center text-lg text-zinc-600">
              <GiConfirmed className="text-green-600" />
              Equipamentos Modernos
            </li>
            <li className="flex gap-2 items-center text-lg text-zinc-600">
              <GiConfirmed className="text-green-600" />
              Profissionais Treinados
            </li>
            <li className="flex gap-2 items-center  text-lg text-zinc-600">
              <GiConfirmed className="text-green-600" />
              Atendimento Rápido
            </li>
            <li className="flex gap-2 items-center  text-lg text-zinc-600">
              <GiConfirmed className="text-green-600" />
              Instalação Rápida
            </li>
          </ul>
        </div>
        <div className="w-full lg:h-[700px] rounded-r-lg">
          <img
            className="w-full h-full rounded-r-lg"
            src="/banner-2.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
