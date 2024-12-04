
import { dataEmpresasViajero } from '../data/dataEmpresasViajero'

export const ImgEmpresasViajero = () => {
    return (
        <div className="divImgEmpresas-embar">
            <h2 className="h2ImgEmpresas-embar">
            Trabajamos con
            </h2>
            <div>
            
            <div className="divImg">
                {dataEmpresasViajero.map((resp) => {
            return(
                <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
               )
            })}
            </div>
            </div>
            </div>
      )
}
