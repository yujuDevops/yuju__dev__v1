import { MensajeWspBici } from "../data"
import "./BannerBici.css"

export const BannerBici = () => {
  return (
  
        <div >
<img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />

<h2 className="h2Banner-bici">Pedalear es vivir. Cuidá tu bicicleta y tu salud.<span className="spanBanner"><br/>Yuju te ofrece el seguro de bicicleta más completo y accesible. ¿Querés saber más?</span> 
<br/>
<br/>
<span className="spanBanner"> ¿Querés una cotización?</span>

</h2>
<div className="buttonbiciBanner">
  <a >
  <button onClick={()=> MensajeWspBici("seguro de bicicletas")}>Escribinos</button>
  </a>
</div>
        </div>
  )
}
