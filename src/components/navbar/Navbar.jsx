import { Link } from 'react-router-dom';
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/image/logoYujuAzul.png';
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
                    <img src={logo} alt="Yuju Logo" />
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
                            <Link 
                                to="/auto" 
                                className={activePage === 'auto' ? 'active' : ''} 
                                onClick={() => handlePageChange('auto')}
                            >
                                Auto
                            </Link>
                            <Link 
                                to="/moto" 
                                className={activePage === 'moto' ? 'active' : ''} 
                                onClick={() => handlePageChange('moto')}
                            >
                                Moto
                            </Link>
                            <Link 
                                to="/moto" 
                                className={activePage === 'moto' ? 'active' : ''} 
                                onClick={() => handlePageChange('moto')}
                            >
                                Moto
                            </Link>
                            <Link 
                                to="/moto" 
                                className={activePage === 'moto' ? 'active' : ''} 
                                onClick={() => handlePageChange('moto')}
                            >
                                Moto
                            </Link>
                            <Link 
                                to="/bici" 
                                className={activePage === 'bici' ? 'active' : ''} 
                                onClick={() => handlePageChange('bici')}
                            >
                                Bici
                            </Link>
                            <Link 
                                to="/hogar" 
                                className={activePage === 'hogar' ? 'active' : ''} 
                                onClick={() => handlePageChange('hogar')}
                            >
                                Hogar
                            </Link>
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
