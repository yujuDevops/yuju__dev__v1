import { dataCardBici } from "../data";
import "./DataBiciCard.css";

export const DataBiciCard = () => {
  return (
    <>

    <h2 className="h2-cardInfo-bici">Asegurarte es fácil, Yuju!</h2>
    <div className='CardInfoContainerCard__1-bici'>
    {dataCardBici.map((data)=> {
    // creacion de componente para las card
    return(
        <div className='CardInfoCards__1-bici' key={data.numero}>
      <img src={data.imagen} alt="" />
        <h3 className="h3CardInfo-bici" >{data.numero}.</h3>
        <p className="pCardInfo-bici">
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
