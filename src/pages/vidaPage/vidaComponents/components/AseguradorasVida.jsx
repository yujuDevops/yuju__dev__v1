import { dataVida } from "../../data/dataVida"



export const AseguradorasVida = () => {
  return (
    <div className="divImgEmpresas">
    <h2 className="h2ImgEmpresas">
    Trabajamos con
    </h2>
    <div>
    
    <div className="divImg">
        {dataVida.map((resp) => {
    return(
        <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
       )
    })}
    </div>
    </div>
    </div>
  )
}
