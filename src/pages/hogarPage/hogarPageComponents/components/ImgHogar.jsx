import { dataImagMotos } from "../../data/dataImagenHogar"

export const ImgHogar = () => {
    return (
        <div className="divImgEmpresas">
        <h2 className="h2ImgEmpresas">
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
