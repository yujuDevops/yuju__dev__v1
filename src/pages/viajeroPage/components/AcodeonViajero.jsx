import { dataAcordeonViajeros } from "../data"
import { AcordeonCompViajero } from "./AcordeonCompViajero"


export const AcordeonViajero = () => {
  return (
    <div className="padreDiv">
    <h2 className="h2Acordeon-bici">¿Te gustaría saber más sobre el seguro de asistencia al viajero?</h2>
    <h3 className="h3Acordeon-bici">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
    
    {dataAcordeonViajeros.map((resp)=> {
            return(
              <div className="divAcordeonComp" key={resp.id}>
              <AcordeonCompViajero  id={resp.id} title = {resp.title} subtitle = {resp.subtitle} />
            
              </div>
            )})}
    
    
    
        </div>
  )
}