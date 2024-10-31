import "./bannerIndustrial.css"

export const BannerIndustrial = () => {
    return (
        <div >
     <img className="imgBannerContratar" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727098691/Banner-contratar_c0rpti.jpg" alt="" />
    <img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727098772/Banner-CTA-tablet_mexl7b.jpg" alt="" />
    <img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727098799/Banner-contratar-celular_yrtb8i.jpg" alt="" />
    
    <h2 className="h2Banner">Hacé lo que amás sin miedo. Hacé lo que amás sin miedo. <span className="spanBanner">Yuju te asesora <br/>para que elijas el mejor seguro. Tenemos varias opciones de aseguradoras..</span>   
      <br/>
     ¿Querés saber mas?
    
    </h2>
    <div className="buttonMotoBanner">
      <a href="">
      <button>Te asesoramos</button>
      </a>
    </div>
        </div>
      )
}
