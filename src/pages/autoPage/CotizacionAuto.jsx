import { useState } from "react"
import StepOne from "./multicotizador/components/selects/step-one"
import StepTwo from "./multicotizador/components/selects/step-two"
import StepThree from "./multicotizador/components/selects/step-three"   // ⬅️ nuevo
import "./cotizacionAuto.css"

export default function CotizacionAuto() {
  const [currentStep, setCurrentStep] = useState(1)

  // form enriquecido para evitar IDs en DB/WhatsApp
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    version: "",
    anio: "",
    codigoPostal: "",
    localidad: "",
    tieneGNC: false,
    esOKM: false,
    esComercial: false,
    // nombres "bonitos"
    marcaNombre: "",
    modeloNombre: "",
  })

  // respuesta real de /api/cotizar (step 2)
  const [results, setResults] = useState(null)

  // resumen para Step 3
  const [resumenStep3, setResumenStep3] = useState(null)

  // Step 1 → Step 2
  const handleNextStep = (data) => {
    setResults(data)
    setCurrentStep(2)
  }

  // Step 2 → Step 1
  const handlePrevStep = () => {
    setCurrentStep(1)
    // si querés: setResults(null)
  }

  // Step 2 → Step 3 (después de guardar)
  const handleNextStep3 = (resumen) => {
    setResumenStep3(resumen)  // { marca, modelo_version, anio, aseguradora, plan, precio?, telefono? }
    setCurrentStep(3)
  }

  // Step 3 → Step 1 (nueva cotización)
  const handleNuevaCotizacion = () => {
    setCurrentStep(1)
    // opcional: resetear todo
    // setFormData({ ...estado inicial... })
    // setResults(null)
    // setResumenStep3(null)
  }

  const handleFormChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="cotizacion-container">

      {currentStep === 1 && (
        <StepOne
          formData={formData}
          onFormChange={handleFormChange}
          onNextStep={handleNextStep}
        />
      )}

      {currentStep === 2 && results && (
        <StepTwo
          formData={formData}
          results={results}
          onPrevStep={handlePrevStep}
          onNextStep3={handleNextStep3}   // ⬅️ paso el hook para ir al Step 3
        />
      )}

      {currentStep === 3 && resumenStep3 && (
        <StepThree
          resumen={resumenStep3}
          onNuevaCotizacion={handleNuevaCotizacion}
        />
      )}
    </div>
  )
}
