import "./acordeonMotos.css"
import { AcordeonComp } from "./AcordeonComp"
import { dataAcordeon } from "../../data/dataAcordeon"

export const AcordeonMotos = () => {

  return (
    <div className="padreDiv">
<h2 className="h2Acordeon">¿Tenés dudas sobre el seguro para motos?</h2>
<h3 className="h3Acordeon">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>

{dataAcordeon.map((resp)=> {
        return(
          <div className="divAcordeonComp" key={resp.id}>
          <AcordeonComp  id={resp.id} title = {resp.title} content = {resp.content} />
        
          </div>
        )})}



    </div>
  )
}
