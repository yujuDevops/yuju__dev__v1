import { useState } from "react";

import "./headerAuto.css";
import { ModalComponent } from "./ModalComponent";

export const HeaderAuto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header-auto">
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1734616533/Header-Auto_b8y6kc.webp"
        alt=""
        className="imgPorDefectoMotos"
      />
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733696070/Header-Auto-tablet_1_kxc5zg.webp"
        alt=""
        className="imgRemplazoMotos"
      />
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733695978/Header-auto-celular_z1kbti.jpg"
        alt=""
        className="imgFotoCelular"
      />

      <div className="container-auto">
        <h1 className="h1-auto">SEGURO DE AUTO</h1>
        <h2 className="h2-auto">Cotizá, compará y ahorrá en tu seguro de auto.</h2>
        <h3 className="h3-auto">
          Tenemos las mejores coberturas pensadas para vos, para que puedas
          <br /> encontrar la que más se adapte a tu necesidad y a tu bolsillo.
        </h3>

        <div className="buttonPadreAutoBanner">

        <a href="http://autos.rus.com.ar/9254" target="_blank" rel="noopener noreferrer">
            <button className="buttonAutoHeader">Cotizá por tu cuenta</button>
          </a>

        
          <span className="separador">°</span>

          <div className="separador-container-Autos">
            <div className="linea"></div>
            <span className="separador-celular-Autos">°</span>
            <div className="linea"></div>
          </div>

         <a  target="_blank" rel="noopener noreferrer" >
          <button
            className="buttonAutoHeader buttonAutoHeader-asesor"
            onClick={() => setIsModalOpen(true)}>Pedí tu cotización</button>
          </a>

        </div>
      </div>

      {/* MODAL */}
      <ModalComponent isOpen={isModalOpen} vehiculo={"Auto"} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};
