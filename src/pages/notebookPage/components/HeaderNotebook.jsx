import { MensajeWspNotebook } from "../data/MensajeWspNotebook";
import "./headerNotebook.css";


const sendMessage = () => {
  const message = `Hola, me gustaría saber más sobre el seguro para notebook.`;
  const phoneNumber = "5491156307246"; // Número de WhatsApp
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};

export const HeaderNotebook = () => {
  return (
    <header className='header-notebook'>
    <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1735217736/Header-notebook_dybdln.webp" alt=""  className='imgPorDefectoMotos' />
    <img  src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1734617504/Header-notebook_kflwx1.webp" alt="" className='imgRemplazoMotos'  />
    <img  src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1733242703/Header-notebook-celular_xqiyp9.jpg" alt="" className='imgFotoCelular'  />
    
    <div className='container-notebook'>
    <h1 className='h1-notebook'>SEGURO DE NOTEBOOK</h1>
    <h2 className='h2-notebook'>Asegurá tu notebook desde donde estés. Encontrá el plan que más se adapte a vos.</h2>
    <h3 className='h3-notebook'>Disfrutá haciendo, aprendiendo y creando. Tenemos el mejor seguro para tu notebook, <br/>para que la disfrutes con tranquilidad. Contratalo hoy, 100% online.</h3>
    <div className="buttonPadreMotoBanner">
            <a  target="_blank" rel="noopener noreferrer" onClick={sendMessage}>
              <button className='buttonNotebookHeader'>Hablá con un asesor</button>
            </a>
            <span className="separador">°</span>

            <div class="separador-container">
            <div class="linea"></div>
            <span class="separador-celular">°</span>
            <div class="linea"></div>
            </div>

            <a href="https://www.rusfreestyle.com.ar/producto/notebook/9254/" target="_blank" rel="noopener noreferrer">
              <button className='buttonNotebookHeader'>Cotizá por tu cuenta</button>
            </a>
          </div>
        </div>
  
    </header>
  )
}
