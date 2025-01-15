import { MensajeWspEmbarcaciones } from "../data/MensajeWspEmbarcaciones";
import"./headerEmbarcaciones.css";

const sendMessage = () => {
  const message = `Hola, me interesa conocer más sobre el seguro de embarcaciones.
`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};

export const HeaderEmbarcaciones = () => {
  return (
    <header className='header-motos'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217735/Header-embarcacion_1_hmiy4f.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617452/Header-embarcacion_1_kmtrgq.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732547049/Header-embarcaciones-celular_dmqnpq.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-motos'>
    <h1 className='h1-motos'>SEGURO DE EMBARCACIÓN</h1>
    <h2 className='h2-motos'>Navegá sin límites. Cotizá y contratá online.</h2>
    <h3 className='h3-motos'>El mejor seguro náutico, para que puedas disfrutar de tu pasión por el<br/> agua con seguridad y tranquilidad. Podés contratarlo de forma rápida y<br/> sencilla desde tu celular.</h3>
    <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage} >
              <button className='buttonMotoHeader'>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container">
            <div class="linea"></div>
            <span class="separador-celular">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://www.rusnautica.com.ar/9254/" target="_blank" rel="noopener noreferrer">
              <button className='buttonMotoHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
  
    </header>
    
)
}
