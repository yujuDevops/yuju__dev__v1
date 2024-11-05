import "./coberturasAccidentalesPersonales.css"

export const CoberturasAccidentesPersonales = () => {
  return (

  <>

<div className="coberturas-container-acc">
    
          <div className="cobertura-item">
            <img className="imgCoberturas-acc" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730767771/AP-invalidez-acc_ylrcua.png" alt="Indemnización" />
            <div className="cobertura-text-acc">
              <h3>Muerte e invalidez</h3>
              <p>
              Esta cobertura respalda al asegurado en caso de que sufra un accidente que le cause la muerte o una incapacidad permanente, ya sea total o parcial.
              </p>
            </div>
          </div>

    
          <div className="cobertura-item">
            <img className="imgCoberturas-acc"  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730767771/AP-farmaceutica-acc_ro30cn.png" alt="Indemnización" />
            <div className="cobertura-text-acc">
              <h3>Asistencia médico farmacéutica</h3>
              <p>
              Esta cobertura reembolsa al asegurado los gastos médicos y de farmacia que incurra por un accidente cubierto por el seguro.
              </p>
            </div>
          </div>
 </div>


  </>

  )
}
