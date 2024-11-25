import "./headerIndustrial.css";

export const HeaderIndustrial = () => {
  return (
<header className='header-industria'>
  <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730211408/Header-seguro-industria_a2rbsq.png" alt=""  className='imgPorDefectoMotos' />
  <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732539624/Header-industria-tablet_wxfumc.webp" alt="" className='imgRemplazoMotos'  />
  <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732025479/Header-industria-celular_knvie4.jpg" alt="" className='imgFotoCelular'  />
  
  <div className='container-industria'>
  <h1 className='h1-industria'>SEGURO DE INTEGRAL DE COMERCIO E INDUSTRIA</h1>
  <h2 className='h2-industria'>Respaldo integral para tu actividad comercial.</h2>
  <h3 className='h3-industria'>Protegé tu negocio con coberturas a medida. Elegí entre nuestros planes <br/>flexibles para comercios de todo tipo y concentrate en hacer crecer tu empresa.</h3>
  <button className='buttonIndustriaHeader'><a href="">Cotizá</a></button>
  </div>

  </header>
  )
}
