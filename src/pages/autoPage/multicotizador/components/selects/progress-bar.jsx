import { Car, FileSpreadsheet } from "lucide-react"

export default function ProgressBar({ currentStep }) {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className={`progress-step ${currentStep >= 1 ? "active" : ""}`}>
          <div className="step-icon">
            <Car size={20} />
          </div>
          <span>Datos de tu auto</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${currentStep >= 2 ? "active" : ""}`}>
          <div className="step-icon">
            <FileSpreadsheet size={20} />
          </div>
          <span>Planes de auto</span>
        </div>
      </div>
    </div>
  )
}
