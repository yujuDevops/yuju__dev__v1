import { useState} from "react"
import PropType from "prop-types"


export const AcordeonCompAccidentesPersonales = ( {id, title, content}) => {


  const [isOpen ,setIsOpen] = useState(false)

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
                <p>{content}</p>
              </div>
          { id===7? null : <hr/>}
            </div> 
     
)}


AcordeonCompAccidentesPersonales.PropType = {
id: PropType.number,
title: PropType.string,
content: PropType.string


}
