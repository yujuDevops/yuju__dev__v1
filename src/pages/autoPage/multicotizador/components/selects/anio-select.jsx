
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import "./anio-select.css"

export default function AnioSelect({ value, onChange, hasError = false, yearsOverride, codiaByYear }) {
  const [isOpen, setIsOpen] = useState(false)
  const [anios, setAnios] = useState([])

  useEffect(() => {
    if (yearsOverride && yearsOverride.length) {
      setAnios([...yearsOverride].sort((a, b) => b - a)) // descendente
      return
    }
    const currentYear = new Date().getFullYear()
    setAnios(Array.from({ length: 21 }, (_, i) => currentYear - i))
  }, [yearsOverride])

  const pickPreferred = (ops) => ops.find((o) => o.as_codia) || ops[0]

  const resolveCodiaForYear = (anio) => {
    const map = codiaByYear || {}
    // 1) Exacto
    const exact = map[anio]
    if (exact && exact.length) {
      const pref = pickPreferred(exact)
      return { codia: pref.codia, version: pref.description }
    }
    // 2) Fallback: año más cercano con datos
    const years = Object.keys(map)
      .map((n) => Number.parseInt(n, 10))
      .filter((n) => !Number.isNaN(n))
    if (!years.length) return {}

    // Preferimos el menor o igual más cercano; si no hay, el mayor más cercano
    const lowerOrEqual = years.filter((y) => y <= anio).sort((a, b) => b - a)[0]
    const higher = years.filter((y) => y > anio).sort((a, b) => a - b)[0]
    const fallbackYear = lowerOrEqual ?? higher
    if (fallbackYear == null) return {}

    const pref = pickPreferred(map[fallbackYear] || [])
    if (!pref) return {}
    return { codia: pref.codia, version: pref.description }
  }

  const handleSelect = (anio) => {
    const { codia, version } = resolveCodiaForYear(anio)
    onChange(String(anio), codia, version)
    setIsOpen(false)
  }

  return (
    <div className="wfrwr-select-container">
      <div
        className={`wfrwr-select-header ${hasError ? "wfrwr-error" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        role="button"
      >
        <span className={value ? "wfrwr-has-value" : "wfrwr-placeholder"}>{value || "Seleccioná el año"}</span>
        <ChevronDown size={20} />
      </div>

      {isOpen && (
        <div className="wfrwr-select-dropdown">
          {anios.length === 0 ? (
            <div className="wfrwr-info-item">No hay años disponibles para este modelo</div>
          ) : (
            anios.map((anio) => (
              <div key={anio} className="wfrwr-select-item" onClick={() => handleSelect(anio)}>
                {anio}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
