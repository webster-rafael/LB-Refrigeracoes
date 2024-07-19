import { ImWhatsapp } from "react-icons/im";

const Header = () => {
  return (
    <header className="w-full h-20 bg-transparent absolute z-10 py-1 px-3 lg:px-0">
      <div className="flex text-zinc-50 justify-center lg:justify-between items-center w-full max-w-[1200px] mx-auto">
        <a href="/">
          <img className="w-40" src="/logo.png" alt="Logo" />
        </a>
        <nav className="hidden lg:block space-x-4">
          <a
            className="uppercase font-narrow font-semibold text-xl hover:border-b-2 hover:border-zinc-200"
            href="/"
          >
            Home
          </a>
          <a
            className="uppercase font-narrow font-semibold text-xl hover:border-b-2 hover:border-zinc-200"
            href="/#service"
          >
            Serviços
          </a>
          <a
            className="uppercase font-narrow font-semibold text-xl hover:border-b-2 hover:border-zinc-200"
            href="/#sobre"
          >
            Quem Somos
          </a>
          <a
            className="uppercase font-narrow font-semibold text-xl hover:border-b-2 hover:border-zinc-200"
            href="https://api.whatsapp.com/send?phone=5521978737571&text=Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida!"
          target="_blank">
            Contato
          </a>
        </nav>
        <a className="hidden lg:block" href="https://api.whatsapp.com/send?phone=5521978737571&text=Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida!" target="_blank">
          <ImWhatsapp className="size-8 hover:scale-125" />
        </a>
      </div>
    </header>
  );
};

export default Header;
