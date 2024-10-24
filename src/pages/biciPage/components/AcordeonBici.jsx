import "./AcordeonBici.css";
import { dataAcordeonBici } from "../data/dataAcordeonBici.js";
import { AcordeonCompBici } from "./AcordeonCompBici";


export const AcordeonBici = () => {
  return (
    <div className="padreDiv">
<h2 className="h2Acordeon-bici">¿Tenés dudas sobre el seguro para bicicleta?</h2>
<h3 className="h3Acordeon-bici">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>

{dataAcordeonBici.map((resp)=> {
        return(
          <div className="divAcordeonComp" key={resp.id}>
          <AcordeonCompBici  id={resp.id} title = {resp.title} content = {resp.subtitle} />
        
          </div>
        )})}



    </div>
  )
}
