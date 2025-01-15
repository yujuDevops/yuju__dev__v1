import "./headerPcGamer.css";


const sendMessage = () => {
  const message = `Hola, quiero más detalles sobre el seguro para PC Gamer.
`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};



export const HeaderPcGamer = () => {
  return (
    <header className='header-pcgamers'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217736/Header-pcgamer_vfj1za.webp" alt=""  className='imgPorDefectopcgamers' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617510/Header-pcgamer_auujwd.webp" alt="" className='imgRemplazopcgamers'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733268916/Header-pcgamer-celular_egnacb.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-pcgamers'>
    <h1 className='h1-pcgamers'>SEGURO DE PC GAMER</h1>
    <h2 className='h2-pcgamers'>Que nada te limite en tu juego. Asegurá tu PC Gamer al mejor precio.</h2>
    <h3 className='h3-pcgamers'>Tenemos el mejor seguro para tu PC Gamer, para que puedas tener la mejor <br/>experiencia de juego posible. Contratalo hoy, 100% online.</h3>
    <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
              <button className='buttonpcgamerHeader'>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container">
            <div class="linea"></div>
            <span class="separador-celular">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://www.rusfreestyle.com.ar/producto/pc-gamer/9254/" target="_blank" rel="noopener noreferrer">
              <button className='buttonpcgamerHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
  
    </header>
  )
}
