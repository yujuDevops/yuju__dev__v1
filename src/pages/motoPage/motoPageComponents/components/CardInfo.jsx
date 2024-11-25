import "./cardInfo.css"
import { dataCardMotos } from "../../../../data.jason/dataCardMotos"



export const CardInfo = () => {
  return (
<>
<h2 className="h2-cardInfo">Asegurarte es fácil, Yuju!</h2>
<div className='CardInfoContainerCard__1'>
{dataCardMotos.map((data)=> {
// creacion de componente para las card
return(
    <div className='CardInfoCards__1' key={data.numero}>
  <img src={data.imagen} alt="" />
    <h3 className="h3CardInfo">{data.numero}.</h3>
    <p className="pCardInfo">
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
