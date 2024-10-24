import "./ImgEmpresaSalud.css"
import { dataImgEmpresasVida } from "../data"


export const ImgEmpresaSalud = () => {
    return (
        <div className="divImgEmpresas-salud">
        <h2 className="h2ImgEmpresas-salud">
        Trabajamos con
        </h2>
        <div>
        
        <div className="divImg">
            {dataImgEmpresasVida.map((resp) => {
        return(
            <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
           )
        })}
        </div>
        </div>
        </div>
          )
}
