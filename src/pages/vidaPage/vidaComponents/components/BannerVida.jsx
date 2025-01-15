import { MensajeWspVida } from "../../data"


export const BannerVida = () => {
  return (
  
        <div >
    <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
    
    <h2 className="h2Banner">Dejá tu huella. Asegurá el bienestar de tu familia.<br/><span className="spanBanner" > Yuju te asesora para que elijas el seguro de vida que más te conviene.</span>
    <br/>
    <br/>
    <span className="spanBanner">  ¿Querés saber más?</span>
    
    </h2>
    <div className="buttonMotoBanner">
  <a>
  <button onClick={()=> MensajeWspVida("seguro de vida")}>Escribinos</button>
  </a>
</div>
    <div className="vidBanner">
 
    </div>
        </div>
  )
}