import React from 'react'

export const HeaderViajero = () => {
  return (
    <header className='header-motos'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733315200/Header-seguro-moto_copia_6_xjj2iv.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733315200/Header-seguro-moto_copia_6_xjj2iv.png" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733315152/Mobile-asistencia-viajero_k8tebs.webp" alt="" className='imgFotoCelular'  />
    
    <div className='container-motos'>
    <h1 className='h1-motos'>SEGURO DE ASISTENCIA AL VIAJERO</h1>
    <h2 className='h2-motos'>Creá tu propia historia. Viajá con la seguridad de que estás protegido con Yuju.</h2>
    <h3 className='h3-motos'>Tenemos el plan que se adapta a vos y a tu tipo de viaje, con la cobertura más amplia y personalizada</h3>
    <button className='buttonVidaHeader'><a href="" target="_blank">Cotizá</a></button>
    </div>
  
    </header>
  )
}
