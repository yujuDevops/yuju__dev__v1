import "./dataViajeros.css";
import { dataViajeros } from "../data/dataViajeros"


export const DataViajeros = () => {
    return (
        <>
    
        <h2 className="h2-cardInfo_viajes">Asegurarte es fácil, Yuju!</h2>
        <div className='CardInfoContainerCard__1_viajes'>
        {dataViajeros.map((data)=> {
        // creacion de componente para las card
        return(
            <div className='CardInfoCards__1_viajes' key={data.numero}>
          <img src={data.imagen} alt="" />
            <h3 className="h3CardInfo_viajes" >{data.numero}.</h3>
            <p className="pCardInfo-bici_viajes">
              {data.isStrongFirst ? (
                <>
                  <strong>{data.tituloStrong}</strong> {data.tituloNormal}
                </>
              ) : (
                <>
                  <strong>{data.tituloNormal}</strong> {data.tituloStrong}
                </>
              )}
            </p>
          </div>
            
        )
        
        })}
        </div>
        
        </>
      )}
