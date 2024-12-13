
import "./segundoParrafoRetiro.css"
export const SegundoParrafoRetiro = () => {
    return (
        <div className="retirement-simulator-container">
          <div className="text-section">
            <p>
              ¿Te gustaría tener un futuro seguro y confiable con el seguro de retiro de Yuju?{" "}
              <a >{" "}¡Usá nuestro simulador y descubrí cómo podés armar tu plan personalizado y flexible! {" "}</a> 
              Con nuestro simulador podés ver cuánto podés ahorrar con tus aportes mensuales a planes de ahorro planificado.
            </p>
            <p>
              ¿Qué tenés que hacer? Solo ingresar tu edad actual y el monto que podés aportar por mes. 
              ¿Qué vas a ver? Cuánto podés acumular y cuánto podés cobrar cuando te jubiles.
            </p>
            <p>
              <a>¡No esperes más y empezá a ahorrar hoy!</a>
            </p>
          </div>
          <div className="image-section">
            <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734022131/Seccion_retiro_icono_ulh012.svg" alt="Íconos de simulador y ahorro" />
          </div>
        </div>
      );
}
