import "./HeaderRetiro.css";

const sendMessage = (title) => {
  const message = `Hola, quisiera información sobre el seguro de retiro.`;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };

export const HeaderRetiro = () => {
  return (
    <header className='header-retiro'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733764017/Header-seguro-retiro_gynemg.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734360830/Header-retiro-tablet_t1pr0d.png" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733764447/Header-retiro-celular_oxfbte.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-retiro'>
    <h1 className='h1-retiro'>SEGURO DE RETIRO</h1>
    <h2 className='h2-retiro'>Invertí en tu futuro. El producto ideal para complementar tu jubilación.</h2>
    <h3 className='h3-retiro'></h3>
    <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
    <button className='buttonVidaHeader'>Cotizá</button>
    </a>
    </div>
  
    </header>
  )
}
