import "./consolaPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonConsola, BannerConsola, DataCardConsola, HeaderConsola, ImgEmpresasConsola, InfoConsola } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import { MensajeWspConsola } from "./data/MensajeWspConsola";
import usePrecios from "../../components/hooks/usePrecios"

export const ConsolaPage = () => {
  const { precio, error } = usePrecios('consola');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
    <>
    <div className="semisphere-container-consola">
      <div className="semisphere-consola"></div>
      <div className="content-consola"></div>
<HeaderConsola/>
<CotizaAhora 
 titulo="Seguro consola"
//  precio="Desde $1.060/mes"
precio={precioCotiza}
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732547215/Consola_gpdhgr.png"
 MensajeWsp={MensajeWspConsola}
 />
 <InfoConsola/>
 <DataCardConsola/>
 <BannerConsola/>
 <ImgEmpresasConsola/>
 <BannerSeguros/>
 <AcordeonConsola/>
 <div id="carrousel">
 <Carrousel Name="Consola"/> 
 </div>
   </div>
</>
  )
}
