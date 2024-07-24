import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderMotos } from "./motoPageComponents/components/HeaderMotos"
import fotoMoto from "../../assets/image/Moto.png"
import { CardMotos } from "./motoPageComponents/components/CardMotos"
import { CardInfo } from "./motoPageComponents/components/CardInfo"
import { BannerContratar } from "./motoPageComponents/components/BannerContratar"
import { ImgEmpresas } from "./motoPageComponents/components/ImgEmpresas"
import { AcordeonMotos } from "./motoPageComponents/components/AcordeonMotos"
import { Carrousel } from "../../components/carrousel/Carrousel"




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
<Carrousel/>




  </>
  )
}

export default MotoPage