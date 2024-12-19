import "./AcordeonAccidentesPersonales.css"
import { acordeonAccidentesPersonales } from "../data"
import { AcordeonCompAccidentesPersonales } from "./AcordeonCompAccidentesPersonales"


export const AcordeonAccidentesPersonales = () => {
    
        return (
          <div className="padreDiv-acc">
          <h2 className="h2Acordeon-acc">¿Te gustaría saber más sobre el seguro de<br/> accidentes personales?</h2>
          <h3 className="h3Acordeon-acc">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
          
          {acordeonAccidentesPersonales.map((resp)=> {
                  return(
                    <div className="divAcordeonComp" key={resp.id}>
                    < AcordeonCompAccidentesPersonales id={resp.id} title = {resp.title} content = {resp.subtitle} />
                  
                    </div>
                  )})}
          
          
          
              </div>
        )
      }
      

