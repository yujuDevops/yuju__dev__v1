"use client"

import { useState, useEffect } from "react"
import "./AutoPage.css"
import { AcordeonAuto, HeaderAuto, ImgEmpresasAuto } from "./components"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { CardInfo } from "./components/CardInfo"
import { BannerContratar } from "../autoPage/components/BannerContratar"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { MensajeWspAuto } from "./data"
import usePrecios from "../../components/hooks/usePrecios"
import { CardInfoAuto } from "./components/CardInfoAuto"
import { DataCardPorqueYuju } from "./components/DataCardPorqueYuju"
import DiscountModal from "../../components/modalAuto/DiscountModal"

export const AutoPage = () => {
  const [showModal, setShowModal] = useState(false)
  const { precio, error } = usePrecios("auto")

  useEffect(() => {
    // Debug log to check if the useEffect is running
    console.log("AutoPage useEffect running")

    // Show modal after 3 seconds delay, regardless of localStorage
    const timer = setTimeout(() => {
      console.log("Setting showModal to true after 3 seconds")
      setShowModal(true)
    }, 3000) // 3 seconds delay

    // Clean up the timer if the component unmounts
    return () => {
      console.log("Cleaning up timer")
      clearTimeout(timer)
    }
  }, []) // Empty dependency array means this runs once on mount

  const handleCloseModal = () => {
    console.log("Modal close button clicked")
    setShowModal(false)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando..."

  // Debug log to check the current state of showModal
  console.log("Current showModal state:", showModal)

  return (
    <>
      <HeaderAuto />
      <CotizaAhora
        titulo="Seguro de autos"
        precio={precioCotiza}
        button="¡Cotizá ahora!"
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735570892/Auto_ilustracion_kcgsoh.svg"
        MensajeWsp={MensajeWspAuto}
      />
      <CardInfoAuto />
      {/* <CoberturasAuto /> */}
      <CardInfo />
      <BannerContratar />
      <DataCardPorqueYuju />
      <ImgEmpresasAuto />
      <AcordeonAuto />
      <Carrousel Name="Auto" />

      {/* Discount Modal */}
      <DiscountModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  )
}

export default AutoPage

