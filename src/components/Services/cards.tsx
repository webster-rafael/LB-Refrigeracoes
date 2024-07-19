import { AiFillSafetyCertificate } from "react-icons/ai";
import { GrConfigure } from "react-icons/gr";
import { MdHandyman } from "react-icons/md";
import { RiContractFill } from "react-icons/ri";

interface Props {
  icone: string;
  titulo: string;
  paragraf: string;
}

const CardsService = ({ icone, titulo, paragraf }: Props) => {
  return (
    <div className="bg-white h-80 p-6 lg:p-4 space-y-2 rounded-md shadow-md">
      <span>
        {icone === "GrConfigure" ? (
          <GrConfigure className="size-8 text-blue-700" />
        ) : icone === "MdHandyman" ? (
          <MdHandyman className="size-8 text-blue-700" />
        ) : icone === "RiContractFill" ? (
            <RiContractFill className="size-8 text-blue-700" />
          ) : icone === "AiFillSafetyCertificate" ? (
            <AiFillSafetyCertificate className="size-8 text-blue-700" />
          ) : (
            ""
          )}
      </span>
      <h1 className="text-2xl lg:text-3xl font-semibold text-center w-full">{titulo}</h1>
      <p className="lg:text-xl text-zinc-500">{paragraf}</p>
    </div>
  );
};

export default CardsService;
