
import { useState } from "react"
import "./step-three.css"

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return null // Placeholder, implement modal content as needed
}

export default function StepThree({ resumen, onNuevaCotizacion }) {
  const [showThankYouModal, setShowThankYouModal] = useState(false)

  const handleSendQuotation = () => {
    setShowThankYouModal(true)
  }

  return (
    <div className="zxcvbn-overlay-wrapper">
      <div className="qwerty-modal-container">
        <button className="asdfgh-close-button" onClick={onNuevaCotizacion}>
          ×
        </button>

        <div className="poiuyt-content-wrapper">
          <div className="mnbvcx-left-section">
            <h2 className="lkjhgf-main-title">¡Gracias por elegirnos!</h2>
            <p className="zxcvbn-subtitle-text">
              En breve nuestra asesora de Yuju se pondrá en contacto para brindarte la mejor cobertura para tu auto.
            </p>

            <div className="asdfgh-products-section">
              <h3>Mirá que otros seguros ofrecemos:</h3>
              <div className="poiuyt-grid-container">
                <div className="mnbvcx-product-card">
                  <div className="lkjhgf-icon-wrapper">
                    <img
                      src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1723258522/Card-hogar_uma28x.png"
                      alt="Hogar"
                    />
                  </div>
                  <span>Hogar</span>
                  <button className="zxcvbn-action-button">Ver más</button>
                </div>
                <div className="mnbvcx-product-card">
                  <div className="lkjhgf-icon-wrapper">
                    <img
                      src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1723258519/Card-celular_rygkcr.png"
                      alt="Celular"
                    />
                  </div>
                  <span>Celular</span>
                  <button className="zxcvbn-action-button">Ver más</button>
                </div>
                <div className="mnbvcx-product-card">
                  <div className="lkjhgf-icon-wrapper">
                    <img
                      src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1723258518/Card-retiro_nktytn.png"
                      alt="Retiro"
                    />
                  </div>
                  <span>Retiro</span>
                  <button className="zxcvbn-action-button">Ver más</button>
                </div>
              </div>
            </div>
          </div>

          <div className="qwerty-right-section">
            <div className="asdfgh-branding-wrapper">
              <img
                src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1756681416/YUJUU_bzt3hg.png"
                alt="YUJU Branding"
                className="poiuyt-logo-image"
              />
              <img
                src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1756681532/Group_282_oew5iz.png"
                alt="YUJU Character"
                className="mnbvcx-character-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
