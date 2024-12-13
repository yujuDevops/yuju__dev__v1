import { dataAcordeonAuto } from "../data"
import { AcordeonCompAuto } from "./AcordeonCompAuto"



export const AcordeonAuto = () => {
    
    return (
      <div className="padreDiv-acc">
      <h2 className="h2Acordeon-acc">¿Tenés dudas sobre el seguro para autos?</h2>
      <h3 className="h3Acordeon-acc">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
      
      {dataAcordeonAuto.map((resp)=> {
              return(
                <div className="divAcordeonComp" key={resp.id}>
                < AcordeonCompAuto id={resp.id} title = {resp.title} content = {resp.subtitle} />
              
                </div>
              )})}
          </div>
    )
  }
  