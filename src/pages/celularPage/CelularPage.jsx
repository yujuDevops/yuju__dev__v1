import "./celularPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { BannerCelulares, CardSeguroCelular, HeaderCelulares, ImgEmpresasCelulares, TodoRiesgoCelular } from "./components"
import { AcordeonCelulares } from "./components/AcordeonCelulares"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import { MensajeWspCelular } from "./data";


export const CelularPage = () => {
  return (

    <>
    <div className="semisphere-container-celular">
      <div className="semisphere-celular"></div>
      <div className="content-celular"></div>
   <HeaderCelulares/>
   <CotizaAhora 
 titulo="Seguro de celular"
 precio="Desde $2.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731331114/Celular_1_1_dgdlcm.png"
 MensajeWsp={MensajeWspCelular}
/>
<TodoRiesgoCelular/>
<CardSeguroCelular/>
<BannerCelulares/>
<ImgEmpresasCelulares/>
<BannerSeguros/>
<AcordeonCelulares/>
<div id="carrousel">
<Carrousel Name="Celular"/>
</div>
</div>
 </>
  )
}
