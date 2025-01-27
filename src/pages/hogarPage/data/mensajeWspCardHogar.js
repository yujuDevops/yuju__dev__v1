export const  WhatsApMsjCardHogar = (title="") => {
    const whatsappMessage = `Quiero contratar el plan: ${title}`;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/5491156307246?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };