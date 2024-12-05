import "./viajeroPage.css";
import Carrousel from '../../components/carrousel/Carrousel'
import { CotizaAhora } from '../../components/cotizaAhora/CotizaAhora'
import { AcordeonViajero, BannerViajero, BeneficiosViajero, DataViajeros, HeaderViajero } from './components'
import { ImgEmpresasViajero } from './components/ImgEmpresasViajero'


export const ViajeroPage = () => {
  return (
<>

<HeaderViajero/>
<CotizaAhora 
 titulo="Seguro de asistencia al viajero"
 precio="Desde $33.200/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733315355/Avion_g0ahuo.png"
 />
 <BeneficiosViajero/>
 <DataViajeros/>
 <BannerViajero/>
 <ImgEmpresasViajero/>
 <AcordeonViajero/>
 <Carrousel Name="Asistencia al Viajero"/>

</>

  )
}
