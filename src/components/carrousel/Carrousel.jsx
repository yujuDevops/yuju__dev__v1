import { useEffect } from "react";
import { seguros } from "./DataCarrousel";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardCarrousel/CardCarrousel.css";
import "./Carrousel.css";

export const Carrousel = ({ Name }) => {
  useEffect(() => {
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

    return () => observer.disconnect(); // Limpia el observer al desmontar el componente
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
    ],
  };

  // Hook para desplazarse al inicio de la página cuando el componente se monta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider {...settings} className="lazy-card">
        {seguros.map((e) => {
         
          if (e.titulo === Name) {
            return null; 
          }

         
          return (
            <div className="ContenedorPadreCard" key={e.titulo || e.id}>
              <div className="card">
                <div className="card-content">
                  <h2>{e.titulo}</h2>
                  <img src={e.foto} alt={e.titulo} className="card-image" />
                </div>
                <Link to={e.href} className="card-button">
                  <button>{e.boton}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Carrousel;