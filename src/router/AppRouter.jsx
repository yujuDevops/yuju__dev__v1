"use client"

import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import {
  HomePage,
  AutoPage,
  MotoPage,
  BiciPage,
  HogarPage,
  InstitucionalPage,
  IndustrialPage,
  Embarcaciones,
  CelularPage,
  VidaPage,
  SaludPage,
  AccidentesPersonales,
  NotebookPage,
  PcGamerPage,
  ConsolaPage,
  TabletPage,
  RetiroPage,
  ViajeroPage,
} from "../pages"

// Componente ScrollToTop con lógica mejorada que no afecta el scroll táctil
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll al inicio de la página
    window.scrollTo(0, 0)

    // Método más suave para forzar la recarga de estilos sin afectar el scroll
    const refreshStyles = () => {
      // Crear un evento de resize para forzar recálculo de estilos
      const resizeEvent = window.document.createEvent("UIEvents")
      resizeEvent.initUIEvent("resize", true, false, window, 0)
      window.dispatchEvent(resizeEvent)

      // Forzar repintado sin bloquear el scroll
      document.body.classList.add("force-repaint")
      setTimeout(() => {
        document.body.classList.remove("force-repaint")
      }, 10)
    }

    // Ejecutar inmediatamente y después de un breve retraso
    refreshStyles()
    setTimeout(refreshStyles, 100)
  }, [pathname])

  return null
}

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/viajero" element={<ViajeroPage pageId="viajero" />} />
        <Route path="/" element={<HomePage pageId="home" />} />
        <Route path="/auto" element={<AutoPage />} />
        <Route path="/notebook" element={<NotebookPage />} />
        <Route path="/embarcaciones" element={<Embarcaciones />} />
        <Route path="/moto" element={<MotoPage />} />
        <Route path="/bici" element={<BiciPage />} />
        <Route path="/celular" element={<CelularPage />} />
        <Route path="/hogar" element={<HogarPage />} />
        <Route path="/comercio" element={<IndustrialPage />} />
        <Route path="/institucional" element={<InstitucionalPage />} />
        <Route path="/consola" element={<ConsolaPage />} />
        <Route path="/tablet" element={<TabletPage />} />
        {/* <Route path="/contacto" element={<ContactPage/>} /> */}
        <Route path="/vida" element={<VidaPage />} />
        <Route path="/salud" element={<SaludPage />} />
        <Route path="/pcgamer" element={<PcGamerPage />} />
        <Route path="/accidentespersonales" element={<AccidentesPersonales />} />
        <Route path="/retiro" element={<RetiroPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRouter

