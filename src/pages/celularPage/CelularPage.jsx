import "./celularPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { BannerCelulares, CardSeguroCelular, HeaderCelulares, ImgEmpresasCelulares, TodoRiesgoCelular } from "./components"
import { AcordeonCelulares } from "./components/AcordeonCelulares"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
<<<<<<< HEAD
import usePrecios from '../../components/hooks/usePrecios';
=======
import { MensajeWspCelular } from "./data";

>>>>>>> 7a899d52a36afbc7823ccf4c6c7d3b25da62e3a3

export const CelularPage = () => {
  const { precio, error } = usePrecios('celular');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";

  return (

    <>
    <div className="semisphere-container-celular">
      <div className="semisphere-celular"></div>
      <div className="content-celular"></div>
   <HeaderCelulares/>
   <CotizaAhora 
 titulo="Seguro de celular"
//  precio="Desde $2.000/mes"
precio={precioCotiza}
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731331114/Celular_1_1_dgdlcm.png"
 MensajeWsp={MensajeWspCelular}
/>
<TodoRiesgoCelular/>
<CardSeguroCelular/>
<BannerCelulares/>
<ImgEmpresasCelulares/>
<BannerSeguros/>
<AcordeonCelulares/>
<div id="carrousel">
<Carrousel Name="Celular"/>
</div>
</div>
 </>
  )
}
