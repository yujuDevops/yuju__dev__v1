import { MensajeWspConsola } from "../data/MensajeWspConsola";
import "./bannerConsola.css";

import React from 'react'

export const BannerConsola = () => {
  return (
    <div >
     <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
      <img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
      <img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
    
    <h2 className="h2Banner-pc">Disfrutá sin preocupaciones <span className="spanBanner"> 
    .Yuju te brinda el seguro de consola más <br/>
    completo y accesible. <strong>¿Querés saber más?</strong>
    <br />
    </span>
   
  
   </h2>
<div className="buttonNotebookBanner">
  <a>
  <button onClick={()=> MensajeWspConsola("seguro de consola")}>Escribinos</button>
  </a>
</div>
    </div>
    
  )
}
