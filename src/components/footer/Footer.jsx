import './Footer.css';
import yujuBlaco from "../../assets/image/webBlanco.png";
import nimbusBlaco from "../../assets/image/logoBLANCO.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <a href="">
          <img id='logo__yuju' src={yujuBlaco} alt="Yuju Logo" />
          </a>
        </div>
        <div className="footer-links">
          <a href="#">
          <p>Política de Privacidad
          Política de Cookies
          Aviso legal
          Condiciones de Venta</p>
          </a>
        </div>
        <div className="footer-nimbus-logo">
          <a href="">
          <img src={nimbusBlaco} alt="Nimbus Logo" />
          </a>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-middle-item">
          <p>N° de inscripción SSN 1647</p>
        </div>
        <div className="footer-middle-item">
          <p>Departamento de Orientación y Asistencia al Asegurado</p>
        </div>
        <div className="footer-middle-item footer-middle-item-two">
          <a href="tel:08006668400">0800-666-8400</a>
        </div>
        <div className="footer-middle-item footer-middle-item-two">
          <a target='_blank' href="https://www.argentina.gob.ar/ssn"><link rel="stylesheet" href="" />www.argentina.gob.ar/ssn</a>
        </div>
        <div className="footer-middle-item">
          <img src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1722608965/SSN_afnmvf.png" alt="SSN Logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className='container-bottom'>
        <div className="footer-bottom-left">
          <p>
            La entidad aseguradora dispone de un <strong>Servicio de Atención al Asegurado</strong> que atenderá las consultas y 
            reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes. En caso de que existiera 
            un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o haya sido desestimado, total o parcialmente, 
            o que haya sido denegada su admisión, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al 
            0800-666-8400, correo electrónico a <a href="mailto:consultas@ssn.gob.ar"><strong>consultas@ssn.gob.ar</strong></a> o formulario disponible 
            en la página <a href="https://www.argentina.gob.ar/ssn"><strong>argentina.gob.ar/ssn</strong></a>.
          </p>
        </div>
        <div className="footer-bottom-right ">
          <p className='footer-bottom-right-two'>
            El Servicio de Atención al Asegurado está integrado por: <br />
            Responsable: <strong>Felipe Ricardo Luis Perdomo</strong><br />
            Teléfono: <a><strong>+54 9 3442 57-1384</strong></a> 
            <br />
            <br />
            Suplente: <strong>Guillermo Jose Joannas</strong><br />
            Teléfono: <a href="tel:+543442461715"><strong>+54 9 3442 46-1715</strong></a>
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
