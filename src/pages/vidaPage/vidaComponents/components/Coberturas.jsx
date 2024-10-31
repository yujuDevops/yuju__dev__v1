import './Coberturas.css';

export const Coberturas = () => {
  return (
    <div className="cobertura-container">
      <div className="cobertura-content">
        <div className="cobertura-icon">
          <img 
            src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727793979/cobertura_basica_mvj8th.png" 
            alt="Icono de cobertura" 
            className="icon-image-gtd"
          />
        </div>
        <div className="cobertura-text-vida">
          <h2 className="cobertura-title">Cobertura básica</h2>
          <p className="cobertura-description">
            El seguro de vida te cubre por fallecimiento por cualquier causa, ya sea por enfermedad o por accidente. 
            Así podés cuidar a tu familia y garantizar su estabilidad económica y su estilo de vida, si vos ya no estás.
          </p>
          <button className="cobertura-button">Contratar</button>
        </div>
      </div>
    </div>
  );
};