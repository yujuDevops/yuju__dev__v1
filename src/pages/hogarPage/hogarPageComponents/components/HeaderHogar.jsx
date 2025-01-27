import { useEffect } from "react";
import "./headerHogar.css";
import { mensajeWspHogar } from "../../data/mensajeWspHogar";

export const HeaderHogar = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./headerHogar.css";
    link.type = "text/css";
    link.id = "headerHogarStyles";
    
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <header className="headerHogar">
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217736/Header-Hogar_xgfepx.webp"
        alt=""
        className="imgNotebookHogar"
      />
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1732470995/Header-Hogar-tablet_reaw4w.webp"
        alt=""
        className="imgRemplazoMotos"
      />
      <img
        src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1730391155/Header-hogar-celular_ld6obv.jpg"
        alt=""
        className="imgFotoCelular"
      />
      <div className="containerHogar">
        <h1 className="h1Hogar">SEGURO DE HOGAR</h1>
        <h2 className="h2Hogar">
          Cuidá tu hogar con Yuju, el seguro que se adapta a vos.
        </h2>
        <h3 className="h3Hogar">
          Protegé el lugar donde creás tus mejores momentos. Contratá online un
          seguro flexible y a tu medida en minutos. Elegí tu plan y viví
          tranquilo.
        </h3>

        <a target="_blank" rel="noopener noreferrer">
          <button className="buttonHogarHeader" onClick={() => mensajeWspHogar()}>Cotizá</button>
        </a>
      </div>
    </header>
  );
};