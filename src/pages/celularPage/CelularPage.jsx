import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { BannerCelulares, CardSeguroCelular, HeaderCelulares, ImgEmpresasCelulares, TodoRiesgoCelular } from "./components"
import { AcordeonCelulares } from "./components/AcordeonCelulares"



export const CelularPage = () => {
  return (

    <>
   <HeaderCelulares/>
   <CotizaAhora 
 titulo="Seguro de celuar"
 precio="Desde $2.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731331114/Celular_1_1_dgdlcm.png"
/>
<TodoRiesgoCelular/>
<CardSeguroCelular/>
<BannerCelulares/>
<ImgEmpresasCelulares/>
<AcordeonCelulares/>
<Carrousel Name="Celular"/>
 </>
  )
}
