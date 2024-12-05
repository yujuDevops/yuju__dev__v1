import { AcordeonComp } from "../../../motoPage/motoPageComponents"
import { preguntasData } from "../../data/preguntasData"
import "./acordeonHogar.css";

export const AcordeonHogar = () => {


    return (
        <div className="padreDiv">
    <h2 className="h2Acordeon">¿Tenés dudas sobre el seguro para hogar?</h2>
    <h3 className="h3Acordeon">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
    
    {preguntasData.map((resp)=> {
            return(
              <div className="divAcordeonComp" key={resp.id}>
              <AcordeonComp  id={resp.id} title = {resp.title} subtitle = {resp.subtitle} />
            
              </div>
            )})}
    
    
    
        </div>
      )
}
