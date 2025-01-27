import { MensajeWsp } from "../data"
import "./bannerAccidentesPersonales.css"

export const BannerAccidentesPersonales = () => {
    return (
        <div >
     <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
    
    <h2 className="h2Banner-ap">Hacé lo que amás sin miedo. <span className="spanBanner">Yuju te asesora <br/>para que elijas el mejor seguro. Tenemos varias opciones de aseguradoras.</span>   
      <br/>
     ¿Querés saber mas?
    </h2>
    <div className="buttonMotoBanner-ap">
      <a>
      <button onClick={()=> MensajeWsp("accidentes personales")}>Escribinos</button>
      </a>
    </div>
        </div>
      )
}
