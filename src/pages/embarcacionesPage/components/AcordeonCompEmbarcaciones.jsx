import { useState } from "react";
import PropType from "prop-types"

export const AcordeonCompEmbarcaciones = ({id,title,subtitle}) => {
    const [isOpen ,setIsOpen] = useState(false);

    const alternar = ()=>{
      setIsOpen(!isOpen)
    }
      return (
      
            
            <div key={id} className="divPadreAcordeon">
                  <button onClick={alternar} className="bottonAcordeon">
                    {title}
                  </button>
                  <div className={`divHijoAcordeon ${isOpen ? 'show' : ''}`}>
                    <p>{subtitle}</p>
                  </div>
              { id===9? null : <hr/>}
                </div> 
         
    )}

  AcordeonCompEmbarcaciones.PropType = {
      id: PropType.number,
      title: PropType.string,
      subtitle: PropType.string
      
 }