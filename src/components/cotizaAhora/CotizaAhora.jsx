import './cotizaAhora.css'
import propTypes from 'prop-types' 

export const CotizaAhora = ({titulo,precio,button,src}) => {



  return (
    <div className='div-cotizaAhora'>

<div className="moto-insurance-container">
      <span className="moto-texto">{titulo}</span>
      <div className="vertical-dotted-separator"></div>
      <span className="moto-precio">{precio}</span>
      <div className="vertical-dotted-separator"></div>
     <img src={src} alt="" className='moto-icon' />
      <button className="moto-button">{button}</button>
    </div>



    </div>
  )
}

CotizaAhora.propTypes = {
titulo : propTypes.string.isRequired,
precio : propTypes.string.isRequired,
button : propTypes.string.isRequired,
src : propTypes.string

}
