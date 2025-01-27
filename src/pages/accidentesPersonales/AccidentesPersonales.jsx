import "./AccidentesPersonales.css"

import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonAccidentesPersonales, BannerAccidentesPersonales, CoberturasAccidentesPersonales, HeaderAccidentesPersonales, ImgEmpresasAccidentesPersonales } from "./components"
import { CardsAccidentesPersonales } from "./components/CardsAccidentesPersonales"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"
import { MensajeWspAp } from "./data/MensajeWspAp"


export const AccidentesPersonales = () => {
  return (
    <>
   {/* //depende de los estilos de motoPage. */}

  
      <div className="semisphere-acc-per"></div>
      <div className="content-acc-per"></div>
<HeaderAccidentesPersonales/>

<CotizaAhora
titulo="Seguro de accidentes personales"
precio="Desde $677,75/mes"
button="¡Cotizá ahora!"
src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728479986/Vida_1_bpqlux.png"
MensajeWsp={MensajeWspAp}
/>

{/* estilos aproximados con chatGpt */}
<CardsAccidentesPersonales/>

<BannerSeguros/>

<CoberturasAccidentesPersonales/>
<BannerAccidentesPersonales/>

{/* los estilos dependen de salud */}
<ImgEmpresasAccidentesPersonales/>

<AcordeonAccidentesPersonales/>
<div id="carrousel">
<Carrousel Name="Accidentes Personales"/>
</div>

</>
  )
}
