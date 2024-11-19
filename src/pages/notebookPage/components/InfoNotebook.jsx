import { infoNotebook } from "../data";
import "./infoNotebook.css"


export const InfoNotebook = () => {
    return (

        <>
           
    <div className="tituloNotebook">
    <h2 className="h2Bici">¿Qué cubre el seguro de bici de Yuju?</h2>
    </div>
        <h1></h1>
        <div className="industrial-container">
          {infoNotebook.map((item) => (
              <div key={item.id} className="industrial-card">
              <img src={item.icon} alt={item.title} className="industrial-icon" />
              <h3 className="industrial-title">{item.title}</h3>
              <p className="industrial-description">{item.description}</p>
            </div>
          ))}
        </div>
          </>
      );
}

