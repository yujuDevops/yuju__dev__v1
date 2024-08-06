import React from 'react'
import { HeaderHogar } from './hogarPageComponents/HeaderHogar'
import { CotizaAhora } from '../../components/cotizaAhora/CotizaAhora'

const HogarPage = () => {
  return (
    <>
    <HeaderHogar/>
    <CotizaAhora
     titulo="Seguro de Hogar"
     presio="Desde $2.850/mes"
     button="¡Cotizá ahora!"
     src={"https://res.cloudinary.com/dkk8nbi3b/image/upload/v1722606893/Hogar_t9ylef.png"}
     
    />
    </>
  )
}

export default HogarPage