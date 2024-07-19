import { useState } from "react";
import TermosDeServiço from "../Termos";

const Footer = () => {
  const [onTermos, setOnTermos] = useState(false);

  function handleTermosVisible() {
    setOnTermos(true);
  }

  function handleTermosInvisible() {
    setOnTermos(false);
  }

  return (
    <footer className="w-full h-full py-4 relative px-2 lg:px-0">
      <div className="absolute top-0 left-0 inset-0 bg-banner -z-10 brightness-50"></div>
      <div className="w-full max-w-[1200px] mx-auto flex items-center text-zinc-50 justify-between border-b pb-4">
        <img className="w-28 lg:w-32" src="/logo.png" alt="Logo" />
        <nav className="flex gap-2 lg:gap-4 font-semibold lg:text-xl">
          <a href="/#sobre">Sobre</a>
          <button onClick={handleTermosVisible}>Política de Privacidade</button>
          <a href="">Contato</a>
        </nav>
      </div>
      <div className="text-center text-zinc-50 text-lg py-1">
        Desenvolvido por Webster Dev © 2024
      </div>

      {onTermos && (
        <TermosDeServiço handleTermosInvisible={handleTermosInvisible} />
      )}
    </footer>
  );
};

export default Footer;
