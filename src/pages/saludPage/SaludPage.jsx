import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonSalud, BannerVida, CoberturaSalud, HeaderSalud, ImgEmpresaSalud } from "./components"


export const SaludPage = () => {
  return (
  <>
  {/* HeaderSalud tiene los css de biciPage; */}
  <HeaderSalud/>  
  <CotizaAhora
  titulo="Seguro de salud"
  presio="Desde $645/mes"
  button="¡Cotizá ahora!"
  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728479986/Vida_1_bpqlux.png"
  />

  {/*  CoberturaSalud tiene si css personalizado falta mejorarlo  */}
  <CoberturaSalud/>
   {/* Bannervida los estilos depende de BannerBici */}
  <BannerVida/>
  <ImgEmpresaSalud/>
  {/* Acordeon salud depende de otros estilos de css, creo que de AcordeonBici */}
  <AcordeonSalud/>
  <Carrousel/>


  </>
  )
}
