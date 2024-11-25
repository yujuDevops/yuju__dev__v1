import  { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import data from '../../data.jason/Headers.json';
import { Carrousel } from '../../components/carrousel/Carrousel';
import TestimonialCards from './componentsHome/TestimonialCards';
import EmailInput from './componentsHome/EmailInput';
import CardComponent from './componentsHome/CardComponent';
import FormComponent from "./componentsHome/FormComponent";
import "./HomePage.css";
import CardMobile from './componentsHome/CardMobile';



export const HomePage = ({ pageId }) => {
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
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987979/Home-comofunciona-1-azul_iroyga.svg" alt="" />
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987979/Home-comofunciona-1-verde_why77p.svg" alt="" className='hover-image' />
          <p>Seleccioná tu seguro</p>
        </div>
        <div className='cards__1'>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987981/Home-comofunciona-2-azul_sjq8fd.svg" alt="" />
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987980/Home-comofunciona-2-verde_cua3q1.svg" alt="" className='hover-image' />
        <p>Completá el cotizador
        o la ficha de consulta</p>
        </div>
        <div className='cards__1'>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987979/Home-comofunciona-3-azul_r79yun.svg" alt="" />
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987981/Home-comofunciona-3-verde_bnwqfc.svg" alt="" className='hover-image' />
        <p>Cargá tus datos de pago</p>
        </div>
        <div className='cards__1'>
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987979/Home-comofunciona-4-azul_t0ftvr.svg" alt="" />
        <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722987979/Home-comofunciona-4-verde_bgt8ug.svg" alt="" className='hover-image' />
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
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/RUS_mqiqvz.png" alt="Imagen 1" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/SANCRISTOBAL_kazpdd.png" alt="Imagen 2" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988247/FEDPA_eq1khi.png" alt="Imagen 3" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988245/EXPERTA_n9hhnn.png" alt="Imagen 4" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988250/MERCANTIL_x2mdnw.png" alt="Imagen 5" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988250/MAPFRE_bxhq37.png" alt="Imagen 6" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988249/INTEGRITY_gjydc4.png" alt="Imagen 7" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988244/ATM_frtz71.png" alt="Imagen 8" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988244/ASOCIART_gsnalp.png" alt="Imagen 9" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988248/HDI_iadq0b.png" alt="Imagen 10" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988249/LIBRA_dg0lfz.png" alt="Imagen 11" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988251/PARANA-color-2_wgtwqb.png" alt="Imagen 12" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988251/OMINT_kh1gb7.png" alt="Imagen 13" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988564/Zurich_yiy98n.png" alt="Imagen 14" className="grid-image" />
      <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988253/SANPATRICIO-color-2_ta1ozc.png" alt="Imagen 15" className="grid-image" />
    </div>
      </section>
</div>
      </main>


      <Carrousel/>



      <div className='containerMarca'>
        <h3>Información de la marca</h3>
        <p>Somos una empresa <strong>joven, dinámica y comprometida</strong> con la <strong>innovación y la sostenibilidad.</strong> Nacimos de la mano de Nimbus Bróker de Seguros, una empresa con más de 15 años de experiencia y trayectoria en el sector.</p>
      </div>


      {/* Notebook y pc */}
        <CardComponent/> 
        {/* MOBILE */}
        <CardMobile/>
        
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

       <div className="semisphere-container-two">
      <div className="semisphere-two"></div>
      <div className="content">
      <div className='container__form__p'><p>Contacto</p></div>
      <FormComponent></FormComponent>
      </div>
      </div>

      </>
    );
  };
  
 