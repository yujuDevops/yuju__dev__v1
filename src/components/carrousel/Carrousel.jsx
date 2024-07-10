import { seguros } from "./DataCarrousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cardCarrousel/CardCarrousel.css"
import "./Carrousel.css"



export const Carrousel = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (

    <>
        <Slider {...settings}>
       {seguros.map((even)=> {

        return (
            <div className="ContenedorPadreCard">
            <div className="card">
            <div className="card-content">
              <h2> {even.titulo} </h2>
              <img src={even.foto} alt="" className="card-image" />
            </div>
            <a href={even.href} className="card-button">
              <button>{even.boton}</button>
            </a>
            </div>
            </div>
        )
       }
    )}
    </Slider>
    </>
  )
}
