import "./queTeOfrecemos.css";

export const QueTeOfrecemo = () => {
    return (
        <section className="ofrecemos-container">
          <h2 className="ofrecemos-title">¿Qué te ofrecemos?</h2>
          <p className="ofrecemos-description">
            Te ofrecemos una amplia gama de productos de seguros, adaptados a tus necesidades y preferencias. 
            Podés elegir entre seguros de auto, moto, hogar, vida, salud, viaje y más. Todos ellos respaldados 
            por las <strong>mejores compañías del mercado</strong>, que te garantizan una cobertura de calidad y una asistencia eficaz.
          </p>
          <p className="ofrecemos-description">
            Además, te ofrecemos la posibilidad de <strong>personalizar tu seguro</strong>, eligiendo las características que más te interesen, 
            para que pagues solo por lo que necesitás. 
          </p>
          <p className="ofrecemos-description">
            Así, <strong>podés ahorrar dinero y obtener el seguro que realmente te conviene</strong>, sin sorpresas ni complicaciones.
          </p>
    
          <div className="ofrecemos-cards">
            <div className="ofrecemos-card">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733236263/web_Icono-tecnologia_1_gcbzwp.svg" alt="Tecnología y agilidad" className="ofrecemos-icon" />
              <h3 className="ofrecemos-card-title">Tecnología y agilidad</h3>
              <p className="ofrecemos-card-text">
                Te brindamos una experiencia única con seguros online, rápidos y multicanal, que te ahorran tiempo y esfuerzo. Tenés todo lo que necesitás al alcance de tu mano.
              </p>
            </div>
            <div className="ofrecemos-card">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733236123/web_Icono-whatsapp_rbacjg.svg" alt="Facilidad y personalización" className="ofrecemos-icon" />
              <h3 className="ofrecemos-card-title">Facilidad y personalización</h3>
              <p className="ofrecemos-card-text">
                Te simplificamos la vida, con una plataforma intuitiva y seguros a tu medida. Podés personalizar tu seguro, eligiendo lo que más te conviene.
              </p>
            </div>
            <div className="ofrecemos-card">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733236108/web_Icono-humanidad_y8z4bj.svg" alt="Humanidad y confianza" className="ofrecemos-icon" />
              <h3 className="ofrecemos-card-title">Humanidad y confianza</h3>
              <p className="ofrecemos-card-text">
                Te asesoramos con calidez y cercanía, para proteger lo que más te importa. Estamos siempre a tu disposición, para resolver tus dudas y atender tus reclamos.
              </p>
            </div>
            <div className="ofrecemos-card">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733236096/web_Icono-excelencia_khhbq0.svg" alt="Excelencia y calidad" className="ofrecemos-icon" />
              <h3 className="ofrecemos-card-title">Excelencia y calidad</h3>
              <p className="ofrecemos-card-text">
                Te garantizamos un servicio de excelencia, con productos justos, modernos y transparentes. Te aseguramos la calidad, la seguridad y la satisfacción que merecés.
              </p>
            </div>
            <div className="ofrecemos-card">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733235223/web_Icono-innovacion_terfcr.svg" alt="Innovación y creatividad" className="ofrecemos-icon" />
              <h3 className="ofrecemos-card-title">Innovación y creatividad</h3>
              <p className="ofrecemos-card-text">
                Te sorprendemos con soluciones creativas y eficientes, que se adaptan a tus preferencias y a tu estilo de vida.
              </p>
            </div>
            <div className="ofrecemos-card">
              <img src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1733236086/web_Icono-sustentabilidad_hp1fob.svg" alt="Sostenibilidad y responsabilidad" className="ofrecemos-icon" />
              <h3 className="ofrecemos-card-title">Sostenibilidad y responsabilidad</h3>
              <p className="ofrecemos-card-text">
                Nos preocupamos por el cuidado del medio ambiente y la responsabilidad social. Reducimos nuestro impacto ecológico y contribuimos al desarrollo de la comunidad.
              </p>
            </div>
          </div>
        </section>
      );
}
