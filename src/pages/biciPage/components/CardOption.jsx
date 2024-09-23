import {dataBici} from "../data"
import "./cardOption.css";
import { ElementoCard } from "./ElementoCard";

export const CardOption = () => {
  return (


    <div className="DivBiciOption">
        {
           dataBici.map((event)=>(
<ElementoCard 
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
