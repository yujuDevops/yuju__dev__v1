import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./ScrollToTopButton.css"; // Archivo CSS externo

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 1700); // Aparece después de 1800px de scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const button = document.querySelector('.scroll-to-top');
    button.classList.add('clicked');
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 100); // Ajusta el tiempo según sea necesario
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}
    >
      {/* <FaIcons.FaAngleUp size={26} /> */}
      <p className="pButonn-bts">Volver arriba</p>
    </button>
  );
};

export default ScrollToTopButton;