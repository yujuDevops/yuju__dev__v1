import Modal from 'react-modal';
import { customHooksCard } from '../../hooks/customHooksCard';
import "./cardHogar.css"

Modal.setAppElement('#root'); // Asegúrate de que el id coincida con el id de tu elemento raíz

const PlanModal = ({ isOpen, onRequestClose, planDetails, handleClick, datos ,handleSubmit, handleChange }) => (


<Modal className="modal"
  isOpen={isOpen}
  onRequestClose={onRequestClose}
  contentLabel="Plan Details"
>
  <div className='divModalHogar'>
    <button className="xButton" onClick={onRequestClose}>×</button>
    <div className="plan-details">
      <h2>{planDetails.title}</h2>
      <h3 className='h3Hogar'>{planDetails.description}</h3>
      <p>Incendio edificio: <span>${planDetails.incendioEdificio}</span></p>
      <p>Cristales: <span>${planDetails.cristales}</span></p>
      <p>Incendio contenido: <span>${planDetails.incendioContenido}</span></p>
      <p>Robo y/o Hurto Contenido: <span>${planDetails.roboContenido}</span></p>
      <p>Electrodomésticos: <span>${planDetails.electrodomesticos}</span></p>
      <p>Tecnología: <span>${planDetails.tecnologia}</span></p>
    </div>
    
    <div className="divider"></div>

    <div className="inputs-section">
      <form onSubmit={handleSubmit} action="" className="modalInputs">
        <input
          name='nombre'
          type="text"
          placeholder='Nombre'
          value={datos.nombre}
          onChange={handleChange}
        />

        <input 
          name='telefono'
          type="number"
          placeholder='Número de celular'
          value={datos.telefono}
          onChange={handleChange}
        />
        
        <button onClick={handleClick}>¡Quiero que me contacten!</button>
      </form>

      <a href="https://wa.me/XXXXXXXXXXXXXX" className="whatsapp-link">
        <img src="whatsapp-icon.png" alt="WhatsApp" />
        Hablar con un asesor
      </a>
    </div>
  </div>
</Modal>

);



export const CardHogar = ({ planData, plan }) => {
const {  modalIsOpen,
  selectedPlan,
  datos,
  setDatos,
  openModal,
  closeModal,
  handleChange,
  handleSubmit,
  handleClick,
} = customHooksCard()

const plan300Details = {
  title: planData[plan].pack300.title,
  description:"Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.",
  incendioEdificio: '3.000.000',
  cristales: '6.000',
  incendioContenido: '600.000',
  roboContenido: '60.000',
  electrodomesticos: '90.000',
  tecnologia: '30.000'
};
const plan500Details = {
  title: planData[plan].pack500.title,
  description:"Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.",
  incendioEdificio: '3.000.000',
  cristales: '6.000',
  incendioContenido: '600.000',
  roboContenido: '60.000',
  electrodomesticos: '90.000',
  tecnologia: '30.000'
};
const plan750Details = {
  title: planData[plan].pack750.title,
  description:"Incluye las coberturas básicas e imprescindibles para proteger tu patrimonio, ideal para inquilinos.",
  incendioEdificio: '3.000.000',
  cristales: '6.000',
  incendioContenido: '600.000',
  roboContenido: '60.000',
  electrodomesticos: '90.000',
  tecnologia: '30.000'
};


  return (
    <div className="cardsHogar">
      <div className="cardHogar">
        <h3 className='h3CardHogar'>{planData[plan].pack300.title}</h3>
        <p className=" pCardHogar">{planData[plan].pack300.description}</p>
        <p className=" pCardHogar">{planData[plan].pack300.price}</p>
        <button className='buttonCardHogar' onClick={() => openModal(plan300Details)}>Contratar</button>
      </div>
      <div className="cardHogar">
        <h3 className='h3CardHogar'>{planData[plan].pack500.title}</h3> 
        <p className=" pCardHogar">{planData[plan].pack500.description}</p>
        <p className=" pCardHogar">{planData[plan].pack500.price}</p>
        <button className='buttonCardHogar' onClick={() => openModal(plan500Details)}>Contratar</button>
      </div>
      <div className="cardHogar">
        <h3 className='h3CardHogar'>{planData[plan].pack750.title}</h3>
        <p className=" pCardHogar">{planData[plan].pack750.description}</p>
        <p className=" pCardHogar">{planData[plan].pack750.price}</p>
        <button  className='buttonCardHogar' onClick={() => openModal(plan750Details)}>Contratar</button>
      </div>

      {selectedPlan && (
        <PlanModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          planDetails={selectedPlan}
          handleClick={handleClick}
          datos={datos}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setDatos={setDatos}
        />
      )}
    </div>
  );
};
