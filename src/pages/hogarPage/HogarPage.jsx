import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
<<<<<<< HEAD
import CardMobile from "../homepage/componentsHome/CardMobile"
import { HeaderHogar } from './hogarPageComponents/components/HeaderHogar'
import { PlanesHogar } from './hogarPageComponents/components/PlanesHogar'
=======
import { AcordeonHogar,PlanesHogar,ImgHogar,HeaderHogar,BannerHogarPage } from "./hogarPageComponents"

>>>>>>> 988a7bf91e0023b22b8b5ccb94b12a0fa1b7d52c


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
<<<<<<< HEAD
    <CardMobile></CardMobile>
=======
    <BannerHogarPage/>
    <ImgHogar/>
    <AcordeonHogar/>
    <Carrousel/>

>>>>>>> 988a7bf91e0023b22b8b5ccb94b12a0fa1b7d52c
    </>
  )
}

export default HogarPage