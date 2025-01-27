import { MensajeWspNotebook } from "../data/MensajeWspNotebook";
import "./baneerNotebook.css";

export const BannerNotebook = () => {
    return (
      <div >
      <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
      <img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
      <img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />

      <h2 className="h2Banner">Conectá tu mundo. <span className="spanBanner"> 
      Yuju te asesora para que elijas el mejor seguro.  <br/>
      Tenemos varias opciones de aseguradoras. 
      <br/>
      <strong>¿Querés saber más?</strong>
      </span>
     </h2>
     <div className="buttonNotebookBanner">
     <a>
    <button onClick={()=> MensajeWspNotebook()}>Escribinos</button>
    </a>
</div>
          </div>
    )
  }
  