import './Header.css';
import PropTypes from 'prop-types';

export const Header = ({ imageSrcMobile,imageSrc, title, subtitle, tercerTitulo, options }) => {
    return (
        <div className="header" style={{ backgroundImage: `url(${imageSrc})`, height: '88vh' }}>
        <div className="background-image-mobile" style={{ backgroundImage: `url(${imageSrcMobile})` }}></div>
        <div className="header-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{tercerTitulo}</h3>
          <select className="header-select">
            <option value="">Elegí el seguro</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  Header.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    tercerTitulo: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    ).isRequired
  };
  
  export default Header;