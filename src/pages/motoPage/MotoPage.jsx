import "./MotoPage.css";
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora";
import {
  HeaderMotos,
  CardMotos,
  CardInfo,
  BannerContratar,
  ImgEmpresas,
  AcordeonMotos,
} from "./motoPageComponents";
import fotoMoto from "../../assets/image/Moto.png";
import { Carrousel } from "../../components/carrousel/Carrousel";
import BannerSeguros from "../../components/bannerSeguros/BannerSeguros";
import usePrecios from '../../components/hooks/usePrecios';

export const MotoPage = () => {
  const { precio, error } = usePrecios('moto');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioMoto = precio !== null ? `Desde $${precio}/mes` : "Cargando...";

  return (
    <>
      <div className="semisphere-container-moto">
        <div className="semisphere-moto"></div>
        <div className="content-moto">
          <HeaderMotos />

          <CotizaAhora
            titulo="Seguro de motos"
            precio={precioMoto}
            button="¡Cotizá ahora!"
            src={fotoMoto}
          />

          <CardMotos />
          <BannerSeguros />
          <CardInfo />
          <BannerContratar />
          <ImgEmpresas />
          <AcordeonMotos />
          <div id="carrousel">
            <Carrousel Name="Motos" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MotoPage;