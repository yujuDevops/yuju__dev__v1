import "./headerAuto.css";

  
  const sendMessage = (title) => {
    const message = `Hola, quiero contratar un seguro de auto. ${title}  
  🔶Marca: 
  🔶Versión: 
  🔶Año: 
  🔶Localidad: 
  `;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };


export const HeaderAuto = () => {
  return (
    <header className='header-auto'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734616533/Header-Auto_b8y6kc.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733696070/Header-Auto-tablet_1_kxc5zg.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733695978/Header-auto-celular_z1kbti.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-auto'>
    <h1 className='h1-auto'>SEGURO DE AUTO</h1>
    <h2 className='h2-auto'>Cotizá, compará y ahorrá en tu seguro de auto.</h2>
    <h3 className='h3-auto'>
    Tenemos las mejores coberturas pensadas para vos, para que puedas<br/> encontrar la que más se adapte a tu necesidad y a tu bolsillo.</h3>
    <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
    <button className='buttonAutoHeader'>Cotizá</button>
    </a>
    </div>
  
    </header>
  )
}
