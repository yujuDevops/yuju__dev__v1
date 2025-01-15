import { MensajeWspEmbarcaciones } from "../data/MensajeWspEmbarcaciones"
import "./elementoCardEmbarcaciones.css"

export const ElementoCardEmbarcaciones = ({title,features,buttonText}) => {
  return (
    <>
    <div className="card-embarcacion-wf2">
      <h3 className="card-title-embarcacion-wf2">{title}</h3>
      <ul className="card-features-embarcacion-wf2">
        {features.map((feature, index) => (
          <li key={index} className={`card-feature-embarcacion-wf2 ${feature.available ? 'available' : 'unavailable'}`}>
           
            <span>
              {feature.available ? (
                <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/web_Icono-Check_q5uv6t.jpg" alt="Check" className="icon-check" />
              ) : (
                <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1729285283/web_Icono-cruz_l2nlrw.jpg" alt="Cruz" className="icon-cross" />
              )}
               {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={()=> MensajeWspEmbarcaciones("seguro de embarcación") } className="card-button-embarcacion-wf2">{buttonText}</button>
    </div>
  </>
  )
}
