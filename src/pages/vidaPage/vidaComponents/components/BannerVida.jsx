import { Button } from "../../../../components/buttonHeader/Button"



export const BannerVida = () => {
  return (
  
        <div >
    <img className="imgBannerContratar" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727098691/Banner-contratar_c0rpti.jpg" alt="" />
    <img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727098772/Banner-CTA-tablet_mexl7b.jpg" alt="" />
    <img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1727098799/Banner-contratar-celular_yrtb8i.jpg" alt="" />
    
    <h2 className="h2Banner">Dejá tu huella. Asegurá el bienestar de tu familia.<br/><span className="spanBanner" > Yuju te asesora para que elijas el seguro de vida que más te conviene.</span>
    <br/>
    <br/>
    <span className="spanBanner">  ¿Querés saber más?</span>
    
    </h2>
    <div className="vidBanner">
    <Button className="buttonBannerContratar" text="Te asesoramos" url="https://wa.me/5491156307246"/>
    </div>
        </div>
  )
}