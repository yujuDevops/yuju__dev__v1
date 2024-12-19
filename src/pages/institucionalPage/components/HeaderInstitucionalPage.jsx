import "./HeaderInstitucionalPage.css";

export const HeaderInstitucionalPage = () => {
  return (
    <header className='header-institucional'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733233267/Header-nosotros-quienes-somos_oiiu0e.jpg" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617472/Header-industria_1_zt37od.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734105845/Header-instit-celular_s40xzz.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-institucional'>
    <h1 className='h1-institucional'>SOMOS YUJU</h1>

    <h3 className='h3-institucional'>Somos una empresa joven, dinámica y comprometida con la innovación y la sostenibilidad. <br/>Nacimos de la mano de Nimbus Bróker de Seguros, una empresa con más de 15 años <br/> de experiencia y trayectoria en el sector.</h3>
    
    </div>
  
    </header>
  )
}
