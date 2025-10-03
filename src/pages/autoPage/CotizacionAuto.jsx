"use client"

import { useState } from "react"
import StepOne from "./multicotizador/components/selects/step-one"
import StepTwo from "./multicotizador/components/selects/step-two"
import StepThree from "./multicotizador/components/selects/step-three"
import LoadingScreen from "./multicotizador/components/ui/loadingScreen"
import "./CotizacionAuto.css"

export default function CotizacionAuto() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

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
    marcaNombre: "",
    modeloNombre: "",
  })

  const [results, setResults] = useState(null)
  const [resumenStep3, setResumenStep3] = useState(null)

  const handleNextStep = (data) => {
    setResults(data)
    setIsLoading(false)
    setCurrentStep(2)
  }

  const handleStartLoading = () => {
    setIsLoading(true)
  }

  const handleLoadingError = () => {
    setIsLoading(false)
  }

  const handlePrevStep = () => {
    setCurrentStep(1)
  }

  const handleNextStep3 = (resumen) => {
    setResumenStep3(resumen)
    setCurrentStep(3)
  }

  const handleNuevaCotizacion = () => {
    setCurrentStep(1)
    setIsLoading(false)
  }

  const handleFormChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="cotizacion-container">
      {isLoading && <LoadingScreen />}

      {currentStep === 1 && !isLoading && (
        <StepOne
          formData={formData}
          onFormChange={handleFormChange}
          onNextStep={handleNextStep}
          onStartLoading={handleStartLoading}
          onLoadingError={handleLoadingError}
        />
      )}

      {currentStep === 2 && results && (
        <StepTwo formData={formData} results={results} onPrevStep={handlePrevStep} onNextStep3={handleNextStep3} />
      )}

      {currentStep === 3 && resumenStep3 && (
        <StepThree resumen={resumenStep3} onNuevaCotizacion={handleNuevaCotizacion} />
      )}
    </div>
  )
}
