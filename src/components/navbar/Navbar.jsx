import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/image/logoYujuAzul.png';
import logoMobile from '../../assets/image/webBlanco.png';
import instagram from '../../assets/image/web_Icono-instagram.png';
import facebook from '../../assets/image/web_Icono-facebook.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado del menú móvil
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado del dropdown
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handlePageChange = () => {
        setIsOpen(false); // Cerrar el menú móvil al cambiar de página
        closeDropdown(); // Cerrar el dropdown al cambiar de página
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown(); // Cierra el dropdown si haces clic fuera de él
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/home" onClick={handlePageChange}>
                    <img src={logo} alt="Yuju Logo" className="logo-desktop" />
                    <img src={logoMobile} alt="Yuju Logo" className="logo-mobile" />
                </Link>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link to="/home" onClick={handlePageChange}>
                    Home
                </Link>
                <div className="dropdown" ref={dropdownRef}>
                    <button className="dropbtn" onClick={toggleDropdown}>
                        Seguros
                        <i
                            className={`fa-solid ${
                                isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
                            }`}
                        ></i>
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <div className="dropdown-column">
                                <Link to="/auto" onClick={handlePageChange}>
                                    Auto
                                </Link>
                                <Link to="/moto" onClick={handlePageChange}>
                                    Moto
                                </Link>
                                <Link to="/bici" onClick={handlePageChange}>
                                    Bici
                                </Link>
                                <Link to="/hogar" onClick={handlePageChange}>
                                    Hogar
                                </Link>
                                <Link to="/vida" onClick={handlePageChange}>
                                    Vida
                                </Link>
                                <Link to="/salud" onClick={handlePageChange}>
                                    Salud
                                </Link>
                                <Link to="/accidentespersonales" onClick={handlePageChange}>
                                    Accidentes p.
                                </Link>
                                <Link to="/viajero" onClick={handlePageChange}>
                                    Asist. al viajero
                                </Link>
                            </div>
                            <div className="dropdown-separator"></div>
                            <div className="dropdown-column">
                                <Link to="/industria" onClick={handlePageChange}>
                                    Industria
                                </Link>
                                <Link to="/embarcaciones" onClick={handlePageChange}>
                                    Embarcaciones
                                </Link>
                                <Link to="/celular" onClick={handlePageChange}>
                                    Celular
                                </Link>
                                <Link to="/notebook" onClick={handlePageChange}>
                                    Notebook
                                </Link>
                                <Link to="/pcgamer" onClick={handlePageChange}>
                                    PC Gamer
                                </Link>
                                <Link to="/consola" onClick={handlePageChange}>
                                    Consola
                                </Link>
                                <Link to="/tablet" onClick={handlePageChange}>
                                    Tablet
                                </Link>
                                <Link to="/retiro" onClick={handlePageChange}>
                                    Retiro
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/institucional" onClick={handlePageChange}>
                    Institucional
                </Link>
                {/* <Link to="/contacto" onClick={handlePageChange}>
                    Contacto
                </Link> */}
            </div>
            <div className="navbar-social">
                <a href="#">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="#">
                    <img src={facebook} alt="facebook" />
                </a>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </nav>
    );
};

export default Navbar;
