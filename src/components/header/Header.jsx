import './Header.css';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'; // Hook para la navegación

export const Header = ({ imageSrcMobile, imageSrc, title, subtitle, tercerTitulo }) => {
    const navigate = useNavigate(); // Hook para la navegación

    // Definir las opciones del selector
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

    // Manejar el cambio de selección
    const handleSelectChange = (selectedOption) => {
        if (selectedOption) {
            navigate(selectedOption.value); // Redirigir a la página seleccionada
        }
    };

    return (
        <div className="header" style={{ backgroundImage: `url(${imageSrc})`, height: '88vh' }}>
            <div className="background-image-mobile" style={{ backgroundImage: `url(${imageSrcMobile})` }}></div>
            <div className="header-content">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>{tercerTitulo}</h3>
                <Select
                    className="header-select"
                    options={options}
                    placeholder="Elegí el seguro"
                    maxMenuHeight={100} // Limitar la altura del menú desplegable a 200px
                    onChange={handleSelectChange} // Llamar a la función cuando se selecciona una opción
                />
            </div>
        </div>
    );
};

Header.propTypes = {
    imageSrc: PropTypes.string,
    imageSrcMobile: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    tercerTitulo: PropTypes.string
};

export default Header;
