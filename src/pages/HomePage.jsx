import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import data from '../data.jason/Headers.json';

const HomePage = ({ pageId }) => {
    const [headerData, setHeaderData] = useState(null);
  
    useEffect(() => {
      // Filtra el headerData basado en el pageId
      const header = data.headers.find(header => header.id === pageId);
      setHeaderData(header);
    }, [pageId]);
  
    return (
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
    );
  };
  
  export default HomePage;