
import { dataAcordeonTablet } from '../data'
import { AcordeonCompTablet } from './AcordeonCompoTablet'

export const AcordeonTablet = () => {
  return (
    <div className="padreDiv">
    <h2 className="h2Acordeon">¿Te gustaría saber más sobre el seguro de notebook?</h2>
    <h3 className="h3Acordeon">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
    
    {dataAcordeonTablet.map((resp)=> {
            return(
              <div className="divAcordeonComp" key={resp.id}>
              < AcordeonCompTablet id={resp.id} title = {resp.title} content = {resp.subtitle} />
            
              </div>
            )})}
    
    
    
        </div>
  )
}
