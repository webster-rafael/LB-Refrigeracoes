import { RiWhatsappFill } from "react-icons/ri";
import Sobre from "./components/About/sobre";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Formulario from "./components/Formulário";
import Services from "./components/Services";

function App() {
  return (
    <main className="w-full relative">
      <a className="" href="https://api.whatsapp.com/send?phone=5521978737571&text=Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida!" target="_blank">
        <RiWhatsappFill className="text-green-700 fixed bottom-4 size-16 right-4 animate-bounce cursor-pointer" />
      </a>

      <Banner />
      <Services />
      <Sobre />
      <Formulario />
      <Footer />
    </main>
  );
}

export default App;