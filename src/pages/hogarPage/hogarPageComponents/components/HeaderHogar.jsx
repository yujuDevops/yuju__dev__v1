import { Button } from "../../../../components/buttonHeader/Button"
import "./headerHogar.css"

export const HeaderHogar = () => {
  return (
<>
<header className="headerHogar">
<img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1722601576/Header-seguro-moto_copia_ghguov.png" alt="" className='imgNotebookHogar'/>

<div className='containerHogar'>
<h1 className='h1Hogar'>SEGURO DE HOGAR</h1>
  <h2 className='h2Hogar'>Cuidá tu hogar con Yuju, el seguro que se adapta a vos.</h2>
  <h3 className='h3Hogar'>Protegé el lugar donde creás tus mejores momentos. Contratá online un seguro flexible y a tu medida en minutos. Elegí tu plan y viví tranquilo.</h3>
   <div className='ButtonHeaderHogar'></div> 
   <Button text="Cotiza" url="https://wa.me/5491156307246" />
</div>



</header>
</>
  )
}
