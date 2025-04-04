import './coberturasAutos.css';
import { dataCoberturasAuto, MensajeWspAuto } from '../data';

export const CoberturasAuto = () => {

    return (
        <div className="coberturas-container-auto">
          <h2>Conocé nuestras coberturas para tu auto</h2>
          <div className="cards-container-auto">
            {dataCoberturasAuto.map((cobertura, index) => (
              <div key={index} className="card-coberturas-auto">
                <h3 className='h3-coberturas-auto'>{cobertura.title}</h3>
                <p className='p-coberturas-auto'>{cobertura.description}</p>
                <button 
                onClick={() => window.open("https://autos.rus.com.ar/cotizador/infoPatente/", "_blank")}
              >
                Cotizar ahora
              </button>
              </div>
            ))}
          </div>
        </div>
      );
}
