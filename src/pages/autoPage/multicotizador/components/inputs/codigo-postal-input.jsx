"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import "./codigo-postal-input.css"

export default function CodigoPostalInput({ value = "", localidad = "", onChange, hasError = false }) {
  const [inputValue, setInputValue] = useState(value || "")
  const [localidadText, setLocalidadText] = useState(localidad || "")
  const [isLoading, setIsLoading] = useState(false)

  // Sincronizar el estado local con las props
  useEffect(() => {
    setInputValue(value || "")
    setLocalidadText(localidad || "")
  }, [value, localidad])

  const handleInputChange = (e) => {
    // Solo permitir números y limitar a 4 dígitos
    const newValue = e.target.value.replace(/\D/g, "").substring(0, 4)
    setInputValue(newValue)

    // Limpiar la localidad si se modifica el CP
    if (newValue !== value) {
      setLocalidadText("")
      if (onChange) {
        onChange(newValue, "")
      }
    }

    // Buscar localidad cuando se ingresan 4 dígitos
    if (newValue.length === 4) {
      buscarLocalidad(newValue)
    }
  }

  const buscarLocalidad = async (cp) => {
    setIsLoading(true)

    try {
      // Simulamos la llamada a la API (con un retraso para ver el estado de carga)
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mapa de códigos postales y localidades
      const localidadesPorCP = {
        1000: "Ciudad Autónoma de Buenos Aires",
        1001: "Ciudad Autónoma de Buenos Aires",
        1405: "Ciudad Autónoma de Buenos Aires",
        1406: "Ciudad Autónoma de Buenos Aires",
        1407: "Ciudad Autónoma de Buenos Aires",
        1414: "Ciudad Autónoma de Buenos Aires",
        1416: "Ciudad Autónoma de Buenos Aires",
        1417: "Ciudad Autónoma de Buenos Aires",
        1418: "Ciudad Autónoma de Buenos Aires",
        1419: "Ciudad Autónoma de Buenos Aires",
        1420: "Ciudad Autónoma de Buenos Aires",
        1425: "Ciudad Autónoma de Buenos Aires",
        1426: "Ciudad Autónoma de Buenos Aires",
        1427: "Ciudad Autónoma de Buenos Aires",
        1428: "Ciudad Autónoma de Buenos Aires",
        1429: "Ciudad Autónoma de Buenos Aires",
        1430: "Ciudad Autónoma de Buenos Aires",
        1602: "Vicente López, Buenos Aires",
        1605: "Munro, Buenos Aires",
        1636: "Olivos, Buenos Aires",
        1640: "Martínez, Buenos Aires",
        1642: "San Isidro, Buenos Aires",
        1646: "San Fernando, Buenos Aires",
        1648: "Tigre, Buenos Aires",
        1704: "Ramos Mejía, Buenos Aires",
        1708: "Morón, Buenos Aires",
        1712: "Castelar, Buenos Aires",
        1714: "Ituzaingó, Buenos Aires",
        1722: "Merlo, Buenos Aires",
        1754: "San Justo, Buenos Aires",
        1766: "La Tablada, Buenos Aires",
        1832: "Lomas de Zamora, Buenos Aires",
        1870: "Avellaneda, Buenos Aires",
        1876: "Quilmes, Buenos Aires",
        1878: "Quilmes, Buenos Aires",
        1900: "La Plata, Buenos Aires",
        2000: "Rosario, Santa Fe",
        3000: "Santa Fe, Santa Fe",
        3100: "Paraná, Entre Ríos",
        4000: "San Miguel de Tucumán, Tucumán",
        4400: "Salta, Salta",
        4600: "San Salvador de Jujuy, Jujuy",
        5000: "Córdoba, Córdoba",
        5500: "Mendoza, Mendoza",
        5700: "San Luis, San Luis",
        8000: "Bahía Blanca, Buenos Aires",
        9000: "Comodoro Rivadavia, Chubut",
        9410: "Ushuaia, Tierra del Fuego",
      }

      // Determinar la localidad
      const localidadEncontrada = localidadesPorCP[cp] || `Localidad ${cp}, Argentina`

      // Actualizar el estado local y notificar al componente padre
      setLocalidadText(localidadEncontrada)
      if (onChange) {
        onChange(cp, localidadEncontrada)
      }
    } catch (error) {
      console.error("Error al buscar localidad:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="cpx-container">
      <div className="cp-form-group">
        <label htmlFor="codigoPostal" className="cp-form-group label">
          ¿Cuál es tu código postal?
        </label>
        <div className={`cp-input-wrapper ${hasError ? "cp-error" : ""}`}>
          <input
            type="text"
            id="codigoPostal"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ingresá tu código postal"
            maxLength={4}
            className={`w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              hasError ? "border-red-500" : ""
            }`}
          />
          <Search size={20} className="cp-search-icon" />
        </div>

        {isLoading && <div className="cp-localidad-loading">Buscando localidad...</div>}

        {!isLoading && localidadText && <div className="cp-localidad-result">{localidadText}</div>}

        {!isLoading && !localidadText && inputValue && inputValue.length > 0 && inputValue.length < 4 && (
          <div className="cp-localidad-info">Ingresá los 4 dígitos del código postal</div>
        )}

        {hasError && <span className="cp-error-message">Este campo es requerido</span>}
      </div>
    </div>
  )
}
