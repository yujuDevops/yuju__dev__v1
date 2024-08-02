
import "./FormComponent.css";
import { CustomHooksHomePage } from '../customHooks/CustomHooksHomePage';


   export  const ContactForm = () => {
    const{
        handleSubmit,
        handleChange,
        formData,
        errors,
        } = CustomHooksHomePage()
  
    return (
      <form onSubmit={ handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Nombre *</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form-input" placeholder={errors.nombre ? 'El nombre es requerido': null} />
        </div>
        <div className="form-group">
          <label>Apellido *</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="form-input" placeholder={errors.apellido ? 'El apellido es requerido': null} />
        </div>
        <div className="form-group">
          <label>Correo *</label>
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="form-input" placeholder={errors.correo ? 'El correo es requerido': null} />
        </div>
        <div className="form-group">
          <label>Número de teléfono *</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="form-input"
          placeholder={errors.telefono ? 'El teléfono es requerido': null} />
        </div>
        <div className="form-group">
          <label>Dirección *</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} className="form-input" placeholder={errors.direccion ? 'La dirección es requerida': null} />
        </div>
        <div className="form-group">
          <label>Código postal *</label>
          <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} className="form-input" placeholder={errors.codigoPostal ? 'El codigo postal es requerido': null} />
        </div>
        <div className="form-group">
          <label>Mensaje *</label>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className="form-input" />
        </div>
        <button type="submit" className="submit__button__form">Enviar</button>
      </form>
    );
  };
  
  export default ContactForm;