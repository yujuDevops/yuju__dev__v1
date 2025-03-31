import { dataCardPorqueYuju } from "../data";
import "./dataCardPorqueYuju.css";

export const DataCardPorqueYuju = () => {
  return (
    <>
      <h2 className="dataCardPorqueYuju__h2CardInfo">¿Por qué elegir Yuju?</h2>
      <div className="dataCardPorqueYuju__CardInfoContainer">
        {dataCardPorqueYuju.map((data) => {
          // creación de componente para las cards
          return (
            <div className="dataCardPorqueYuju__CardInfoCards" key={data.numero}>
              <img src={data.imagen} alt="" />
              <p className="dataCardPorqueYuju__pCardInfo">
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
          );
        })}
      </div>
    </>
  );
};
