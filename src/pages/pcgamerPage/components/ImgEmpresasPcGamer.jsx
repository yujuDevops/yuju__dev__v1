import React from 'react'
import { dataEmpresasPcGamer } from '../data'

export const ImgEmpresasPcGamer = () => {
    return (
        <div className="divImgEmpresas-salud">
            <h2 className="h2ImgEmpresas">
            Trabajamos con
            </h2>
            <div>
            
            <div className="divImg">
                {dataEmpresasPcGamer.map((resp) => {
            return(
                <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
               )
            })}
            </div>
            </div>
            </div>
      )
}
