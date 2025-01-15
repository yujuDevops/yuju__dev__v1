
import './headerBici.css';

const sendMessage = () => {
  const message = `Hola, quisiera información sobre el seguro de bicicletas.
`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};

export const HeaderBici = () => {
  return (
    <>
    <header className='header-bici'>
   <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217515/Header-Bicicleta_hmzfgb.webp" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732409545/Header-Bicicleta-tablet_1_eqpaq5.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730821957/d_rahpoz.jpg" alt="" className='imgFotoCelular'  />
   
   <div className='container-bici'>
   <h1 className='h1-bici'>SEGURO DE BICICLETA</h1>
   <h2 className='h2-bici'>Disfrutá el camino. Yuju te acompaña.</h2>
   <h3 className='h3-bici'>Te ofrecemos un seguro ágil que cuida de vos y tu bici.<br/> Elegí tu cobertura y sumá kilómetros sin preocupaciones.</h3>
    
   <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
              <button className='buttonBiciHeader'>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container">
            <div class="linea"></div>
            <span class="separador-celular">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://www.rusfreestyle.com.ar/producto/bicicleta/9254/" target="_blank" rel="noopener noreferrer">
              <button className='buttonBiciHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
 
   </header>
    </>
  )
}
