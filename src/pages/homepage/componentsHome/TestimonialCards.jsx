import './TestimonialCards.css';
import corazon from "../img/web_corazon.svg"

const testimonials = [
  {
    name: "Lucía López",
    date: "03/01/2024",
    text: "Estoy muy contenta con el servicio de Yuju seguros. La atención de Malena fue excelente. Los recomiendo 100%",
  },
  {
    name: "Martín Fernández",
    date: "21/12/2023",
    text: "Muy satisfecho con el servicio. Me ofrecieron el mejor precio y cobertura para mi seguro. Los recomiendo.",
  },
  {
    name: "Pablo Rodríguez",
    date: "19/02/2024",
    text: "Me atendieron super rápido y pude contratar de forma sencilla. Me explicaron todo con claridad y con paciencia.",
  },
  {
    name: "Laura González",
    date: "13/03/2024",
    text: "Me está asesorando Malena. Una genia! me atendió de forma impecable y me dio el mejor precio.",
  },
];

const TestimonialCards = () => {
  return (
    <div className="testimonial-cards">
      <h2>Opiniones de nuestros clientes</h2>
      <div className="cards_test_container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card__test">
            <div><img className="icon__heart" src={corazon} alt="" /></div>
            <h3>{testimonial.name}</h3>
            <p className="date__test">{testimonial.date}</p>
            <span className='text__test'>{testimonial.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;
