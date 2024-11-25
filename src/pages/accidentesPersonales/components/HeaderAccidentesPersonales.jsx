import "./headerAccidentesPersonales.css"

export const HeaderAccidentesPersonales = () => {
  return (
    <header className='header-accidentespersonales'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1729690032/Header-seguro-accidente-personal_1_xxr4ak.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732482252/Header-salud-tablet_p5zlsc.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732537509/Header-ap-celular_1_umoxaf.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-accidentespersonales'>
    <h1 className='h1-accidentespersonales'>SEGURO DE ACCIDENTES PERSONALES</h1>
    <h2 className='h2-accidentespersonales'>Para los que trabajan de forma independiente, la mejor <br/> protección.</h2>
    <h3 className='h3-accidentespersonales'>Contratá el seguro de accidentes personales por el tiempo que quieras. <br/>Te asesoramos para que elijas la opción que más te convenga.</h3>
    <button className='buttonMotosHeader'><a href="">Cotizá</a></button>
    </div>
  
    </header>
  )
}
