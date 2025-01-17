import './coberturasAutos.css';
import { dataCoberturasAuto } from '../data';

export const CoberturasAuto = () => {
  const sendMessage = (title) => {
    const message = `Hola, quiero contratar un seguro de auto. ${title}  
  🔶Marca: 
  🔶Versión: 
  🔶Año: 
  🔶Localidad: 
  `;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };

    return (
        <div className="coberturas-container-auto">
          <h2>Conocé nuestras coberturas para tu auto</h2>
          <div className="cards-container-auto">
            {dataCoberturasAuto.map((cobertura, index) => (
              <div key={index} className="card-coberturas-auto">
                <h3 className='h3-coberturas-auto'>{cobertura.title}</h3>
                <p className='p-coberturas-auto'>{cobertura.description}</p>
                <button onClick={() => sendMessage(cobertura.title)} >Contratar</button>
              </div>
            ))}
          </div>
        </div>
      );
}
