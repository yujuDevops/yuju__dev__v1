import { MensajeWspNotebook } from "../data/MensajeWspNotebook";
import "./headerNotebook.css";

export const HeaderNotebook = () => {
  return (
    <header className='header-notebook'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217736/Header-notebook_dybdln.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617504/Header-notebook_kflwx1.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733242703/Header-notebook-celular_xqiyp9.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-notebook'>
    <h1 className='h1-notebook'>SEGURO DE NOTEBOOK</h1>
    <h2 className='h2-notebook'>Asegurá tu notebook desde donde estés. Encontrá el plan que más se adapte a vos.</h2>
    <h3 className='h3-notebook'>Disfrutá haciendo, aprendiendo y creando. Tenemos el mejor seguro para tu notebook, <br/>para que la disfrutes con tranquilidad. Contratalo hoy, 100% online.</h3>
    <button className='buttonVidaHeader'><a href="
https://wa.me/5491156307246" target="_blank">Cotizá</a></button>
    </div>

    {/* onClick={()=> MensajeWspNotebook("seguro de embarcación")} */}
  
    </header>
  )
}
