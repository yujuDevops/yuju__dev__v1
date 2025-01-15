import "./CardInfoAuto.css"
import { dataCardAutos } from "../data/dataCardAutos"



export const CardInfo = () => {


  return (
<>
<h2 className="h2-cardInfo-auto">Asegurarte es fácil, Yuju!</h2>
<div className='CardInfoContainerCard__1-auto'>
{dataCardAutos.map((data)=> {
// creacion de componente para las card
return(
    <div className='CardInfoCards__1-auto' key={data.numero}>
  <img src={data.imagen} alt="" />
    <h3 className="h3CardInfo-auto">{data.numero}.</h3>
    <p className="pCardInfo-auto">
              {data.isStrongFirst ? (
                <>
                  <strong>{data.tituloStrong}</strong> {data.tituloNormal}
                </>
              ) : (
                <>
                  {data.tituloNormal} <strong>{data.tituloStrong}</strong>
                </>
              )}
            </p>
  </div>
    
)

})}
</div>

</>


  )
}
