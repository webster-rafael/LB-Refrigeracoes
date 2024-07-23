const ButtonOrçamento = () => {
    function sendWhatsAppMessage(phoneNumber: number) {
        const message = "Olá! Quero solicitar um orçamento!";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        window.open(url, '_blank');
      }
  return (
    <button onClick={() => sendWhatsAppMessage(5521989127786)} className="bg-banner w-2/4 lg:w-2/6 h-12 rounded-lg text-zinc-50 mx-auto hover:scale-110 hover:border border-blue-500">
      Solicite um orçamento gratuito
    </button>
  );
};

export default ButtonOrçamento;
