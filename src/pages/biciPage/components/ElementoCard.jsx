import "./elementoCard.css";

export const ElementoCard = ({title,features,buttonText,image}) => {

  const sendMessage = (title) => {
    const message = `Hola, quisiera información sobre el seguro de bicicletas.
  `;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };

  return (
    <>
    <div className="card-motos-wf2">
      <h3 className="card-title-motos-wf2">{title}</h3>
      <ul className="card-features-motos-wf2">
        {features.map((feature, index) => (
          <li key={index} className={`card-feature-motos-wf2 ${feature.available ? 'available' : 'unavailable'}`}>
            {feature.name}
            <span>
              {feature.available ? (
                <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/web_Icono-Check_q5uv6t.jpg" alt="Check" className="icon-check" />
              ) : (
                <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1729285283/web_Icono-cruz_l2nlrw.jpg" alt="Cruz" className="icon-cross" />
              )}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={ ()=> sendMessage(features.title)} className="card-button-motos-wf2">{buttonText}</button>
    </div>
  </>
  )
}
