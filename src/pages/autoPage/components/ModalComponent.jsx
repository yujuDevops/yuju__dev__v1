import { useState } from "react";
import "./modalStyles.css";

export const ModalComponent = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    marca: "",
    año: "",
    version: "",
    localidad: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar que "Año" solo acepte números y tenga máximo 4 dígitos
    if (name === "año" && !/^\d{0,4}$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSendWhatsApp = () => {
    const { marca, año, version, localidad } = formData;

    if (!marca || !año || !version || !localidad) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (marca.length < 3 || version.length < 3 || localidad.length < 3) {
      setError("Marca, versión y localidad deben tener al menos 3 caracteres.");
      return;
    }

    if (año.length !== 4) {
      setError("El año debe tener exactamente 4 dígitos.");
      return;
    }

    setError("");

    const mensaje = `Hola, quiero cotizar un seguro para mi auto:
- Marca: ${marca}
- Año: ${año}
- Versión: ${version}
- Localidad: ${localidad}`;

    const numeroWhatsApp = "5491156307246"; // Reemplazar con el número de destino
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>¡Completá los siguientes datos y se va a contactar un asesor!</h2>
        
        <div className="form-group">
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            value={formData.marca}
            onChange={handleChange}
          />
          <input
            type="text"
            name="año"
            placeholder="Año"
            value={formData.año}
            onChange={handleChange}
            maxLength={4}
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="version"
            placeholder="Versión"
            value={formData.version}
            onChange={handleChange}
          />
          <input
            type="text"
            name="localidad"
            placeholder="Localidad"
            value={formData.localidad}
            onChange={handleChange}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="submit-button" onClick={handleSendWhatsApp}>¡Quiero Cotizar!</button>
        <p>Si querés una cotización, necesitamos que completes tus datos.</p>
      </div>
    </div>
  );
};
