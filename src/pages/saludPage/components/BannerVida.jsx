import { MensajeWspSalud } from "../data";
import "./bannerVida.css";

export const BannerVida = () => {
  return (
  
        <div >
    <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
    
    <h2 className="h2Banner-salud">Vos elegís cómo cuidar tu salud.<span className="spanBanner" > Yuju te asesora para que elijas el mejor seguro. Tenemos varias opciones de aseguradoras.</span>
    
    <br/>
    <span className="spanBanner-salud">  ¿Querés saber más?</span>
    
    </h2>
    <div className="buttonSaludBanner">
  <a >
  <button onClick={()=> MensajeWspSalud("seguro de salud")}>Te asesoramos</button>
  </a>
</div>
    <div className="vidBanner">
 
    </div>
        </div>
  )
}