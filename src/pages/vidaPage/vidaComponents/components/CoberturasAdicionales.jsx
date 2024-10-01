import { dataCoberturas } from "../../data"
import  "./coberturasAdicionales.css";

export const CoberturasAdicionales = () => {
  return (
<div className="coberturas-container">
      <h2 className="coberturas-title">Coberturas adicionales</h2>
      <p className="coberturas-description">
        Además de la cobertura básica, podés contratar otras coberturas que te brindan una mayor protección y tranquilidad, 
        según tus necesidades y preferencias. Estas son algunas de las coberturas adicionales que te ofrecemos:
      </p>
      <div className="coberturas-grid">
        {dataCoberturas.map((cobertura) => (
          <div key={cobertura.id} className="cobertura-card">
            <img src={cobertura.icon} alt={cobertura.title} className="cobertura-icon" />
            <p className="cobertura-title">{cobertura.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
