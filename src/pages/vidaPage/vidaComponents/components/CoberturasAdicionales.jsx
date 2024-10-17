import { dataCoberturas } from "../../data"
import  "./coberturasAdicionales.css";

export const CoberturasAdicionales = () => {
  return (
<div className="coberturas-container-ggts">
      <h2 className="coberturas-title-ggts">Coberturas adicionales</h2>
      <p className="coberturas-description-ggts">
        Además de la cobertura básica, podés contratar otras coberturas que te brindan una mayor protección y tranquilidad, 
        según tus necesidades y preferencias. Estas son algunas de las coberturas adicionales que te ofrecemos:
      </p>
      <div className="coberturas-grid-ggts">
        {dataCoberturas.map((cobertura) => (
          <div key={cobertura.id} className="cobertura-card-ggts">
            <img src={cobertura.icon} alt={cobertura.title} className="cobertura-icon-ggts" />
            <p className="cobertura-title-ggts">{cobertura.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
