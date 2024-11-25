import "./cardOptionEmbarcaciones.css"
import { dataCardEmbarcaciones } from "../data"
import { ElementoCardEmbarcaciones } from "./ElementoCardEmbarcaciones"



export const CardOptionEmbarcaciones = () => {
    return (


        <div className="DivEmbarcacionOption">
            {
               dataCardEmbarcaciones.map((event)=>(
    <ElementoCardEmbarcaciones
    key={event.title}
    title={event.title}
    features={event.features}
    buttonText={event.buttonText}
    
    />
    
               )) 
            }
    
    
        </div>
    
    
      )
}
