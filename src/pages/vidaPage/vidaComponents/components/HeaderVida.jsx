import "./HeaderVida.css";

export const HeaderVida = () => {

  const sendMessage = (title) => {
    const message = `Hola, quisiera información sobre el seguro de  ${title}.`;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };


  return (
    <>
    <header className='header-vida'>
   <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217738/Header-vida_ak4b2b.webp" alt=""  className='imgPorDefectoMotos' />
   <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617527/Header-vida_ifobwe.webp" alt="" className='imgRemplazoMotos'  />
   <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730379057/Header-vida-celular_f5eaap.jpg" alt="" className='imgFotoCelular'  />
   
   <div className='container-vida'>
   <h1 className='h1-vida'>SEGURO DE VIDA</h1>
   <h2 className='h2-vida'>Cuidá a los que más querés. Asegurá tu futuro y el de <br/> tu familia con el mejor seguro de vida.</h2>
   <h3 className='h3-vida'>Construí un futuro seguro para vos y tu familia. Elegí la cobertura que se <br/> ajuste a tu vida y disfrutá el presente con tranquilidad.</h3>
   <button onClick={()=> sendMessage("vida")} className='buttonVidaHeader'><a>Cotizá</a></button>
   </div>
 
   </header>
    </>
  )
}
