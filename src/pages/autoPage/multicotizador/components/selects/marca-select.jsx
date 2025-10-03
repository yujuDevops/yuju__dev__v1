import { useState, useEffect, useRef } from "react"
import { ChevronDown, Search } from "lucide-react"
import "./marca-select.css"

export default function MarcaSelect({ value, onChange, onLabelChange, hasError = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [marcas, setMarcas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const searchInputRef = useRef(null)

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

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  const handleSelect = (marca) => {
    onChange(marca.id.toString())
    onLabelChange?.(marca.name)
    setIsOpen(false)
    setSearchTerm("")
  }

  const filteredMarcas = marcas.filter((marca) => marca.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const selectedName = marcas.find((m) => m.id.toString() === value)?.name

  return (
    <div className="mrc-select-container">
      <div
        className={`mrc-select-header ${hasError ? "mrc-error" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        role="button"
        aria-expanded={isOpen}
      >
        <span className={value ? "mrc-has-value" : "mrc-placeholder"}>
          {selectedName ? selectedName.toUpperCase() : "Seleccioná la marca"}
        </span>
        <ChevronDown size={20} />
      </div>

      {isOpen && (
        <div className="mrc-select-dropdown">
          <div className="mrc-search-container">
            <Search size={16} className="mrc-search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              className="mrc-search-input"
              placeholder="Buscar marca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="mrc-select-list">
            {isLoading ? (
              <div className="mrc-loading-item">
                <div
                  className="mrc-spinner"
                  style={{
                    animation: "mrc-spin-animation 0.8s linear infinite",
                  }}
                ></div>
              </div>
            ) : filteredMarcas.length === 0 ? (
              <div className="mrc-info-item">
                {searchTerm ? "No se encontraron marcas" : "No hay marcas disponibles"}
              </div>
            ) : (
              filteredMarcas.map((marca) => (
                <div key={marca.id} className="mrc-select-item" onClick={() => handleSelect(marca)}>
                  {marca.name}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
