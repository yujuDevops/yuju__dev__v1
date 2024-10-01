import { Link } from 'react-router-dom';
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/image/logoYujuAzul.png';
import logoMobile from "../../assets/image/webBlanco.png"
import instagram from '../../assets/image/web_Icono-instagram.png';
import facebook from '../../assets/image/web_Icono-facebook.png';
import { customHooks } from './customHooks';

const Navbar = () => {
  
    const {toggleMenu,
        toggleDropdown,
        handlePageChange,
        isOpen,
        isDropdownOpen,
        activePage } = customHooks()

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/home" onClick={() => handlePageChange('home')}>
                    <img src={logo} alt="Yuju Logo" className="logo-desktop" />
                    <img src={logoMobile} alt="Yuju Logo" className="logo-mobile" />
                </a>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link 
                    to="/home" 
                    className={activePage === 'home' ? 'active' : ''} 
                    onClick={() => handlePageChange('home')}
                >
                    Home
                </Link>
                <div className="dropdown">
                    <button className="dropbtn" onClick={() => toggleDropdown('seguros')}>
                        Seguros 
                        <i className={`fa-solid ${isDropdownOpen.seguros ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {isDropdownOpen.seguros && (
                        <div className="dropdown-content">
                            <div className="dropdown-content">
          <div className="dropdown-column">
            <Link to="/auto" onClick={() => handlePageChange('auto')}>Auto</Link>
            <Link to="/moto" onClick={() => handlePageChange('moto')}>Moto</Link>
            <Link to="/bici" onClick={() => handlePageChange('bici')}>Bici</Link>
            <Link to="/hogar" onClick={() => handlePageChange('hogar')}>Hogar</Link>
            <Link to="/vida" onClick={() => handlePageChange('vida')}>Vida</Link>
            <Link to="/salud" onClick={() => handlePageChange('salud')}>Salud</Link>
            <Link to="/accidentespersonales" onClick={() => handlePageChange('accidentespersonales')}>Accidentes p.</Link>
          </div>
          <div className="dropdown-separator"></div>
          <div className="dropdown-column">
            <Link to="/industria" onClick={() => handlePageChange('industria')}>Industria</Link>
            <Link to="/embarcaciones" onClick={() => handlePageChange('embarcaciones')}>Embarcaciones</Link>
            <Link to="/celular" onClick={() => handlePageChange('celular')}>Celular</Link>
            <Link to="/notebook" onClick={() => handlePageChange('notebook')}>Notebook</Link>
            <Link to="/pcgamer" onClick={() => handlePageChange('pcgamer')}>PC Gamer</Link>
            <Link to="/consola" onClick={() => handlePageChange('consola')}>Consola</Link>
            <Link to="/tablet" onClick={() => handlePageChange('tablet')}>Tablet</Link>
            <Link to="/retiro" onClick={() => handlePageChange('retiro')}>Retiro</Link>
          </div>
          </div>
          </div>
                    )}
                </div>
                <Link 
                    to="/institucional" 
                    className={activePage === 'institucional' ? 'active' : ''} 
                    onClick={() => handlePageChange('institucional')}
                >
                    Institucional
                </Link>
                <Link 
                    to="/siniestros" 
                    className={activePage === 'siniestros' ? 'active' : ''} 
                    onClick={() => handlePageChange('siniestros')}
                >
                    Siniestros
                </Link>
                <Link 
                    to="/club-yuju" 
                    className={activePage === 'club-yuju' ? 'active' : ''} 
                    onClick={() => handlePageChange('club-yuju')}
                >
                    Club Yuju
                </Link>
                <Link 
                    to="/contacto" 
                    className={activePage === 'contacto' ? 'active' : ''} 
                    onClick={() => handlePageChange('contacto')}
                >
                    Contacto
                </Link>
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
