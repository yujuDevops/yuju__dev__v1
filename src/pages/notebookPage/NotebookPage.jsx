import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora"
import { HeaderNotebook } from "./components"


export const NotebookPage = () => {
  return (
   <>
   <HeaderNotebook/>
   <CotizaAhora 
 titulo="Seguro de notebook"
 presio="Desde $2.032/mes"
 button="¡Cotizá ahora!"
 src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731509662/Notebook_1_1_r1tzil.png"
/>
   </>
  )
}
