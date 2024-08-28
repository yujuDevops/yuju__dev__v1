import "./FormComponent.css";
import { CustomHooksHomePage } from '../customHooks/CustomHooksHomePage';

export const ContactForm = () => {
  const {
    handleSubmit,
    handleChange,
    formData,
    errors,
  } = CustomHooksHomePage();

  const getPlaceholderClass = (error) => error ? 'placeholder-error' : 'placeholder-normal';

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label>Nombre *</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.nombre)}`}
          placeholder={errors.nombre ? 'El nombre es requerido' : 'Ingresa tu nombre'}
        />
      </div>
      <div className="form-group">
        <label>Correo *</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.correo)}`}
          placeholder={errors.correo ? 'El correo es requerido' : 'Ingresa tu correo'}
        />
      </div>
     
     
     
      <div className="form-group">
        <label>Mensaje</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.mensaje)}`}
        />
      </div>
      <div className="button__form__env"> 

      <button id="myTextarea" maxlength="1000" type="submit" className="submit__button__form">Enviar</button>
      </div>
      
    </form>
  );
};

export default ContactForm;
