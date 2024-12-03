import React, { useState } from 'react';
import './EmailInput.css'; // Asegúrate de crear y vincular el archivo CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.includes('@')) {
      setError('');
    } else {
      setError('Debes utilizar "@" en este campo');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.includes('@')) {
      alert(`Email submitted: ${email}`);
    } else {
      setError('Debes utilizar "@" en este campo');
    }

    setEmail("");
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
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="submit-button">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </form>
  );
};

export default EmailInput;