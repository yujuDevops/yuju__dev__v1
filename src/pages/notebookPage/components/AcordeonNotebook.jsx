import { dataAcordeonNotebook } from "../data"
import { AcordeonCompNotebook } from "./AcordeonCompNotebook"



export const AcordeonNotebook = () => {
    
    return (
      <div className="padreDiv">
      <h2 className="h2Acordeon">¿Te gustaría saber más sobre el seguro de notebook?</h2>
      <h3 className="h3Acordeon">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
      
      {dataAcordeonNotebook.map((resp)=> {
              return(
                <div className="divAcordeonComp" key={resp.id}>
                < AcordeonCompNotebook id={resp.id} title = {resp.title} content = {resp.subtitle} />
              
                </div>
              )})}
      
      
      
          </div>
    )
  }