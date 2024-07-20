import Grid from "./grid";

const GaleriaDeServiços = () => {
  return (
    <section
      className="w-full xl:max-w-[1200px] 2xl:max-w-full font-narrow relative"
      id="service"
    >
      <div className="w-full max-w-[1200px] z-20 h-full py-10 mx-auto flex flex-col justify-center">
        <h1 className="pl-3 lg:pl-0 text-3xl lg:text-5xl text-zinc-600 font-semibold border-b border-zinc-300">
          Galeria de nossos Serviços
        </h1>
        <div className="w-full grid lg:grid-cols-2 gap-3 gap-y-3 py-10 px-3">
          <Grid img="/galeria (1).jpeg" />
          <Grid img="/galeria (2).jpeg" />
          <Grid img="/galeria (3).jpeg" />
          <Grid img="/galeria (4).jpeg" />
        </div>
      </div>
    </section>
  );
};

export default GaleriaDeServiços;
