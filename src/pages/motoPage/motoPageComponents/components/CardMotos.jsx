import { dataMotos } from "../../data/dataMotos"
import "./cardMotos.css"


export const CardMotos = () => {
  return (<>
    <h2 className="h2CardMotos">Conocé nuestras coberturas para tu moto </h2>
    <div className="card-container">
    {dataMotos.map((parrafo) => (
        <div className="divCardMotos" key={parrafo.id}>
            <h3 className="h3CardMotos">{parrafo.titulo}</h3>
            <ul className="ulCardMotos">
                {parrafo.parrafos.map((texto, index) => (
                    <li key={index} className={`liCardMotos ${texto.includes('.') ? 'yes' : 'no'}`}>
                        {texto}
                    </li>
                ))}
            </ul>
            <button onClick={() => window.location.href = "https://wa.me/5491156307246"} className="buttonCardMotos">Contratar</button>
        </div>
    ))}
</div>

<h4 className="h4CardMotos">*Las coberturas que te ofrecemos dependen de la compañía que elijas. Consultá las condiciones específicas de cada una antes de contratarla </h4>
</>
  )
}
