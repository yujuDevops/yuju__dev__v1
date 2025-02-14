import './App.css';
import ScrollToTopButton from './components/buttonScrollTop/ScrollToTopButton';
import AppRouter from './router/AppRouter';
import FacebookPixel from './components/hooks/FacebookPixel';
import Metricool from './components/hooks/Metricool';
import WhatsAppButton from './components/hooks/watsAppButtonGlobal/WhatsAppButton';

function App() {

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
