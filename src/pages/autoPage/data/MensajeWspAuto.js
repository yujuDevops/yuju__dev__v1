export const MensajeWspAuto = (title = "") => {
    const message = `Hola, quiero contratar un seguro de auto
  🔶Marca: 
  🔶Versión: 
  🔶Año: 
  🔶Localidad: 
  `;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };