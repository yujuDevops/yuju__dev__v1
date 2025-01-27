import {Carrousel} from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { BannerRetiro,SimuladorRetiro, HeaderRetiro, PrimerParrafoRetiro, SegundoParrafoRetiro, ImgEmpresasRetiro, AcordeonRetiro } from "./components"
import "./retiroPage.css";
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import usePrecios from '../../components/hooks/usePrecios';



export const RetiroPage = () => {
  const { precio, error } = usePrecios('retiro');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
    <>
    <HeaderRetiro/>
    <PrimerParrafoRetiro/>
    <CotizaAhora 
 titulo="Seguro de retiro"
//  precio="Desde $7.000/mes"
  precio={precioCotiza}
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733146003/Retiro_opfgnr.png"
 />
  <SegundoParrafoRetiro/>
  <SimuladorRetiro/>
  <BannerRetiro/>
  <ImgEmpresasRetiro/>
  <BannerSeguros/>
  <AcordeonRetiro/>
  <div id="carrousel">
  <Carrousel Name="Retiro"/>
  </div>
    </>
  )
}
