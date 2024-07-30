import fotoMotos from '../../../../assets/image/Header-seguro-moto.png'
import fotoMotoTablet from '../../../../assets/image/Header-Moto-tablet.jpg'
import fotoMotosCelular from  '../../../../assets/image/Header-moto-celular.jpg'
import { Button } from '../../../../components/buttonHeader/Button'

import "../components/HeaderMotos.css"

export const HeaderMotos = () => {
  return (
   <>
   <header className='header-motos'>
  <img src={fotoMotos} alt=""  className='imgPorDefectoMotos' />
  <img  src={fotoMotoTablet} alt="" className='imgRemplazoMotos'  />
  <img  src={fotoMotosCelular} alt="" className='imgFotoCelular'  />
  
  <div className='container-motos'>
  <h1 className='h1-motos'>SEGURO DE MOTO</h1>
  <h2 className='h2-motos'>Viví una aventura sin límites. Cotizá y contratá  tu seguro online<br/> en un instante.</h2>
  <h3 className='h3-motos'>En Yuju te ofrecemos protección que va a tu ritmo. Asegurá tu moto de <br/> forma fácil, rápida y a un precio justo.</h3>
   <div className='ButtonHeaderMotos'><Button  text="Cotiza" url="https://wa.me/5491156307246" /></div> 
  </div>

  </header>
   </>
  )
}
