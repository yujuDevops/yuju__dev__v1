import "./ImgEmpresasCelulares.css";


import { dataEmpresasCelulares } from "../data"


export const ImgEmpresasCelulares = () => {
    return (
        <div className="divImgEmpresas-celular">
            <h2 className="h2ImgEmpresas-celular">
            Trabajamos con
            </h2>
            <div>
            
            <div className="divImg">
                {dataEmpresasCelulares.map((resp) => {
            return(
                <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
               )
            })}
            </div>
            </div>
            </div>
      )
    
    }
