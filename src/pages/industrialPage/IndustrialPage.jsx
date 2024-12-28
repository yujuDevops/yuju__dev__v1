import "./IndustrialPage.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonIndustrila, BannerIndustrial, HeaderIndustrial, ImgEmpresasIndustrial, IndustrialInfo } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"

export const IndustrialPage = () => {
  return (
 <>
  {/* // depende de los estilos de moto  */}
  <div className="semisphere-container-industria">
      <div className="semisphere-industria"></div>
      <div className="content-industria"></div>
 <HeaderIndustrial/>
 <CotizaAhora 
 titulo="Seguro de motos"
 precio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730211831/SICEI_z9umiy.png"
/>
<IndustrialInfo/>

<BannerIndustrial/>
<ImgEmpresasIndustrial/>
<BannerSeguros/>
<AcordeonIndustrila/>
<div id="carrousel">
<Carrousel/>
</div>
</div>
 </>  
  )
}
