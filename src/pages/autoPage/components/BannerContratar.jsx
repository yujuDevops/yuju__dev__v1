import { MensajeWspAuto } from "../data";
import "./bannerContratar.css";

export const BannerContratar = () => {
  return (
    <div >
<img className="imgBannerContratar" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1743083368/Banner-contratar_3000px_vvuto3.jpg" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1743086349/Banner-CTA-tablet_o2gkex.jpg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1743083815/Banner-contacto2_k9ogmz.jpg" alt="" />

<h2 className="h2BannerAuto">¡30% OFF en tu seguro de auto! <span className="spanBanner-auto"><br/>Solo por tiempo limitado. Consultá ahora con un asesor.</span>   


</h2>
<div className="buttonMotoBanner">
  <a >
  <button onClick={()=>MensajeWspAuto()}>Quiero mi descuento</button>
  </a>
</div>
    </div>
  )
}
