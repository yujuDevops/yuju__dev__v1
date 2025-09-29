"use client"

import "./cotizaAhoraAuto.css"
import propTypes from "prop-types"

type CotizaAhoraAutoProps = {
  titulo: string;
  precio: string;
  button: string;
  src?: string;
  MensajeWsp: () => void;
};

export const CotizaAhoraAuto = ({ titulo, precio, button, src, MensajeWsp }: CotizaAhoraAutoProps) => {
  return (
    <div className="xtttsx-div-cotizaAhora">
      <div className="xtttsx-moto-insurance-container">
        <span className="xtttsx-moto-texto">{titulo}</span>
        <div className="xtttsx-vertical-dotted-separator"></div>
        <span className="xtttsx-moto-precio">{precio}</span>
        <div className="xtttsx-vertical-dotted-separator"></div>
        <img src={src || "/placeholder.svg"} alt="" className="xtttsx-moto-icon" />
        <button onClick={() => MensajeWsp()} className="xtttsx-moto-button">
          {button}
        </button>
      </div>
    </div>
  )
}

CotizaAhoraAuto.propTypes = {
  titulo: propTypes.string.isRequired,
  precio: propTypes.string.isRequired,
  button: propTypes.string.isRequired,
  src: propTypes.string,
}
