import  { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import data from '../../data.jason/Headers.json';
import "./HomePage.css"
import libra from '../../assets/image/Logo-San-Cristobal.png';



import logo1 from "./img/Home-comofunciona-1-azul.svg";
import logo2 from "./img/Home-comofunciona-2-azul.svg";
import logo3 from "./img/Home-comofunciona-3-azul.svg";
import logo4 from "./img/Home-comofunciona-4-azul.svg";

import logo1_hover from "./img/Home-comofunciona-1-verde.svg";
import logo2_hover from "./img/Home-comofunciona-2-verde.svg";
import logo3_hover from "./img/Home-comofunciona-3-verde.svg";
import logo4_hover from "./img/Home-comofunciona-4-verde.svg";


import inovacion from "./img/web_Icono-innovacion.svg";
import mision from "./img/web_Icono-mision.svg";
import objetivos from "./img/web_Icono-objetivos.svg";
import { Carrousel } from '../../components/carrousel/Carrousel';
import TestimonialCards from './componentsHome/TestimonialCards';
import EmailInput from './componentsHome/EmailInput';


const HomePage = ({ pageId }) => {
    const [headerData, setHeaderData] = useState(null);
  
    useEffect(() => {
      // Filtra el headerData basado en el pageId
      const header = data.headers.find(header => header.id === pageId);
      setHeaderData(header);
    }, [pageId]);

    
    return (
      <>
      <div className="HomePage">
        {headerData && (
          <Header
            imageSrc={headerData.imageSrc}
            title={headerData.title}
            subtitle={headerData.subtitle}
            tercerTitulo={headerData.tercerTitulo}
            options={headerData.options}
          />
        )}
      </div>
      <main>
      <div className="semisphere-container">
      <div className="semisphere"></div>
      <div className="content">
        {/* Aquí van los componentes que quieres mostrar encima */}

          {/* COMIENZAN LAS CARDS*/}
      
        <h2 className='h2__comp'>¿Cómo funciona?</h2>
        <div className='containerCard__1'>
        <div className='cards__1'>
        <img src={logo1} alt="" />
        <img src={logo1_hover} alt="" className='hover-image' />
          <p>Seleccioná tu seguro</p>
        </div>
        <div className='cards__1'>
        <img src={logo2} alt="" />
        <img src={logo2_hover} alt="" className='hover-image' />
        <p>Completá el cotizador
        o la ficha de consulta</p>
        </div>
        <div className='cards__1'>
        <img src={logo3} alt="" />
        <img src={logo3_hover} alt="" className='hover-image' />
        <p>Cargá tus datos de pago</p>
        </div>
        <div className='cards__1'>
        <img src={logo4} alt="" />
        <img src={logo4_hover} alt="" className='hover-image' />
        <p>Yuju! Ya estás asegurado</p>
        </div>
        </div>

        {/* TERMINAN LAS CARDS */}

      </div>
      <section className='containerCompañies'>
        <h3 className='h3__comp'>
        Trabajamos con
        </h3>
        <div className="image-grid">
      <img src={libra} alt="Imagen 1" className="grid-image" />
      <img src={libra} alt="Imagen 2" className="grid-image" />
      <img src={libra} alt="Imagen 3" className="grid-image" />
      <img src={libra} alt="Imagen 4" className="grid-image" />
      <img src={libra} alt="Imagen 5" className="grid-image" />
      <img src={libra} alt="Imagen 6" className="grid-image" />
      <img src={libra} alt="Imagen 7" className="grid-image" />
      <img src={libra} alt="Imagen 8" className="grid-image" />
      <img src={libra} alt="Imagen 9" className="grid-image" />
      <img src={libra} alt="Imagen 10" className="grid-image" />
      <img src={libra} alt="Imagen 11" className="grid-image" />
      <img src={libra} alt="Imagen 12" className="grid-image" />
      <img src={libra} alt="Imagen 13" className="grid-image" />
      <img src={libra} alt="Imagen 14" className="grid-image" />
      <img src={libra} alt="Imagen 15" className="grid-image" />
    </div>
      </section>
</div>
      </main>

      <div className='containerMarca'>
        <h3>Información de la marca</h3>
        <p>Somos una empresa <strong>joven, dinámica y comprometida</strong> con la <strong>innovación y la sostenibilidad.</strong> Nacimos de la mano de Nimbus Bróker de Seguros, una empresa con más de 15 años de experiencia y trayectoria en el sector.</p>
      </div>


      <div className="card-wrap">
      <div className="card-con">
        <div className="card-br">
          <div className="card-c">
            <img src={inovacion} alt="Visión icon" className="card-icon" />
            <h3 className="card-title">Visión</h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className="card-con">
        <div className="card-br">
          <div className="card-c">
            <img src={mision} alt="Misión icon" className="card-icon" />
            <h3 className="card-title">Misión</h3>
          </div>
        </div>
      </div>
      <div className="card-con">
        <div className="card-br">
          <div className="card-c">
            <img src={objetivos} alt="Objetivo icon" className="card-icon" />
            <h3 className="card-title">Objetivo</h3>
          </div>
        </div>
      </div>
    </div>

        <Carrousel/>
        
      <div className="background-semisphere"></div>
      <div className="content__shemispere">
        <TestimonialCards/>
      </div>
       
       <div className='containerNewsletter'>
        <h3 className='newsletter__h3'>¡Información y descuentos!</h3>
        <p className='newsletter__p'>¿Querés ser el primero en obtener ofertas? Recibí toda la información en tu casilla de mail, dejanos tu correo y nos contectaremos a la brevedad.</p>
        <div className="newsletter__input">
        <EmailInput />
        </div>
       </div>

       <div className="semisphere-container">
      <div className="semisphere"></div>
      <div className="content">

      </div>
      </div>

      </>
    );
  };
  
  export default HomePage;