
import Carrousel from '../../components/carrousel/Carrousel'
import EmailInput from '../homepage/componentsHome/EmailInput'
import { HeaderContacto } from './Components'
import "./contactoPage.css"

export const ContactPage = () => {
  return (
<>
<HeaderContacto/>
<div className='containerNewsletterContacto'>
        <h3 className='newsletter__h3'>¡Información y descuentos!</h3>
        <p className='newsletter__p'>¿Querés ser el primero en obtener ofertas? Recibí toda la información en tu casilla de mail, dejanos tu correo y nos contectaremos a la brevedad.</p>
        <div className="newsletter__input">
        <EmailInput />
        </div>
       </div>

<Carrousel/> 
</>
  )
}

