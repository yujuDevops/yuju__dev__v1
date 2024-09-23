import "./elementoCard.css"

export const ElementoCard = ({title,features,buttonText}) => {

  return (
    <div className="card">
    <h3 className="card-title">{title}</h3>
    <ul className="card-features">
      {features.map((feature, index) => (
        <li key={index} className={`card-feature ${feature.available ? 'available' : 'unavailable'}`}>
          {feature.name} <span>{feature.available ? '✔️' : '❌'}</span>
        </li>
      ))}
    </ul>
    <button className="card-button">{buttonText}</button>
  </div>
  )
}
