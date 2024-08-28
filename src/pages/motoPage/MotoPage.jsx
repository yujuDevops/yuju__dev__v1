import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderMotos,CardMotos,CardInfo,BannerContratar,ImgEmpresas,AcordeonMotos } from "./motoPageComponents"
import fotoMoto from "../../assets/image/Moto.png"
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