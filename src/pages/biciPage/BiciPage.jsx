import "./BiciPage.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonBici, BannerBici, CardsBici, DataBiciCard, HeaderBici, ImgBiciEmpresas } from "./components"



export const BiciPage = () => {
  return (
    <div>
      <div className="semisphere-container-bici">
      <div className="semisphere-bici"></div>
      <div className="content-bici">
 <HeaderBici/>
 <CotizaAhora
  titulo="Seguro de bicicleta"
  presio="Desde $1.125/mes"
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724953992/Bici_sdsltk.png"
 />
 {/* esta ordenado en cascada amigo, los css estan creados en su mayoria pero no le puse nada estan para que vos lo retoques menos el de
 DataBiciCard,BannerBici, ImgBiciEmpresas dependen del css de Moto, si se lo queres cambiar ahi esta el padre  */}
  <CardsBici/>
  <div className="card-imagen-wf2-4taimg">
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1728930612/ilustracion-bici_kwr0fb.svg" alt="" />
    </div>  
 <DataBiciCard/>
 <BannerBici/>
 <ImgBiciEmpresas/>
 <AcordeonBici/>
 <Carrousel/>

 </div>
 </div>
  </div>
  )
}

