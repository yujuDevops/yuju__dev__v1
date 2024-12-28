import "./headerSalud.css";

export const HeaderSalud = () => {
  return (
    <header className='header-salud'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217736/Header-salud_rccd8f.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617516/Header-salud_tinzzf.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1731327573/Header-salud-celular_jk9rsg.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-motos'>
    <h1 className='h1-motos'>SEGURO DE SALUD</h1>
    <h2 className='h2-motos'>Cuidá tu salud y la de tu familia con confianza y calidad.</h2>
    <h3 className='h3-motos'>Invertí en tu bienestar y el de los que amás. Contratá una cobertura que te <br/> acompañe en los momentos cruciales y disfrutá la vida con serenidad.</h3>
    <button className='buttonSaludHeader'><a href="#salud">Cotizá</a></button>
    </div>
    </header>
  )
}
