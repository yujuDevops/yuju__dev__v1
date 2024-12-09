import "./imgEmpresasPcGamer.css";
import React from 'react';
import { dataEmpresasPcGamer } from '../data';

export const ImgEmpresasPcGamer = () => {
    return (
        <div className="divImgEmpresas-pc">
            <h2 className="h2ImgEmpresas-pc">
            Trabajamos con
            </h2>
            <div>
            
            <div className="divImg-pc">
                {dataEmpresasPcGamer.map((resp) => {
            return(
                <img key={resp.id} src={resp.foto}  className="EmpresasgridImage-pc" />
               )
            })}
            </div>
            </div>
            </div>
      )
}
