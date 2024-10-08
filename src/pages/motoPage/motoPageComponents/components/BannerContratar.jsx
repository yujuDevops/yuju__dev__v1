import banerContratar from "../../../../assets/image/imgMotos/Banner-contratar.jpg"
import banerMotosCelular from "../../../../assets/image/imgMotos/Banner-contratar-celular.jpg"
import banerMotosTablet from "../../../../assets/image/imgMotos/Banner-CTA-tablet.jpg"
import "./bannerContratar.css"

export const BannerContratar = () => {
  return (
    <div >
<img className="imgBannerContratar" src={banerContratar} alt="" />
<img className="imgBannerMotosTablet" src={banerMotosTablet} alt="" />
<img className="imgBannerMotosCelular" src={banerMotosCelular} alt="" />

<h2 className="h2Banner">Viví tu pasión. <span className="spanBanner">Protegé tu moto y tu estilo de vida.</span> Yuju te muestra las  <br/>mejores opciones de seguro para tu moto. 
<br/>
<br/>
<span className="spanBanner"> ¿Querés una cotización?</span>

</h2>
<div className="buttonMotoBanner">
  <a href="">
  <button>Escribinos</button>
  </a>
</div>
    </div>
  )
}
