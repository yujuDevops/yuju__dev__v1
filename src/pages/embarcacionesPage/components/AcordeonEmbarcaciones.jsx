import { dataAcordeonEmbarcacion } from "../data"
import { AcordeonCompEmbarcaciones } from "./AcordeonCompEmbarcaciones"

export const AcordeonEmbarcaciones = () => {
  return (
    <div className="padreDiv">
    <h2 className="h2Acordeon-bici">¿Tenés dudas sobre el seguro de embarcaciones?</h2>
    <h3 className="h3Acordeon-bici">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
    
    {dataAcordeonEmbarcacion.map((resp)=> {
            return(
              <div className="divAcordeonComp" key={resp.id}>
              <AcordeonCompEmbarcaciones  id={resp.id} title = {resp.title} subtitle = {resp.subtitle} />
            
              </div>
            )})}
    
    
    
        </div>
  )
}
