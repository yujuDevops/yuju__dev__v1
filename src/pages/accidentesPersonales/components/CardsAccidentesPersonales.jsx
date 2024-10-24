import { cardsDataAccidentesPersonales } from "../data"
import "./cardsAccidentesPersonales.css"

export const CardsAccidentesPersonales = () => {
  return (
    <div className="insurance-cards">
      {cardsDataAccidentesPersonales.map((card, index) => (
        <div className="card" key={index}>
           <img src={card.imageUrl} alt={card.title} className="card-image" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <button>Contratar</button>
        </div>
      ))}
    </div>
  )
}
