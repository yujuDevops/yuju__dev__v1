import { useState } from 'react';
import "./planesHogar.css";
import { planData } from '../../data/plandata';
import { CardHogar } from './CardHogar';

export const PlanesHogar = () => {

  const [plan, setPlan] = useState('plan1');

  const handleImageClick = (selectedPlan) => {
    setPlan(selectedPlan);
  };

  return (
    <div>
      <div className='tituloHogar'>
        <h1 className='h1TituloHogar'>Conocé nuestras coberturas para tu hogar</h1>
      </div>

      <div className='divPadreHogar'>
        <div className="imagesHogar">
          <img 
            className='imgHogar'
            tabIndex="0"
            src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1721840071/RUS_wfx021.png" 
            alt="RUS"
            onClick={() => handleImageClick('plan1')}
            style={{
              cursor: 'pointer',
              filter: plan === 'plan1' ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.3s ease'
            }}
          />

          <img 
            className='imgHogar'
            tabIndex="0"
            src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1721840134/SANCRISTOBAL_cfn89k.png" 
            alt="San Cristobal"
            onClick={() => handleImageClick('plan2')}
            style={{
              cursor: 'pointer',
              filter: plan === 'plan2' ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.3s ease'
            }}
          />
        </div>
        <CardHogar plan={plan} planData={planData} />
      </div>
    </div>
  );
};
