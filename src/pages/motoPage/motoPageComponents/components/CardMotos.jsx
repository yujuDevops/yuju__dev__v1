import { useState } from "react"; // Importar useState para manejar el estado
import { dataMotos } from "../../data/dataMotos";
import "./cardMotos.css";

export const CardMotos = () => {
  const [precioMoto, setPrecioMoto] = useState(null); // Estado para el precio de la moto

  const sendMessage = (title) => {
    const message = `Hola, estoy interesado en contratar el seguro de motos: ${title} (COBERTURA) 
🔶Marca: 
🔶Versión: 
🔶Año: 
🔶Localidad: 
`;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };

  const handlePriceUpdate = (price) => {
    setPrecioMoto(price); // Actualiza el precio de la moto cuando se hace clic en el botón
    console.log("Precio actualizado:", price); // Muestra el precio actualizado en la consola
  };

  return (
    <>
      <h2 className="h2CardMotos">Conocé nuestras coberturas para tu moto</h2>
      <div className="card-container">
        {dataMotos.map((parrafo) => (
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
              onClick={() => {
                handlePriceUpdate(parrafo.precio); // Actualiza el precio de la moto
                sendMessage(parrafo.titulo); // Envia el mensaje por WhatsApp
              }}
              className="buttonCardMotos"
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

      {/* Mostrar el precio actual */}
      {precioMoto && <h4>Precio seleccionado para el seguro de moto: ${precioMoto}</h4>}
    </>
  );
};
