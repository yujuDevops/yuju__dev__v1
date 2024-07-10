<<<<<<< HEAD

const MotoPage = () => {
  return (
    <>
    </>
    
=======
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderMotos } from "./motoPageComponents/components/HeaderMotos"
import fotoMoto from "../../assets/image/Moto.png"
import { CardMotos } from "./motoPageComponents/components/CardMotos"
import { CardInfo } from "./motoPageComponents/components/CardInfo"
import { BannerContratar } from "./motoPageComponents/components/BannerContratar"
import { ImgEmpresas } from "./motoPageComponents/components/ImgEmpresas"
import { AcordeonMotos } from "./motoPageComponents/components/AcordeonMotos"




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
<CardInfo/>
<BannerContratar/>
<ImgEmpresas/>
<AcordeonMotos/>



  </>
>>>>>>> 6644de417b1ad20a0b20a427a07c779304f06883
  )
}

export default MotoPage