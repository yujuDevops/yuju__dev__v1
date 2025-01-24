import './Header.css';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useEffect, useRef } from 'react';

export const Header = ({ imageSrcMobile, imageTabletSrc, imageSrc, title, subtitle, tercerTitulo }) => {
    const selectRef = useRef(null);

    // Opciones del selector
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
            window.location.href = selectedOption.value; // 🔥 Recarga la página completamente
        }
    };

    // Ajustar el desplazamiento cuando aparece el teclado
    useEffect(() => {
        const adjustForKeyboard = () => {
            if (selectRef.current) {
                const viewportHeight = window.visualViewport?.height || window.innerHeight;
                const rect = selectRef.current.getBoundingClientRect();
                if (rect.bottom > viewportHeight) {
                    window.scrollBy({
                        top: rect.bottom - viewportHeight + 80, 
                        behavior: 'scroll'
                    });
                }
            }
        };

        window.addEventListener('resize', adjustForKeyboard);

        return () => {
            window.removeEventListener('resize', adjustForKeyboard);
        };
    }, []);

    return (
        <div className="header" style={{ backgroundImage: `url(${imageSrc})`}}>
            <div className="background-image-mobile" style={{ backgroundImage: `url(${imageSrcMobile})` }}></div>
            <div className="background-image-tablet">
                <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733592886/me_podrias_dar_una_imagen_de_3000x3500_ummdgp.jpg" alt="imagen tablet" />
            </div>

            <div className="header-content">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>{tercerTitulo}</h3>
                <Select
                    className="header-select"
                    options={options}
                    placeholder="Elegí el seguro"
                    maxMenuHeight={160} // Limitar altura del menú
                    onChange={handleSelectChange}
                    ref={selectRef} // Asignar la referencia
                    isSearchable={false} // Deshabilita el teclado
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
