"use client"

import { useState } from "react"
import MarcaSelect from "./marca-select"
import ModeloSelect from "./modelo-select"
import AnioSelect from "./anio-select"
import CodigoPostalInput from "../inputs/codigo-postal-input"
import "./step-one.css"

export default function StepOne({ formData, onFormChange, onNextStep, onStartLoading, onLoadingError }) {
  const [errors, setErrors] = useState({
    marca: false,
    modelo: false,
    anio: false,
    codigoPostal: false,
    codInfoAuto: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const formatTodayDDMMYYYY = () => {
    const d = new Date()
    const dd = String(d.getDate()).padStart(2, "0")
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const yyyy = d.getFullYear()
    return `${dd}-${mm}-${yyyy}`
  }

  const resolveFromMap = (anioStr) => {
    const map = formData.codiaByYear || {}
    const anio = Number(anioStr ?? formData.anio)
    if (!Number.isFinite(anio) || anio <= 0) return undefined
    const pickPreferred = (ops) => ops.find((o) => o.as_codia) || ops[0]

    if (map[anio]?.length) {
      const pref = pickPreferred(map[anio])
      return Number(pref?.codia) || undefined
    }
    const years = Object.keys(map)
      .map((n) => Number.parseInt(n, 10))
      .filter(Number.isFinite)
    if (!years.length) return undefined
    const lowerOrEqual = years.filter((y) => y <= anio).sort((a, b) => b - a)[0]
    const higher = years.filter((y) => y > anio).sort((a, b) => a - b)[0]
    const fb = lowerOrEqual ?? higher
    if (fb == null || !map[fb]?.length) return undefined
    const pref = pickPreferred(map[fb])
    return Number(pref?.codia) || undefined
  }

  const resolveCodInfoAuto = (anioStr) => {
    const current = Number(formData.codInfoAuto)
    if (Number.isFinite(current) && current > 0) return current
    const mapVal = resolveFromMap(anioStr)
    if (Number.isFinite(mapVal) && (mapVal ?? 0) > 0) return mapVal
    const fromModel = Number(formData.modelo)
    if (Number.isFinite(fromModel) && fromModel > 0) return fromModel
    return 0
  }

  const validateForm = (codiaCandidate) => {
    const anioNum = Number(formData.anio)
    const codiaNum = Number(codiaCandidate ?? formData.codInfoAuto ?? 0)
    const newErrors = {
      marca: !formData.marca?.trim(),
      modelo: !formData.modelo?.trim(),
      anio: !Number.isFinite(anioNum) || anioNum <= 0,
      codigoPostal: !String(formData.codigoPostal || "").trim(),
      codInfoAuto: !Number.isFinite(codiaNum) || codiaNum <= 0,
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return
    setSubmitError(null)

    const codFinal = resolveCodInfoAuto()
    if (codFinal && codFinal !== formData.codInfoAuto) {
      onFormChange("codInfoAuto", codFinal)
      setErrors((prev) => ({ ...prev, codInfoAuto: false }))
    }
    if (!validateForm(codFinal)) return

    const payload = {
      codigoPostal: String(formData.codigoPostal).trim(),
      codInfoAuto: codFinal,
      anio: Number(formData.anio),
      fechaVigencia: formatTodayDDMMYYYY(),
    }

    try {
      setSubmitting(true)
      onStartLoading()

      const resp = await fetch("https://api-yuju.com.ar/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!resp.ok) {
        const text = await resp.text().catch(() => "")
        throw new Error(`Error ${resp.status}${text ? `: ${text}` : ""}`)
      }
      const data = await resp.json()
      onNextStep(data)
    } catch (err) {
      console.error("Error en /api/cotizar", err)
      setSubmitError(err?.message || "Ocurrió un error al cotizar.")
      onLoadingError()
    } finally {
      setSubmitting(false)
    }
  }

  const handleRadioChange = (name, value) => {
    onFormChange(name, value)
  }

  return (
    <div className="asxts-step-container">
      <form onSubmit={handleSubmit}>
        <div className="asxts-form-grid">
          {/* MARCA */}
          <div className="asxts-form-group">
            <label htmlFor="marca" className="asxts-form-label">
              ¿Cuál es la marca?
            </label>
            <MarcaSelect
              value={formData.marca}
              onChange={(value) => {
                onFormChange("marca", value)
                onFormChange("modelo", "")
                onFormChange("modeloNombre", "")
                onFormChange("anio", "")
                onFormChange("aniosDisponibles", [])
                onFormChange("codiaByYear", {})
                onFormChange("codInfoAuto", 0)
                onFormChange("version", "")
                setErrors((e) => ({ ...e, marca: false, modelo: false, anio: false, codInfoAuto: false }))
              }}
              onLabelChange={(name) => onFormChange("marcaNombre", name)}
              hasError={errors.marca}
              className={`asxts-select ${errors.marca ? "asxts-select-error" : ""}`}
            />
            {errors.marca && <span className="asxts-error-message">Este campo es requerido</span>}
          </div>

          {/* AÑO */}
          <div className="asxts-form-group">
            <label htmlFor="anio" className="asxts-form-label">
              ¿De qué año es?
            </label>
            <AnioSelect
              value={formData.anio}
              yearsOverride={formData.aniosDisponibles}
              codiaByYear={formData.codiaByYear}
              onChange={(anio, codia, version) => {
                onFormChange("anio", anio)
                onFormChange("modelo", "")
                onFormChange("modeloNombre", "")
                setErrors((e) => ({ ...e, anio: false, modelo: false }))

                if (typeof codia === "number" && Number.isFinite(codia) && codia > 0) {
                  onFormChange("codInfoAuto", codia)
                  setErrors((e) => ({ ...e, codInfoAuto: false }))
                } else {
                  const fb = resolveFromMap(anio)
                  if (fb) {
                    onFormChange("codInfoAuto", fb)
                    setErrors((e) => ({ ...e, codInfoAuto: false }))
                  }
                }
                if (version) onFormChange("version", version)
              }}
              hasError={errors.anio || errors.codInfoAuto}
              className={`asxts-select ${errors.anio ? "asxts-select-error" : ""}`}
            />
            {errors.anio && <span className="asxts-error-message">Este campo es requerido</span>}
            {errors.codInfoAuto && <span className="asxts-error-message"></span>}
          </div>

          {/* MODELO */}
          <div className="asxts-form-group">
            <label htmlFor="modelo" className="asxts-form-label">
              ¿Qué modelo es?
            </label>
            <ModeloSelect
              value={formData.modelo}
              marca={formData.marca}
              priceYear={formData.anio}
              onChange={(value, label, extra) => {
                onFormChange("modelo", value)
                if (label) onFormChange("modeloNombre", label)
                if (extra?.years) onFormChange("aniosDisponibles", extra.years)
                if (extra?.codiaByYear) onFormChange("codiaByYear", extra.codiaByYear)

                const maybeCodia = Number(value)
                if (Number.isFinite(maybeCodia) && maybeCodia > 0) {
                  onFormChange("codInfoAuto", maybeCodia)
                  setErrors((e) => ({ ...e, codInfoAuto: false }))
                } else {
                  onFormChange("codInfoAuto", 0)
                }

                onFormChange("version", "")
                setErrors((e) => ({ ...e, modelo: false }))
              }}
              hasError={errors.modelo}
              disabled={!formData.marca || !formData.anio}
              className={`asxts-select ${errors.modelo ? "asxts-select-error" : ""}`}
            />
            {errors.modelo && <span className="asxts-error-message">Este campo es requerido</span>}
          </div>

          {/* CÓDIGO POSTAL */}
          <div className="asxts-form-group">
            <CodigoPostalInput
              value={formData.codigoPostal}
              localidad={formData.localidad}
              onChange={(value, localidad) => {
                onFormChange("codigoPostal", value)
                if (localidad) onFormChange("localidad", localidad)
                setErrors((e) => ({ ...e, codigoPostal: false }))
              }}
              hasError={errors.codigoPostal}
              className={`asxts-input ${errors.codigoPostal ? "asxts-input-error" : ""}`}
            />
            {errors.codigoPostal && <span className="asxts-error-message"></span>}
          </div>
        </div>

        {submitError && <div className="asxts-error-message asxts-submit-error">{submitError}</div>}

        <div className="asxts-button-container">
          <button type="submit" className="asxts-button-primary" disabled={submitting}>
            {submitting ? "Cotizando..." : "Cotizar"}
          </button>
        </div>
      </form>
    </div>
  )
}
