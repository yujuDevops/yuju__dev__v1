import { dataEmpresasIndustrial } from "../data"


export const ImgEmpresasIndustrial = () => {
    return (
        <div className="divImgEmpresas-salud">
        <h2 className="h2ImgEmpresas">
        Trabajamos con
        </h2>
        <div>
        
        <div className="divImg">
            {dataEmpresasIndustrial.map((resp) => {
        return(
            <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
           )
        })}
        </div>
        </div>
        </div>
          )
}
