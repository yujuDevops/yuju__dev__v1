import React, { useState } from "react";
import "./CardComponent.css"; 

import visionIcon from "../img/web_Icono-innovacion.svg";
import misionIcon from "../img/web_Icono-mision.svg";
import objetivoIcon from "../img/web_Icono-objetivos.svg";

const CardComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, title: "Visión", icon: visionIcon, text: "Nuestra visión es transformar la industria de seguros, aprovechando la tecnología para brindarte soluciones más ágiles, accesibles y personalizadas." },
    { id: 2, title: "Misión", icon: misionIcon, text: "Nuestra misión es asegurar todos tus bienes, proporcionándote una gran experiencia de usuario. Queremos que te sientas protegido y tranquilo, sabiendo que cuentas con el respaldo de una empresa seria y confiable." },
    { id: 3, title: "Objetivo", icon: objetivoIcon, text: "Por eso, en Yuju, nuestro objetivo es cubrir a tus seres queridos y tu patrimonio, con productos justos y modernos, totalmente transparentes y al mejor precio del mercado." }
  ];


  

  return (
    <div className="contenedor__main__card">
    <div className="card-wrap">
      {cards.map(card => (
        <div
          key={card.id}
          className="card-con"
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-br">
            <div className="card-c">
              {hoveredCard === card.id ? (
                <p className="card-text">{card.text}</p>
              ) : (
                <>
                  <img src={card.icon} alt={`${card.title} icon`} className="card-icon" />
                  <h3 className="card-title">{card.title}</h3>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

    
  );
};

export default CardComponent;
