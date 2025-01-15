import { MensajeWspTablet } from "../data/MensajeWspTablet"
import "./headerTablet.css"

export const HeaderTablet = () => {
  return (
    <header className='header-tablet'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217737/Header-tablet_q4ksjl.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617521/Header-tablet_ri8axm.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733407834/Header-tablet-celular_1_hblnmc.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-tablet'>
    <h1 className='h1-tablet'>SEGURO DE TABLET</h1>
    <h2 className='h2-tablet'>Asegurá tu tablet desde donde estés al mejor precio.</h2>
    <h3 className='h3-tablet'>Llevá tu tablet con vos. Con el seguro de Yuju podés estar tranquilo. <br />Conocé nuestros planes y contratalo hoy 100% online.</h3>
    <button className='buttonTabletHeader' onClick={()=> MensajeWspTablet("seguro de tablet")}><a  target="_blank">Cotizá</a></button>
    </div>
  
    </header>
  )
}
