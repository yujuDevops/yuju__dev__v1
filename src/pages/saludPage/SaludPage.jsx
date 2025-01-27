import "./SaludPage.css"
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonSalud, BannerVida, CoberturaSalud, HeaderSalud, ImgEmpresaSalud } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros"
import usePrecios from '../../components/hooks/usePrecios';


export const SaludPage = () => {
  const { precio, error } = usePrecios('salud');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";
  return (
  <>
  {/* HeaderSalud tiene los css de biciPage; */}
  <div className="semisphere-container-salud">
      <div className="semisphere-salud"></div>
      <div className="content-salud">
  <HeaderSalud/>  
  <CotizaAhora
  titulo="Seguro de salud"
  // precio="Desde $645/mes"
  precio={precioCotiza}
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728479986/Vida_1_bpqlux.png"
  />

  {/*  CoberturaSalud tiene si css personalizado falta mejorarlo  */}
  <CoberturaSalud/>
   {/* Bannervida los estilos depende de BannerBici */}
  <BannerVida/>
  {/* Acordeon salud depende de otros estilos de css, creo que de AcordeonBici */}
  <ImgEmpresaSalud/>
  <BannerSeguros/>
  <AcordeonSalud/>
  <div id="carrousel">
  <Carrousel Name="Salud"/>
  </div>
  </div>
  </div>
  </>
  )
}
