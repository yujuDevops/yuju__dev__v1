import { cardsDataAccidentesPersonales, MensajeWsp } from "../data"
import "./cardsAccidentesPersonales.css"

export const CardsAccidentesPersonales = () => {
  return (
    <>
    <h2 className="h2CardAp">Conocé nuestras coberturas</h2>
    <div className="insurance-cards-ap">
      {cardsDataAccidentesPersonales.map((card, index) => (
        <div className="card-ap" key={index}>
           <img src={card.imageUrl} alt={card.title} className="card-image" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <button onClick={()=> MensajeWsp(card.title) }> Contratar</button>
        </div>
      ))}
    </div>
    </>
  )
}
