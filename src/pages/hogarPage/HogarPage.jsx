import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonHogar,PlanesHogar,ImgHogar,HeaderHogar,BannerHogarPage } from "./hogarPageComponents"


const HogarPage = () => {
  return (
    <>
    <HeaderHogar/>
    <CotizaAhora 
 titulo="Seguro de motos"
 presio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1722606893/Hogar_t9ylef.png"
 />
    <PlanesHogar/>
    <BannerHogarPage/>
    <ImgHogar/>
    <AcordeonHogar/>
    <Carrousel/>

    </>
  )
}

export default HogarPage