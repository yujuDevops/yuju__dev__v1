import { dataImgEmpresasBici } from "../data"
import "./ImgBiciEmpresas.css"

export const ImgBiciEmpresas = () => {
    return (
        <div className="divImgEmpresasBici">
        <h2 className="h2ImgEmpresas">
        Trabajamos con
        </h2>
        <div>
        
        <div className="divImg">
            {dataImgEmpresasBici.map((resp) => {
        return(
            <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
           )
        })}
        </div>
        </div>
        </div>
          )
}
