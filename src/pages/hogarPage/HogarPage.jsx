import React, { lazy, Suspense } from 'react';
import "./HogarPage.css";
import { Carrousel } from "../../components/carrousel/Carrousel";
import { CotizaAhora } from "../../components/cotizaAhora/CotizaAhora";
import { AcordeonHogar, PlanesHogar, ImgHogar, HeaderHogar, BannerHogarPage } from "./hogarPageComponents";
import { mensajeWspHogar } from "./data/mensajeWspHogar";
import usePrecios from "../../components/hooks/usePrecios";

// Lazy load del componente
const BannerSeguros = lazy(() => import("../../components/bannerSeguros/BannerSeguros"));

export const HogarPage = () => {
  const { precio, error } = usePrecios('hogar');

  if (error) {
    return <div>Error: {error}</div>;
  }

  const precioCotiza = precio !== null ? `Desde $${precio}/mes` : "Cargando..";

  return (
    <>
      <div className="semisphere-container-hogar">
        <div className="semisphere-hogar"></div>
        <div className="semisphere-hogar2"></div>
        <div className="content-hogar">
          <HeaderHogar/>
          <CotizaAhora 
            titulo="Seguro de hogar"
            precio={precioCotiza}
            button="¡Cotizá ahora!"
            src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1722606893/Hogar_t9ylef.png"
            MensajeWsp={mensajeWspHogar}
          />
          <PlanesHogar/>
          <BannerHogarPage/>
          <ImgHogar/>
          <Suspense fallback={<div>Cargando banner...</div>}>
            <BannerSeguros/>   
          </Suspense>
          <AcordeonHogar/>
          <div id="carrousel">
            <Carrousel Name="Hogar"/>
          </div>
        </div>
      </div>
    </>
  )
}