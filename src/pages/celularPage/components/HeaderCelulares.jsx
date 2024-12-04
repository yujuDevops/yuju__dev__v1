import "./headerCelulares.css";

export const HeaderCelulares = () => {
  return (
<header className='header-celular'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731330800/Header-seguro-celular_mwzytb.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733232598/Header-celular-tablet_i7w0vw.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733190830/Header-tablet-celular_jpjhqe.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-celular'>
    <h1 className='h1-celular'>SEGURO DE CELULAR</h1>
    <h2 className='h2-celular'>Conectate con el mundo con seguridad. <br/>Elegí el plan que más te beneficie.</h2>
    <h3 className='h3-celular'>Tenemos las mejores opciones de seguro, para que puedas disfrutar de las fotos, <br/>los mensajes y las llamadas que te importan con el mejor respaldo.</h3>
    <button className='buttonVidaHeader'><a href="" target="_blank">Cotizá</a></button>
    </div>
  
    </header>
  )
}
