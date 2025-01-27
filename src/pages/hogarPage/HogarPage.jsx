import "./HogarPage.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonHogar,PlanesHogar,ImgHogar,HeaderHogar,BannerHogarPage } from "./hogarPageComponents"
import  BannerSeguros  from "../../components/bannerSeguros/BannerSeguros"
import { mensajeWspHogar } from "./data/mensajeWspHogar"


export const HogarPage = () => {
  return (
    <>
    <div className="semisphere-container-hogar">
      <div className="semisphere-hogar"></div>
      <div className="semisphere-hogar2"></div>
      <div className="content-hogar">
    <HeaderHogar/>
    <CotizaAhora 
 titulo="Seguro de hogar"
 precio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1722606893/Hogar_t9ylef.png"
 MensajeWsp={mensajeWspHogar}
 />
    <PlanesHogar/>
    <BannerHogarPage/>
    <ImgHogar/>
    <BannerSeguros/>  
    <AcordeonHogar/>
    <div id="carrousel">
    <Carrousel Name="Hogar"/>
    </div>
    </div>
    </div>
    </>
  )
}

