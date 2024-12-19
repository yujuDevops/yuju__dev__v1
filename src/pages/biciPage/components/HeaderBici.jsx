
import './headerBici.css';

export const HeaderBici = () => {
  return (
    <>
    <header className='header-bici'>
   <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724950770/Bici_jjmvvk.png" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617426/Header-Bicicleta_tycahz.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730821957/d_rahpoz.jpg" alt="" className='imgFotoCelular'  />
   
   <div className='container-bici'>
   <h1 className='h1-bici'>SEGURO DE BICICLETA</h1>
   <h2 className='h2-bici'>Disfrutá el camino. Yuju te acompaña.</h2>
   <h3 className='h3-bici'>Te ofrecemos un seguro ágil que cuida de vos y tu bici.<br/> Elegí tu cobertura y sumá kilómetros sin preocupaciones.</h3>
    
      <a href="https://wa.me/5491156307246">
      <button className='buttonBiciHeader'>Cotizá</button>
      </a>
   </div>
 
   </header>
    </>
  )
}
