import "./tabletPage.css";
import {Carrousel} from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonTablet, BannerTablet, DataCardTablet, HeaderTablet, ImgTablet, InfoTablet } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import { MensajeWspTablet } from "./data";
import usePrecios from "../../components/hooks/usePrecios"

export const TabletPage = () => {
  const { precio, error } = usePrecios('tablet');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
<>
<div className="semisphere-container-tablet">
      <div className="semisphere-tablet"></div>
      <div className="content-tablet"></div>
<HeaderTablet/>
<CotizaAhora 
 titulo="Seguro tablet"
//  precio="Desde $700/mes"
precio={precioCotiza}
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732548011/Tablet_dsbljz.png"
 MensajeWsp={MensajeWspTablet}
 />
 <InfoTablet/>
 <DataCardTablet/>  
 <BannerTablet/>
 <ImgTablet/>
 <BannerSeguros/>
 <AcordeonTablet/>
 <div id="carrousel">
 <Carrousel Name="Tablet"/>
 </div>
 </div>
</>

)
}
