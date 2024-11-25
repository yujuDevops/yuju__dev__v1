import "./acordeonSalud.css"
import { dataAcordeonSalud } from "../data/dataAcordeonSalud"
import { AcordeonCompSalud } from "./AcordeonCompSalud"


export const AcordeonSalud = () => {
    return (
        <div className="padreDiv">
        <h2 className="h2Acordeon">¿Te gustaría saber más sobre el seguro de salud?</h2>
        <h3 className="h3Acordeon">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
        
        {dataAcordeonSalud.map((resp)=> {
                return(
                  <div className="divAcordeonComp" key={resp.id}>
                  < AcordeonCompSalud id={resp.id} title = {resp.title} content = {resp.subtitle} />
                
                  </div>
                )})}
        
        
        
            </div>
      )
}
