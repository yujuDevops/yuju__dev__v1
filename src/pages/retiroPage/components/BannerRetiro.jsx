import "./bannerRetiro.css";

export const BannerRetiro = () => {
    return (
        <div >
        <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
      <img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
      <img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
        
        <h2 className="h2Banner-retiro">Vos elegís tu futuro <span className="spanBanner"> 
        Yuju te ayuda a planificar tu inversión, con el <br/>seguro que más se adapta a tu perfil, tus expectativas y tus ahorros.
        <br/>
        <strong>¿Querés saber más?</strong>
        </span>
       </h2>
        <div className="buttonRetiroBanner">
        <a href="
        https://wa.me/5491156307246">
        <button>Te asesoramos</button>
        </a>
        </div>
            </div>
      )
}
