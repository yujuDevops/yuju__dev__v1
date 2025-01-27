export const MensajeWspRetiro = () => {
    const message = `Hola, quiero información sobre el seguro de Retiro.
  `;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };