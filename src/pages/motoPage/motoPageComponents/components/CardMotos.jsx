import { dataMotos } from "../../data/dataMotos"
import "./cardMotos.css"
export const CardMotos = () => {
  return (
    <div className="card-container">
    {dataMotos.map((parrafo) => (
        <div className="divCardMotos" key={parrafo.id}>
            <h2 className="h2CardMotos">{parrafo.titulo}</h2>
            <ul className="ulCardMotos">
                {parrafo.parrafos.map((texto, index) => (
                    <li key={index} className={`liCardMotos ${texto.includes('.') ? 'yes' : 'no'}`}>
                        {texto}
                    </li>
                ))}
            </ul>
            <button className="buttonCardMotos">Contratar</button>
        </div>
    ))}
</div>
  )
}
