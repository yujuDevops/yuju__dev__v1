import { dataEmpresasAccidentesPersonales } from "../data"


export const ImgEmpresasAccidentesPersonales = () => {
    return (
        <div className="divImgEmpresas-salud">
        <h2 className="h2ImgEmpresas">
        Trabajamos con
        </h2>
        <div>
        
        <div className="divImg">
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
