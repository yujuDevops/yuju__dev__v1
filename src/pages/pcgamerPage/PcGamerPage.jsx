import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderPcGamer } from "./components"


export const PcGamerPage = () => {
  return (
<>
<HeaderPcGamer/>
<CotizaAhora 
 titulo="Seguro de PC gamer"
 presio="Desde $1.060/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732028885/PC_gamer_dtmula.png"
 />
</>
  )
}
