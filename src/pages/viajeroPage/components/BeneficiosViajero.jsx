import { dataBeneficiosViajeros } from "../data"



export const BeneficiosViajero = () => {
  return (
<div className="coberturas-container-ggts">
      <h2 className="coberturas-title-ggts">Tu seguro de asistencia al viajero te ofrece los siguientes beneficios:</h2>
    
      <div className="coberturas-grid-ggts">
        {dataBeneficiosViajeros.map((cobertura) => (
          <div key={cobertura.id} className="cobertura-card-ggts">
            <img src={cobertura.icon} alt={cobertura.title} className="cobertura-icon-ggts" />
            <p className="cobertura-title-ggts">{cobertura.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
