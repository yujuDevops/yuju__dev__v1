
import { useState, useEffect } from "react"
import "./DiscountModal.css"

const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const sendMessage = () => {
    const message = `¡Hola! Vi en la web el 30% OFF en seguro de auto y quiero aprovechar esta promoción. ¿Me pueden ayudar?`;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    // Check if the screen is mobile size
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="auto_modal_overlay_x7z" onClick={closeModal}>
      <div
        className={`auto_discount_modal_j9k ${isMobile ? "auto_mobile_y2q" : "auto_desktop_p5r"}`}
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el overlay
      >
        <button className="auto_close_button_m3v" onClick={closeModal}>
          <span>×</span>
        </button>
        <div className="auto_modal_content_f8s">
          <h1 className="auto_discount_title_c4w">¡30% OFF en tu seguro de auto!</h1>
          <p className="auto_discount_description_l6t">Solo por tiempo limitado. Consultá ahora con un asesor.</p>
          <a onClick={sendMessage} className="auto_whatsapp_button_g2h">
            <img
              src="https://res.cloudinary.com/dgx3mbzfr/image/upload/v1743429309/logowhatsapp_blanco_pb7zz1.png"
              alt="WhatsApp"
              className="auto_whatsapp_icon_d1n"
            />
            ¡Quiero mi descuento!
          </a>
        </div>
      </div>
    </div>
  )
}

export default DiscountModal