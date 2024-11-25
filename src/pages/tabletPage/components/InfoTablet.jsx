import React from 'react'
import { infoTablet } from '../data'

export const InfoTablet = () => {
  return (
    <>
           
    <div className="tituloNotebook">
    <h2 className="h2Bici">¿Qué cubre el seguro de bici de Yuju?</h2>
    </div>
        <h1></h1>
        <div className="industrial-container">
          {infoTablet.map((item) => (
              <div key={item.id} className="industrial-card">
              <img src={item.icon} alt={item.title} className="industrial-icon" />
              <h3 className="industrial-title">{item.title}</h3>
              <p className="industrial-description">{item.description}</p>
            </div>
          ))}
        </div>
          </>
  )
}
