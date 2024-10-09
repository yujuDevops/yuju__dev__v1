
import './headerBici.css';

export const HeaderBici = () => {
  return (
    <>
    <header className='header-motos'>
   <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724950770/Bici_jjmvvk.png" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724950770/Bici_jjmvvk.png" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1724950770/Bici_jjmvvk.png" alt="" className='imgFotoCelular'  />
   
   <div className='container-motos'>
   <h1 className='h1-motos'>SEGURO DE BICICLETA</h1>
   <h2 className='h2-motos'>Disfrutá el camino. Yuju te acompaña.</h2>
   <h3 className='h3-motos'>Te ofrecemos un seguro ágil que cuida de vos y tu bici.<br/> Elegí tu cobertura y sumá kilómetros sin preocupaciones.</h3>
 
   </div>
 
   </header>
    </>
  )
}
