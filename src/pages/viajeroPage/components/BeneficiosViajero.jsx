import "./beneficiosViajero.css";
import { dataBeneficiosViajeros } from "../data";



export const BeneficiosViajero = () => {
  return (
<div className="coberturas-container-vgts">
      <h2 className="coberturas-title-vgts">
        Tu seguro de asistencia al viajero te ofrece los
         siguientes beneficios:
        </h2>
      
    
      <div className="coberturas-grid-vgts">
        {dataBeneficiosViajeros.map((cobertura) => (
          <div key={cobertura.id} className="cobertura-card-vgts">
            <img src={cobertura.icon} alt={cobertura.title} className="cobertura-icon-vgts" />
            <p className="cobertura-title-vgts">{cobertura.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
