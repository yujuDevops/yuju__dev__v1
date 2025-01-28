import "./BiciPage.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonBici, BannerBici, CardsBici, DataBiciCard, HeaderBici, ImgBiciEmpresas } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"
import { MensajeWspBici } from "./data"
import usePrecios from "../../components/hooks/usePrecios"

export const BiciPage = () => {
  const { precio, error } = usePrecios('bici');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
    <div>
      <div className="semisphere-container-bici">
      <div className="semisphere-bici"></div>
      <div className="content-bici">
 <HeaderBici/>
 <div className="CotizaHoraBiciPage">
 <CotizaAhora
  titulo="Seguro de bicicleta"
  // precio="Desde $1.125/mes"
  precio={precioCotiza}
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724953992/Bici_sdsltk.png"
  MensajeWsp={MensajeWspBici}
 />
 </div>
 {/* esta ordenado en cascada amigo, los css estan creados en su mayoria pero no le puse nada estan para que vos lo retoques menos el de
 DataBiciCard,BannerBici, ImgBiciEmpresas dependen del css de Moto, si se lo queres cambiar ahi esta el padre  */}
  <CardsBici/>
  <div className="card-imagen-wf2-4taimg">
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1729689717/foto-bici-2_h83oru.svg" alt="" />
    </div>  
<BannerSeguros/>  
 <DataBiciCard/>
 <BannerBici/>
 <ImgBiciEmpresas/>
 <AcordeonBici/>
  <div id="carrousel">
 <Carrousel Name="Bicicleta"/>
 </div>
 </div>
 </div>
  </div>
  )
}

