import { MensajeWspConsola } from "../data/MensajeWspConsola";
import "./headerConsola.css";
import React from 'react';


const sendMessage = () => {
  const message = `Hola, me interesa el seguro para consola.
`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};


export const HeaderConsola = () => {
  return (
    <>
 <header className='header-consola'>
 <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217735/Header-consola_gazlpq.webp" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617438/Header-consola_kpzirm.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733407446/Header-consola-celular_jh69on.jpg" alt="" className='imgFotoCelular'  />
    <div className='container-consola'>
    <h1 className='h1-consola'>SEGURO DE CONSOLA</h1>
    <h2 className='h2-consola'>Asegurá tu consola en minutos. Cotizá y contratá online.</h2>
    <h3 className='h3-consola'>Tu diversión está asegurada. Te ofrecemos los mejores planes para tu consola, <br />para que puedas disfrutar de tu diversión al máximo y sin interrupciones.<br /> Contratalo hoy, 100% online.</h3>

    <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
              <button className='buttonconsolaHeader'>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container-consola">
            <div class="linea"></div>
            <span class="separador-celular-consola">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://www.rusfreestyle.com.ar/producto/consola/9254/" target="_blank" rel="noopener noreferrer">
              <button className='buttonconsolaHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
  
    </header>
    </>
  )
}
