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
      title: "Plan Pack 300",
      price: '$2.850',
      subtitle: 'Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.',
      coverages: {
        "Incendio edificio": "3.000.000",
        Cristales: "6.000",
        "Incendio contenido": "600.000",
        "Robo y/o Hurto Contenido": "60.000",
        Electrodomésticos: "90.000",
        Tecnología: "30.000",
      },
    },
    {
      title: "Plan Pack 500",
      price: '$4.725',
      subtitle:"Amplía la protección de tu patrimonio y le adiciona cobertura a tus bienes en la vía pública",
      coverages: {
        "Incendio edificio": "5.000.000",
        Cristales: "10.000",
        "Incendio contenido": "1.000.000",
        "Robo y/o Hurto Contenido": "100.000",
        Electrodomésticos: "150.000",
        Tecnología: "50.000",
      },
    },
    {
      title: "Plan Pack 750",
      price: '$7.260',
      subtitle: "Brinda una cobertura adecuada paraproteger el patrimonio de los hogares más equipados.",
      coverages: {
        "Incendio edificio": "7.500.000",
        Cristales: "15.000",
        "Incendio contenido": "1.500.000",
        "Robo y/o Hurto Contenido": "150.000",
        Electrodomésticos: "225.000",
        Tecnología: "80.000",
        "Resp. Civil hechos privados (con pileta)": "1.500.000",
      },
    },
  ];

  // Datos para la segunda imagen
  const imagen2Plans = [
    {
      title: "Hogar Base",
      price: '$4.600',
      subtitle: 'Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.',
      coverages: {
        "Incendio edificio": "6.158.000",
        "Incendio contenido": "739.000",
        "Cristales, vidrios y espejos": "12.000",
        Robo: "74.000",
        "Responsabilidad Civil Linderos": "739.000",
        "Responsabilidad Civil Hechos Privados": "739.000",
        "Daños por acción del agua": "15.000",
        "Perdida de alimentos refrigerados": "5.000",
        "Gastos Extras": "25.000",
      },
    },
    {
      title: "Hogar Plus",
      price: '$7.000',
      subtitle:"Amplía la protección de tu patrimonio y le adiciona cobertura a tus bienes en la vía pública",
      coverages: {
        "Incendio edificio": "6.158.000",
        "Incendio contenido": "739.000",
        "Cristales, vidrios y espejos": "25.000",
        Robo: "148.000",
        "Responsabilidad Civil Linderos": "739.000",
        "Responsabilidad Civil Hechos Privados": "739.000",
        "Seguro técnico Equip. Electrónicos": "62.000",
        "Seguro técnico Línea Blanca": "62.000",
        "Daños por acción del agua": "15.000",
        "Perdida de alimentos refrigerados": "12.000",
        "Gastos Extras": "25.000",
      },
    },
    {
      title: "Hogar Premium",
      price: '$15.000',
      subtitle: "Brinda una cobertura adecuada paraproteger el patrimonio de los hogares más equipados.",
     coverages: {
        "Incendio edificio": "9.236.000",
        "Incendio contenido": "1.500.000",
        "Cristales, vidrios y espejos": "37.000",
        Robo: "246.000",
        "Responsabilidad Civil Linderos": "739.000",
        "Responsabilidad Civil Hechos Privados": "739.000",
        "Seguro técnico Equip. Electrónicos": "111.000",
        "Seguro técnico Línea Blanca": "111.000",
        "Dinero en efectivo": "185.000",
        Mascotas: "49.000",
        "Daños por acción del agua": "15.000",
        "Perdida de alimentos refrigerados": "25.000",
        "Gastos Extras": "25.000",
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
