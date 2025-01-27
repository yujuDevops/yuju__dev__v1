export const MensajeWspPcGamer = () => {
    const message = `Hola, quiero más detalles sobre el seguro para PC Gamer.
  `;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };