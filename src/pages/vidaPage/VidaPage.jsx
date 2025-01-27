import "./VidaPage.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import {  Coberturas ,CoberturasAdicionales,HeaderVida,BannerVida, AseguradorasVida,  AcordeonVida} from "./vidaComponents/components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"
import { MensajeWspVida } from "./data"


export const VidaPage = () => {
  return (
    <><div className="semisphere-container-vida">
    <div className="semisphere-vida"></div>
    <div className="content-vida">
   <HeaderVida/>
   <CotizaAhora 
    titulo="Seguro de vida"
    precio="Desde $200/mes"
    button="¡Cotizá ahora!"
    src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727793263/Vida_fttss0.png"
    MensajeWsp={MensajeWspVida}
   />
   <Coberturas/>
   <CoberturasAdicionales/>
   <BannerVida/>
   <AseguradorasVida/>
    <BannerSeguros/>
   <AcordeonVida/>
    <div id="carrousel">
   <Carrousel Name="Vida"/>
   </div>
    </div>
    </div>
    </>
  )
}
