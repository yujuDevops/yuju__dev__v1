
import { dataAcordeonSalud } from "../../../saludPage/data/dataAcordeonSalud"
import { AcordeonCompVida } from "./AcordeonCompVida"


export const AcordeonVida = () => {
  return (
    <div className="padreDiv">
    <h2 className="h2Acordeon">¿Tenés dudas sobre el seguro para bicicleta?</h2>
    <h3 className="h3Acordeon">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
    
    {dataAcordeonSalud.map((resp)=> {
            return(
              <div className="divAcordeonComp" key={resp.id}>
              < AcordeonCompVida id={resp.id} title = {resp.title} content = {resp.subtitle} />
            
              </div>
            )})}
    
    
    
        </div>
  )
}
