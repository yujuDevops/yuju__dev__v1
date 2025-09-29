import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import "./marca-select.css"

export default function MarcaSelect({ value, onChange, onLabelChange, hasError = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [marcas, setMarcas] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMarcas = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://api-yuju.com.ar/api/infoauto/marcas")
        const data = await response.json()
        setMarcas(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Error al cargar marcas:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMarcas()
  }, [])

  const handleSelect = (marca) => {
    onChange(marca.id.toString())
    onLabelChange?.(marca.name) // ⬅️ informa el nombre
    setIsOpen(false)
  }

  const selectedName = marcas.find((m) => m.id.toString() === value)?.name

  return (
    <div className="mrc-select-container">
      <div
        className={`mrc-select-header ${hasError ? "mrc-error" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        role="button"
        aria-expanded={isOpen}
      >
        <span className={value ? "mrc-has-value" : "mrc-placeholder"}>{selectedName || "Seleccioná la marca"}</span>
        <ChevronDown size={20} />
      </div>

      {isOpen && (
        <div className="mrc-select-dropdown">
          {isLoading ? (
            <div className="mrc-loading-item">Cargando...</div>
          ) : marcas.length === 0 ? (
            <div className="mrc-info-item">No hay marcas disponibles</div>
          ) : (
            marcas.map((marca) => (
              <div key={marca.id} className="mrc-select-item" onClick={() => handleSelect(marca)}>
                {marca.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
