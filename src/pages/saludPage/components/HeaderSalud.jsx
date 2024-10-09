import "./headerSalud.css";

export const HeaderSalud = () => {
  return (
    <header className='header-motos'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728478472/Header-seguro-asistencia-viajera_y4avr1.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728478478/Mobile-salud_eegml2.jpg" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1728478478/Mobile-salud_eegml2.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-motos'>
    <h1 className='h1-motos'>SEGURO DE SALUD</h1>
    <h2 className='h2-motos'>Cuidá tu salud y la de tu familia con confianza y calidad.</h2>
    <h3 className='h3-motos'>Invertí en tu bienestar y el de los que amás. Contratá una cobertura que te <br/> acompañe en los momentos cruciales y disfrutá la vida con serenidad.</h3>
  
    </div>
    <button className="buttonHeaderSalud"> Cotiza   </button>
    </header>
  )
}
