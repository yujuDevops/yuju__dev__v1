import "./loadingScreen.css"

export default function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <div className="loading-content">
        <div className="loader"></div>
        <p className="loading-text">
          Aguardá unos momentos, estamos buscando las mejores cotizaciones para tu vehículo
        </p>
      </div>
    </div>
  )
}
