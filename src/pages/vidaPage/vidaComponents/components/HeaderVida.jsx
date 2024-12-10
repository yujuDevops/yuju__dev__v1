import "./HeaderVida.css";

export const HeaderVida = () => {
  return (
    <>
    <header className='header-vida'>
   <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727792965/Header-seguro-vida_yf79cl.png" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732478749/Header-vida-tablet_f3t8ea.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730379057/Header-vida-celular_f5eaap.jpg" alt="" className='imgFotoCelular'  />
   
   <div className='container-vida'>
   <h1 className='h1-vida'>SEGURO DE VIDA</h1>
   <h2 className='h2-vida'>Cuidá a los que más querés. Asegurá tu futuro y el de <br/> tu familia con el mejor seguro de vida.</h2>
   <h3 className='h3-vida'>Construí un futuro seguro para vos y tu familia. Elegí la cobertura que se <br/> ajuste a tu vida y disfrutá el presente con tranquilidad.</h3>
   <button className='buttonVidaHeader'><a href="
https://wa.me/5491156307246" target="_blank">Cotizá</a></button>
   </div>
 
   </header>
    </>
  )
}
