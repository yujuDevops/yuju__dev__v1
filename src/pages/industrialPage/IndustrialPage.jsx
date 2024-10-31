import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonIndustrila, BannerIndustrial, HeaderIndustrial, ImgEmpresasIndustrial, IndustrialInfo } from "./components"


export const IndustrialPage = () => {
  return (
 <>
  {/* // depende de los estilos de moto  */}
 <HeaderIndustrial/>
 <CotizaAhora 
 titulo="Seguro de motos"
 presio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730211831/SICEI_z9umiy.png"
/>
<IndustrialInfo/>

<BannerIndustrial/>
<ImgEmpresasIndustrial/>
<AcordeonIndustrila/>
<Carrousel/>
 </>  
  )
}
