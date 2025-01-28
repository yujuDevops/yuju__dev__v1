import "./viajeroPage.css";
import {Carrousel} from '../../components/carrousel/Carrousel'
import { CotizaAhora } from '../../components/cotizaAhora/CotizaAhora'
import { AcordeonViajero, BannerViajero, BeneficiosViajero, DataViajeros, HeaderViajero } from './components'
import { ImgEmpresasViajero } from './components/ImgEmpresasViajero'
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import { MensajeWspViajero } from "./data";
import usePrecios from "../../components/hooks/usePrecios"

export const ViajeroPage = () => {
  const { precio, error } = usePrecios('asisviajero');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
<>

<HeaderViajero/>
<CotizaAhora 
 titulo="Seguro de asistencia al viajero"
//  precio="Desde $33.200/mes"
  precio={precioCotiza}
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733315355/Avion_g0ahuo.png"
 MensajeWsp={MensajeWspViajero}
 />
 <BeneficiosViajero/>
  <BannerSeguros/>
 <DataViajeros/>
 <BannerViajero/>
 <ImgEmpresasViajero/>
 <AcordeonViajero/>
 <div id="carrousel">
 <Carrousel Name="Asistencia al Viajero"/>
</div>
</>

  )
}
