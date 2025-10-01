"use client"

import { useState, useEffect } from "react"
import "./AutoPage.css"
import { 
  AcordeonAuto,
  CoberturasAuto,
  HeaderAuto, 
  ImgEmpresasAuto, 
  TestimonialCardAuto 
} from "./components"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { CardInfo } from "./components/CardInfo"
import { BannerContratar } from "../autoPage/components/BannerContratar"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { MensajeWspAuto } from "./data"
import usePrecios from "../../components/hooks/usePrecios"
import { CardInfoAuto } from "./components/CardInfoAuto"
import { DataCardPorqueYuju } from "./components/DataCardPorqueYuju"
import DiscountModal from "../../components/modalAuto/DiscountModal"
import CotizacionAuto from "./CotizacionAuto"
import { HeaderCotizador } from "./multicotizador/components/ui/headerCotizador"
import { CotizaAhoraAuto } from "./components/CotizaAhoraAuto"

export const AutoPage = () => {
  const [showModal, setShowModal] = useState(false)
  const { precio, error } = usePrecios("auto")

  useEffect(() => {
    console.log("AutoPage useEffect running")

    const timer = setTimeout(() => {
      console.log("Setting showModal to true after 3 seconds")
      setShowModal(true)
    }, 3000)

    return () => {
      console.log("Cleaning up timer")
      clearTimeout(timer)
    }
  }, [])

  const handleCloseModal = () => {
    setShowModal(false)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando..."

  return (
    <>
      {/*<HeaderAuto />*/}
      <HeaderCotizador />
      <CotizacionAuto />
      
      <CoberturasAuto />
      {/* <CardInfoAuto /> */}
      <CardInfo />
      <BannerContratar />
      <DataCardPorqueYuju />
      <TestimonialCardAuto />
      <ImgEmpresasAuto />
      <AcordeonAuto />
      <Carrousel Name="Auto" />
      {/*<DiscountModal isOpen={showModal} onClose={handleCloseModal} />*/}
    </>
  )
}

export default AutoPage
