import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderBici } from "./components"



export const BiciPage = () => {
  return (
    <div>
 <HeaderBici/>
 <CotizaAhora
  titulo="Seguro de bicicleta"
  presio="Desde $1.125/mes"
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724953992/Bici_sdsltk.png"
 />
    </div>
  )
}

