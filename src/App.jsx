import './App.css';
import React, { useEffect } from "react";
import ScrollToTopButton from './components/buttonScrollTop/ScrollToTopButton';
import AppRouter from './router/AppRouter';
import FacebookPixel from './components/hooks/FacebookPixel';
import Metricool from './components/hooks/Metricool';
import WhatsAppButton from './components/hooks/watsAppButtonGlobal/WhatsAppButton';
import TagManager from "react-gtm-module";


  const App = () => {

    useEffect(() => {
      TagManager.initialize({ gtmId: "GTM-N6L4XDZD" }); // Reemplaza con tu ID de GTM
    }, []);


  return (
    <>
    <WhatsAppButton/>
    <Metricool/>
    <FacebookPixel/>
    <AppRouter/>
    <ScrollToTopButton/>
    </>
  )
}

export default App
