
import Carrousel from '../../components/carrousel/Carrousel'
import EmailInput from '../homepage/componentsHome/EmailInput'
import { HeaderContacto } from './Components'
import "./contactoPage.css"

export const ContactPage = () => {
  return (
<>
<div className="semisphere-container-contacto">
      <div className="semisphere-contacto"></div>
      <div className="content-contacto"></div>
<HeaderContacto/>
<div className='containerNewsletterContacto-gg'>
        <h3 className='newsletter__h3'>¡Información y descuentos!</h3>
        <p className='newsletter__p'>¿Querés ser el primero en obtener ofertas? Recibí toda la información en tu casilla de mail, dejanos tu correo y nos contectaremos a la brevedad.</p>
        <div className="newsletter__input">
        <EmailInput />
        </div>
       </div>

<Carrousel/> 
</div>
</>
  )
}

