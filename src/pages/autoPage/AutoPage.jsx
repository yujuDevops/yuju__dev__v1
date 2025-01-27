
import "./AutoPage.css"
import { AcordeonAuto, CoberturasAuto, HeaderAuto, ImgEmpresasAuto } from "./components"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { CardInfo } from "./components/CardInfo"
import { BannerContratar } from "../autoPage/components/BannerContratar"
import { Carrousel } from "../../components/carrousel/Carrousel"


export const AutoPage = () => {


  return (
<>
<HeaderAuto/>


 <CotizaAhora
  titulo="Seguro de autos"
  precio={`Desde $8.764/mes`}
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735570892/Auto_ilustracion_kcgsoh.svg"
 />

<CoberturasAuto/>
<CardInfo/>
<BannerContratar/>
<ImgEmpresasAuto/>

<AcordeonAuto/>
<Carrousel Name="Autos"/>
</>
  )
}

export default AutoPage