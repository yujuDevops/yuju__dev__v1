import  { useState } from 'react';
import emailjs from '@emailjs/browser';
// import { Alert, Snackbar } from '@mui/material';
import './EmailInput.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from "sweetalert2";




// Alerta de éxito SweetAlert
const sendEmail = ()=> {
  Swal.fire({
    title: "¡Gracias por completar el formulario! 😊",
    text: "Te vamos a enviar un correo electrónico y nuestro equipo se va a contactar a la brevedad.  ",
    icon: "success",
    confirmButtonText: "Volver",
    customClass: {
      popup: "custom-popup",
      title: "custom-title",
      htmlContainer: "custom-text",
      confirmButton: "custom-button"
    },
  });
}



//error al enviar el formulario
const sendError = () => {
  Swal.fire({
      title: "Error al enviar el formulario",
      text: "Por favor, intente nuevamente.",
      icon: "error",
      confirmButtonText: "Volver",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        htmlContainer: "custom-text",
        confirmButton: "custom-button"
      },
    });
  }

// Sereales de Email JS
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;
  



const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  // const [openErrorAlert, setOpenErrorAlert] = useState(false);
  // const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.includes('@')) {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      setError('Debes utilizar "@" en este campo');
      // setOpenErrorAlert(true);
      clearForm();
      return;
    }

    

    // Datos que se enviarán en la plantilla
    const templateParams = {
      email: email,
      reply_to: email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        () => {
          // setSuccess('¡Yuju! ¡Newsletter enviado con éxito!');
          setError('');
          // setOpenSuccessAlert(true);
          clearForm();
          sendEmail();
        },
        (err) => {
          setError('Hubo un error al enviar el correo. Inténtalo más tarde.');
          // setSuccess('');
          // setOpenErrorAlert(true);
          sendError();
          console.error('Error al enviar email:', err);
        }
      );
  };

  // const handleCloseError = () => {
  //   setOpenErrorAlert(false);
  // };

  // const handleCloseSuccess = () => {
  //   setOpenSuccessAlert(false);
  // };

  const clearForm = () => {
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Escriba su mail"
        className={`email-input ${error ? 'input-error' : ''}`}
        required
      />
      <button type="submit" className="submit-button">
        <i className="fa-solid fa-angle-right"></i>
      </button>

      {/* Snackbar para errores */}
      {/* <Snackbar
        open={openErrorAlert}
        autoHideDuration={5000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar> */}

      {/* Snackbar para éxitos */}
      {/* <Snackbar
        open={openSuccessAlert}
        autoHideDuration={5000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSuccess} severity="success" variant="filled">
          {success}
        </Alert>
      </Snackbar> */}
    </form>
  );
};

export default EmailInput;
