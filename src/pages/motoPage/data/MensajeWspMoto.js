export const MensajeWspMoto = (titulo="") => {
    const message = `Hola, estoy interesado en contratar un seguro de moto. 
  🔶Marca: 
  🔶Versión: 
  🔶Año: 
  🔶Localidad: 
  `;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };

