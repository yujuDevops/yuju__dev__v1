import { dataEmpresasTablets } from "../data"


export const ImgTablet = () => {
  return (
    <div className="divImgEmpresas-salud">
    <h2 className="h2ImgEmpresas">
    Trabajamos con
    </h2>
    <div>
    
    <div className="divImg">
        {dataEmpresasTablets.map((resp) => {
    return(
        <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
       )
    })}
    </div>
    </div>
    </div>
  )
}
