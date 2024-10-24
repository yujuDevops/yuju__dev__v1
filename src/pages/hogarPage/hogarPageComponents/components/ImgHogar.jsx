import { dataImagMotos } from "../../data/dataImagenHogar"
import "./imgHogar.css"

export const ImgHogar = () => {
    return (
        <div className="divImgEmpresas-hogar">
        <h2 className="h2ImgEmpresas-hogar">
        Trabajamos con
        </h2>
        <div>
        
        <div className="divImg">
            {dataImagMotos.map((resp) => {
        return(
            <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
           )
        })}
        </div>
        </div>
        </div>
          )
}
