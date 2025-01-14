import "../components/HeaderMotos.css";

const sendMessage = () => {
  const message = `Hola, estoy interesado en contratar un seguro de moto. 
🔶Marca: 
🔶Versión: 
🔶Año: 
🔶Localidad: 
`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};

export const HeaderMotos = () => {
  return (
    <>
      <header className='header-motos'>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734617059/Header-Moto_f4hn6s.webp" alt="" className='imgPorDefectoMotos' />
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732302219/Header-Moto-tablet_mcqpkh.webp" alt="" className='imgRemplazoMotos' />
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731328296/Header-moto-celular_iq0lgk.jpg" alt="" className='imgFotoCelular' />
        
        <div className='container-motos'>
          <h1 className='h1-motos'>SEGURO DE MOTO</h1>
          <h2 className='h2-motos'>Viví una aventura sin límites. Cotizá y contratá <br/> tu seguro online en un instante.</h2>
          <h3 className='h3-motos'>En Yuju te ofrecemos protección que va a tu ritmo. Asegurá tu moto de <br/> forma fácil, rápida y a un precio justo.</h3>
          
          <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
              <button className='buttonMotoHeader'>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container">
            <div class="linea"></div>
            <span class="separador-celular">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://motos.rus.com.ar/9254" target="_blank" rel="noopener noreferrer">
              <button className='buttonMotoHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};