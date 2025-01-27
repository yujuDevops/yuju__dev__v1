import "./AccidentesPersonales.css"

import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonAccidentesPersonales, BannerAccidentesPersonales, CoberturasAccidentesPersonales, HeaderAccidentesPersonales, ImgEmpresasAccidentesPersonales } from "./components"
import { CardsAccidentesPersonales } from "./components/CardsAccidentesPersonales"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"
import usePrecios from '../../components/hooks/usePrecios';

export const AccidentesPersonales = () => {
  const { precio, error } = usePrecios('ap');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
    <>
   {/* //depende de los estilos de motoPage. */}

  
      <div className="semisphere-acc-per"></div>
      <div className="content-acc-per"></div>
<HeaderAccidentesPersonales/>

<CotizaAhora
titulo="Seguro de accidentes personales"
// precio="Desde $677,75/mes"
precio={precioCotiza}
button="¡Cotizá ahora!"
src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728479986/Vida_1_bpqlux.png"
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
