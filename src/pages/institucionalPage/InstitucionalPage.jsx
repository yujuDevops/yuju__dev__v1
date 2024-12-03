import Carrousel from "../../components/carrousel/Carrousel"
import EmailInput from "../homepage/componentsHome/EmailInput"
import { HeaderInstitucionalPage, QueNosDiferencia, QueTeOfrecemo, VisionMisionObjetivo } from "./components"

export const InstitucionalPage = () => {
  return (
    <>
<HeaderInstitucionalPage/>
<VisionMisionObjetivo/>
<QueNosDiferencia/>
<QueTeOfrecemo/>

<div className='containerNewsletter'>
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

