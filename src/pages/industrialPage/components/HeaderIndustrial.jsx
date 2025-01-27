import "./headerIndustrial.css";

const sendMessage = (title) => {
  const message = `Hola, quisiera información sobre el seguro de industria.`;
    const phoneNumber = "5491156307246"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
  };


export const HeaderIndustrial = () => {
  return (
<header className='header-industria'>
  <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217735/Header-industria_1_y5vcnh.webp" alt=""  className='imgPorDefectoMotos' />
  <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732539624/Header-industria-tablet_wxfumc.webp" alt="" className='imgRemplazoMotos'  />
  <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732025479/Header-industria-celular_knvie4.jpg" alt="" className='imgFotoCelular'  />
  
  <div className='container-industria'>
  <h1 className='h1-industria'>SEGURO INTEGRAL DE COMERCIO <br/>E INDUSTRIA</h1>
  <h2 className='h2-industria'>Respaldo integral para tu actividad comercial.</h2>
  <h3 className='h3-industria'>Protegé tu negocio con coberturas a medida. Elegí entre nuestros planes <br/>flexibles para comercios de todo tipo y concentrate en hacer crecer tu empresa.</h3>
  <a  target="_blank" rel="noopener noreferrer" >
    <button className='buttonIndustriaHeader' onClick={() => {sendMessage()}}>Cotizá</button>
    </a>
  </div>

  </header>
  )
}
