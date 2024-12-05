import "./consolaPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonConsola, BannerConsola, DataCardConsola, HeaderConsola, ImgEmpresasConsola, InfoConsola } from "./components"


export const ConsolaPage = () => {
  return (
    <>
    <div className="semisphere-container-consola">
      <div className="semisphere-consola"></div>
      <div className="content-consola"></div>
<HeaderConsola/>
<CotizaAhora 
 titulo="Seguro consola"
 precio="Desde $1.060/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732547215/Consola_gpdhgr.png"
 />
 <InfoConsola/>
 <DataCardConsola/>
 <BannerConsola/>
 <ImgEmpresasConsola/>
 <AcordeonConsola/>
 <Carrousel/> 
</div>
    </>
  )
}
