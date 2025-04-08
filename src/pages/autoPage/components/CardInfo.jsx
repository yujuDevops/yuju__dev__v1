import "./CardInfoAuto.css"
import { dataCardAutos } from "../data/dataCardAutos"

export const CardInfo = () => {
  return (
    <>
      <h2 className="h2-cardInfo-auto">Contratá tu seguro desde donde estés con Yuju</h2>
      <div className="CardInfoContainerCard__1-auto">
        {dataCardAutos.map((data) => {
          return (
            <a href="https://autos.rus.com.ar/cotizador/infoPatente/" target="_blank" key={data.numero}>
              <div className="CardInfoCards__1-auto">
                <div className="image-wrapper">
                  <img src={data.imagen || "/placeholder.svg"} alt="" className="default-image-rwe" />
                  <img src={data.imagen2 || "/placeholder.svg"} alt="" className="hover-image-wre" />
                </div>
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
            </a>
          )
        })}
      </div>
    </>
  )
}
