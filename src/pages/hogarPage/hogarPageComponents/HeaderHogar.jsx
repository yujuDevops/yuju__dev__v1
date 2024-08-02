import { Button } from "../../../components/buttonHeader/Button"
import "./headerHogar.css"

export const HeaderHogar = () => {
  return (
<>
<header className="headerHogar">
<img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1722601576/Header-seguro-moto_copia_ghguov.png" alt="" className='imgNotebookHogar'/>

<div className='containerHogar'>
<h1 className='h1Hogar'>SEGURO DE MOTO</h1>
  <h2 className='h2Hogar'>Viví una aventura sin límites. Cotizá y contratá  tu seguro online<br/> en un instante.</h2>
  <h3 className='h3Hogar'>En Yuju te ofrecemos protección que va a tu ritmo. Asegurá tu moto de <br/> forma fácil, rápida y a un precio justo.</h3>
   <div className='ButtonHeaderHogar'></div> 
   <Button text="Cotiza" url="https://wa.me/5491156307246" />
</div>



</header>
</>
  )
}
