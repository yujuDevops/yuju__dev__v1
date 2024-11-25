import"./headerEmbarcaciones.css";


export const HeaderEmbarcaciones = () => {
  return (
    <header className='header-motos'>
    <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730742673/Header-seguro-embarcacion_hm8k6h.png" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730742673/Header-seguro-embarcacion_hm8k6h.png" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1730742678/Mobile-embarcaciones_xnsgsg.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-motos'>
    <h1 className='h1-motos'>SEGURO DE EMBARCACIÓN</h1>
    <h2 className='h2-motos'>Navegá sin límites. Cotizá y contratá online.</h2>
    <h3 className='h3-motos'>El mejor seguro náutico, para que puedas disfrutar de tu pasión por el<br/> agua con seguridad y tranquilidad. Podés contratarlo de forma rápida y<br/> sencilla desde tu celular.</h3>
    <button className='buttonVidaHeader'><a href="" target="_blank">Cotizá</a></button>
    </div>
  
    </header>
    
)
}
