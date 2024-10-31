import { dataIndustrial } from "../data"
import "./industrialInfo.css"
export const IndustrialInfo = () => {
    return (
        <div className="industrial-container">
          {dataIndustrial.map((item) => (
            <div key={item.id} className="industrial-card">
              <img src={item.icon} alt={item.title} className="industrial-icon" />
              <h3 className="industrial-title">{item.title}</h3>
              <p className="industrial-description">{item.description}</p>
            </div>
          ))}
        </div>
      );
}
