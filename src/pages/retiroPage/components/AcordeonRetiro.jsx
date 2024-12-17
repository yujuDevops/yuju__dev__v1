import { dataAcordeonRetiro } from '../data/dataAcordeonRetiro'
import { AcordeonCompRetiro } from './AcordeonCompRetiro'

export const AcordeonRetiro = () => {
    return (
        <div className="padreDiv-acc">
        <h2 className="h2Acordeon-acc">¿Te gustaría saber más sobre el seguro de retiro?</h2>
        <h3 className="h3Acordeon-acc">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
        
        {dataAcordeonRetiro.map((resp)=> {
                return(
                  <div className="divAcordeonComp" key={resp.id}>
                  < AcordeonCompRetiro id={resp.id} title = {resp.title} content = {resp.subtitle} />
                
                  </div>
                )})}
        
        
        
            </div>
      )
}
