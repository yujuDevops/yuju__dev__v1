import React , { useState } from 'react';
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '/Users/nimbu/yuju-v1/src/assets/image/RUS-bn.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="Yuju Logo" />
    </div>
    <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
      <a href="/">Home</a>
      <div className="dropdown">
        <button className="dropbtn">Seguros</button>
        <div className="dropdown-content">
          <a href="/auto">Auto</a>
          <a href="/moto">Moto</a>
          <a href="/bici">Bici</a>
          <a href="/hogar">Hogar</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Aseguradoras</button>
        <div className="dropdown-content">
          <a href="/rus">RUS</a>
          <a href="/experta">Experta</a>
          <a href="/san-cristobal">San Cristobal</a>
        </div>
      </div>
      <a href="/institucional">Institucional</a>
      <a href="/siniestros">Siniestros</a>
      <a href="/club-yuju">Club Yuju</a>
      <a href="/contacto">Contacto</a>
      <div className="navbar-social">
        <a href="https://facebook.com">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <button className="hamburger" onClick={toggleMenu}>
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
    </button>
  </nav>
   );
};
 
export default Navbar