"use client"
import "./phoneModal.css"
import { useState } from "react"

const COVERAGE_BY_TYPE = {
  rc: ["Responsabilidad Civil", "Cobertura del Mercosur", "+ otros"],
  terceros: ["Responsabilidad Civil", "Cobertura del Mercosur", "Auxílio", "Robo, Incendio total", "+ otros"],
  tercerosCompleto: [
    "Responsabilidad Civil",
    "Cobertura del Mercosur",
    "Auxílio",
    "Robo, incendio total",
    "Robo, incendio parcial",
    "Cobertura de cristales",
    "Cobertura de granizo",
    "+ otros",
  ],
  todoRiesgo: [
    "Responsabilidad Civil",
    "Cobertura del Mercosur",
    "Auxílio",
    "Robo, incendio, rotura total",
    "Robo, incendio parcial",
    "Cobertura de cristales plus",
    "Cobertura de granizo",
    "Rotura parcial según franquícia",
    "+ otros",
  ],
}

const classifyPlanType = (plan) => {
  const name = (plan.nombre || "").toLowerCase()
  const code = String(plan.codigo || "").toLowerCase()

  if (name.includes("todo riesgo") || name.includes("franquicia") || /^t\d{2}/i.test(code)) return "todoRiesgo"
  if (name.includes("responsabilidad civil") || code === "rca" || name.includes("rca")) return "rc"
  if (
    name.includes("terceros completos") ||
    (name.includes("completo") && name.includes("terceros")) ||
    name.includes("full") ||
    name.includes("plus") ||
    name.includes("premium")
  )
    return "tercerosCompleto"
  if (name.includes("tercero") || name.includes("terceros")) return "terceros"
  return "terceros"
}

export default function PhoneModal({
  open,
  onClose,
  onSubmit,
  submitting,
  error,
  title,
  waNumber,
  waMessage,
  selectedPlan,
  insurerName,
  vehicleInfo,
  insurerLogo,
}) {
  const [phone, setPhone] = useState("")
  const [payWithCard, setPayWithCard] = useState(false)
  const [phoneError, setPhoneError] = useState(null)

  if (!open) return null

  const validatePhone = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/\D/g, "")

    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      setPhoneError("El número debe tener entre 10 y 11 dígitos")
      return false
    }

    if (cleanPhone.length === 11 && !cleanPhone.startsWith("54")) {
      setPhoneError("Número inválido")
      return false
    }

    setPhoneError(null)
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validatePhone(phone)) {
      return
    }
    await onSubmit(phone)
  }

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(waMessage)
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleContract = () => {
    if (!validatePhone(phone)) {
      return
    }

    if (selectedPlan && insurerName) {
      const contractMessage = `¡Quiero contratar! 
Vehículo: ${vehicleInfo?.marca} ${vehicleInfo?.modelo} ${vehicleInfo?.anio}${vehicleInfo?.version ? " " + vehicleInfo.version : ""}
Aseguradora: ${insurerName}
Plan: ${selectedPlan.nombre}
Precio: ${fmtARS(selectedPlan.precio, insurerName, true)}/mes
Teléfono: ${phone}
${payWithCard ? "Pago con tarjeta de crédito" : "Pago sin tarjeta de crédito"}`

      const encodedMessage = encodeURIComponent(contractMessage)
      window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank")
    }
  }

  const getCoverageDetails = () => {
    if (!selectedPlan) return COVERAGE_BY_TYPE.terceros
    const planType = classifyPlanType(selectedPlan)
    return COVERAGE_BY_TYPE[planType]
  }

  const coverageDetails = getCoverageDetails()

  const fmtARS = (n, companyName, useDirectPrice = false) => {
    if (typeof n !== "number" || !isFinite(n)) return "-"

    // If useDirectPrice is true, use the price as-is (already calculated with discounts)
    if (useDirectPrice) {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
      }).format(n)
    }

    // Original logic for backward compatibility
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(companyName?.toLowerCase() === "san cristóbal" || companyName?.toLowerCase() === "integrity" ? n / 12 : n)
  }

  const getCurrentDate = () => {
    const now = new Date()
    const day = now.getDate().toString().padStart(2, "0")
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const year = now.getFullYear().toString().slice(-2)
    return `${day}/${month}/${year}`
  }

  return (
    <div className="zephyr-overlay-backdrop" onClick={onClose}>
      <div className="zephyr-dialog-container zephyr-dialog-enhanced" onClick={(e) => e.stopPropagation()}>
        <div className="zephyr-header-section">
          {insurerLogo && (
            <img src={insurerLogo || "/placeholder.svg"} alt={insurerName} className="zephyr-brand-logo" />
          )}
          <button className="zephyr-dismiss-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="zephyr-content-area zephyr-content-enhanced">
          <div className="zephyr-left-column">
            <h3 className="zephyr-api-title">{selectedPlan?.nombre || title}</h3>
            {selectedPlan && (
              <div className="zephyr-coverage-info">
                <h4 className="zephyr-coverage-label">¿Qué incluye?</h4>
                <div className="zephyr-coverage-list">
                  <div className="zephyr-coverage-col">
                    {coverageDetails.slice(0, Math.ceil(coverageDetails.length / 2)).map((item, index) => (
                      <div key={index} className="zephyr-coverage-point">
                        • {item}
                      </div>
                    ))}
                  </div>
                  <div className="zephyr-coverage-col">
                    {coverageDetails.slice(Math.ceil(coverageDetails.length / 2)).map((item, index) => (
                      <div key={index} className="zephyr-coverage-point">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="zephyr-right-column">
            {vehicleInfo && (
              <div className="zephyr-vehicle-details">
                <h4 className="zephyr-vehicle-name">
                  {vehicleInfo.marca} - {vehicleInfo.modelo} {vehicleInfo.anio}
                </h4>
                <div className="zephyr-date-stamp">{getCurrentDate()}</div>
              </div>
            )}

            {selectedPlan && (
              <div className="zephyr-pricing-section">
                {selectedPlan.hasDiscount && selectedPlan.precioOriginal && (
                  <div
                    className="zephyr-original-price"
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    {fmtARS(selectedPlan.precioOriginal, insurerName, true)}/mes
                  </div>
                )}
                <div className="zephyr-price-amount">{fmtARS(selectedPlan.precio, insurerName, true)}/mes</div>

                <div className="zephyr-payment-query">
                  <h4 className="zephyr-payment-label">¿Pagas con tarjeta de crédito?</h4>
                  <div className="zephyr-radio-group">
                    <label className="zephyr-radio-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={payWithCard === true}
                        onChange={() => setPayWithCard(true)}
                      />
                      <span>Sí</span>
                    </label>
                    <label className="zephyr-radio-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={payWithCard === false}
                        onChange={() => setPayWithCard(false)}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div className="zephyr-phone-form-section">
                  <form onSubmit={handleSubmit}>
                    <label className="zephyr-modal-label">Número de teléfono</label>
                    <input
                      type="tel"
                      className="zephyr-modal-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej: 11 1234 5678"
                      required
                    />

                    {phoneError && <div className="zephyr-modal-error">{phoneError}</div>}
                    {error && <div className="zephyr-modal-error">{error}</div>}

                    <div className="zephyr-modal-actions">
                      <button
                        onClick={handleContract}
                        type="submit"
                        className="zephyr-btn zephyr-btn-primary"
                        disabled={submitting}
                      >
                        {submitting ? "Enviando..." : "¡Quiero contratar!"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="zephyr-car-visual">
          <img
            src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1756663451/Mask_group_14_lcsqsn.png"
            alt="Car"
            className="zephyr-car-graphic"
          />
        </div>
      </div>
    </div>
  )
}
