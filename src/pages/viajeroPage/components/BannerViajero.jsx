import { MensajeWspViajero } from "../data"

export const BannerViajero = () => {
  return (
    <div >
   <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
    
    <h2 className="h2Banner">Viví tu viaje al máximo.  <span className="spanBanner"> 
    No dejes que nada te arruine tu experiencia.<br/> Tenemos el seguro que te soluciona todo, sin importar dónde, cuánto ni cómo viajás.
    <br/>
    </span>
    ¿Querés viajar tranquilo?
  
   </h2>
   <div className="buttonMotoBanner">
  <a >
  <button  onClick={()=> MensajeWspViajero("asistencia al viajero")}>Escribinos</button>
  </a>
  </div>
        </div>
  )
}
