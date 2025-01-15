import { MensajeWspAuto } from "../data";
import "./bannerContratar.css";

export const BannerContratar = () => {
  return (
    <div >
<img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />

<h2 className="h2Banner">Arrancá con todo. Encontrá el seguro que tu auto necesita. <span className="spanBanner"><br/>Compará precios y coberturas de las mejores aseguradoras con Yuju.</span>   
<br/>
<br />
<span className="spanBanner"> ¿Querés una cotización?</span>

</h2>
<div className="buttonMotoBanner">
  <a >
  <button onClick={()=>MensajeWspAuto()}>Escribinos</button>
  </a>
</div>
    </div>
  )
}
