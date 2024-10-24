import "./AseguradorasVida.css"
import { dataVida } from "../../data/dataVida"



export const AseguradorasVida = () => {
  return (
    <div className="divImgEmpresas-vida">
    <h2 className="h2ImgEmpresas-vida">
    Trabajamos con
    </h2>
    <div>
    
    <div className="divImg">
        {dataVida.map((resp) => {
    return(
        <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
       )
    })}
    </div>
    </div>
    </div>
  )
}
