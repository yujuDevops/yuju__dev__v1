
import { useState } from "react"
import "./modalStyles.css"

const initialState = {
  marca: "",
  año: "",
  version: "",
  localidad: "",
}

export const ModalComponent = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialState)

  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target

    // Validar que "Año" solo acepte números y tenga máximo 4 dígi
    if (name === "año" && !/^\d{0,4}$/.test(value)) {
      return
    }

    setFormData({ ...formData, [name]: value })
  
    // Limpiar el mensaje de error cuando el usuario comienza a corregir
    if (error) {
      setError("")
    }
  }

  const handleSendWhatsApp = () => {
    const { marca, año, version, localidad } = formData

    if (!marca || !año || !version || !localidad) {
      setError("Todos los campos son obligatorios.")
      return
    }

    if (marca.length < 3 || version.length < 3 || localidad.length < 3) {
      setError("Marca, versión y localidad deben tener al menos 3 caracteres.")
      return
    }

    if (año.length !== 4) {
      setError("El año debe tener exactamente 4 dígitos.")
      return
    }

    // Limpiar el error y mostrar un mensaje de éxito antes de abrir WhatsApp
    setError("")

    // Opcional: Puedes agregar un pequeño retraso para que el usuario vea que el formulario fue validado correctamente
    setTimeout(() => {
      const mensaje = `Hola, quiero cotizar un seguro para mi auto:
- Marca: ${marca}
- Año: ${año}
- Versión: ${version}
- Localidad: ${localidad}`

      const numeroWhatsApp = "5491156307246" // Reemplazar con el número de destino
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`

      window.open(url, "_blank")

      setFormData(initialState)

      onClose()


    }, 300)

 
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        <div className="modal-content">
          <h2 className="modal-title">¡Completá los siguientes datos y se va a contactar un asesor a la brevedad!</h2>

          <div className="separator"></div>

          <div className="form-row">
            <input
              type="text"
              name="marca"
              placeholder="Marca"
              value={formData.marca}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="año"
              placeholder="Año"
              value={formData.año}
              onChange={handleChange}
              maxLength={4}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="version"
              placeholder="Versión"
              value={formData.version}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="localidad"
              placeholder="Localidad"
              value={formData.localidad}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {error && (
            <div className="error-container">
              <p className="error-message-xew">{error}</p>
            </div>
          )}

          <button className="submit-button-ggbw" onClick={handleSendWhatsApp}>
            ¡Quiero cotizar!
          </button>

          <p className="info-text">
            Si querés una cotización necesitamos que completes tus datos. O si no contactate con nuestros asesores
            haciendo{" "}
            <a href="https://api.whatsapp.com/send/?phone=5491156307246&text=Hola%2C+quiero+cotizar+un+seguro+para+mi+auto" target="_blank" className="link">
              clic acá
            </a>
          </p>
        </div>

        <div className="vertical-divider"></div>

        <div className="sidebar">
          <div className="whatsapp-contact">
            <a href="https://api.whatsapp.com/send/?phone=5491156307246&text=Hola%2C+quiero+cotizar+un+seguro+para+mi+auto" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732423863/whatsapp-img_bzvj0d.png" alt="" />
            <span>Hablar con un asesor</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

