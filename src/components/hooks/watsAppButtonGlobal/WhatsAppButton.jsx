import { useState, useEffect } from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (window.innerWidth <= 600) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5491156307246"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isVisible ? "visible" : ""}`}
    >
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732423863/whatsapp-img_bzvj0d.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;