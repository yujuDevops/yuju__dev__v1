import "./bannerHogarPage.css"

const sendMessage = () => {
  const message = `Hola, quisiera información sobre el seguro de hogar.
`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};

export const BannerHogarPage = () => {
  return (
    <div className="bannerContratarPadre" >
<img className="imgBannerContratar" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732311846/Banner-contratar_3000px_hwmgk5.png" alt="" />
<img className="imgBannerMotosTablet" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732293710/Banner-CTA-NOTEBOOK_l1xj8j.svg" alt="" />
<img className="imgBannerMotosCelular" src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732294859/Banner-contacto-celular_rge8dd.svg" alt="" />


<h2 className="h2Banner-hogar">No hay nada mejor que casa. <span className="spanBanner">Te asesoramos para que encuentres  <br/>el seguro de hogar que te da la tranquilidad que buscás.</span> 
<br/>

<br />¿Querés proteger tu hogar?

</h2>
<div className="buttonbiciBanner">
  <a onClick={sendMessage}>
  <button>Escribinos</button>
  </a>
</div>

    </div>
  )
}
