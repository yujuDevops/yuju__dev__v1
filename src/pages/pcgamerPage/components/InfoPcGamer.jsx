import React from 'react';
import "./infoPcGamer.css";
import { infoPcGamer } from '../data';

export const InfoPcGamer = () => {
    return (

      <>
           
      <div className="titulopcgamer">
      <h2 className="h2Bici-pcgamer">El seguro de PC gamer te cubre contra todo riesgo.</h2>
      </div>
          <h1></h1>
          <div className="pcgamer-container">
            {infoPcGamer.map((item) => (
                <div key={item.id} className="industrial-card">
                <img src={item.icon} alt={item.title} className="pcgamer-icon" />
                <img className="pcgamer-celular-icon" src={item.iconCelular} alt="" />
                <div className="pcgamer-padre-text">
                <h3 className="pcgamer-title">{item.title}</h3>
                <p className="pcgamer-description">{item.description}</p>
                <h3 className="pcgamer-title-celular">{item.title2}</h3>
                <p className="pcgamer-description-celular">{item.description2}</p>
                </div>
              </div>
              
            ))}
            <div className="pcgamer-uhsf">
              <p>
              Y además, podés sumar a tu plan a tus accesorios contra robos e incendios. Cubre el
              </p>
              <p>mouse, teclado, auriculares, micrófono, cámara, casco de realidad virtual y joystick.</p>
              </div>
          </div>
            </>
      );
}
