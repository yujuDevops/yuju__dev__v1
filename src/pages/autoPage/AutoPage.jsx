import Carrousel from "../../components/carrousel/Carrousel"
import { AcordeonAuto, CoberturasAuto, HeaderAuto, ImgEmpresasAuto } from "./components"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"

export const AutoPage = () => {
  return (
<>
<HeaderAuto/>


 <CotizaAhora
  titulo="Seguro de autos"
  precio="Desde $8.673/mes"
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735570892/Auto_ilustracion_kcgsoh.svg"
 />

<CoberturasAuto/>
<ImgEmpresasAuto/>
<AcordeonAuto/>
<Carrousel Name="Auto"/>
</>
  )
}

export default AutoPage