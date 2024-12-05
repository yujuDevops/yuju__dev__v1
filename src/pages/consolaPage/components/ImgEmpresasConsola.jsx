import { dataEmpresasConsola } from "../data/dataEmpresasConsola"


export const ImgEmpresasConsola = () => {
    return (
        <div className="divImgEmpresas-motos">
<h2 className="h2ImgEmpresas-motos">
Trabajamos con
</h2>
<div>

<div className="divImg">
    {dataEmpresasConsola.map((resp) => {
return(
    <img key={resp.id} src={resp.foto}  className="EmpresasgridImage" />
   )
})}
</div>
</div>
</div>
      )
}
