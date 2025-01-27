import "./tabletPage.css";
import {Carrousel} from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonTablet, BannerTablet, DataCardTablet, HeaderTablet, ImgTablet, InfoTablet } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
<<<<<<< HEAD
import usePrecios from '../../components/hooks/usePrecios';
=======
import { MensajeWspTablet } from "./data";

>>>>>>> 7a899d52a36afbc7823ccf4c6c7d3b25da62e3a3

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
