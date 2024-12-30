import "./headerHogar.css"

export const HeaderHogar = () => {
  return (
<>
<header className="headerHogar">
<img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217736/Header-Hogar_xgfepx.webp" alt="" className='imgNotebookHogar'/>
<img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732470995/Header-Hogar-tablet_reaw4w.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730391155/Header-hogar-celular_ld6obv.jpg" alt="" className='imgFotoCelular'  />
<div className='containerHogar'>
<h1 className='h1Hogar'>SEGURO DE HOGAR</h1>
  <h2 className='h2Hogar'>Cuidá tu hogar con Yuju, el seguro que se adapta a vos.</h2>
  <h3 className='h3Hogar'>Protegé el lugar donde creás tus mejores momentos. Contratá online un seguro flexible y a tu medida en minutos. Elegí tu plan y viví tranquilo.</h3>
  
  <button className='buttonHogarHeader'><a href="
https://wa.me/5491156307246">Cotizá</a></button>
</div>



</header>
</>
  )
}
