
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import "./codigo-postal-input.css"

const APP_ID = import.meta.env.VITE_PARSE_APP_ID
const MASTER_KEY = import.meta.env.VITE_PARSE_MASTER_KEY

export default function CodigoPostalInput({ value = "", localidad = "", onChange, hasError = false }) {
  const [inputValue, setInputValue] = useState(value || "")
  const [localidadText, setLocalidadText] = useState(localidad || "")
  const [isLoading, setIsLoading] = useState(false)
  const [allPostalCodes, setAllPostalCodes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState("")
  const dropdownRef = useRef(null)

  useEffect(() => {
    fetchAllPostalCodes()
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Sincronizar el estado local con las props
  useEffect(() => {
    setInputValue(value || "")
    setLocalidadText(localidad || "")
  }, [value, localidad])

  async function fetchAllPostalCodes() {
    let allResults = []
    let skip = 0
    const limit = 1000

    try {
      while (true) {
        

        const where = encodeURIComponent(
          JSON.stringify({
            postalCode: { $exists: true },
            admin1Code: { $exists: true },
            admin1: { $exists: true },
            place: { $exists: true },
          }),
        )

        const url = `https://parseapi.back4app.com/classes/AR?where=${where}&limit=${limit}&skip=${skip}`

        const response = await fetch(url, {
          headers: {
            "X-Parse-Application-Id": APP_ID,
            "X-Parse-Master-Key": MASTER_KEY,
          },
        })

        const data = await response.json()

        if (!data.results || data.results.length === 0) {
          break
        }

        allResults = allResults.concat(data.results)
        skip += limit
      }

      setAllPostalCodes(allResults)
      setLoadingStatus(`✅ Códigos postales cargados: ${allResults.length}`)
      console.log("Total cargado:", allResults.length)
    } catch (error) {
      console.error("Error al cargar códigos postales:", error)
      setLoadingStatus("❌ Error al cargar códigos postales")
    }
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "").substring(0, 4)
    setInputValue(newValue)

    // Clear location if postal code is modified
    if (newValue !== value) {
      setLocalidadText("")
      if (onChange) {
        onChange(newValue, "")
      }
    }

    if (newValue.length > 0 && allPostalCodes.length > 0) {
      const matches = allPostalCodes.filter((item) => item.postalCode.startsWith(newValue))
      setFilteredResults(matches)
      setShowDropdown(matches.length > 0)
    } else {
      setFilteredResults([])
      setShowDropdown(false)
    }
  }

  const handleSelectResult = (result) => {
    const selectedText = `${result.admin1} - ${result.place}`
    setInputValue(result.postalCode)
    setLocalidadText(selectedText)
    setShowDropdown(false)

    if (onChange) {
      onChange(result.postalCode, selectedText)
    }
  }

  return (
    <div className="cpx-container" ref={dropdownRef}>
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
            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search size={20} className="cp-search-icon" />
        </div>

        {showDropdown && filteredResults.length > 0 && (
          <div className="cp-dropdown">
            {filteredResults.slice(0, 10).map((result, index) => (
              <div
                key={`${result.postalCode}-${index}`}
                className="cp-dropdown-item"
                onClick={() => handleSelectResult(result)}
              >
                <span className="cp-dropdown-code">{result.postalCode}</span>
                <span className="cp-dropdown-location">
                  {result.admin1} - {result.place}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Loading status for initial data fetch */}
        {allPostalCodes.length === 0 && <div className="cp-localidad-loading">{loadingStatus}</div>}

        {/* Show selected location */}
        {localidadText && <div className="cp-localidad-result">{localidadText}</div>}

        {/* Input hints */}
        {!localidadText && inputValue && inputValue.length > 0 && inputValue.length < 4 && (
          <div className="cp-localidad-info">Ingresá los 4 dígitos del código postal</div>
        )}

        {hasError && <span className="cp-error-message">Este campo es requerido</span>}
      </div>
    </div>
  )
}
