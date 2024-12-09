import "./headerTablet.css"

export const HeaderTablet = () => {
  return (
    <header className='header-tablet'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/c_crop,w_4001,h_1053/v1733410798/Header-tablet-definitva-desktop_a6y0k1.jpg" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733407835/Header-tablet_cdusei.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733407834/Header-tablet-celular_1_hblnmc.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-tablet'>
    <h1 className='h1-tablet'>SEGURO DE TABLET</h1>
    <h2 className='h2-tablet'>Asegurá tu tablet desde donde estés al mejor precio.</h2>
    <h3 className='h3-tablet'>Llevá tu tablet con vos. Con el seguro de Yuju podés estar tranquilo. <br />Conocé nuestros planes y contratalo hoy 100% online.</h3>
    <button className='buttonTabletHeader'><a href="
https://wa.me/5491156307246" target="_blank">Cotizá</a></button>
    </div>
  
    </header>
  )
}
