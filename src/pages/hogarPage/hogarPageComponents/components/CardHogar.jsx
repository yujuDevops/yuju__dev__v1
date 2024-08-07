import Modal from 'react-modal';
import { customHooksCard } from '../../hooks/customHooksCard';

Modal.setAppElement('#root'); // Asegúrate de que el id coincida con el id de tu elemento raíz

const PlanModal = ({ isOpen, onRequestClose, planDetails, handleClick, datos ,handleSubmit, handleChange }) => (


  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Plan Details"
  >
    <div className='divModalHogar'>
    <h2>{planDetails.title}</h2>
    <p>Incendio edificio: ${planDetails.incendioEdificio}</p>
    <p>Cristales: ${planDetails.cristales}</p>
    <p>Incendio contenido: ${planDetails.incendioContenido}</p>
    <p>Robo y/o Hurto Contenido: ${planDetails.roboContenido}</p>
    <p>Electrodomésticos: ${planDetails.electrodomesticos}</p>
    <p>Tecnología: ${planDetails.tecnologia}</p>
    <button onClick={onRequestClose}>Cerrar</button>
    </div>
    <div className='modalInputs'>

     <form onSubmit={handleSubmit} action="">
      <input
      name='nombre'
       type="text"
       placeholder='Rellene con su nombre'
       value={datos.nombre}
       onChange={handleChange}
       />

      <input 
      name='telefono'
      type="number"
      placeholder='Rellene con su numero de telefono'
      value={datos.telefono}
      onChange={handleChange}
      />
      
       <button onClick={handleClick}> asd </button>
       </form>
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
  incendioEdificio: '3.000.000',
  cristales: '6.000',
  incendioContenido: '600.000',
  roboContenido: '60.000',
  electrodomesticos: '90.000',
  tecnologia: '30.000'
};
const plan500Details = {
  title: planData[plan].pack500.title,
  incendioEdificio: '3.000.000',
  cristales: '6.000',
  incendioContenido: '600.000',
  roboContenido: '60.000',
  electrodomesticos: '90.000',
  tecnologia: '30.000'
};
const plan750Details = {
  title: planData[plan].pack750.title,
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
        <h3>{planData[plan].pack300.title}</h3>
        <p>{planData[plan].pack300.description}</p>
        <p>{planData[plan].pack300.price}</p>
        <button onClick={() => openModal(plan300Details)}>Contratar</button>
      </div>
      <div className="cardHogar">
        <h3>{planData[plan].pack500.title}</h3>
        <p>{planData[plan].pack500.description}</p>
        <p>{planData[plan].pack500.price}</p>
        <button onClick={() => openModal(plan500Details)}>Contratar</button>
      </div>
      <div className="cardHogar">
        <h3>{planData[plan].pack750.title}</h3>
        <p>{planData[plan].pack750.description}</p>
        <p>{planData[plan].pack750.price}</p>
        <button onClick={() => openModal(plan750Details)}>Contratar</button>
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
