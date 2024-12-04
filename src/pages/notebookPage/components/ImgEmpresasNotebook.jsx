import "./ImgEmpresasNotebook.css";

import { dataEmpresasNotebook } from "../data/dataEmpresasNotebook";

export const ImgEmpresasNotebook = () => {
    return (
        <div className="divImgEmpresas-notebook">
            <h2 className="h2ImgEmpresas-notebook">
            Trabajamos con
            </h2>
            <div>
            
            <div className="divImg">
                {dataEmpresasNotebook.map((resp) => {
            return(
                <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
               )
            })}
            </div>
            </div>
            </div>
      )
    
    }