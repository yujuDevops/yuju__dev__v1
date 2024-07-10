import './Footer.css';
import yujuBlaco from "../../assets/image/webBlanco.png";
import nimbusBlaco from "../../assets/image/logoBLANCO.png"

const Footer = () => {
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
        <div className="footer-middle-item">
          <a href="tel:08006668400">0800-666-8400</a>
        </div>
        <div className="footer-middle-item">
          <a target='_blank' href="https://www.argentina.gob.ar/ssn"><link rel="stylesheet" href="" />www.argentina.gob.ar/ssn</a>
        </div>
        <div className="footer-middle-item">
          <img src="path/to/ssn-logo.png" alt="SSN Logo" />
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
            0800-666-8400, correo electrónico a <a href="mailto:consultas@ssn.gob.ar">consultas@ssn.gob.ar</a> o formulario disponible 
            en la página <a href="https://www.argentina.gob.ar/ssn">argentina.gob.ar/ssn</a>.
          </p>
        </div>
        <div className="footer-bottom-right">
          <p>
            El Servicio de Atención al Asegurado está integrado por: <br />
            Responsable: Felipe Ricardo Luis Perdomo <br />
            Teléfono: <a href="tel:+543442571384">+54 9 3442 57-1384</a> <br />
            Suplente: Guillermo Jose Joannas <br />
            Teléfono: <a href="tel:+543442461715">+54 9 3442 46-1715</a>
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
