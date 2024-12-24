import { useState } from "react";
import PropType from "prop-types"

export const AcordeonCompViajero = ({id,title,subtitle}) => {
    const [isOpen ,setIsOpen] = useState(false);

    const alternar = ()=>{
      setIsOpen(!isOpen)
    }
      return (
      
            
            <div key={id} className="divPadreAcordeon-bici">
                  <button onClick={alternar} className="bottonAcordeon-bici">
                    {title}
                    <span className={`arrow ${isOpen ? "arrow-open" : "arrow-closed"}`}>
                  <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
                </span>
                  </button>
                  <div className={`divHijoBiciAcordeon-bici ${isOpen ? 'show' : ''}`}>
                    <p>{subtitle}</p>
                  </div>
              { id===10? null : <hr/>}
                </div> 
         
    )}

    AcordeonCompViajero.PropType = {
      id: PropType.number,
      title: PropType.string,
      subtitle: PropType.string
      
 }