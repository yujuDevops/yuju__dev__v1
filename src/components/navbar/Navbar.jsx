
import { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import "./Navbar.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import logo from "../../assets/image/logoYujuAzul.png"
import logoMobile from "../../assets/image/webBlanco.png"
import instagram from "../../assets/image/web_Icono-instagram.png"
import facebook from "../../assets/image/web_Icono-facebook.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // Estado del menú móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // Estado del dropdown
  const dropdownRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024) // Detectar si es móvil
  const location = useLocation() // Hook para obtener la ubicación actual

  
  const handleNavigation = (path) => {
    // Cerrar menús
    setIsOpen(false)
    setIsDropdownOpen(false)
    
    window.location.href = path

    return false
  }

  useEffect(() => {
    setIsOpen(false)
    setIsDropdownOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsDropdownOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsDropdownOpen(false)
    }
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown() // Cierra el dropdown si haces clic fuera de él
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Renderizado condicional para móvil o desktop
  const renderDropdownContent = () => {
    if (isMobile) {
      // Versión móvil con dos columnas
      return (
        <div className="dropdown-content-mobile">
          <div className="dropdown-column-left">
            <a href="/auto" onClick={() => handleNavigation("/auto")}>
              Auto
            </a>
            <a href="/moto" onClick={() => handleNavigation("/moto")}>
              Moto
            </a>
            <a href="/bici" onClick={() => handleNavigation("/bici")}>
              Bici
            </a>
            <a href="/hogar" onClick={() => handleNavigation("/hogar")}>
              Hogar
            </a>
            <a href="/vida" onClick={() => handleNavigation("/vida")}>
              Vida
            </a>
            <a href="/salud" onClick={() => handleNavigation("/salud")}>
              Salud
            </a>
            <a href="/accidentespersonales" onClick={() => handleNavigation("/accidentespersonales")}>
              Accidentes p.
            </a>
            <a href="/viajero" onClick={() => handleNavigation("/viajero")}>
              Asist. al viajero
            </a>
          </div>
          <div className="dropdown-column-right">
            <a href="/comercio" onClick={() => handleNavigation("/comercio")}>
              Comercio
            </a>
            <a href="/embarcaciones" onClick={() => handleNavigation("/embarcaciones")}>
              Embarcaciones
            </a>
            <a href="/celular" onClick={() => handleNavigation("/celular")}>
              Celular
            </a>
            <a href="/notebook" onClick={() => handleNavigation("/notebook")}>
              Notebook
            </a>
            <a href="/pcgamer" onClick={() => handleNavigation("/pcgamer")}>
              PC Gamer
            </a>
            <a href="/consola" onClick={() => handleNavigation("/consola")}>
              Consola
            </a>
            <a href="/tablet" onClick={() => handleNavigation("/tablet")}>
              Tablet
            </a>
            <a href="/retiro" onClick={() => handleNavigation("/retiro")}>
              Retiro
            </a>
          </div>
        </div>
      )
    } else {
      // Versión desktop original
      return (
        <div className="dropdown-content">
          <div className="dropdown-column">
            <a href="/auto" onClick={() => handleNavigation("/auto")}>
              Auto
            </a>
            <a href="/moto" onClick={() => handleNavigation("/moto")}>
              Moto
            </a>
            <a href="/bici" onClick={() => handleNavigation("/bici")}>
              Bici
            </a>
            <a href="/hogar" onClick={() => handleNavigation("/hogar")}>
              Hogar
            </a>
            <a href="/vida" onClick={() => handleNavigation("/vida")}>
              Vida
            </a>
            <a href="/salud" onClick={() => handleNavigation("/salud")}>
              Salud
            </a>
            <a href="/accidentespersonales" onClick={() => handleNavigation("/accidentespersonales")}>
              Accidentes p.
            </a>
            <a href="/viajero" onClick={() => handleNavigation("/viajero")}>
              Asist. al viajero
            </a>
          </div>
          <div className="dropdown-separator"></div>
          <div className="dropdown-column">
            <a href="/comercio" onClick={() => handleNavigation("/comercio")}>
              Comercio
            </a>
            <a href="/embarcaciones" onClick={() => handleNavigation("/embarcaciones")}>
              Embarcaciones
            </a>
            <a href="/celular" onClick={() => handleNavigation("/celular")}>
              Celular
            </a>
            <a href="/notebook" onClick={() => handleNavigation("/notebook")}>
              Notebook
            </a>
            <a href="/pcgamer" onClick={() => handleNavigation("/pcgamer")}>
              PC Gamer
            </a>
            <a href="/consola" onClick={() => handleNavigation("/consola")}>
              Consola
            </a>
            <a href="/tablet" onClick={() => handleNavigation("/tablet")}>
              Tablet
            </a>
            <a href="/retiro" onClick={() => handleNavigation("/retiro")}>
              Retiro
            </a>
          </div>
        </div>
      )
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/home" onClick={() => handleNavigation("/home")}>
          <img src={logo || "/placeholder.svg"} alt="Yuju Logo" className="logo-desktop" />
          <img src={logoMobile || "/placeholder.svg"} alt="Yuju Logo" className="logo-mobile" />
        </a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="/home" onClick={() => handleNavigation("/home")}>
          Home
        </a>
        <div className="dropdown" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="dropbtn" onClick={toggleDropdown}>
            Seguros
            <i className={`fa-solid ${isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
          </button>
          {isDropdownOpen && renderDropdownContent()}
        </div>
        <a href="/institucional" onClick={() => handleNavigation("/institucional")}>
          Institucional
        </a>
      </div>
      <div className="navbar-social">
        <a href="https://www.instagram.com/segurosyuju?igsh=djkyZWxkZ3pvcXJn" target="_blank" rel="noreferrer">
          <img src={instagram || "/placeholder.svg"} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/share/1BtqRdRJeQ/" target="_blank" rel="noreferrer">
          <img src={facebook || "/placeholder.svg"} alt="facebook" />
        </a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  )
}

export default Navbar

