import React from 'react'

import { dataAcordeonConsola } from '../data'
import { AcordeonCompConsola } from './AcordeonCompConsola'


export const AcordeonConsola = () => {
    return (
        <div className="padreDiv-acc">
        <h2 className="h2Acordeon-acc">¿Tenés dudas sobre el seguro para bicicleta?</h2>
        <h3 className="h3Acordeon-acc">En Yuju Seguros nos gusta que estés bien informado, por eso te dejamos algunas respuestas a las preguntas más frecuentes:</h3>
        
        {dataAcordeonConsola.map((resp)=> {
                return(
                  <div className="divAcordeonComp" key={resp.id}>
                  < AcordeonCompConsola id={resp.id} title = {resp.title} content = {resp.subtitle} />
                
                  </div>
                )})}
        
        
        
            </div>
      )
}
