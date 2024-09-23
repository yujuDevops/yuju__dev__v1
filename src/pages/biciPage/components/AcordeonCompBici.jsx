import { useState } from "react";


export const AcordeonCompBici = ({id,title,subtitle}) => {
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
              { id===7? null : <hr/>}
                </div> 
         
    )}
    

