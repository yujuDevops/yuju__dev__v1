import "./visionMisionObjetivo.css"

export const VisionMisionObjetivo = () => {
    return (
        <div className="cardVision-container">
          <div className="cardVision">
            <img
              src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733235223/web_Icono-innovacion_terfcr.svg"
              alt="Visión"
              className="cardVision-icon"
            />
            <h3 className="cardVision-title">Visión</h3>
            <p className="cardVision-text">
              Nuestra visión es transformar la industria de seguros, aprovechando
              la tecnología para brindarte soluciones más ágiles, accesibles y
              personalizadas.
            </p>
          </div>
          <div className="cardVision">
            <img
              src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733235231/web_Icono-mision_qiip2m.svg"
              alt="Misión"
              className="cardVision-icon"
            />
            <h3 className="cardVision-title">Misión</h3>
            <p className="cardVision-text">
              Nuestra misión es asegurar todos tus bienes, proporcionándote una
              gran experiencia de usuario. Queremos que te sientas protegido y
              tranquilo, sabiendo que cuentas con el respaldo de una empresa seria
              y confiable.
            </p>
          </div>
          <div className="cardVision">
            <img
              src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733235238/web_Icono-objetivos_qktorb.svg"
              alt="Objetivo"
              className="cardVision-icon"
            />
            <h3 className="cardVision-title">Objetivo</h3>
            <p className="cardVision-text">
              Por eso, en Yuju, nuestro objetivo es cubrir a tus seres queridos y
              tu patrimonio, con productos justos y modernos, totalmente
              transparentes y al mejor precio del mercado.
            </p>
          </div>
        </div>
      );
}
