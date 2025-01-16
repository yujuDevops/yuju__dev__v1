import { MensajeWspViajero } from "../data";
import "./headerViajero.css";


export const HeaderViajero = () => {
  return (
    <header className='header-viejero'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217735/Header-asistencia_tbm5xo.webp" alt=""  className='imgPorDefectoviejero' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617400/Header-asistencia_sas9t4.webp" alt="" className='imgRemplazoviejero'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733327892/Header-asistenciaviajero-celular_fbpwz2.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-viejero'>
    <h1 className='h1-viejero'>SEGURO DE ASISTENCIA AL VIAJERO</h1>
    <h2 className='h2-viejero'>Creá tu propia historia. Viajá con la seguridad de que estás protegido con Yuju.</h2>
    <h3 className='h3-viejero'>Tenemos el plan que se adapta a vos y a tu tipo de viaje, con la cobertura <br/> más amplia y personalizada</h3>
    <button className='buttonviejeroHeader' onClick={()=> MensajeWspViajero("asistencia al viajero")}><a  target="_blank">Cotizá</a></button>
    </div>
  
    </header>
  )
}
