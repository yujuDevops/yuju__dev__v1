import './CardMobile.css'; // Archivo de estilos

import visionIcon from "../img/web_Icono-innovacion.svg";
import misionIcon from "../img/web_Icono-mision.svg";
import objetivoIcon from "../img/web_Icono-objetivos.svg";

const CardMobile = () => {
  return (
    <>
    <div className="card-father-mobile">
      <img src={visionIcon} alt="Imagen de Vision" className="card-icon-mobile" />
      <div className="card-content-mobile">
        <h3 className="card-title-mobile">vision</h3>
        <p className="card-text-mobile">Nuestra visión es transformar la industria de seguros, aprovechando la tecnología para brindarte soluciones más <strong>ágiles, accesibles y personalizadas.</strong> </p>
      </div>
      <div className="card-shadow-mobile"></div>
    </div>

    <div className="card-father-mobile">
      <img src={misionIcon} alt="Imagen de Vision" className="card-icon-mobile" />
      <div className="card-content-mobile">
        <h3 className="card-title-mobile">Misión</h3>
        <p className="card-text-mobile">Nuestra misión es asegurar todos tus bienes, proporcionándote una gran experiencia de usuario. Queremos que te sientas <strong>protegido y tranquilo,</strong> sabiendo que cuentas con el respaldo de una empresa seria y confiable.</p>
      </div>
      <div className="card-shadow-mobile"></div>
    </div>

    <div className="card-father-mobile">
      <img src={objetivoIcon} alt="Imagen de Vision" className="card-icon-mobile" />
      <div className="card-content-mobile">
        <h3 className="card__title__mobile__obj">objetivo</h3>
        <p className="card-text-mobile">Por eso, en Yuju, nuestro objetivo es <strong>cubrir a tus seres queridos y tu patrimonio,</strong> con productos justos y modernos, totalmente transparentes y al <strong>mejor precio del mercado.</strong></p>
      </div>
      <div className="card-shadow-mobile"></div>
    </div>
    </>
  );
};

export default CardMobile;
