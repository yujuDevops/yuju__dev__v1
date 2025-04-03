"use client"

import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import "./Header.css"

export const Header = ({
  // Props para imágenes específicas por dispositivo
  mobileImages = [
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924536/Header-moto-celular1_aw8qzh.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular3_eafqus.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular7_nndw0f.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular4_vgpa1x.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular5_p5adlc.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924538/Header-moto-celular6_iearob.jpg",
  ],
  tabletImages = [
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924540/Header-Inicio-tablet_t4zsga.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio1-tablet_fixgr3.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio2-tablet_pkg1sc.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header-Inicio3-tablet_yncrdz.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924536/Header-Inicio4-tablet_ecjszf.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924536/Header-Inicio5-tablet_uqled7.jpg",
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924537/Header-Inicio6-tablet_mo6hnk.jpg",
  ],
  desktopImages = [
    "https://res.cloudinary.com/dgx3mbzfr/image/upload/v1742924535/Header_inicio-not_qrww5q.jpg",
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
  const carouselRef = useRef(null)
  const [isSearchable, setIsSearchable] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [deviceType, setDeviceType] = useState("desktop") // Por defecto desktop
  const [showControls, setShowControls] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Determinar el tipo de dispositivo basado en el ancho de la ventana
  useEffect(() => {
    const updateDeviceType = () => {
      const isMobileView = window.innerWidth <= 768
      setIsMobile(isMobileView)

      if (isMobileView) {
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

  // Obtiene el array de la img correspondiente a el el dispositivo que estemos usando 
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

  // Función para navegar a la imagen anterior
  const goToPrevious = () => {
    if (!isTransitioning) {
      setPreviousImageIndex(currentImageIndex)
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? currentDeviceImages.length - 1 : prevIndex - 1))

      setTimeout(() => {
        setIsTransitioning(false)
      }, 800)
    }
  }

  // Función para navegar a la imagen siguiente
  const goToNext = () => {
    if (!isTransitioning) {
      setPreviousImageIndex(currentImageIndex)
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex === currentDeviceImages.length - 1 ? 0 : prevIndex + 1))

      setTimeout(() => {
        setIsTransitioning(false)
      }, 800)
    }
  }

  // Función para ir a una imagen específica
  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentImageIndex) {
      setPreviousImageIndex(currentImageIndex)
      setIsTransitioning(true)
      setCurrentImageIndex(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 800)
    }
  }

  // Manejadores de eventos táctiles para swipe (solo para móvil)
  const handleTouchStart = (e) => {
    if (!isMobile) return
    setTouchStartX(e.touches[0].clientX)
    setTouchEndX(null)
  }

  const handleTouchMove = (e) => {
    if (!isMobile || !touchStartX) return
    setTouchEndX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isMobile || !touchStartX || !touchEndX) return

    const distance = touchStartX - touchEndX
    const minSwipeDistance = 30 

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    // Resetear valores
    setTouchStartX(null)
    setTouchEndX(null)
  }

  return (
    <div
      className={`header header-${deviceType}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carrusel de imágenes de fondo con efecto de deslizamiento */}
      <div className="carousel-container" ref={carouselRef}>
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

      {/* Indicadores de posición (dots) */}
      <div className="carousel-dots">
        {currentDeviceImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          ></button>
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

