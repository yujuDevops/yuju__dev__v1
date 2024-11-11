import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonEmbarcaciones, BannerEmbarcaciones, CardEmbarcaciones, DataEmbarcaciones, HeaderEmbarcaciones, ImgEmpresasEmbarcaciones } from "./components"



export const Embarcaciones = () => {
  return (

    <>
   <HeaderEmbarcaciones/>
   <CotizaAhora 
 titulo="Seguro de motos"
 presio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730742865/embarcaciones_uxaogz.png"
/>

<CardEmbarcaciones/>
<div className="card-imagen-wf2-4taimg">
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1729689717/foto-bici-2_h83oru.svg" alt="" />
    </div>  
   
   <DataEmbarcaciones/>
   <BannerEmbarcaciones/>
    <ImgEmpresasEmbarcaciones/>
    <AcordeonEmbarcaciones/>
  <Carrousel/>

    </>

  )
}
