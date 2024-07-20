import { BsHouseUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { TbBuildingSkyscraper } from "react-icons/tb";

const Banner = () => {
  return (
    <section className="w-full font-narrow lg:mb-0">
      <div className="w-full h-[600px] 2xl:h-[900px] bg-banner-cel lg:bg-banner xl:bg-banner1366 2xl:bg-banner1920x1080 rounded-b-md shadow-zinc-500 flex">
        <div className="w-[600px] h-full flex items-center justify-center relative mx-5 xl:mx-20 2xl:mx-40">
          <h1 className="w-80 sm:w-full flex flex-col justify-center items-center text-zinc-50 text-4xl text-center xl:text-6xl 2xl:text-7xl">
            <span className="p-1 rounded-md font-semibold">
              Especialistas
            </span>{" "}
            em soluções completas para instalação e manutenção de
            <span className="w-[70%] bg-gradient-to-r from-blue-600 to-blue-950 p-1 rounded-md font-semibold">ar-condicionado.</span>
          </h1>
          <div className="xl:w-3/4 justify-start items-start grid grid-cols-4 gap-5 absolute bottom-0">
            <div className="w-full h-40 flex flex-col justify-center text-center items-center lg:text-2xl text-zinc-50">
              <FaUsers className="size-10" />
              <span className="text-xl lg:text-3xl font-semibold">3,000+</span>
              <span>Clientes</span>
            </div>
            <div className="w-full h-40 flex flex-col justify-center text-center items-center lg:text-2xl text-zinc-50">
              <GrConfigure className="size-10" />
              <span className="text-xl lg:text-3xl font-semibold">5,300+</span>
              <span>Atendimentos</span>
            </div>

            <div className="w-full h-40 flex flex-col justify-center text-center items-center lg:text-2xl text-zinc-50">
              <TbBuildingSkyscraper className="size-10" />
              <span className="text-xl lg:text-3xl font-semibold">120+</span>
              <span>Empresas</span>
            </div>

            <div className="w-full h-40 flex flex-col justify-center text-center items-center lg:text-2xl text-zinc-50">
              <BsHouseUp className="size-10" />
              <span className="text-xl lg:text-3xl font-semibold">5+</span>
              <span>Anos</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Banner;
