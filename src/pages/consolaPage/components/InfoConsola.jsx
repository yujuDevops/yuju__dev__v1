import React from 'react'
import { infoConsola } from '../data'

export const InfoConsola = () => {
  return (
    <>
           
           <div className="tituloNotebook">
    <h2 className="h2Bici-notebook">El seguro de consola te cubre contra todo riesgo.</h2>
    </div>
        <h1></h1>
        <div className="notebook-container">
          {infoConsola.map((item) => (
              <div key={item.id} className="industrial-card">
              <img src={item.icon} alt={item.title} className="notebook-icon" />
              <img className="notebook-celular-icon" src={item.iconCelular} alt="" />
              <div className="notebook-padre-text">
              <h3 className="notebook-title">{item.title}</h3>
              <p className="notebook-description">{item.description}</p>
              <h3 className="notebook-title-celular">{item.title2}</h3>
              <p className="notebook-description-celular">{item.description2}</p>
              </div>
            </div>
            
          ))}
          <div className="notebook-uhsf">
            <p>
            Y además, podés sumar a tu plan a tus accesorios contra robos e incendios. Cubre el
            </p>
            <p>mouse, teclado, auriculares, micrófono, cámara, casco de realidad virtual y joystick.</p>
            </div>
        </div>
          </>
  )
}
