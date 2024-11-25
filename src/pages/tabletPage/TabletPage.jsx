import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderTablet } from "./components"

export const TabletPage = () => {
  return (
<>
<HeaderTablet/>
<CotizaAhora 
 titulo="Seguro tablet"
 presio="Desde $700/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732548011/Tablet_dsbljz.png"
 />
</>
)
}
