import { useState } from 'react';
import "./planesHogar.css";
import { planData } from '../../data/plandata';
import { CardHogar } from './CardHogar';

export const PlanesHogar = () => {

  const [plan, setPlan] = useState('plan1');



  return (
    <div>
      <div className='tituloHogar'>
        <h1 className='h1TituloHogar'>Conocé nuestras coberturas para tu hogar</h1>
      </div>

      <div className='divPadreHogar'>
        <div className="imagesHogar">
         </div>
        <CardHogar plan={plan} planData={planData} />
      </div>
    </div>
  );
};
