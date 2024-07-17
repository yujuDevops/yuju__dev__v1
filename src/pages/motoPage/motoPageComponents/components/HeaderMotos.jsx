import fotoMotos from '../../../../assets/image/Header-seguro-moto.png'
import { Button } from '../../../../components/buttonHeader/Button'

import "../components/HeaderMotos.css"

export const HeaderMotos = () => {
  return (
   <>
   <header className='header-motos'>
  <img src={fotoMotos} alt="" />
  <div className='container-motos'>
  <h1 className='h1-motos'>SEGURO DE MOTO</h1>
  <h2 className='h2-motos'>Cotizá, compará y ahorrá en tu seguro de auto.</h2>
  <h3 className='h3-motos'>Tenemos las mejores coberturas pensadas para vos, para que<br/> puedas encontrar
     la que más se adapte a tu necesidad y a tu bolsillo.</h3>
    <Button className="ButtonHeaderMotos" text="Cotiza" url="https://wa.me/5491156307246"/>

  </div>

  </header>
   </>
  )
}
