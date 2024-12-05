import "./headerConsola.css";
import React from 'react';

export const HeaderConsola = () => {
  return (
    <>
 <header className='header-consola'>
 <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1732542461/Header-seguro-consola_yitlp8.png" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733407523/Header-consola-tablet_ckkb8z.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733407446/Header-consola-celular_jh69on.jpg" alt="" className='imgFotoCelular'  />
    <div className='container-consola'>
    <h1 className='h1-consola'>SEGURO DE CONSOLA</h1>
    <h2 className='h2-consola'>Asegurá tu consola en minutos. Cotizá y contratá online.</h2>
    <h3 className='h3-consola'>Tu diversión está asegurada. Te ofrecemos los mejores planes para tu consola, <br />para que puedas disfrutar de tu diversión al máximo y sin interrupciones.<br /> Contratalo hoy, 100% online..</h3>
    <button className='buttonConsolaHeader'><a href="" target="_blank">Cotizá</a></button>
    </div>
  
    </header>
    </>
  )
}
