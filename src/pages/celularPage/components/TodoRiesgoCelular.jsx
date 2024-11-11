import "./todoRiesgoCelulares.css"

export const TodoRiesgoCelular = () => {
    return (
        <div className="todoRiesgoContainer">
          <h3 className="todoRiesgoTitle">El seguro de celular te cubre contra todo riesgo</h3>
          <div className="todoRiesgoItems">
            <div className="todoRiesgoItem">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731332940/seccioncelular_robo_juixa6.svg" alt="Robo" className="todoRiesgoIcon" />
              <span>Robo</span>
            </div>
            <div className="todoRiesgoItem">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731332989/seccioncelular_rotura_pxi2d9.svg" alt="Rotura de pantalla" className="todoRiesgoIcon" />
              <span>Rotura de pantalla</span>
            </div>
            <div className="todoRiesgoItem">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731332959/seccioncelular_caida_of6akr.svg"alt="Caídas" className="todoRiesgoIcon" />
              <span>Caídas</span>
            </div>
            <div className="todoRiesgoItem">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731332948/seccioncelular_derrame_xcitwm.svg" alt="Derrame de líquido" className="todoRiesgoIcon" />
              <span>Derrame de líquido</span>
            </div>
          </div>
        </div>
      );
}
