
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import "./modelo-select.css"

const cache = new Map() // key: `${marca}|${priceYear}`

export default function ModeloSelect({ value, onChange, marca, priceYear, hasError = false, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modelos, setModelos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)

  useEffect(() => {
    setModelos([])
    setError(null)
    setIsOpen(false)

    // Requiere marca + año
    if (!marca || !priceYear) return

    const key = `${marca}|${priceYear}`
    if (cache.has(key)) {
      setModelos(cache.get(key))
      return
    }

    // Abort anterior
    if (abortRef.current) abortRef.current.abort()
    const controller = new AbortController()
    abortRef.current = controller

    const fetchModelos = async () => {
      setIsLoading(true)
      try {
        // Ruta de backend local SIN variables de entorno
        const url = `https://api-yuju.com.ar/api/infoauto/modelos/${encodeURIComponent(
          marca,
        )}?price_at=${encodeURIComponent(priceYear)}`

        const res = await resilientFetch(url, { signal: controller.signal })
        const data = await res.json()
        const items = Array.isArray(data) ? data : []
        items.sort((a, b) => (a?.name || "").localeCompare(b?.name || ""))

        cache.set(key, items)
        setModelos(items)
      } catch (e) {
        if (e?.name !== "AbortError") {
          console.error("Error al cargar modelos:", e)
          setError(e?.message ?? "Error al cargar modelos")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchModelos()
    return () => controller.abort()
  }, [marca, priceYear])

  const selected = modelos.find((m) => m.id.toString() === value)

  const handleSelect = (m) => {
    onChange(m.id.toString(), m.name, { years: m.years, codiaByYear: m.codiaByYear })
    setIsOpen(false)
  }

  const isDisabled = disabled || !marca || !priceYear

  return (
    <div className={`mdl-select-container ${isDisabled ? "mdl-disabled" : ""}`}>
      <div
        className={`mdl-select-header ${hasError ? "mdl-error" : ""}`}
        onClick={() => !isDisabled && setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        role="button"
        aria-disabled={isDisabled}
      >
        <span className={value ? "mdl-has-value" : "mdl-placeholder"}>
          {isDisabled
            ? !marca
              ? "Primero seleccioná una marca"
              : "Seleccioná el año"
            : selected?.name || "Seleccioná el modelo"}
        </span>
        <ChevronDown size={20} />
      </div>

      {isOpen && (
        <div className="mdl-select-dropdown">
          {isLoading ? (
            <div className="mdl-loading-item">Cargando...</div>
          ) : error ? (
            <div className="mdl-info-item">⚠️ {error}</div>
          ) : modelos.length === 0 ? (
            <div className="mdl-info-item">No hay modelos disponibles</div>
          ) : (
            modelos.map((m) => (
              <div key={m.id} className="mdl-select-item" onClick={() => handleSelect(m)}>
                {m.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

/** Fetch con reintentos y backoff si hay 429; respeta AbortController. */
async function resilientFetch(input, init, retries = 3, baseDelayMs = 700) {
  let attempt = 0
  while (true) {
    const res = await fetch(input, init)
    if (res.status !== 429 || attempt >= retries) {
      if (!res.ok) {
        const t = await res.text().catch(() => "")
        throw new Error(`HTTP ${res.status}${t ? `: ${t}` : ""}`)
      }
      return res
    }
    const hdr = res.headers.get("Retry-After")
    const retryAfterMs = Number(hdr) * 1000
    const waitMs = Number.isFinite(retryAfterMs) && retryAfterMs > 0 ? retryAfterMs : (attempt + 1) * baseDelayMs
    await new Promise((r) => setTimeout(r, waitMs))
    attempt++
  }
}
