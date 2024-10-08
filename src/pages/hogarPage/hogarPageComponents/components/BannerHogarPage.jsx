import banerContratar from "../../../../assets/image/imgMotos/Banner-contratar.jpg"
import banerMotosCelular from "../../../../assets/image/imgMotos/Banner-contratar-celular.jpg"
import banerMotosTablet from "../../../../assets/image/imgMotos/Banner-CTA-tablet.jpg"
import "./bannerHogarPage.css"

export const BannerHogarPage = () => {
  return (
    <div className="bannerContratarPadre" >
<img className="imgBannerContratar" src={banerContratar} alt="" />
<img className="imgBannerMotosTablet" src={banerMotosTablet} alt="" />
<img className="imgBannerMotosCelular" src={banerMotosCelular} alt="" />

<h2 className="h2Banner">No hay nada mejor que casa. <span className="spanBanner">Te asesoramos para que encuentres  <br/>el seguro de hogar que te da la tranquilidad que buscás.</span> 
¿Querés proteger tu hogar?
<br/>
<br/>


</h2>

    </div>
  )
}
