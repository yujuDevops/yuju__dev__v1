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
        <label>Apellido *</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.apellido)}`}
          placeholder={errors.apellido ? 'El apellido es requerido' : 'Ingresa tu apellido'}
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
        <label>Número de teléfono *</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.telefono)}`}
          placeholder={errors.telefono ? 'El teléfono es requerido' : 'Ingresa tu teléfono'}
        />
      </div>
      <div className="form-group">
        <label>Dirección *</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.direccion)}`}
          placeholder={errors.direccion ? 'La dirección es requerida' : 'Ingresa tu dirección'}
        />
      </div>
      <div className="form-group">
        <label>Código postal *</label>
        <input
          type="text"
          name="codigoPostal"
          value={formData.codigoPostal}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.codigoPostal)}`}
          placeholder={errors.codigoPostal ? 'El código postal es requerido' : 'Ingresa tu código postal'}
        />
      </div>
      <div className="form-group">
        <label>Mensaje *</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className={`form-input ${getPlaceholderClass(errors.mensaje)}`}
        />
      </div>
      <div className="button__form__env"> 

      <button id="myTextarea" maxlength="300" type="submit" className="submit__button__form">Enviar</button>
      </div>
      
    </form>
  );
};

export default ContactForm;
