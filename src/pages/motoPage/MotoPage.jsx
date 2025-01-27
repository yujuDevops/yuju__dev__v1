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
<<<<<<< HEAD
import usePrecios from '../../components/hooks/usePrecios';
=======
import { MensajeWspMoto } from "./data";


>>>>>>> 7a899d52a36afbc7823ccf4c6c7d3b25da62e3a3

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

<<<<<<< HEAD
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
=======
<CotizaAhora 
 titulo="Seguro de motos"
 precio="Desde $4.000/mes"
 button="¡Cotizá ahora!"
 src={fotoMoto}
 MensajeWsp={MensajeWspMoto}
/>


<CardMotos />
<BannerSeguros/>
<CardInfo/>
<BannerContratar/>
<ImgEmpresas/>
<AcordeonMotos/>
<div id="carrousel">
<Carrousel Name="Motos" /> 
</div>
</div>
</div>

  </>
  )
}
>>>>>>> 7a899d52a36afbc7823ccf4c6c7d3b25da62e3a3

export default MotoPage;