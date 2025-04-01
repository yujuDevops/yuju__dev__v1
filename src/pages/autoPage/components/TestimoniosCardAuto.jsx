import corazon from "../../homepage/img/web_corazon.svg"
import "./testimonioCardAuto.css"

const testimonials = [
    
  { name:"Ruben Albarenque",
    date: "13/12/2024",
    text: "La capacidad para gestionar y resolver siniestros asegurados es destacable, demostrando, rapidez y compromiso en cada caso. Una empresa altamente recomendable para quienes buscan confianza y una atención personalizada.",
  },
  {
    name: "Yanina Burne",
    date: "14/11/2024",
    text: "Muy recomendable, me brindaron seguridad y tranquilidad; destacada atención al cliente, su equipo de profesionales me asesoraron y resolvieron todas las inquietudes muy eficientemente",
  },
  {
    name: "Leo Huck",
    date: "10/01/2025",
    text: "Excelente atencion de todo el equipo! No sabía nada de seguros y me brindaron todo el servicio que necesitaba para asegurar mi negocio, auto y familia.",
  },
  {
    name: "Matías Delsart",
    date: "13/03/2025",
    text: "Asegure mis vehículos y brindan buena atención, transparencia y claridad a la hora de explicar. Además de contar con muy buenas propuestas que se adaptan a la economía de uno.",
  },
];


const lazyCards = document.querySelectorAll(".lazy-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); // Deja de observar la tarjeta después de hacerla visible
    }
  });
});

lazyCards.forEach((card) => observer.observe(card));

export const TestimonialCardAuto = () => {
  return (
    <div className="testimoniosCardAuto">
    <div className="testimonial-cards lazy-card">
      <h2 className="h2AutosTestimonios">Opiniones de nuestros clientes</h2>
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
    </div>
  );
};



