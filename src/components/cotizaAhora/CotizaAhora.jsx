import './cotizaAhora.css'
import propTypes from 'prop-types' 

export const CotizaAhora = ({titulo,precio,button,src}) => {

  const sendMessage = (title) => {
    const message = `Hola, quisiera información sobre el ${title}.`;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };




  return (
    <div className='div-cotizaAhora'>

<div className="moto-insurance-container">
      <span className="moto-texto">{titulo}</span>
      <div className="vertical-dotted-separator"></div>
      <span className="moto-precio">{precio}</span>
      <div className="vertical-dotted-separator"></div>
     <img src={src} alt="" className='moto-icon' />
      <button onClick={()=> sendMessage(titulo)} className="moto-button">{button}</button>
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
