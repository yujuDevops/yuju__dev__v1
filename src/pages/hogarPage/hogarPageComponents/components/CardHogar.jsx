import Modal from "react-modal";
import { useState } from "react";
import "./cardHogar.css";

Modal.setAppElement("#root"); // Asegúrate de que coincida con el ID raíz de tu app.

const PlanModal = ({ isOpen, onRequestClose, planDetails }) => (
  <Modal
    className="modal"
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Plan Details"
  >
    <div className="divModalHogar">
      <button className="xButton" onClick={onRequestClose}>×</button>
      <div className="plan-details">
        <h2>{planDetails.title}</h2>
        <div className="plan-descripcion">
        <span>Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.</span>
        </div>
        {Object.entries(planDetails.coverages).map(([key, value]) => (
          <p key={key}>
            {key}: <span>${value}</span>
          </p>
        ))}
      </div>
      <div className="divider"></div>
      <div className="inputs-section">
        <a href="https://wa.me/5491156307246" className="whatsapp-link">
          <img
            src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732423863/whatsapp-img_bzvj0d.png"
            alt="WhatsApp"
          />
          Hablar con un asesor
        </a>
      </div>
    </div>
  </Modal>
);

export const CardHogar = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("imagen1");

  const openModal = (planDetails) => {
    setSelectedPlan(planDetails);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setModalIsOpen(false);
  };

  // Datos para la primera imagen
  const imagen1Plans = [
    {
      title: "Plan Pack 1000",
      price: "$2.850",
      subtitle: "Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.",
      coverages: {
        "Incendio": "10.000.000",
        "Cristales": "20.000",
        "Incendio contenido": "2.000.000",
        "Robo y/o Hurto Contenido": "200.000",
        "Electrodomésticos": "300.000",
        "Dispositivos móviles": "100.000",
        "Daños por granizo": "2.000.000",
      },
    },
    {
      title: "Plan Pack 3000",
      price: "$7.260",
      subtitle: "Amplía la protección de tu patrimonio y le adiciona cobertura a tus bienes en la vía pública.",
      coverages: {
        "Incendio edificio": "30.000.000",
        "Cristales": "60.000",
        "Incendio contenido": "6.000.000",
        "Robo y/o Hurto Contenido": "300.000",
        "Electrodomésticos": "600.000",
        "Dispositivos móviles": "300.000",
        "Daños por granizo": "6.000.000",
      },
    },
    {
      title: "Plan Pack 7000",
      price: "$17.553",
      subtitle: "Brinda una cobertura adecuada para proteger el patrimonio de los hogares más equipados.",
      coverages: {
        "Incendio": "70.000.000",
        "Cristales": "120.000",
        "Incendio contenido": "24.000.000",
        "Robo y/o Hurto Contenido": "1.400.000",
        "Electrodomésticos": "1.400.000",
        "Dispositivos móviles": "700.000",
        "Resp. Civil hechos privados (con pileta)": "1.500.000",
      },
    },
  ];
  

  // Datos para la segunda imagen
  const imagen2Plans = [
    {
      title: "Hogar Base",
      price: "$2.850",
      subtitle: "Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.",
      coverages: {
        "Incendio edificio": "44.974.000",
        "Incendio contenido": "5.398.000",
        "Cristales, vidrios y espejos": "88.000",
        Robo: "541.000",
        "Responsabilidad Civil Linderos": "5.398.000",
        "Responsabilidad Civil Hechos Privados": "5.398.000",
        "Daños por acción del agua": "110.000",
        "Perdida de alimentos refrigerados": "37.200",
        "Gastos Extras": "182.000",
      },
    },
    {
      title: "Hogar Plus",
      price: "$7.000",
      subtitle: "Amplía la protección de tu patrimonio y le adiciona cobertura a tus bienes en la vía pública.",
      coverages: {
        "Incendio edificio": "44.974.000",
        "Incendio contenido": "5.398.000",
        "Cristales, vidrios y espejos": "182.000",
        Robo: "1.080.000",
        "Responsabilidad Civil Linderos": "5.398.000",
        "Responsabilidad Civil Hechos Privados": "5.398.000",
        "Seguro técnico Equip. Electrónicos": "452.000",
        "Seguro técnico Línea Blanca": "452.000",
        "Daños por acción del agua": "110.000",
        "Perdida de alimentos refrigerados": "88.000",
        "Gastos Extras": "182.000",
      },
    },
    {
      title: "Hogar Premium",
      price: "$15.000",
      subtitle: "Brinda una cobertura adecuada para proteger el patrimonio de los hogares más equipados.",
      coverages: {
        "Incendio edificio": "67.461.000",
        "Incendio contenido": "5.398.000",
        "Cristales, vidrios y espejos": "270.000",
        Robo: "1.797.000",
        "Responsabilidad Civil Linderos": "5.398.000",
        "Responsabilidad Civil Hechos Privados": "5.398.000",
        "Seguro técnico Equip. Electrónicos": "810.000",
        "Seguro técnico Línea Blanca": "810.000",
        "Dinero en efectivo": "270.000",
        Mascotas: "355.000",
        "Daños por acción del agua": "110.000",
        "Perdida de alimentos refrigerados": "182.000",
        "Gastos Extras": "182.000",
        "Todo Riesgo en domicilio": "1.351.000",
      },
    },
  ];
  

  const plans = currentImage === "imagen1" ? imagen1Plans : imagen2Plans;

  return (
    <div>
      {/* Selector de imágenes */}
      <div className="imagesHogar">
        <img
        className="imgHogar"
          src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1721840071/RUS_wfx021.png"
          alt="Imagen 1"
          onClick={() => setCurrentImage("imagen1")}
          
        />
        <img
          className="imgHogar"
          src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1721840134/SANCRISTOBAL_cfn89k.png"
          alt="Imagen 2"
          onClick={() => setCurrentImage("imagen2")}
        
        />
      </div>

      {/* Cards */}
      <div className="cardsHogar">
        {plans.map((plan, index) => (
          <div className="cardHogar" key={index}>
            <h3 className="h3CardHogar">{plan.title}</h3>
            <p className="pCardHogar">{plan.subtitle}</p>
            <p className=" pCardHogar__price"><strong>{plan.price}</strong>/ mes</p>
            <button
              className="buttonCardHogar"
              onClick={() => openModal(plan)}
            >
              Contratar
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <PlanModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          planDetails={selectedPlan}
        />
      )}
    </div>
  );
};
