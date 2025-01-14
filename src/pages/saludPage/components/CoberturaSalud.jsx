import "./coberturaSalud.css"

export const CoberturaSalud = () => {
    return (
      <>
      <div className="coberturash2-container coberturash2-container-sm">
        <h2>Conocé nuestras coberturas</h2>
      </div>

      <div className="coberturas-container coberturas-container-sm">
      <div className="cobertura-item-salud cobertura-item-salud-sm">
        <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480423/Salud-indemnizacion_prro8k.png" alt="Indemnización" className="img-grande"/>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731528219/Anticipo_del_capital_1_ecsdhs.png" alt="Indemnización" className="imagen-pequena" />
        <div className="cobertura-text cobertura-text-sm">
          <h3>Indemnización</h3>
          <p>Recibís el total de la suma asegurada que hayas contratado si te diagnostican alguna enfermedad o necesitaras algún trasplante, con solo presentar la documentación necesaria. Podés usar ese dinero para lo que vos quieras. <strong>Vos elegís cómo cuidar tu salud, nosotros te apoyamos.</strong></p>
        </div>
      </div>
    
      <div className="cobertura-item-salud cobertura-item-salud-sm">
        <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480430/Salud-enfermedades_pif8vz.png" alt="Enfermedades graves" className="img-grande"/>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731528219/cobertura_basica_1_nplrtp.png" alt="Enfermedades graves" className="imagen-pequena" />
        <div className="cobertura-text cobertura-text-sm">
          <h3>Enfermedades graves</h3>
          <p>Te brinda una indemnización equivalente a la suma asegurada si te diagnostican alguna de estas enfermedades: cáncer, infarto del miocardio y derrame cerebral. <strong>Así podés enfocarte en tu recuperación y no en los gastos.</strong></p>
        </div>
      </div>
    
      <div className="cobertura-item-salud cobertura-item-salud-sm">
        <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480436/Salud-transplante_tsvefw.png" alt="Trasplante" className="img-grande"/>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731528219/transplante_de_organo_1_hqgeio.png" alt="Trasplante" className="imagen-pequena" />
        <div className="cobertura-text cobertura-text-sm">
          <h3>Trasplante</h3>
          <p>Te cubre con una indemnización equivalente a la suma asegurada si necesitaras un trasplante de: Médula Ósea, Hígado, Corazón y Pulmón en bloque, Páncreas, Corazón, Pulmón, Riñón, Córnea. <strong>De esta manera, podés tener la seguridad de que no te vas a quedar sin opciones ni recursos para cuidar tu salud.</strong></p>
        </div>
      </div>
    
      <div className="cobertura-item-salud cobertura-item-salud-sm">
        <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728480441/Salud-internacion_zrhdcq.png" alt="Renta diaria por internación" className="img-grande"/>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731528219/internacion_por_accidente_1_wdvz7w.png" alt="Renta diaria por internación" className="imagen-pequena" />
        <div className="cobertura-text cobertura-text-sm">
          <h3>Renta diaria por internación</h3>
          <p>Te indemniza con una suma de dinero por cada día que permanezcas internado/a por enfermedad o accidente. <strong>Así podés cubrir los gastos que se generen por tu estadía en el hospital.</strong></p>
        </div>
      </div>
    
      </div>

      <div className="coberturah3-item coberturah3-item-sm">
        <h2>Coberturas adicionales</h2>
        <h3>
          Atención Médica Digital <br />
          <h4>Servicio médico de atención por videoconsultas con diferentes profesionales las 24 hs del día.
          </h4>
        </h3>
      </div>
    
    </>
      );
    }
