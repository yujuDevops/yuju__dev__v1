import "../components/HeaderMotos.css"
import fotoMotos from '../../../../assets/image/Header-seguro-moto.png'




export const HeaderMotos = () => {
  return (
   <>
   <header className='header-motos'>
  <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734617059/Header-Moto_f4hn6s.webp" alt=""  className='imgPorDefectoMotos' />
  <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732302219/Header-Moto-tablet_mcqpkh.webp" alt="" className='imgRemplazoMotos'  />
  <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731328296/Header-moto-celular_iq0lgk.jpg" alt="" className='imgFotoCelular'  />
  
  <div className='container-motos'>
  <h1 className='h1-motos'>SEGURO DE MOTO</h1>
  <h2 className='h2-motos'>Viví una aventura sin límites. Cotizá y contratá <br/> tu seguro online en un instante.</h2>
  <h3 className='h3-motos'>En Yuju te ofrecemos protección que va a tu ritmo. Asegurá tu moto de <br/> forma fácil, rápida y a un precio justo.</h3>
  <button className='buttonMotosHeader'><a href="
https://wa.me/5491156307246">Cotizá</a></button>
  </div>

  </header>
   </>
  )
}
