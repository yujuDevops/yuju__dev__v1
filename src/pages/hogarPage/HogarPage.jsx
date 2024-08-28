import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import CardMobile from "../homepage/componentsHome/CardMobile"
import { HeaderHogar } from './hogarPageComponents/components/HeaderHogar'
import { PlanesHogar } from './hogarPageComponents/components/PlanesHogar'


const HogarPage = () => {
  return (
    <>
    <HeaderHogar/>
    <CotizaAhora 
 titulo="Seguro de motos"
 presio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 />
    <PlanesHogar/>
    <CardMobile></CardMobile>
    </>
  )
}

export default HogarPage