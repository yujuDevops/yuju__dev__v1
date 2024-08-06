import { useState } from "react";

    const initialState = {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        direccion: '',
        codigoPostal: '',
        mensaje: '',
    }

    export const CustomHooksHomePage = () => {

    const [formData, setFormData] = useState(
        initialState
        );
      
        const [errors, setErrors] = useState({});
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
    
        const validate = () => {
          let tempErrors = {};
          if (!formData.nombre) tempErrors.nombre = 'El nombre es requerido';
          if (!formData.apellido) tempErrors.apellido = 'El apellido es requerido';
          if (!formData.correo) tempErrors.correo = 'El correo es requerido';
          if (!formData.telefono) tempErrors.telefono = 'El teléfono es requerido';
          if (!formData.direccion) tempErrors.direccion = 'La dirección es requerida';
          if (!formData.codigoPostal) tempErrors.codigoPostal = 'El código postal es requerido';
          if (!formData.mensaje) tempErrors.mensaje = 'El mensaje es requerido';
      
          setErrors(tempErrors);
          return Object.keys(tempErrors).length === 0;
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (validate()) {
            console.log('Formulario enviado', formData);
          }
          setFormData(
         initialState
          )
        };


  return {
    initialState,
    handleSubmit,
    handleChange,
    formData,
    setFormData,
    errors,
    setErrors,
    validate
  }
}
