import "./bannerHogarPage.css"
import { mensajeWspHogar } from "../../data/mensajeWspHogar"


export const BannerHogarPage = () => {
  return (
    <div className="bannerContratarPadre" >
<img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />


<h2 className="h2Banner-hogar">No hay nada mejor que casa. <span className="spanBanner">Te asesoramos para que encuentres  <br/>el seguro de hogar que te da la tranquilidad que buscás.</span> 
<br/>

<br />¿Querés proteger tu hogar?

</h2>
<div className="buttonbiciBanner">
  <a >
  <button onClick={() => {mensajeWspHogar()}}>Escribinos</button>
  </a>
</div>

    </div>
  )
}
