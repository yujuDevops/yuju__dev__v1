import  { useState } from 'react';
import "./planesHogar.css"
import { planData } from '../../data/plandata';
import { CardHogar } from './CardHogar';


export const PlanesHogar = () => {

  const [plan, setPlan] = useState('plan1');

  const handleImageClick = (plan) => {
    setPlan(plan);
  };


  return (
    <div className='divPadreHogar' >
      <div className="imagesHogar">
        <img 
          className='imgHogar'
          src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1721840071/RUS_wfx021.png" 
          alt="RUS"
          onClick={() => handleImageClick('plan1')}
          style={{ cursor: 'pointer' }}
        />

        <img 
          className='imgHogar'
          src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1721840134/SANCRISTOBAL_cfn89k.png" 
          alt="San Cristobal"
          onClick={() => handleImageClick('plan2')}
          style={{ cursor: 'pointer' }}
        />
        
      </div>
      <CardHogar plan={plan} planData={planData} />
      
    </div>
  );
};

