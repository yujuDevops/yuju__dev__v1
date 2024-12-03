
import { dataEmpresasRetiro } from '../data'

export const ImgEmpresasRetiro = () => {
    return (
        <div className="divImgEmpresas-embar">
            <h2 className="h2ImgEmpresas-embar">
            Trabajamos con
            </h2>
            <div>
            
            <div className="divImg">
                {dataEmpresasRetiro.map((resp) => {
            return(
                <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
               )
            })}
            </div>
            </div>
            </div>
      )
}
