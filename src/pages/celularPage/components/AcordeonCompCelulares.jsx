import { useState} from "react"
import PropType from "prop-types"


export const AcordeonCompCelulares = ( {id, title, content}) => {


  const [isOpen ,setIsOpen] = useState(false)

const alternar = ()=>{
  setIsOpen(!isOpen)
}
  return (
  
        
        <div key={id} className="divPadreAcordeon">
              <button onClick={alternar} className="bottonAcordeon">
                {title}
              </button>
              <div className={`divHijoAcordeon ${isOpen ? 'show' : ''}`}>
                <p>{content}</p>
              </div>
          { id===14? null : <hr/>}
            </div> 
     
)}


AcordeonCompCelulares.PropType = {
id: PropType.number,
title: PropType.string,
content: PropType.string


}
