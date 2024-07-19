import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleInputEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const phoneNumber = "+5521978737571";
    const message = `Olá, Meu Nome é ${name}, gostaria de receber ofertas no meu e-mail: ${email}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    
  }
  return (
    <section className="w-full h-full my-10 2xl:my-0 px-4 lg:px-0">
      <div className="w-full max-w-[1200px] mx-auto flex h-full flex-col justify-center">
        <h1 className="text-2xl lg:text-5xl text-zinc-600 font-semibold border-b border-zinc-300">
          Preencha seus dados para receber ofertas exclusivas
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col lg:flex-row gap-5 items-center py-5 lg:h-40"
        >
          <label className="flex gap-2 text-xl font-semibold text-gray-900 items-center">
            Seu nome
            <div className="flex items-center gap-1 border border-zinc-400 rounded-lg pl-2">
              <MdEmail className="text-zinc-500" />

              <input
                onChange={handleInputName}
                className="rounded-lg py-1 outline-none font-medium"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={name}
              />
            </div>
          </label>
          <label className="flex gap-2 text-xl font-semibold text-gray-900 items-center">
            Seu E-mail
            <div className="flex items-center gap-1 border border-zinc-400 rounded-lg pl-2">
              <MdEmail className="text-zinc-500" />

              <input
                onChange={handleInputEmail}
                className="rounded-lg py-1 outline-none font-medium"
                type="text"
                name="e-mail"
                placeholder="Digite seu e-mail"
                value={email}
              />
            </div>
          </label>
          <button type="submit" className="w-32 py-2 rounded-lg bg-banner text-zinc-50 hover:scale-110">
            Receber Ofertas
          </button>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
