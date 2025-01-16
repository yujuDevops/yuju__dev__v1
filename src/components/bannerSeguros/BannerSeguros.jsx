
import './BannerSeguros.css';

const BannerSeguros = () => {
  return (
    <div className="bannerContrataSegurosPadre">
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735236287/Banner_cta_seguros_wb7dgm.jpg"
        alt="Banner"
        className="bannerImage"
      />
      <a href="#carrousel" className="buttonWrapper">
        <button className="buttonContrataBannerSeguros">
          Cotizá otros seguros
        </button>
      </a>
    </div>
  );
};

export default BannerSeguros;