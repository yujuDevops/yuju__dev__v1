import "./AutoPage.css";
import { AcordeonAuto, CoberturasAuto, HeaderAuto, ImgEmpresasAuto } from "./components";
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora";
import { CardInfo } from "./components/CardInfo";
import { BannerContratar } from "../autoPage/components/BannerContratar";
import { Carrousel } from "../../components/carrousel/Carrousel";
import usePrecios from '../../components/hooks/usePrecios';

export const AutoPage = () => {
  const { precio, error } = usePrecios('auto');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando...";

  return (
    <>
      <HeaderAuto />
      <CotizaAhora
        titulo="Seguro de autos"
        precio={precioCotiza}
        button="¡Cotizá ahora!"
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735570892/Auto_ilustracion_kcgsoh.svg"
      />
      <CoberturasAuto />
      <CardInfo />
      <BannerContratar />
      <ImgEmpresasAuto />
      <AcordeonAuto />
      <Carrousel Name="Auto" />
    </>
  );
};

export default AutoPage;