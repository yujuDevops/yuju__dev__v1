import './coberturasAutos.css';
import { dataCoberturasAuto } from '../data';

export const CoberturasAuto = () => {
    return (
        <div className="coberturas-container">
          <h2>Conocé nuestras coberturas para tu auto</h2>
          <div className="cards-container">
            {dataCoberturasAuto.map((cobertura, index) => (
              <div key={index} className="card-coberturas">
                <h3 className='h3-coberturas'>{cobertura.title}</h3>
                <p className='p-coberturas'>{cobertura.description}</p>
                <button>Contratar</button>
              </div>
            ))}
          </div>
        </div>
      );
}
