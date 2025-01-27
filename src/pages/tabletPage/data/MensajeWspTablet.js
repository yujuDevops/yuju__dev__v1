export const MensajeWspTablet = (title) => {
    const message = `Hola, quisiera información sobre el ${title}.`;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };