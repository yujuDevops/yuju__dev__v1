import "./ImgEmpresasAccidentesPersonales.css"
import { dataEmpresasAccidentesPersonales } from "../data"


export const ImgEmpresasAccidentesPersonales = () => {
    return (
        <div className="divImgEmpresas-acc-p">
        <h2 className="h2ImgEmpresas-acc-p">
        Trabajamos con
        </h2>
        <div>
        
        <div className="divImg-acc-p">
            {dataEmpresasAccidentesPersonales.map((resp) => {
        return(
            <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
           )
        })}
        </div>
        </div>
        </div>
          )
}
