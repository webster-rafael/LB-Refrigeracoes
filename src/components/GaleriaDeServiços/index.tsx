import Grid from "./grid";

const GaleriaDeServiços = () => {
  return (
    <section
      className="w-full xl:max-w-[1200px] 2xl:max-w-full font-narrow relative"
      id="service"
    >
        <div className="absolute top-0 left-0 inset-0 bg-background -z-20 opacity-40"></div>
      <div className="w-full max-w-[1200px] h-full py-10 mx-auto flex flex-col justify-center">
        <h1 className="pl-3 lg:pl-0 text-3xl lg:text-5xl text-zinc-600 font-semibold border-b border-zinc-300">
          Galeria de nossos Serviços
        </h1>
        <div className="w-full grid lg:grid-cols-2 gap-3 gap-y-3 -z-10 py-10 px-3">
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
