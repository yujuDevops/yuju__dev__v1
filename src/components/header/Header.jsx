import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ imageSrc, title, subtitle, tercerTitulo, options }) => {
    return (
        <div className="header" style={{ backgroundImage: `url(${imageSrc})`, height: '88vh' }}>
        <div className="header-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{tercerTitulo}</h3>
          <select className="header-select">
            <option value="">Elegí el seguro</option>
            {options.map((option) => (
              <option key={option.id} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  Header.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tercerTitulo: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired
  };
  
  export default Header;