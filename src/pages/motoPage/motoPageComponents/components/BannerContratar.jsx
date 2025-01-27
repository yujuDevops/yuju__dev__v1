import "./bannerContratar.css";
import { MensajeWspMoto } from "../../data";

export const BannerContratar = () => {
  return (
    <div >
<img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />

<h2 className="h2Banner">Viví tu pasión. <span className="spanBanner">Protegé tu moto y tu estilo de vida.</span> Yuju te muestra las  <br/>mejores opciones de seguro para tu moto. 
<br/>
<br/>
<span className="spanBanner"> ¿Querés una cotización?</span>

</h2>
<div className="buttonMotoBanner">
<a>
<button onClick={()=> MensajeWspMoto()}>Escribinos</button>
</a>
</div>
    </div>
  )
}
