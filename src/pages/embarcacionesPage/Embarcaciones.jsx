import "./embarcaciones.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonEmbarcaciones, BannerEmbarcaciones, CardEmbarcaciones, DataEmbarcaciones, HeaderEmbarcaciones, ImgEmpresasEmbarcaciones } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"


export const Embarcaciones = () => {
  return (

    <>
    <div className="semisphere-container-embarcacion">
      <div className="semisphere-embarcacion"></div>
      <div className="content-embarcacion"></div>
   <HeaderEmbarcaciones/>
   <CotizaAhora 
 titulo="Seguro de embarcaciones"
 precio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730742865/embarcaciones_uxaogz.png"
/>

<CardEmbarcaciones/>
<div className="card-imagen-wf2-4taimg-emba">
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732545558/Ilustracion-embarcacion-notebook_mtbxpl.svg" alt="" />
    </div>  
    
<BannerSeguros/>

   <DataEmbarcaciones/>
   <BannerEmbarcaciones/>
    <ImgEmpresasEmbarcaciones/>
    <AcordeonEmbarcaciones/>
    <div id="carrousel">
  <Carrousel Name="Embarcaciones"/>
  </div> 
  </div> 
    </>

  )
}
