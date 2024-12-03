import "./headerNotebook.css";

export const HeaderNotebook = () => {
  return (
    <header className='header-notebook'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1731509101/Header-seguro-notebook_bnezri.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733262320/Header-notebook-tablet_ekghk7.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733242703/Header-notebook-celular_xqiyp9.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-notebook'>
    <h1 className='h1-notebook'>SEGURO DE NOTEBOOK</h1>
    <h2 className='h2-notebook'>Asegurá tu notebook desde donde estés. Encontrá el plan que más se adapte a vos.</h2>
    <h3 className='h3-notebook'>Disfrutá haciendo, aprendiendo y creando. Tenemos el mejor seguro para tu notebook, <br/>para que la disfrutes con tranquilidad. Contratalo hoy, 100% online</h3>
    <button className='buttonVidaHeader'><a href="" target="_blank">Cotizá</a></button>
    </div>
  
    </header>
  )
}
