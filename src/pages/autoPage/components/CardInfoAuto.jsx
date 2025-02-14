import { useState } from "react"; // Importar useState para manejar el estado
import { dataInfoCardAuto } from "../data/dataInfoCardAuto"; // Importar data de la tarjeta de información de auto
import { MensajeWspAuto } from "../data/MensajeWspAuto";

export const CardInfoAuto = () => {
  const sendMessage = (title) => {
    const message = `Hola, estoy interesado en contratar el seguro de auto: ${title}`;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <h2 className="h2CardMotos">Conocé nuestras coberturas para tu auto</h2>
      <div className="card-container">
        {dataInfoCardAuto.map((parrafo) => (
          <div className="divCardMotos" key={parrafo.id}>
            <h3 className="h3CardMotos">{parrafo.titulo}</h3>
            <ul className="ulCardMotos">
              {parrafo.parrafos.map((texto, index) => (
                <li
                  key={index}
                  className={`liCardMotos ${texto.includes(".") ? "yes" : "no"}`}
                >
                  {texto}
                </li>
              ))}
            </ul>
            <button
              className="buttonCardMotos"
              onClick={() => sendMessage(parrafo.titulo)}
            >
              Contratar
            </button>
          </div>
        ))}
      </div>
      <h4 className="h4CardMotos">
        *Las coberturas que te ofrecemos dependen de la compañía que elijas.
        Consultá las condiciones específicas de cada una antes de contratarla.
      </h4>
    </>
  );
};