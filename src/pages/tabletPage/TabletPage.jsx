import Carrousel from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonTablet, BannerTablet, DataCardTablet, HeaderTablet, ImgTablet, InfoTablet } from "./components"


export const TabletPage = () => {
  return (
<>
<HeaderTablet/>
<CotizaAhora 
 titulo="Seguro tablet"
 precio="Desde $700/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732548011/Tablet_dsbljz.png"
 />
 <InfoTablet/>
 <DataCardTablet/>  
 <BannerTablet/> --------------
 <ImgTablet/>
 <AcordeonTablet/>
 <Carrousel/>
</>

)
}
