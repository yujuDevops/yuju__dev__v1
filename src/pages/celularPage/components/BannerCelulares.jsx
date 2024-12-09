import "./bannerCelulares.css";

export const BannerCelulares = () => {
    return (
        <div >
       <img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />
        
        <h2 className="h2Banner">Tu celular lo tiene todo <span className="spanBanner"> 
        Yuju te brinda el seguro de celular más     <br/>
        completo y accesible. ¿Querés saber más?
        <br/>
      </span>
       </h2>
       <div className="buttonMotoBanner">
        <a href="">
        <button>Escribinos</button>
        </a>
        </div>
        </div>
      )
}
