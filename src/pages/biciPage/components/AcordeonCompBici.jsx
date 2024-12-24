import { useState } from "react";
import PropTypes from "prop-types";
import "./acordeonCompBici.css";  // Asegúrate de que tu CSS esté correctamente importado

export const AcordeonCompBici = ({ id, title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const alternar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={id} className="divPadreAcordeon-bici">
      <button onClick={alternar} className="bottonAcordeon-bici">
        {title}
        <span className={`arrow ${isOpen ? "arrow-open" : "arrow-closed"}`}>
          <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
        </span>
      </button>
      <div className={`divHijoBiciAcordeon-bici ${isOpen ? "show" : ""}`}>
        <p>{subtitle}</p>
      </div>
      {id === 7 ? null : <hr />}
    </div>
  );
};

AcordeonCompBici.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
