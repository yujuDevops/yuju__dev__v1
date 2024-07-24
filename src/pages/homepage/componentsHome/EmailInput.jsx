import React, { useState } from 'react';
import './EmailInput.css'; // Asegúrate de crear y vincular el archivo CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email submitted: ${email}`);
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
        className="email-input"
        required
      />
      <button type="submit" className="submit-button">
      <i class="fa-solid fa-angle-right"></i>
      </button>
    </form>
  );
};

export default EmailInput;