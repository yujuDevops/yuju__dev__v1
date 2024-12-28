import "./notebookPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel"
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { AcordeonNotebook, BannerNotebook, DataNotebook, HeaderNotebook, ImgEmpresasNotebook, InfoNotebook } from "./components"
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";


export const NotebookPage = () => {
  return (
   <>
   <div className="semisphere-container-notebook">
      <div className="semisphere-notebook"></div>
      <div className="content-notebook"></div>
   <HeaderNotebook/>
   <CotizaAhora 
 titulo="Seguro de notebook"
 precio="Desde $2.032/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731509662/Notebook_1_1_r1tzil.png"
 />
<InfoNotebook/>
<DataNotebook/>
<BannerNotebook/>
<ImgEmpresasNotebook/>
<BannerSeguros/>
<AcordeonNotebook/>
<div id="carrousel">
<Carrousel Name="Notebook"/>
</div>
</div>

   </>
  )
}
