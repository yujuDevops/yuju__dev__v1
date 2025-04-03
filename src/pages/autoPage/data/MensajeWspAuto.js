export const MensajeWspAuto = (title = "") => {
    const message = `¡Hola! Vi en la web el 30% OFF en seguro de auto y quiero aprovechar esta promoción.
  `;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
    };