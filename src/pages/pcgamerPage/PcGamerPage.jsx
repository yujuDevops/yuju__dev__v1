import "./pcGamerPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonPcGamer, BannerPcGamer, DataCardPcgamer, HeaderPcGamer, ImgEmpresasPcGamer, InfoPcGamer } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import { MensajeWspPcGamer } from "./data";
import usePrecios from "../../components/hooks/usePrecios"

export const PcGamerPage = () => {
  const { precio, error } = usePrecios('pcgamer');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
<>
<div className="semisphere-container-pcgamer">
      <div className="semisphere-pcgamer"></div>
      <div className="content-pcgamer"></div>
<HeaderPcGamer/>
<CotizaAhora 
 titulo="Seguro de PC gamer"
//  precio="Desde $1.060/mes"
precio={precioCotiza}
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732028885/PC_gamer_dtmula.png"
 MensajeWsp={MensajeWspPcGamer}
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
