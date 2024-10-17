import "./elementoCard.css"

export const ElementoCard = ({title,features,buttonText,image}) => {

  return (
    <>
    <div className="card-motos-wf2">
    <h3 className="card-title-motos-wf2">{title}</h3>
    <ul className="card-features-motos-wf2">
      {features.map((feature, index) => (
        <li key={index} className={`card-feature-motos-wf2 ${feature.available ? 'available' : 'unavailable'}`}>
          {feature.name} <span>{feature.available ? '✔️' : '❌'}</span>
          
        </li>
      
      ))}
    </ul>
    <button className="card-button-motos-wf2">{buttonText}</button>
    
  </div>
  </>
  )
}
