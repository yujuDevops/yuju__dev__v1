import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderMotos } from "./motoPageComponents/components/HeaderMotos"
import fotoMoto from "../../assets/image/Moto.png"
import { CardMotos } from "./motoPageComponents/components/CardMotos"



const MotoPage = () => {
  return (
  <>
  
<HeaderMotos/>
<CotizaAhora 
 titulo="Seguro de motos"
 presio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src={fotoMoto}
/>
<CardMotos/>

  </>
  )
}

export default MotoPage