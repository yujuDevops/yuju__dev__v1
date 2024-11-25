import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { BannerConsola, DataCardConsola, HeaderConsola, InfoConsola } from "./components"


export const ConsolaPage = () => {
  return (
    <>
<HeaderConsola/>
<CotizaAhora 
 titulo="Seguro de PC gamer"
 presio="Desde $1.060/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732028885/PC_gamer_dtmula.png"
 />
 <InfoConsola/>
 <DataCardConsola/>
 <BannerConsola/>

    </>
  )
}
