import { RiWhatsappFill } from "react-icons/ri";
import Sobre from "./components/About/sobre";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Formulario from "./components/Formulário";
import Services from "./components/Services";
import GaleriaDeServiços from "./components/GaleriaDeServiços";

function sendWhatsAppMessage(phoneNumber: number) {
  const message = "Olá, tenho uma dúvida";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
}

function App() {
  return (
    <main className="w-full relative">
      <div className=" flex items-center justify-center fixed bottom-4 size-16 right-4 z-20">
        <button
        onClick={() => sendWhatsAppMessage(21989127786)}
          className=""
         
        >
          <RiWhatsappFill className="text-green-700 size-16 animate-bounce cursor-pointer" />
        </button>
      </div>

      <Banner />
      <Services />
      <Sobre />
      <GaleriaDeServiços />
      <Formulario />
      <Footer />
    </main>
  );
}

export default App;
