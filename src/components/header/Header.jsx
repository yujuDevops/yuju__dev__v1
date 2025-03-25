"use client"

import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import "./Header.css"

export const Header = ({
  // Props para imágenes específicas por dispositivo
  mobileImages = ["https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924536/Header-moto-celular1_aw8qzh.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular3_eafqus.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular7_nndw0f.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular4_vgpa1x.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular5_p5adlc.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular6_iearob.jpg",
],
  tabletImages = ["https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924540/Header-Inicio-tablet_t4zsga.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio1-tablet_fixgr3.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio2-tablet_pkg1sc.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio3-tablet_yncrdz.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924536/Header-Inicio4-tablet_ecjszf.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924536/Header-Inicio5-tablet_uqled7.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924537/Header-Inicio6-tablet_mo6hnk.jpg",
],
  desktopImages = ["https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header_inicio-not_qrww5q.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924539/Header-inicio7-nuevo_peb7us.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio2-tablet_pkg1sc.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924532/Header_inicio6-not_q9kbsx.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924533/Header_inicio4-not_mrixkz.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924532/Header_inicio3-not_svuhtd.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924533/Header_inicio5-not_yigf0u.jpg",
  
   
    
],
  // Props originales
  title,
  subtitle,
  tercerTitulo,
}) => {
    const selectRef = useRef(null)
    const [isSearchable, setIsSearchable] = useState(true)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [previousImageIndex, setPreviousImageIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [deviceType, setDeviceType] = useState("desktop") // Por defecto desktop
  
    // Determinar el tipo de dispositivo basado en el ancho de la ventana
    useEffect(() => {
      const updateDeviceType = () => {
        if (window.innerWidth <= 768) {
          setDeviceType("mobile")
        } else if (window.innerWidth <= 1024) {
          setDeviceType("tablet")
        } else {
          setDeviceType("desktop")
        }
      }
  
      updateDeviceType() // Llamada inicial
      window.addEventListener("resize", updateDeviceType)
  
      return () => window.removeEventListener("resize", updateDeviceType)
    }, [])
  
    // Actualizar searchable basado en el tamaño de pantalla
    useEffect(() => {
      const updateSearchable = () => {
        setIsSearchable(window.innerWidth > 1024)
      }
  
      updateSearchable()
      window.addEventListener("resize", updateSearchable)
  
      return () => window.removeEventListener("resize", updateSearchable)
    }, [])
  
    // Obtener el array de imágenes correcto según el dispositivo
    const getImagesForCurrentDevice = () => {
      switch (deviceType) {
        case "mobile":
          return mobileImages.length > 0 ? mobileImages : desktopImages
        case "tablet":
          return tabletImages.length > 0 ? tabletImages : desktopImages
        default:
          return desktopImages
      }
    }
  
    const currentDeviceImages = getImagesForCurrentDevice()
  
    // Efecto para el carrusel
    useEffect(() => {
      if (currentDeviceImages.length <= 1) return
  
      const interval = setInterval(() => {
        if (!isTransitioning) {
          setPreviousImageIndex(currentImageIndex)
          setIsTransitioning(true)
          setCurrentImageIndex((prevIndex) => (prevIndex === currentDeviceImages.length - 1 ? 0 : prevIndex + 1))
  
          // Resetear el estado de transición después de que termine la animación
          setTimeout(() => {
            setIsTransitioning(false)
          }, 800) // Debe ser menor que el intervalo pero suficiente para la transición
        }
      }, 3000) // Cambiar imagen cada 3 segundos
  
      return () => clearInterval(interval)
    }, [currentDeviceImages.length, deviceType, currentImageIndex, isTransitioning])
  
    const options = [
      { value: "/auto", label: "Seguro de Auto" },
      { value: "/moto", label: "Seguro de Moto" },
      { value: "/bici", label: "Seguro de Bicicleta" },
      { value: "/hogar", label: "Seguro de Hogar" },
      { value: "/vida", label: "Seguro de Vida" },
      { value: "/salud", label: "Seguro de Salud" },
      { value: "/accidentespersonales", label: "Seguro de Accidentes personales" },
      { value: "/asisviajero", label: "Seguro de Asistencia al viajero" },
      { value: "/industria", label: "Seguro de Integral de comercio" },
      { value: "/retiro", label: "Seguro de Retiro" },
      { value: "/embarcaciones", label: "Seguro de Embarcaciones" },
      { value: "/celular", label: "Seguro de Celular" },
      { value: "/notebook", label: "Seguro de Notebook" },
      { value: "/pcgamer", label: "Seguro de Pc gamer" },
      { value: "/consola", label: "Seguro de Consola" },
      { value: "/tablet", label: "Seguro de Tablet" },
    ]
  
    const handleSelectChange = (selectedOption) => {
      if (selectedOption) {
        window.location.href = selectedOption.value
      }
    }
  
    return (
      <div className={`header header-${deviceType}`}>
        {/* Carrusel de imágenes de fondo con efecto de deslizamiento */}
        <div className="carousel-container">
          {currentDeviceImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentImageIndex ? "active" : index === previousImageIndex && isTransitioning ? "previous" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
  
        <div className="header-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{tercerTitulo}</h3>
          <Select
            className="header-select"
            options={options}
            placeholder="Elegí el seguro"
            maxMenuHeight={110}
            onChange={handleSelectChange}
            ref={selectRef}
            isSearchable={isSearchable}
          />
        </div>
      </div>
    )
  }
  
  Header.propTypes = {
    mobileImages: PropTypes.arrayOf(PropTypes.string),
    tabletImages: PropTypes.arrayOf(PropTypes.string),
    desktopImages: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    tercerTitulo: PropTypes.string,
  }
  
  export default Header
  
  