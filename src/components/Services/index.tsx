import CardsService from "./cards";

const Services = () => {
  return (
    <section className="w-full h-full xl:max-w-[1200px] 2xl:max-w-full font-narrow relative" id="service">
      <div className="absolute top-0 left-0 inset-0 bg-background -z-10 opacity-40"></div>
      <div className="w-full max-w-[1200px] z-20 h-full py-10 mx-auto flex flex-col justify-center">
        <h1 className="pl-3 lg:pl-0 text-3xl lg:text-5xl text-zinc-600 font-semibold border-b border-zinc-300">
          Nossas especialidades | Serviços
        </h1>
        <div className="w-full grid lg:grid-cols-2 gap-5 py-5 px-5 lg:px-0">
          <CardsService
            icone="GrConfigure"
            titulo="Instalação"
            paragraf="Tenha a tranquilidade de saber que seu trabalho está sendo cuidado por profissionais experientes e qualificados. Nossa equipe se dedica a oferecer serviços de alta qualidade, garantindo que cada detalhe seja tratado com o máximo cuidado e competência. Confie em nós para entregar resultados excepcionais, proporcionando a você a paz de espírito de que precisa."
          />

          <CardsService
            icone="MdHandyman"
            titulo="Manutenção"
            paragraf="Garanta que seu ar condicionado funcione com eficiência, economize energia e dure por mais tempo! Com nossos serviços especializados, você assegura a manutenção adequada do seu equipamento, prevenindo desgastes e falhas. Nossa equipe de técnicos qualificados utiliza as melhores práticas para garantir o desempenho ideal do seu ar condicionado, proporcionando conforto, economia e maior vida útil."
          />

          <CardsService
            icone="RiContractFill"
            titulo="Contrato de Manutenção"
            paragraf="Assine um contrato de manutenção e garanta que seu ar condicionado funcione com eficiência, economize energia e dure por mais tempo! Com nossos serviços especializados, você terá a tranquilidade de contar com manutenções regulares, prevenindo desgastes e falhas. Nossa equipe de técnicos qualificados utiliza as melhores práticas para garantir o desempenho ideal do seu equipamento."
          />

          <CardsService
            icone="AiFillSafetyCertificate"
            titulo="Garantia de 6 meses"
            paragraf="Aproveite 6 meses de garantia em nossos serviços e mantenha seu ar condicionado operando com eficiência máxima, economizando energia e prolongando sua vida útil! Com nossa garantia, você pode ficar tranquilo, sabendo que qualquer problema será solucionado rapidamente e sem custos extras. Nossa equipe utilizanda as melhores práticas para assegurar o desempenho ideal do seu equipamento."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
