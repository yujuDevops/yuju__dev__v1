import "./pcGamerPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonPcGamer, BannerPcGamer, DataCardPcgamer, HeaderPcGamer, ImgEmpresasPcGamer, InfoPcGamer } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";


export const PcGamerPage = () => {
  return (
<>
<div className="semisphere-container-pcgamer">
      <div className="semisphere-pcgamer"></div>
      <div className="content-pcgamer"></div>
<HeaderPcGamer/>
<CotizaAhora 
 titulo="Seguro de PC gamer"
 precio="Desde $1.060/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732028885/PC_gamer_dtmula.png"
 />
 <InfoPcGamer/>
 <DataCardPcgamer/>
 <BannerPcGamer/> 
 <ImgEmpresasPcGamer /> 
 <BannerSeguros/>
 <AcordeonPcGamer/>
 <div id="carrousel">
 <Carrousel Name="PC Gamer"/> 
 </div>
 </div>
</>
  )
}
