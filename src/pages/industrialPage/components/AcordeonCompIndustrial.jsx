import { useState} from "react"
import PropType from "prop-types"
import "./acordeon.css"

export const AcordeonCompIndustrial = ( {id, title, subtitle}) => {


  const [isOpen ,setIsOpen] = useState(false)

const alternar = ()=>{
  setIsOpen(!isOpen)
}
  return (
  
        
        <div key={id} className="divPadreAcordeon">
              <button onClick={alternar} className="bottonAcordeon">
                {title}
                <span className={`arrow ${isOpen ? "arrow-open" : "arrow-closed"}`}>
                  <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
                </span>
              </button>
              <div className={`divHijoBiciAcordeon ${isOpen ? 'show' : ''}`}>
                <p>{subtitle}</p>
              </div>
          { id===17? null : <hr/>}
            </div> 
     
)}


AcordeonCompIndustrial.PropType = {
id: PropType.number,
title: PropType.string,
subtitle: PropType.string


}
