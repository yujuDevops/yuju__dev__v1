import { dataImgEmpresasBici } from "../data"


export const ImgBiciEmpresas = () => {
    return (
        <div className="divImgEmpresas">
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
