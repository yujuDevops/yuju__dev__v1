import React, { useState } from 'react';
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '/Users/54344/yuju__dev__v1/src/assets/image/logoYujuAzul.png';
import instagram from '/Users/54344/yuju__dev__v1/src/assets/image/web_Icono-instagram.png';
import facebook from '/Users/54344/yuju__dev__v1/src/assets/image/web_Icono-facebook.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState({ seguros: false, aseguradoras: false });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdown) => {
        setIsDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#">
                <img src={logo} alt="Yuju Logo" />
                </a>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="/">Home</a>
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => toggleDropdown('seguros')}>
                        Seguros 
                        <i className={`fa-solid ${isDropdownOpen.seguros ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {isDropdownOpen.seguros && (
                        <div className="dropdown-content">
                            <a href="/auto">Auto</a>
                            <a href="/moto">Moto</a>
                            <a href="/bici">Bici</a>
                            <a href="/hogar">Hogar</a>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => toggleDropdown('aseguradoras')}>
                        Aseguradoras
                        <i className={`fa-solid ${isDropdownOpen.aseguradoras ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {isDropdownOpen.aseguradoras && (
                        <div className="dropdown-content">
                            <a href="/rus">RUS</a>
                            <a href="/experta">Experta</a>
                            <a href="/san-cristobal">San Cristobal</a>
                        </div>
                    )}
                </div>
                <a href="/institucional">Institucional</a>
                <a href="/siniestros">Siniestros</a>
                <a href="/club-yuju">Club Yuju</a>
                <a href="/contacto">Contacto</a>
            </div>
            <div className="navbar-social">
                    <a href="#">
                    <img src={instagram} alt="instagram" /></a>
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