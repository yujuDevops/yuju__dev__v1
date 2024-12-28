import "./MotoPage.css"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderMotos,CardMotos,CardInfo,BannerContratar,ImgEmpresas,AcordeonMotos } from "./motoPageComponents"
import fotoMoto from "../../assets/image/Moto.png"
import { Carrousel } from "../../components/carrousel/Carrousel";
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";



export const MotoPage = () => {
  return (
  <>
<div className="semisphere-container-moto">
      <div className="semisphere-moto"></div>
      <div className="content-moto">
<HeaderMotos/>


<CotizaAhora 
 titulo="Seguro de motos"
 precio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src={fotoMoto}
/>


<CardMotos />
<BannerSeguros/>
<CardInfo/>
<BannerContratar/>
<ImgEmpresas/>
<AcordeonMotos/>
<div id="carrousel">
<Carrousel Name="Motos" /> 
</div>
</div>
</div>

  </>
  )
}

