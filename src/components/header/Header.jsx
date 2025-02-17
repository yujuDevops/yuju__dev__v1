import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = ({ imageSrcMobile, imageTabletSrc, imageSrc, title, subtitle, tercerTitulo }) => {
    const selectRef = useRef(null);
    const [isSearchable, setIsSearchable] = useState(true); // Por defecto en móvil y tablet

    useEffect(() => {
        const updateSearchable = () => {
            setIsSearchable(window.innerWidth > 1024); // Activa búsqueda en pantallas menores a 1024px
        };

        updateSearchable(); // Llamada inicial
        window.addEventListener('resize', updateSearchable);

        return () => window.removeEventListener('resize', updateSearchable);
    }, []);

    const options = [
        { value: '/auto', label: 'Seguro de Auto' },
        { value: '/moto', label: 'Seguro de Moto' },
        { value: '/bici', label: 'Seguro de Bicicleta' },
        { value: '/hogar', label: 'Seguro de Hogar' },
        { value: '/vida', label: 'Seguro de Vida' },
        { value: '/salud', label: 'Seguro de Salud' },
        { value: '/accidentespersonales', label: 'Seguro de Accidentes personales' },
        { value: '/asisviajero', label: 'Seguro de Asistencia al viajero' },
        { value: '/industria', label: 'Seguro de Integral de comercio' },
        { value: '/retiro', label: 'Seguro de Retiro' },
        { value: '/embarcaciones', label: 'Seguro de Embarcaciones' },
        { value: '/celular', label: 'Seguro de Celular' },
        { value: '/notebook', label: 'Seguro de Notebook' },
        { value: '/pcgamer', label: 'Seguro de Pc gamer' },
        { value: '/consola', label: 'Seguro de Consola' },
        { value: '/tablet', label: 'Seguro de Tablet' }
    ];

    const handleSelectChange = (selectedOption) => {
        if (selectedOption) {
            window.location.href = selectedOption.value;
        }
    };

    return (
        <div className="header" style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className="background-image-mobile" style={{ backgroundImage: `url(${imageSrcMobile})` }}></div>
            <div className="background-image-tablet">
                {/* <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733592886/me_podrias_dar_una_imagen_de_3000x3500_ummdgp.jpg" alt="imagen tablet" /> */}
            </div>

            <div className="header-content">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>{tercerTitulo}</h3>
                <Select
                    className="header-select"
                    options={options}
                    placeholder="Elegí el seguro"
                    maxMenuHeight={160}
                    onChange={handleSelectChange}
                    ref={selectRef}
                    isSearchable={isSearchable} // Se adapta al tamaño de pantalla
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    imageSrc: PropTypes.string,
    imageSrcMobile: PropTypes.string,
    imageTabletSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    tercerTitulo: PropTypes.string
};

export default Header;
