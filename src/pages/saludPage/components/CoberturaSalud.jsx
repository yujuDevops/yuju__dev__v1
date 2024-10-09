import "./coberturaSalud.css"

export const CoberturaSalud = () => {
    return (
        <div className="coberturas-container">
          <h2>Conocé nuestras coberturas</h2>
    
          <div className="cobertura-item">
            <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480423/Salud-indemnizacion_prro8k.png" alt="Indemnización" />
            <div className="cobertura-text">
              <h3>Indemnización</h3>
              <p>
                Recibís el total de la suma asegurada que hayas contratado si te diagnostican alguna enfermedad o necesitaras algún trasplante, con solo presentar la documentación necesaria. Podés usar ese dinero para lo que vos quieras. <strong>Vos elegís cómo cuidar tu salud, nosotros te apoyamos.</strong>
              </p>
            </div>
          </div>
    
          <div className="cobertura-item">
            <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480430/Salud-enfermedades_pif8vz.png" alt="Enfermedades graves" />
            <div className="cobertura-text">
              <h3>Enfermedades graves</h3>
              <p>
                Te brinda una indemnización equivalente a la suma asegurada si te diagnostican alguna de estas enfermedades: cáncer, infarto del miocardio y derrame cerebral. <strong>Así podés enfocarte en tu recuperación y no en los gastos.</strong>
              </p>
            </div>
          </div>
    
          <div className="cobertura-item">
            <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480436/Salud-transplante_tsvefw.png" alt="Trasplante" />
            <div className="cobertura-text">
              <h3>Trasplante</h3>
              <p>
                Te cubre con una indemnización equivalente a la suma asegurada si necesitaras un trasplante de: Médula Ósea, Hígado, Corazón y Pulmón en bloque, Páncreas, Corazón, Pulmón, Riñón, Córnea. <strong>De esta manera, podés tener la seguridad de que no te vas a quedar sin opciones ni recursos para cuidar tu salud.</strong>
              </p>
            </div>
          </div>
    
          <div className="cobertura-item">
            <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480441/Salud-internacion_zrhdcq.png" alt="Renta diaria por internación" />
            <div className="cobertura-text">
              <h3>Renta diaria por internación</h3>
              <p>
                Te indemniza con una suma de dinero por cada día que permanezcas internado/a por enfermedad o accidente. <strong>Así podés cubrir los gastos que se generen por tu estadía en el hospital.</strong>
              </p>
            </div>
          </div>

         <div className="cobertura-item">
            <h2>Cobertura adicionales</h2>
            <h3 className="atencion">
           Atención Médica Digital <br />
            Servicio médico de atención por videoconsultas con diferentes profesionales las 24 hs del día.
            </h3>

         </div>
        </div>
      );
    }
