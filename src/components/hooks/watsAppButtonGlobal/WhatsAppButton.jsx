import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    return (
      <a
        href="https://wa.me/5491156307246" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732423863/whatsapp-img_bzvj0d.png" alt="WhatsApp" />
      </a>
    );
  };
  
  export default WhatsAppButton;
  