import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import data from '../../data.jason/Headers.json';
import logo from '/Users/nimbu/yuju__dev__v1/src/assets/image/logoYujuAzul.png';
import "./HomePage.css"




import libra from '/Users/nimbu/yuju__dev__v1/src/assets/image/Libra-bn.png';

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
        <h2 className='h2__comp'>¿Cómo funciona?</h2>
        <div className='containerCard__1'>
        <div className='cards__1'>
          <img src={logo} alt="" />
          <p>Seleccioná tu seguro</p>
        </div>
        <div className='cards__1'>
        <img src={logo} alt="" />
        <p>Completá el cotizador
        o la ficha de consulta</p>
        </div>
        <div className='cards__1'>
        <img src={logo} alt="" />
        <p>Cargá tus datos de pago</p>
        </div>
        <div className='cards__1'>
        <img src={logo} alt="" />
        <p>Yuju! Ya estás asegurado</p>
        </div>
        </div>
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
      </>
    );
  };
  
  export default HomePage;